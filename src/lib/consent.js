/**
 * src/lib/consent.js
 *
 * Whether this visitor has agreed to advertising measurement.
 *
 * WHY A COOKIE AND NOT localStorage: the visit spans two origins —
 * chatpro365.com and app.chatpro365.com — and localStorage is per-origin, so a
 * choice made on the marketing site would be invisible to the app and the
 * person would be asked twice. A cookie scoped to the registrable domain is
 * readable from both. (A consent record is itself strictly necessary, so
 * storing it does not require consent.)
 *
 * DEFAULT IS DENY. Until someone actively agrees, getConsent() returns null and
 * nothing is loaded or sent. That is the whole point: a banner that does not
 * actually gate anything is worse than no banner, because it states a promise
 * the site then breaks.
 */

const KEY = 'cp_consent';
const MAX_AGE_DAYS = 180;

export const GRANTED = 'granted';
export const DENIED = 'denied';

const hasWindow = () => typeof window !== 'undefined';

/**
 * @returns {'granted'|'denied'|null} null means the visitor has not chosen yet
 */
export function getConsent() {
  if (!hasWindow()) return null;
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${KEY}=([^;]*)`));
    const value = match ? decodeURIComponent(match[1]) : '';
    return value === GRANTED || value === DENIED ? value : null;
  } catch {
    return null;
  }
}

export const hasConsent = () => getConsent() === GRANTED;

/**
 * Record the visitor's choice for six months.
 *
 * The domain attribute is what makes app.chatpro365.com able to read this, so
 * it is set from the hostname rather than hardcoded — on localhost a domain
 * attribute would make the browser reject the cookie outright.
 */
export function setConsent(value) {
  if (!hasWindow()) return;
  try {
    const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const domain = isLocal ? '' : '; domain=.chatpro365.com';
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie =
      `${KEY}=${value}; path=/; max-age=${MAX_AGE_DAYS * 24 * 60 * 60}${domain}; SameSite=Lax${secure}`;
  } catch {
    // Storage blocked. The banner will ask again next time, which is the
    // correct failure mode — never assume agreement.
  }
}

/** Lets the visitor change their mind (linked from the cookie policy). */
export function clearConsent() {
  if (!hasWindow()) return;
  try {
    const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const domain = isLocal ? '' : '; domain=.chatpro365.com';
    document.cookie = `${KEY}=; path=/; max-age=0${domain}`;
  } catch { /* nothing to clear */ }
}
