import { motion } from 'framer-motion';
import {
  Phone, Video, MoreVertical, Paperclip, Camera, Mic,
  ShieldCheck, ArrowLeft, RefreshCw, Wifi
} from 'lucide-react';

/* WhatsApp glyph */
const WhatsAppIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.41c-1.46 0-2.88-.39-4.13-1.12l-.3-.18-3.07.81.82-2.99-.19-.31A8.2 8.2 0 0 1 3.8 11.91c0-4.54 3.7-8.24 8.25-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

/* Faceted slate sparkle — bottom-right accent of the reference art */
const SparkleStar = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="sparkleHaloImg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.35" />
        <stop offset="50%" stopColor="#475569" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#1e293b" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="facetGrad1" x1="50%" y1="0%" x2="62%" y2="40%">
        <stop offset="0%" stopColor="#f1f5f9" /><stop offset="50%" stopColor="#cbd5e1" /><stop offset="100%" stopColor="#64748b" />
      </linearGradient>
      <linearGradient id="facetGrad2" x1="96%" y1="50%" x2="62%" y2="40%">
        <stop offset="0%" stopColor="#cbd5e1" /><stop offset="100%" stopColor="#718296" />
      </linearGradient>
      <linearGradient id="facetGrad3" x1="96%" y1="50%" x2="62%" y2="62%">
        <stop offset="0%" stopColor="#94a3b8" /><stop offset="100%" stopColor="#475569" />
      </linearGradient>
      <linearGradient id="facetGrad4" x1="50%" y1="96%" x2="62%" y2="62%">
        <stop offset="0%" stopColor="#64748b" /><stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <linearGradient id="facetGrad5" x1="50%" y1="96%" x2="38%" y2="62%">
        <stop offset="0%" stopColor="#334155" /><stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <linearGradient id="facetGrad6" x1="4%" y1="50%" x2="38%" y2="62%">
        <stop offset="0%" stopColor="#3a4857" /><stop offset="100%" stopColor="#1e293b" />
      </linearGradient>
      <linearGradient id="facetGrad7" x1="4%" y1="50%" x2="38%" y2="38%">
        <stop offset="0%" stopColor="#475569" /><stop offset="100%" stopColor="#293542" />
      </linearGradient>
      <linearGradient id="facetGrad8" x1="50%" y1="0%" x2="38%" y2="38%">
        <stop offset="0%" stopColor="#cbd5e1" /><stop offset="100%" stopColor="#334155" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#sparkleHaloImg)" />
    <polygon points="50,50 50,4 62,38" fill="url(#facetGrad1)" />
    <polygon points="50,50 62,38 96,50" fill="url(#facetGrad2)" />
    <polygon points="50,50 96,50 62,62" fill="url(#facetGrad3)" />
    <polygon points="50,50 62,62 50,96" fill="url(#facetGrad4)" />
    <polygon points="50,50 50,96 38,62" fill="url(#facetGrad5)" />
    <polygon points="50,50 38,62 4,50" fill="url(#facetGrad6)" />
    <polygon points="50,50 4,50 38,38" fill="url(#facetGrad7)" />
    <polygon points="50,50 38,38 50,4" fill="url(#facetGrad8)" />
    <line x1="50" y1="4" x2="50" y2="96" stroke="rgba(255,255,255,0.55)" strokeWidth="0.8" />
    <line x1="4" y1="50" x2="96" y2="50" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
    <line x1="50" y1="50" x2="62" y2="38" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
    <line x1="50" y1="50" x2="62" y2="62" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
    <line x1="50" y1="50" x2="38" y2="62" stroke="rgba(0,0,0,0.4)" strokeWidth="0.5" />
    <line x1="50" y1="50" x2="38" y2="38" stroke="rgba(0,0,0,0.25)" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="1.6" fill="#ffffff" opacity="0.95" />
  </svg>
);

