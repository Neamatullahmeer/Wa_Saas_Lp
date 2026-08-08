// Post-build SEO pass.
//
// Vite emits one dist/index.html. Vercel used to rewrite every URL to it, so
// /pricing and /privacy-policy served byte-identical HTML — same <title>, same
// canonical pointing at the homepage. Google read that as "these are all copies
// of /" and indexed none of them.
//
// This script writes a real dist/<route>/index.html per route with its own head,
// and regenerates sitemap.xml from the same list. Anything not generated here
// is genuinely not a page, so Vercel serves 404.html for it.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { SITE, OG_IMAGE, routes, sitemapRoutes } from '../src/seo/routes.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Replace a single tag, loudly. A silent miss here ships wrong canonicals to
// production, which is the exact bug this script exists to fix.
const swap = (html, label, pattern, replacement) => {
  if (!pattern.test(html)) {
    throw new Error(`postbuild-seo: could not find ${label} in dist/index.html`);
  }
  return html.replace(pattern, () => replacement);
};

/**
 * index.html carries a ~14KB <noscript> copy of the homepage for crawlers that
 * do not run JavaScript. Copying that onto /privacy-policy would make every
 * sub-page look like the homepage to exactly those crawlers, so sub-pages get a
 * short stub instead. (The first <noscript> only holds the font stylesheet —
 * match on the one wrapping a <div>.)
 */
const rewriteNoscript = (html, route) => {
  const pattern = /<noscript>\s*<div[\s\S]*?<\/noscript>/;
  if (!pattern.test(html)) {
    throw new Error('postbuild-seo: content <noscript> block not found in dist/index.html');
  }
  const stub =
    `<noscript>\n    <div style="max-width:640px;margin:0 auto;padding:2rem;font-family:system-ui,sans-serif">\n` +
    `      <h1>${esc(route.title.split(' | ')[0])}</h1>\n` +
    `      <p>${esc(route.description)}</p>\n` +
    `      <p><a href="${SITE}/">Go to the ChatPro365 homepage</a></p>\n` +
    `    </div>\n  </noscript>`;
  return html.replace(pattern, () => stub);
};

/**
 * The base index.html carries the homepage's JSON-LD, including a FAQPage node.
 * Copying that onto /privacy-policy would be a structured-data mismatch, so
 * sub-pages keep only Organization + WebSite and get their own WebPage node.
 */
const rewriteJsonLd = (html, route, url) => {
  const pattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
  const match = html.match(pattern);
  if (!match) throw new Error('postbuild-seo: JSON-LD block not found in dist/index.html');

  const graph = JSON.parse(match[1]);
  const kept = graph['@graph'].filter((node) =>
    ['Organization', 'WebSite'].includes(node['@type'])
  );

  kept.push({
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': `${SITE}/#organization` },
  });

  const next = JSON.stringify({ '@context': graph['@context'], '@graph': kept }, null, 2);
  return html.replace(pattern, () => `<script type="application/ld+json">\n${next}\n  </script>`);
};

const buildPage = (baseHtml, route) => {
  const url = route.path === '/' ? `${SITE}/` : `${SITE}${route.path}`;
  const canonical =
    route.canonical === '/' ? `${SITE}/` : `${SITE}${route.canonical}`;
  const title = esc(route.title);
  const description = esc(route.description);

  let html = baseHtml;
  html = swap(html, '<title>', /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = swap(
    html,
    'meta[name=title]',
    /<meta\s+name="title"[\s\S]*?\/>/,
    `<meta name="title" content="${title}" />`
  );
  html = swap(
    html,
    'meta[name=description]',
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${description}" />`
  );
  html = swap(
    html,
    'link[rel=canonical]',
    /<link\s+rel="canonical"[\s\S]*?\/>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = swap(
    html,
    'meta[property=og:url]',
    /<meta\s+property="og:url"[\s\S]*?\/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = swap(
    html,
    'meta[property=og:title]',
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = swap(
    html,
    'meta[property=og:description]',
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${description}" />`
  );
  html = swap(
    html,
    'meta[name=twitter:url]',
    /<meta\s+name="twitter:url"[\s\S]*?\/>/,
    `<meta name="twitter:url" content="${url}" />`
  );
  html = swap(
    html,
    'meta[name=twitter:title]',
    /<meta\s+name="twitter:title"[\s\S]*?\/>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = swap(
    html,
    'meta[name=twitter:description]',
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${description}" />`
  );
  html = swap(
    html,
    'meta[property=og:image]',
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${OG_IMAGE}" />`
  );

  if (route.path !== '/') {
    html = rewriteJsonLd(html, route, url);
    html = rewriteNoscript(html, route);
  }

  return html;
};

const buildSitemap = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = sitemapRoutes
    .map((r) => {
      const loc = r.path === '/' ? `${SITE}/` : `${SITE}${r.path}`;
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${r.changefreq}</changefreq>`,
        `    <priority>${r.priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
};

const run = async () => {
  const baseHtml = await readFile(join(DIST, 'index.html'), 'utf8');

  for (const route of routes) {
    const html = buildPage(baseHtml, route);
    if (route.path === '/') {
      await writeFile(join(DIST, 'index.html'), html, 'utf8');
    } else {
      const dir = join(DIST, route.path.slice(1));
      await mkdir(dir, { recursive: true });
      await writeFile(join(dir, 'index.html'), html, 'utf8');
    }
  }

  await writeFile(join(DIST, 'sitemap.xml'), buildSitemap(), 'utf8');

  console.log(
    `postbuild-seo: ${routes.length} pages written, ${sitemapRoutes.length} URLs in sitemap.xml`
  );
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
