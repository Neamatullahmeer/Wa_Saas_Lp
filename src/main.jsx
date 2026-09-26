import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // 🟢 SEO Provider Import
import './index.css'
import App from './App.jsx'

// The font stylesheet is fetched as media="print" so it never blocks the first
// paint (index.html); this turns it on. It used to be an inline
// onload="this.media='all'", which a Content-Security-Policy without
// 'unsafe-inline' refuses to run — leaving the fonts off for good, silently.
document.querySelectorAll('link[data-async-css]').forEach((link) => {
  link.media = 'all'
})

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)

// Production pages ship with their markup already rendered into #root by the
// prerender step, so hydrate it instead of rendering over the top — createRoot
// would throw the server markup away and repaint. `vite dev` serves an empty
// root, hence the fallback.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
