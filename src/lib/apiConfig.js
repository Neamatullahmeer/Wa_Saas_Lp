/**
 * src/lib/apiConfig.js
 * Yeh file automatically check karegi ki aap local par ho ya live website par.
 */

// `window` is absent during the build-time prerender (scripts/postbuild-seo.mjs),
// and this runs at module load, so guard it. Falling through to the production
// URLs is the right default there: the prerendered HTML ships to production.
const hostname = typeof window === 'undefined' ? '' : window.location.hostname;

// Agar aap apne computer par test kar rahe hain (localhost ya 127.0.0.1)
const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';

// Automatically sahi URL pick karega
export const API_BASE_URL = isLocal
    ? 'http://localhost:3000'         // Aapka local Node.js server port
    : 'https://api.chatpro365.com';   // Aapka live production server URL

export const APP_BASE_URL = isLocal
    ? 'http://localhost:5173'         // Aapka local React app port (default Vite)
    : 'https://app.chatpro365.com';   // Aapka live production app URL

export default API_BASE_URL;