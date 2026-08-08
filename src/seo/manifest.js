// The complete list of indexable URLs: fixed pages plus one per blog post.
//
// Everything that needs to know "what pages exist" reads this — client routing
// (<RouteSeo /> in App.jsx), the build-time prerender and the sitemap. The build
// reaches it through entry-server.jsx rather than importing it directly, because
// blog discovery uses import.meta.glob and only resolves inside Vite.

import { staticRoutes } from './routes.js';
import { blogRoutes } from '../content/blog.js';

export const routes = [...staticRoutes, ...blogRoutes];

/** Route metadata for a pathname, or undefined if the URL is not a real page. */
export const findRoute = (pathname) => {
  const clean =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return routes.find((r) => r.path === clean);
};

export const sitemapRoutes = routes.filter((r) => r.inSitemap);

export { SITE, OG_IMAGE } from './routes.js';
