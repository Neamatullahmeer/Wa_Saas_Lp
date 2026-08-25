/**
 * src/lib/attribution.js
 *
 * Remembers which ad or campaign a visitor arrived from, for the whole visit.
 *
 * WHY: an ad click lands on whichever page the ad points at — often /pricing or
 * an industry page, not the homepage — but the visitor usually fills the form
 * two or three pages later, by which time the ?gclid=… is long gone from the
 * URL. Reading the params once on the first page and holding on to them is the
 * only reliable place to catch them.
 *
 * FIRST TOUCH WINS: if the same visitor arrives again mid-visit through another
 * tagged link, the original campaign keeps the credit. Overwriting would hand
 * every conversion to whichever link happened to be clicked last.
 *
 * SSR: the prerender build (scripts/postbuild-seo.mjs) calls renderToString in
 * Node, where window, document and sessionStorage do not exist — every access
 * here is guarded. The same guard covers browsers that block storage entirely
 * (private mode, strict privacy settings); there we fall back to a module-level
 * variable, which is enough because it survives client-side navigation.
 */

const KEY = 'cp_attribution';

// Everything worth carrying. utm_term matters most of all on paid search — the
// actual keyword lands there. gbraid/wbraid are the iOS replacements Google
// sends when ATT prevents a gclid, so leaving them out would make iPhone
// traffic look like it came from nowhere.
const PARAMS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'gbraid', 'wbraid',   // Google Ads
  'fbclid',                       // Meta
  'msclkid',                      // Microsoft Ads
];

// Forwarded to the register page. referrer is deliberately left out — it can be
// a very long URL and it is already sent to the capture API, so there is no
// reason to push the redirect URL over length limits for it.
const FORWARDED = [...PARAMS, 'landingPage'];

const MAX_LEN = 300;

const hasWindow = () => typeof window !== 'undefined';

// Used when sessionStorage is unavailable.
let memory = null;

const read = () => {
  if (memory) return memory;
  if (!hasWindow()) return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (raw) {
      memory = JSON.parse(raw);
      return memory;
    }
  } catch {
    // Storage blocked — memory alone will have to do for this visit.
  }
  return null;
};

/**
 * Reads the campaign params off the current URL and stores them. Safe to call
 * on every route change: once something is stored it is never overwritten.
 *
 * @returns {object|null} the attribution record for this visit
 */
export function captureAttribution() {
  if (!hasWindow()) return null;

  const existing = read();
  if (existing) return existing;

  const search = new URLSearchParams(window.location.search);
  const record = {};

  for (const key of PARAMS) {
    const value = search.get(key);
    if (value) record[key] = value.slice(0, MAX_LEN);
  }

  // Recorded even when there are no campaign params at all. For organic and
  // direct visitors these two fields are the only signal there is, and knowing
  // that a lead came in with no campaign attached is itself worth knowing —
  // otherwise every untagged lead is indistinguishable from a tracking failure.
  record.landingPage = window.location.pathname.slice(0, MAX_LEN);
  record.referrer = (document.referrer || '').slice(0, MAX_LEN);

  memory = record;
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(record));
  } catch {
    // Storage blocked; `memory` already holds it for this page session.
  }
  return record;
}

/**
 * The stored record, capturing it first if that has not happened yet.
 * @returns {object} never null, so callers can send it as-is
 */
export function getAttribution() {
  return read() || captureAttribution() || {};
}

/**
 * Appends the campaign params to a URL so they survive the hop to the app on
 * another domain. Without this the whole chain breaks exactly at the point
 * where it starts being worth money: the signup itself.
 *
 * @param {string} url a URL that may already carry a query string
 * @returns {string}
 */
export function appendAttribution(url) {
  const data = getAttribution();
  const extra = new URLSearchParams();

  for (const key of FORWARDED) {
    if (data[key]) extra.set(key, data[key]);
  }

  const query = extra.toString();
  if (!query) return url;
  return url + (url.includes('?') ? '&' : '?') + query;
}
