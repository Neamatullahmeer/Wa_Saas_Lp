import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // 🟢 SEO Provider Import
import './index.css'
import App from './App.jsx'

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
