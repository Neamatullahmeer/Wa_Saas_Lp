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
      <div className="max-w-5xl mx-auto px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-zinc-300 leading-relaxed flex-1">
          We use the Meta Pixel to measure our ads — it sets two cookies. Nothing else
          on the site changes either way.{' '}
          <Link to="/cookie-policy" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
            What we store
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => choose(DENIED)}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-zinc-700 text-zinc-300 font-semibold text-sm hover:bg-zinc-800 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => choose(GRANTED)}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
