// Blog post index, built from the markdown files next to this one.
//
// The `.md` files are turned into plain objects at build time by the
// blogMarkdown plugin in vite.config.js, so nothing here parses markdown —
// `post.html` arrives ready to render.
//
// Adding a post means adding a file. Routing, prerendering, the sitemap and the
// blog index all read from this list, so there is no second place to register it.

const modules = import.meta.glob('./blog/*.md', { eager: true });

export const posts = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop().replace(/\.md$/, ''),
    ...mod.default,
  }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const findPost = (slug) => posts.find((p) => p.slug === slug);

/** Up to `limit` other posts, for the "keep reading" links under a post. */
export const relatedPosts = (slug, limit = 3) =>
  posts.filter((p) => p.slug !== slug).slice(0, limit);

/** SEO route records, in the same shape as the static routes in seo/routes.js. */
export const blogRoutes = posts.map((p) => ({
  path: `/blog/${p.slug}`,
  title: `${p.title} | ChatPro365`,
  description: p.description,
  canonical: `/blog/${p.slug}`,
  inSitemap: true,
  priority: '0.7',
  changefreq: 'monthly',
  // Presence of this marks the page as an Article for structured data.
  article: {
    headline: p.title,
    datePublished: p.date,
    section: p.category,
  },
}));
