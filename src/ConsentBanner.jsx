import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getConsent, setConsent, GRANTED, DENIED } from './lib/consent';
import { loadPixel } from './lib/pixel';

/**
 * Consent bar for advertising measurement.
 *
 * DESIGN NOTES, because each of these is a decision rather than a default:
 *
 * - A BAR, NOT A MODAL. Ads point at these pages. A full-screen wall in front
 *   of someone who just clicked an ad costs conversions, and nothing in the law
 *   asks for one. This sits at the bottom and blocks nothing.
 *
 * - BOTH BUTTONS LOOK THE SAME. Making "Decline" faint or hiding it a click
 *   deeper is the standard dark pattern, and under GDPR refusing has to be as
 *   easy as agreeing. It also makes the choice honest, which is the only reason
 *   to have a banner at all.
 *
 * - RENDERS AFTER HYDRATION ONLY. The build prerenders every route to static
 *   HTML (scripts/postbuild-seo.mjs); this effect never runs during
 *   renderToString, so the banner stays out of the crawled markup.
 *
 * The choice it records is what actually gates the Meta Pixel here and the
 * Conversions API call on our server — see src/lib/consent.js.
 */
const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) {
      /* Revealing from an effect rather than from initial state is deliberate.
         Production pages are prerendered and then hydrated (see src/main.jsx),
         and the prerendered HTML has no banner in it. Rendering one on the very
         first client render would be a hydration mismatch, which React reports
         as an error and repaints. One frame later is the correct trade. */
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    } else {
      // Already agreed on an earlier visit — load the pixel straight away.
      loadPixel();
    }
  }, []);

  const choose = (value) => {
    setConsent(value);
    setVisible(false);
    if (value === GRANTED) loadPixel();
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[100] bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800"
    >
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center gap-3">
        <p className="text-[11px] sm:text-xs text-zinc-400 leading-snug flex-1">
          Meta Pixel measures our ads — two cookies.{' '}
          <Link to="/cookie-policy" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
            What we store
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => choose(DENIED)}
            className="px-3.5 py-1.5 rounded-lg border border-zinc-700 text-zinc-300 font-semibold text-xs hover:bg-zinc-800 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => choose(GRANTED)}
            className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
