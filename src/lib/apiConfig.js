/**
 * src/lib/apiConfig.js
 * Yeh file automatically check karegi ki aap local par ho ya live website par.
 */

const hostname = window.location.hostname;

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