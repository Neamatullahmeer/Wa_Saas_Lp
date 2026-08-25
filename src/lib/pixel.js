/**
 * src/lib/pixel.js
 *
 * Meta Pixel helpers. The base code in index.html only fires PageView; the
 * events that matter are fired from here.
 *
 * WHY EVENT IDS: the same conversion is reported twice — once from the browser
 * (this file) and once from our own server via the Conversions API. The browser
 * copy is fast but lossy: iOS tracking prevention and ad blockers swallow a
 * large share of it. The server copy always arrives. Meta collapses the two
 * into one conversion only when both carry the same event name AND the same
 * event_id, so the id generated here has to travel to the backend with the
 * request that records the conversion. Without it, every conversion is counted
 * twice and the cost-per-lead you optimise against is half of the real one.
 */

import { getAttribution } from './attribution';

const hasWindow = () => typeof window !== 'undefined';

/**
 * A fresh id for one conversion. Send the same value to fbq and to our API.
 */
export function newEventId() {
  if (hasWindow() && window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `e-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

const readCookie = (name) => {
  if (!hasWindow()) return '';
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : '';
};

/**
 * The two identifiers Meta uses to match a server-side event back to the person
 * who saw the ad. Both are set by the pixel itself:
 *
 *   _fbp — a random first-party browser id
 *   _fbc — derived from the fbclid on the ad click
 *
 * _fbc only gets written on the page the fbclid actually landed on. If the
 * pixel had not loaded yet at that moment the cookie can be missing while we
 * still hold the fbclid, so we rebuild it in Meta's documented format as a
 * fallback. The timestamp is then approximate — it is only used when the real
 * cookie is absent, and an approximate match beats no match.
 */
export function getMetaMatchIds() {
  const fbp = readCookie('_fbp');
  let fbc = readCookie('_fbc');

  if (!fbc) {
    const { fbclid } = getAttribution();
    if (fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;
  }

  return { fbp, fbc };
}

/**
 * Fire a standard Meta event.
 *
 * Never throws and never blocks: if the pixel was blocked from loading, fbq
 * simply does not exist, and a conversion must not be lost because a tracker
 * failed. The server-side copy covers that case anyway.
 *
 * @param {string} name     standard event name, e.g. 'Lead'
 * @param {object} params   optional event parameters
 * @param {string} eventId  the id shared with the server-side copy
 */
export function trackPixelEvent(name, params = {}, eventId) {
  try {
    if (!hasWindow() || typeof window.fbq !== 'function') return;
    window.fbq('track', name, params, eventId ? { eventID: eventId } : undefined);
  } catch {
    // A measurement tool must never break the page it measures.
  }
}
