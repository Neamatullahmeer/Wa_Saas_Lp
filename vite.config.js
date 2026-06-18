import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 5174,
    strictPort: true
  },
  build: {
    // ✅ Smaller JS bundles = faster mobile load
    minify: 'esbuild',
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
