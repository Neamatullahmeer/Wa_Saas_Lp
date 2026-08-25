/**
 * src/lib/pixel.js
 *
 * Meta Pixel — loaded only after the visitor agrees.
 *
 * WHY IT IS NOT IN index.html ANY MORE: a consent banner is only meaningful if
 * declining actually stops something. With the snippet in the document head the
 * pixel would already have loaded and set its cookies before anyone was asked,
 * which makes the banner decorative and the cookie policy untrue. So the script
 * is injected from here, and only on a granted choice.
 *
 * Meta also offers fbq('consent','revoke') for this. We do not use it: it still
 * loads fbevents.js and still writes cookies, it only holds back sending. Not
 * loading anything at all is both stricter and far easier to reason about.
 *
 * WHY EVENT IDS: every conversion is reported twice — from the browser here and
 * from our own server via the Conversions API. The browser copy is lossy (iOS
 * tracking prevention, ad blockers); the server copy always arrives. Meta
 * merges the two into one conversion only when the event name AND event id
 * match, so the id created here has to travel to the backend with the request
 * that records the conversion. Without it every conversion is counted twice and
 * the cost per lead you optimise against is half the real one.
 */

import { getAttribution } from './attribution';
import { hasConsent } from './consent';

const PIXEL_ID = '805768425496432';

const hasWindow = () => typeof window !== 'undefined';

let loaded = false;

/**
 * Inject Meta's pixel snippet and fire the initial PageView.
 *
 * Safe to call repeatedly — on a granted choice at page load, and again the
 * moment someone accepts the banner. Does nothing without consent.
 */
export function loadPixel() {
  if (!hasWindow() || loaded || !hasConsent()) return;
  loaded = true;

  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', PIXEL_ID);
  window.fbq('track', 'PageView');
}

/** A fresh id for one conversion — send the same value to fbq and to our API. */
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
 * The identifiers Meta uses to match a server-side event back to the ad click.
 * Both cookies are written by the pixel, so both are empty without consent —
 * which is correct, since nothing should be sent in that case anyway.
 *
 * _fbc only gets written on the page the fbclid landed on. The pixel now loads
 * later than it used to (after the banner), so that moment is easy to miss —
 * we rebuild it from the stored fbclid in Meta's documented format instead.
 */
export function getMetaMatchIds() {
  if (!hasConsent()) return {};

  const fbp = readCookie('_fbp');
  let fbc = readCookie('_fbc');

  if (!fbc) {
    const { fbclid } = getAttribution();
    if (fbclid) fbc = `fb.1.${Date.now()}.${fbclid}`;
  }

  return { fbp, fbc };
}

/**
 * Fire a standard Meta event. Never throws and never blocks: a conversion must
 * not be lost because a tracker was blocked or refused.
 */
export function trackPixelEvent(name, params = {}, eventId) {
  try {
    if (!hasWindow() || !hasConsent() || typeof window.fbq !== 'function') return;
    window.fbq('track', name, params, eventId ? { eventID: eventId } : undefined);
  } catch {
    // Measurement must never break the thing it measures.
  }
}
