import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { marked } from 'marked'

// Blog posts are .md files with a small frontmatter block. Converting them here
// rather than at runtime keeps `marked` out of the browser bundle entirely — the
// app only ever sees a plain object with an `html` string.
//
// The frontmatter is deliberately parsed by hand: it is a flat list of
// `key: value` lines, so a YAML dependency would buy nothing.
const parseFrontmatter = (raw) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const sep = line.indexOf(':')
    if (sep === -1) continue
    const key = line.slice(0, sep).trim()
    const value = line.slice(sep + 1).trim().replace(/^["'](.*)["']$/, '$1')
    if (key) data[key] = value
  }
  return { data, body: match[2] }
}

const REQUIRED_FIELDS = ['title', 'description', 'date', 'category', 'readTime']

const blogMarkdown = () => ({
  name: 'blog-markdown',
  transform(code, id) {
    if (!id.endsWith('.md')) return null

    const { data, body } = parseFrontmatter(code)
    const missing = REQUIRED_FIELDS.filter((f) => !data[f])
    if (missing.length) {
      // Fail the build rather than ship a post with an empty <title>.
      this.error(`${id}: missing frontmatter field(s): ${missing.join(', ')}`)
    }

    const post = { ...data, html: marked.parse(body) }
    return { code: `export default ${JSON.stringify(post)}`, map: null }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    blogMarkdown(),
  ],
  server: {
    port: 5174,
    strictPort: true
  },
  build: {
    // ✅ Smaller JS bundles = faster mobile load (Vite 8 uses oxc by default)
    minify: 'oxc',
    // ✅ CSS in separate file = parallel loading
    cssCodeSplit: true,
    // ✅ Target modern browsers only (smaller output)
    target: 'es2020',
    rollupOptions: {
      output: {
        // ✅ Manual chunk splitting — vendor libraries separate from app code
        // This allows the browser to cache them independently
        manualChunks: (id) => {
          // React core — changes rarely, long cache
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          // Framer motion is ~150KB — isolate it
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          // Lucide icons
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
        }
      }
    }
  }
})