/*
  ── LAYOUT MODEL ────────────────────────────────────────────────────────────
  The phone is a fixed 300 × 633 block; every satellite badge lives in its own
  760 × 866 layer whose transform-origin is pinned to the phone's centre
  (380px 476px). That single fact drives both layouts:

    sm and up   stage 760 × 866, satellites scale 1     → the reference framing
    below sm    stage 580 × 760, satellites scale 0.78  → badges tuck in toward
                the phone, so the same available width buys a much bigger phone
                (300·0.58 = 174px on a 360px Android, vs 132px at full spread)

  Because the satellites scale about the phone's centre, pulling them in never
  changes which side of the phone a badge sits on, and the connector wires —
  which live in a second layer with the identical transform — keep pointing at
  the same spot on the handset.

  The breakpoint ladder only ever picks a scale that satisfies
  stageWidth · scale ≤ viewport − 16, which is why nothing clips at 320px.
*/

/* Both satellite layers carry the identical transform so wires and badges stay
   locked together; only their z-index differs (wires behind the phone, badges
   in front of it). */
const SAT_LAYER =
  "absolute left-1/2 w-[760px] h-[866px] -translate-x-1/2 -top-[76px] sm:top-0 " +
  "scale-[0.78] sm:scale-100 pointer-events-none";
const SAT_ORIGIN = { transformOrigin: '380px 476px' };

