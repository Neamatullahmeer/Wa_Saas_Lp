// Server entry, used only at build time by scripts/postbuild-seo.mjs.
//
// This is static generation, not request-time SSR — no server runs in
// production. Vite builds this into dist-ssr/, the build script imports it,
// renders each route to a string, and bakes the markup into that route's HTML
// file so crawlers get real content instead of an empty <div id="root">.
//
// MemoryRouter rather than StaticRouter: react-router-dom v6 does not expose a
// "server" subpath in its exports map, and for a fixed list of URLs the two
// behave identically.

import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from './App';

export function render(url) {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AppRoutes />
    </MemoryRouter>
  );
}

// The build script gets the page list from here rather than importing the
// manifest directly: blog posts are discovered with import.meta.glob, which only
// resolves inside Vite. Routing this through the SSR bundle keeps one list.
export { routes, sitemapRoutes } from './seo/manifest.js';