export default function HeroGlassShowcase({ onOpenModal }) {
  return (
    <div id="hero-3d-showcase" className="relative mx-auto w-full max-w-5xl py-1 sm:py-4 px-0 sm:px-4 select-none overflow-visible">

      {/* ── Ambient atmosphere: broad emerald core + cyan wash on the right ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-visible">
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] sm:w-[920px] h-[540px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.26)_0%,rgba(16,185,129,0.12)_45%,transparent_72%)] blur-[90px]" />
        <div className="absolute top-[64%] left-[56%] w-[420px] h-[340px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.16)_0%,transparent_70%)] blur-[80px]" />
      </div>

      {/* ── Responsive stage: heights track stageHeight × scale, so no dead band ── */}
      <div className="relative flex items-center justify-center w-full overflow-visible
                      h-[392px] min-[360px]:h-[445px] min-[390px]:h-[483px] min-[420px]:h-[521px]
                      min-[460px]:h-[559px] min-[520px]:h-[597px]
                      sm:h-[628px] md:h-[680px] lg:h-[732px]">
        <div className="relative shrink-0 origin-center transition-transform duration-300
                        w-[580px] h-[760px] sm:w-[760px] sm:h-[866px]
                        scale-[0.51] min-[360px]:scale-[0.58] min-[390px]:scale-[0.63] min-[420px]:scale-[0.68]
                        min-[460px]:scale-[0.73] min-[520px]:scale-[0.78]
                        sm:scale-[0.72] md:scale-[0.78] lg:scale-[0.84]">

          {/* ══════════ Brand title — part of the artwork, so it scales with it ══════════ */}
          <h2 className="absolute left-0 top-[8px] sm:top-[14px] w-full text-center text-[42px] sm:text-[58px] leading-none font-extrabold text-white tracking-tight z-30">
            ChatPro<span className="text-emerald-400 drop-shadow-[0_0_18px_#34d399]">365</span>
          </h2>

          {/* ══════════ SATELLITE LAYER A — connector wires (behind the phone) ══════════ */}
          <div className={`${SAT_LAYER} z-[15]`} style={SAT_ORIGIN}>
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 760 866" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wireGreen" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
                  <stop offset="45%" stopColor="#34d399" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.95" />
                </linearGradient>
                <linearGradient id="wireCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.25" />
                </linearGradient>
                <marker id="arrowGreen" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="15" refX="12" refY="7.5" orient="auto">
                  <path d="M0.5,1 L14,7.5 L0.5,14 Z" fill="#34d399" />
                </marker>
                <marker id="arrowCyan" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="15" refX="12" refY="7.5" orient="auto">
                  <path d="M0.5,1 L14,7.5 L0.5,14 Z" fill="#5eead4" />
                </marker>
              </defs>

              {/* decorative wisp above the 24/7 tile */}
              <path d="M 100 178 C 100 148, 74 132, 46 130" fill="none" stroke="url(#wireCyan)" strokeWidth="1.6" className="circuit-dash" />
              <circle cx="46" cy="130" r="3.5" fill="#34d399" className="drop-shadow-[0_0_8px_#34d399]" />

              {/* phone → up into the "24/7 AI Automation" card */}
              <path
                d="M 214 424 L 110 424 C 96 424, 90 416, 90 402 L 90 382"
                fill="none" stroke="url(#wireGreen)" strokeWidth="1.8"
                className="circuit-dash" markerEnd="url(#arrowGreen)"
              />

              {/* decorative orbital arc, top right */}
              <path d="M 530 120 C 590 134, 622 172, 620 218" fill="none" stroke="url(#wireCyan)" strokeWidth="1.6" className="circuit-dash" />
              <circle cx="530" cy="120" r="3.5" fill="#22d3ee" className="drop-shadow-[0_0_10px_#22d3ee]" />

              {/* phone → down into the "Instant Lead Qualification" cluster */}
              <path
                d="M 660 384 C 674 426, 664 480, 638 502"
                fill="none" stroke="url(#wireCyan)" strokeWidth="1.8"
                className="circuit-dash" markerEnd="url(#arrowCyan)"
              />
            </svg>
          </div>

          {/* ══════════ THE PHONE ══════════ */}
          <div className="absolute left-[140px] top-[64px] sm:left-[230px] sm:top-[140px] w-[300px] z-20" style={{ perspective: '1400px' }}>

            {/* detached floor shadow */}
            <motion.div
              animate={{ scale: [0.94, 1.06, 0.94], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-[74px] left-1/2 -translate-x-1/2 w-[320px] h-[52px] pointer-events-none z-0"
              style={{ transform: 'rotateX(62deg)', transformOrigin: 'center center' }}
            >
              <div className="absolute -inset-8 rounded-[100%] bg-gradient-to-r from-emerald-500/22 via-cyan-500/22 to-emerald-500/22 blur-[30px]" />
              <div className="absolute -inset-2 rounded-[100%] bg-black/85 blur-[26px]" />
              <div className="absolute inset-x-8 inset-y-1 rounded-[100%] bg-black/95 blur-[14px]" />
              <div className="absolute inset-x-14 inset-y-2 rounded-[100%] bg-black blur-[6px]" />
            </motion.div>

            {/* levitating chassis — near-frontal, only a whisper of 3D */}
            <motion.div
              initial={{ opacity: 0, y: 26, rotateY: -12, rotateX: 4 }}
              animate={{
                opacity: 1,
                y: [-7, 7, -7],
                rotateY: [-9, -11, -9],
                rotateX: [2, 4, 2],
                rotateZ: [-2, -3, -2],
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.8 },
              }}
              whileHover={{ rotateY: -5, rotateX: 1, rotateZ: -1, scale: 1.02 }}
              className="relative w-[300px] rounded-[48px] p-[3.5px] bg-gradient-to-b from-[#cbd5e1] via-[#475569] to-[#0f172a] cursor-pointer select-none"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: `
                  1px 0px 0px #e2e8f0,
                  2px 1px 0px #cbd5e1,
                  3px 1px 0px #94a3b8,
                  4px 2px 0px #64748b,
                  5px 2px 0px #475569,
                  6px 3px 0px #334155,
                  7px 3px 0px #1e293b,
                  14px 12px 30px rgba(0,0,0,0.9),
                  26px 22px 62px rgba(0,0,0,0.95),
                  0 0 40px rgba(16,185,129,0.22)
                `,
              }}
            >
              {/* Right titanium rail. It is a copy of the phone's own silhouette
                  nudged 10px right and kept behind the body, so the visible sliver
                  follows the 48px corner radius and reads as the handset's edge —
                  a straight full-height strip looked like a plank glued to the side.
                  Width must stay ≥ the 48px radius or the browser rescales it. */}
              <div
                className="absolute inset-y-0 -right-[10px] w-[64px] rounded-r-[48px] pointer-events-none z-[-1] overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #eef3f9 0%, #d5dee8 10%, #a8b8c8 30%, #74859a 52%, #44536a 74%, #202b3a 90%, #10161f 100%)',
                  boxShadow: 'inset -1.5px 0 2px rgba(255,255,255,0.7), 4px 3px 16px rgba(0,0,0,0.9)',
                }}
              >
                {/* antenna band slits */}
                <div className="absolute top-[88px] right-0 w-[12px] h-[3px] bg-[#05080e]/85" />
                <div className="absolute bottom-[88px] right-0 w-[12px] h-[3px] bg-[#05080e]/85" />
              </div>

              {/* left volume notches */}
              <div className="absolute top-[132px] -left-[3px] w-[3px] h-[36px] rounded-l-sm bg-[#475569] border-l border-white/40" />
              <div className="absolute top-[180px] -left-[3px] w-[3px] h-[36px] rounded-l-sm bg-[#475569] border-l border-white/40" />

              {/* power / Siri button, sitting on the rail's outer face */}
              <div className="absolute top-[176px] -right-[13px] w-[5px] h-[56px] rounded-r-sm bg-gradient-to-b from-[#f8fafc] via-[#b6c2d0] to-[#1e293b] shadow-[2px_2px_5px_rgba(0,0,0,0.9)] z-[25]" />

              {/* chamfer rim */}
              <div className="absolute inset-0 rounded-[48px] pointer-events-none border border-white/45 shadow-[inset_1.5px_2px_2.5px_rgba(255,255,255,0.6),inset_-1px_-1px_2px_rgba(0,0,0,0.85)]" />

              {/* ── SCREEN ── */}
              <div className="relative rounded-[45px] bg-[#0b141a] overflow-hidden border-[3px] border-[#0a0f14] flex flex-col h-[660px] shadow-inner">

                {/* status bar + dynamic island */}
                <div className="relative pt-2.5 pb-1.5 px-5 bg-[#0b141a] flex items-center justify-between text-zinc-300 text-[10.5px] font-semibold z-10 select-none">
                  <span>9:41</span>
                  <div className="w-[86px] h-[22px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
                    <div className="w-[7px] h-[7px] rounded-full bg-zinc-900 border border-zinc-800" />
                    <div className="w-[5px] h-[5px] rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="flex items-center gap-[5px] text-zinc-200">
                    <div className="flex items-end gap-[1.5px]">
                      <div className="w-[2.5px] h-[4px] rounded-[1px] bg-zinc-200" />
                      <div className="w-[2.5px] h-[6px] rounded-[1px] bg-zinc-200" />
                      <div className="w-[2.5px] h-[8px] rounded-[1px] bg-zinc-200" />
                      <div className="w-[2.5px] h-[10px] rounded-[1px] bg-zinc-400/50" />
                    </div>
                    <Wifi className="w-[13px] h-[13px]" strokeWidth={2.4} />
                    <div className="w-[19px] h-[10px] border border-zinc-300/80 rounded-[3px] p-[1.5px] flex items-center">
                      <div className="h-full w-3/4 bg-zinc-100 rounded-[1.5px]" />
                    </div>
                  </div>
                </div>

                {/* WhatsApp header */}
                <div className="bg-[#1f2c34] px-3 py-2.5 flex items-center justify-between border-b border-white/5 z-10 shadow-md">
                  <div className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4 text-zinc-300 shrink-0" />
                    <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm shrink-0">
                      <WhatsAppIcon className="w-[18px] h-[18px] text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="font-bold text-white text-[13px] tracking-tight">ChatPro365</span>
                        <span className="w-[13px] h-[13px] rounded-full bg-emerald-500 flex items-center justify-center text-white text-[8px] font-bold leading-none">✓</span>
                      </div>
                      <p className="text-[10px] text-zinc-400 font-medium leading-none mt-[3px]">online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Video className="w-[15px] h-[15px]" />
                    <Phone className="w-[15px] h-[15px]" />
                    <MoreVertical className="w-[15px] h-[15px]" />
                  </div>
                </div>

                {/* Chat stream — short messages, roomy bubbles and real line spacing,
                    because dense three-line paragraphs read as filler, not a chat.
                    `gap` matters: justify-between alone had no free space left to
                    hand out, so the bubbles ended up touching each other. */}
                <div className="flex-1 bg-[#0b141a] px-3 py-2.5 flex flex-col justify-between gap-[6px] overflow-hidden text-[11.5px] relative">
                  <div
                    className="absolute inset-0 opacity-[0.035] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '18px 18px' }}
                  />

                  <div className="mx-auto bg-[#182229] border border-white/5 text-zinc-400 text-[9.5px] font-medium px-3 py-[4px] rounded-md shadow-xs">
                    Today
                  </div>

                  {/* 1 — customer, mint green */}
                  <div className="self-start max-w-[84%] bg-[#86efac] text-[#064e3b] font-medium rounded-[14px] rounded-tl-[5px] px-[11px] pt-[7px] pb-[5px] shadow-sm border border-emerald-300/40">
                    <p className="leading-[1.5]">Hello, can ChatPro365 automate our WhatsApp sales chat?</p>
                    <div className="text-[9px] text-[#065f46]/80 text-right mt-[4px] font-semibold">13:40</div>
                  </div>

                  {/* 2 — bot, sky blue */}
                  <div className="self-end max-w-[86%] bg-[#38bdf8] text-white font-medium rounded-[14px] rounded-tr-[5px] px-[11px] pt-[7px] pb-[5px] shadow-sm border border-sky-400/30">
                    <p className="leading-[1.5]">Yes — I reply instantly, qualify the lead and send a quote. 24/7.</p>
                    <div className="text-[9px] text-white/85 text-right mt-[4px] flex items-center justify-end gap-1 font-semibold">
                      <span>13:41</span><span className="font-bold">✓✓</span>
                    </div>
                  </div>

                  {/* 3 — customer, charcoal */}
                  <div className="self-start max-w-[82%] bg-[#202c33] text-zinc-100 rounded-[14px] rounded-tl-[5px] px-[11px] pt-[7px] pb-[5px] shadow-sm border border-white/10">
                    <p className="leading-[1.5]">Can you send a quote for the Web Design Package?</p>
                    <div className="text-[9px] text-zinc-500 text-right mt-[4px]">13:42</div>
                  </div>

                  {/* 4 — bot, mint green */}
                  <div className="self-start max-w-[80%] bg-[#86efac] text-[#064e3b] font-medium rounded-[14px] rounded-tl-[5px] px-[11px] pt-[7px] pb-[5px] shadow-sm border border-emerald-300/40">
                    <p className="leading-[1.5]">Sure — here is your quotation.</p>
                    <div className="text-[9px] text-[#065f46]/80 text-right mt-[4px] flex items-center justify-end gap-1 font-semibold">
                      <span>13:42</span><span className="font-bold">✓✓</span>
                    </div>
                  </div>

                  {/* 5 — the quotation card: plain white, edge to edge */}
                  <div className="self-end w-[96%] bg-white rounded-[10px] overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
                    <div className="px-3 pt-2.5 pb-2 text-zinc-900">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold text-[12.5px] leading-tight">Web Design Package</h4>
                        <span className="text-[13px] font-extrabold tracking-tight shrink-0">$1,000</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-medium mt-[3px]">Quotation</p>
                      <div className="mt-2.5 flex items-end justify-between gap-2">
                        <p className="text-[9.5px] text-zinc-500 leading-[1.5]">
                          Generated for:<br />Web Design Package
                        </p>
                        <span className="text-[9px] text-zinc-400 shrink-0">13:42</span>
                      </div>
                    </div>
                    <button
                      onClick={onOpenModal}
                      className="w-full border-t border-zinc-200 py-[8px] text-[11.5px] font-semibold text-[#0a84ff] hover:bg-sky-50 transition-colors cursor-pointer"
                    >
                      View quotation
                    </button>
                  </div>

                  {/* 6 — customer, sky blue */}
                  <div className="self-start max-w-[76%] bg-[#38bdf8] text-white font-medium rounded-[14px] rounded-tl-[5px] px-[11px] pt-[7px] pb-[5px] shadow-sm border border-sky-400/30">
                    <p className="leading-[1.5]">That was instant! Let&apos;s get started.</p>
                    <div className="text-[9px] text-white/85 text-right mt-[4px] flex items-center justify-end gap-1 font-semibold">
                      <span>13:43</span><span className="font-bold">✓✓</span>
                    </div>
                  </div>
                </div>

                {/* input bar — white pill, exactly as in the reference */}
                <div className="bg-[#1f2c34] px-2 py-2 flex items-center gap-2 border-t border-white/5 z-10">
                  <div className="flex-1 bg-white rounded-full pl-2.5 pr-3 py-[7px] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] leading-none">😊</span>
                      <span className="w-[1.5px] h-[13px] bg-zinc-700 rounded-full animate-pulse" />
                      <span className="text-[12px] text-zinc-500 leading-none">Message</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Paperclip className="w-[15px] h-[15px] cursor-pointer hover:text-zinc-800" />
                      <Camera className="w-[15px] h-[15px] cursor-pointer hover:text-zinc-800" />
                    </div>
                  </div>
                  <button
                    onClick={onOpenModal}
                    className="w-[34px] h-[34px] rounded-full bg-[#00a884] hover:bg-[#029070] flex items-center justify-center text-white shadow-md transition-colors shrink-0"
                    aria-label="Send audio message"
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                </div>

                {/* home indicator */}
                <div className="bg-[#0b141a] pt-1.5 pb-2 flex items-center justify-center">
                  <div className="w-28 h-[3px] bg-white/70 rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ══════════ SATELLITE LAYER B — badges & sparks (in front of the phone) ══════════ */}
          <div className={`${SAT_LAYER} z-30`} style={SAT_ORIGIN}>

            {/* 1. TOP-LEFT — "24/7 AI Automation" */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[8px] top-[225px] w-[189px] pointer-events-auto"
            >
              <div className="glass-panel-3d rounded-[26px] pt-[52px] pb-[22px] px-4 flex flex-col items-center text-center hover:scale-[1.04] transition-transform duration-300 shadow-[0_18px_40px_rgba(0,0,0,0.55)]">
                <div className="text-[34px] font-extrabold text-white leading-none tracking-tight drop-shadow-md">24/7</div>
                <div className="text-[14px] font-semibold text-white/90 tracking-wide mt-1.5">AI Automation</div>
              </div>

              {/* embossed AI tile straddling the card's top edge
                  (wrapper does the positioning — .glass-tile-3d forces position:relative) */}
              <div className="absolute -top-[43px] left-[58px] w-[86px] h-[86px] z-10">
                <div className="glass-tile-3d w-full h-full rounded-[22px] flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <RefreshCw className="w-11 h-11 text-emerald-400 drop-shadow-[0_0_10px_#34d399]" strokeWidth={2.1} />
                    <span className="absolute text-[13px] font-black text-white tracking-tighter">AI</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. LEFT — "New Lead" */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[136px] top-[391px] pointer-events-auto"
            >
              <div className="glass-pill rounded-[17px] pl-2 pr-4 h-[50px] flex items-center gap-2.5 hover:scale-105 transition-transform duration-300 shadow-[0_0_22px_rgba(245,158,11,0.28)]">
                <div className="w-[34px] h-[34px] rounded-full overflow-hidden border-2 border-amber-400/70 shrink-0 bg-gradient-to-tr from-amber-500 to-yellow-300">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&auto=format&fit=crop&q=80"
                    alt="New lead" loading="lazy" className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <span className="text-[15px] font-bold text-amber-300 tracking-tight whitespace-nowrap">New Lead</span>
              </div>
            </motion.div>

            {/* 3. TOP-RIGHT — "Qualified" */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[477px] top-[288px] pointer-events-auto"
            >
              <div className="glass-pill rounded-[17px] pl-2 pr-5 h-[51px] min-w-[176px] flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-[0_0_22px_rgba(56,189,248,0.3)]">
                <div className="w-[35px] h-[35px] rounded-full overflow-hidden border-2 border-cyan-400/70 shrink-0 bg-gradient-to-tr from-cyan-500 to-sky-300">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&auto=format&fit=crop&q=80"
                    alt="Qualified lead" loading="lazy" className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <span className="text-[16px] font-bold text-cyan-300 tracking-tight whitespace-nowrap">Qualified</span>
              </div>
            </motion.div>

            {/* 4. RIGHT — shield tile + "Instant Lead Qualification" */}
            <motion.div
              animate={{ y: [-5, 6, -5] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[446px] top-[533px] w-[296px] h-[186px] pointer-events-auto"
            >
              <div className="absolute left-[116px] top-0 w-[82px] h-[82px]">
                <div className="glass-tile-3d w-full h-full rounded-[22px] flex items-center justify-center shadow-[0_0_26px_rgba(16,185,129,0.45)] hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-11 h-11 text-emerald-400 drop-shadow-[0_0_12px_#34d399]" strokeWidth={2.1} />
                </div>
              </div>

              <div className="absolute left-0 top-[97px] w-full h-[89px]">
                <div className="glass-pill w-full h-full rounded-[22px] pl-2.5 pr-4 flex items-center gap-3 hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_28px_rgba(16,185,129,0.28)]">
                  <div className="w-[42px] h-[42px] rounded-full overflow-hidden border-2 border-emerald-400/70 shrink-0 bg-gradient-to-tr from-emerald-500 to-teal-300">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=110&auto=format&fit=crop&q=80"
                      alt="Sales agent" loading="lazy" className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <span className="text-[19px] font-bold text-white leading-[1.15] tracking-tight">
                    Instant Lead<br />Qualification
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 5. LEFT — WhatsApp tile + signal bars */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[16px] top-[530px] pointer-events-auto"
            >
              <div className="w-[82px] h-[82px] glass-tile-3d rounded-[22px] flex items-center justify-center shadow-[0_0_26px_rgba(16,185,129,0.45)] hover:scale-110 transition-transform duration-300">
                <WhatsAppIcon className="w-11 h-11 text-emerald-400 drop-shadow-[0_0_10px_#34d399]" />
              </div>
              <div className="mt-4 -ml-[10px] flex flex-col gap-[7px]">
                <div className="h-[5px] w-[93px] rounded-full bg-gradient-to-r from-slate-300/75 to-slate-400/10 animate-pulse" />
                <div className="h-[5px] w-[71px] rounded-full bg-gradient-to-r from-slate-300/55 to-slate-400/5 animate-pulse" style={{ animationDelay: '0.4s' }} />
                <div className="h-[5px] w-[43px] rounded-full bg-gradient-to-r from-slate-300/40 to-transparent animate-pulse" style={{ animationDelay: '0.8s' }} />
              </div>
            </motion.div>

            {/* 6. RIGHT — luminous node + data streaks */}
            <div className="absolute left-[546px] top-[352px] flex items-center gap-3">
              <div className="relative flex items-center justify-center w-[18px] h-[18px]">
                <div className="absolute w-[18px] h-[18px] rounded-full border border-cyan-400/50 animate-ping opacity-60" />
                <div className="w-[11px] h-[11px] rounded-full bg-cyan-400 shadow-[0_0_16px_#22d3ee,0_0_30px_#06b6d4]" />
              </div>
              <div className="flex flex-col gap-[7px]">
                <div className="h-[5px] w-[82px] rounded-full bg-gradient-to-r from-slate-300/70 to-transparent" />
                <div className="h-[5px] w-[58px] rounded-full bg-gradient-to-r from-slate-300/50 to-transparent" />
                <div className="h-[5px] w-[34px] rounded-full bg-gradient-to-r from-slate-300/30 to-transparent" />
              </div>
            </div>

            {/* 7. Ambient sparks */}
            <div className="absolute left-[191px] top-[129px] w-[9px] h-[9px] rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399] animate-pulse" />
            <div className="absolute left-[205px] top-[470px] w-[8px] h-[8px] rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8] animate-pulse" style={{ animationDelay: '0.7s' }} />
            <div className="absolute left-[178px] top-[496px] w-[5px] h-[5px] rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" style={{ animationDelay: '1.4s' }} />
            <div className="absolute left-[16px] top-[729px] w-[10px] h-[10px] rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee] animate-pulse" style={{ animationDelay: '1.1s' }} />
            <div className="absolute left-[690px] top-[242px] w-[8px] h-[8px] rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8] animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="absolute left-[715px] top-[621px] w-[7px] h-[7px] rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse" style={{ animationDelay: '1.7s' }} />
            <div className="absolute left-[498px] top-[780px] w-[15px] h-[15px] rounded-full bg-emerald-400 shadow-[0_0_20px_#34d399,0_0_36px_#10b981] animate-pulse" />

            {/* 8. Faceted sparkle, bottom right */}
            <motion.div
              animate={{ scale: [0.97, 1.03, 0.97], opacity: [0.88, 1, 0.88] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[648px] top-[748px] drop-shadow-[0_0_25px_rgba(100,116,139,0.35)]"
            >
              <SparkleStar className="w-[80px] h-[80px] overflow-visible" />
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
