// Comparison pages.
//
// Two rules for this file:
//
// 1. We do not publish anyone else's price table. Plans change every few weeks,
//    a stale number misleads the reader, and a bare monthly figure compares
//    nothing when one platform includes the AI agent and another sells it as an
//    add-on. We link to each vendor's own pricing page instead — including ours.
// 2. We only characterise a competitor in terms that their own public site makes
//    obvious, and we say plainly that we are not speaking for them. Inventing a
//    rival's feature list is unfair and self-defeating — buyers check, and so do
//    AI assistants.
//
// Pure data, no imports: routes.js pulls this into plain Node at build time.

// What ChatPro365 does. Stated once here and reused on every comparison page so
// the pages cannot drift apart.
const CHATPRO_APPROACH = [
  {
    title: 'It quotes, not just replies',
    desc: 'The AI collects the requirement in conversation, applies your rate card, adds GST and sends a branded quotation PDF inside the chat. Anything it must not guess is quoted as pending for your team to fill, after which the final quote is resent automatically.',
  },
  {
    title: 'Trained from your documents, not flows',
    desc: 'Upload price lists, brochures and policy PDFs — or paste your website — and the AI answers strictly from that material, citing the document it used. There are no flowcharts to build and no question-answer pairs to type.',
  },
  {
    title: 'Eleven Indian languages, auto-detected',
    desc: 'English, Hinglish, Hindi, Marathi, Bengali, Gujarati, Tamil, Telugu, Kannada, Malayalam and Punjabi — detected from the customer’s own message, including Roman-script typing, with no separate flow per language.',
  },
  {
    title: 'It remembers customers between chats',
    desc: 'A buyer returning days later is greeted with what they were interested in, rather than starting over.',
  },
  {
    title: 'Follow-up is behaviour-triggered',
    desc: 'A quotation that goes unanswered triggers a nudge written for that buyer under rules you set — not a scheduled blast to everyone.',
  },
  {
    title: 'The bot is audited and repaired',
    desc: 'A QA supervisor reads your real failed conversations, points to where the bot lost the customer, and proposes the fix for you to approve.',
  },
];

// Questions worth asking any vendor, including us. A comparison page that only
// flatters the seller is worth nothing to the reader.
const BUYER_CHECKLIST = [
  'Is the platform built on the official WhatsApp Business Platform, so your number cannot be banned for automation?',
  'Are WhatsApp conversation charges billed by Meta on top of the subscription, and who pays them?',
  'Is the AI agent included in the plan, or sold as an add-on charged separately?',
  'How is the bot trained — by building flows by hand, or from documents you already have?',
  'Can the bot produce a priced quotation, or does it only answer questions?',
  'What does the bot do when it does not know an answer — say so, or improvise?',
  'Which Indian languages does it genuinely detect and reply in, without a separate flow per language?',
  'How many agent seats are included, and what does each extra seat cost?',
  'Can leads be pushed into the CRM you already use, and can that CRM push leads back?',
  'Who owns your chat data, and can you export it?',
  'Is there a trial you can run with your own price list before paying?',
];

export const comparisons = [
  {
    slug: 'aisensy',
    path: '/chatpro365-vs-aisensy',
    competitor: 'AiSensy',
    title: 'ChatPro365 vs AiSensy | WhatsApp Business API Comparison (2026)',
    description:
      'An honest comparison of ChatPro365 and AiSensy for Indian businesses — what each is built around, how to compare them properly, and the questions to ask before you buy.',
    h1: 'ChatPro365 vs AiSensy',
    intro:
      'AiSensy is one of the better-known WhatsApp Business API platforms in India, covering broadcasts, campaigns, a shared inbox and chatbot automation. ChatPro365 sits on the same official WhatsApp Business Platform, and the overlap is real — both let a business automate replies and run campaigns from one number. The difference worth your attention is what each is built around: reaching customers at scale, versus getting a single enquiry to a priced quotation.',
    pricingLink: {
      url: 'https://aisensy.com/pricing',
      label: 'aisensy.com/pricing',
    },
    // Non-price observations only, and phrased so they stay true as plans change.
    watchFor: [
      'Check whether the chatbot or AI agent is part of the plan you are quoting, or an add-on charged separately on top of it — this changes the real monthly cost more than the headline plan price does.',
      'Count the agent seats included and the price of each extra seat, against the size of the team that will actually use the inbox.',
      'On both platforms, WhatsApp conversation charges are set by Meta and billed on top of the subscription.',
    ],
    approach: CHATPRO_APPROACH,
    checklist: BUYER_CHECKLIST,
    faq: [
      {
        q: 'Which one is cheaper?',
        a: 'We deliberately do not publish a rival’s price table — plans change every few weeks and a stale figure would mislead you. Read both pricing pages directly, and compare like for like: whether the AI agent is included or an add-on, how many agent seats come with the plan, and what each extra seat costs. On any platform on the official API, Meta’s conversation charges are billed on top of the subscription.',
      },
      {
        q: 'What is the main difference between the two?',
        a: 'Where the product’s centre of gravity sits. AiSensy is strongest as a way to reach customers at scale — broadcasts, campaigns and automation around them. ChatPro365 is built around the sale itself: the AI collects a requirement, prices it from your rate card, sends a GST quotation PDF in the chat, remembers the customer between conversations, and follows up when a quote goes unanswered. If your main need is campaigns, that difference matters less; if it is converting enquiries into priced deals, it is the whole point.',
      },
      {
        q: 'Do both use the official WhatsApp Business API?',
        a: 'Yes. Both are built on the official WhatsApp Business Platform, which is what keeps a business number in good standing while it is automated. Unofficial tools that drive WhatsApp Web risk the number being banned.',
      },
      {
        q: 'Can we try ChatPro365 before switching?',
        a: 'Yes — there is a 14-day free trial, and you can load your own price list and documents during it, which is the only honest way to judge whether the AI quotes your products correctly.',
      },
    ],
  },

  {
    slug: 'interakt',
    path: '/chatpro365-vs-interakt',
    competitor: 'Interakt',
    title: 'ChatPro365 vs Interakt | WhatsApp Business API Comparison (2026)',
    description:
      'An honest comparison of ChatPro365 and Interakt for Indian businesses — what each is built around, how to compare them properly, and the questions to ask before you buy.',
    h1: 'ChatPro365 vs Interakt',
    intro:
      'Interakt is widely used by Indian e-commerce and D2C sellers for WhatsApp commerce — catalogues, order updates and campaign notifications, with the shop as the centre of the experience. ChatPro365 is built for businesses whose sale needs a conversation before it needs a checkout: where the price depends on size, quantity, specification or location, and somebody has to ask questions before a number can be quoted.',
    pricingLink: {
      url: 'https://www.interakt.shop/pricing/',
      label: 'interakt.shop/pricing',
    },
    watchFor: [
      'Check what sits inside the plan and what is sold as a separate add-on — a low headline plan with paid modules on top can cost more than a higher plan that includes them.',
      'If your price is not printed on the product, test whether the platform can produce an itemised quotation, or only answer questions and take orders.',
      'On both platforms, WhatsApp conversation charges are set by Meta and billed on top of the subscription.',
    ],
    approach: CHATPRO_APPROACH,
    checklist: BUYER_CHECKLIST,
    faq: [
      {
        q: 'Which is better for an online store?',
        a: 'If your business is a catalogue with fixed prices and the job is order notifications, abandoned-cart recovery and campaigns, a commerce-first tool like Interakt is squarely aimed at that. ChatPro365 also syncs with Shopify and WooCommerce, but its centre of gravity is the quotation — it is the better fit when the price is not printed on the product and has to be worked out per enquiry.',
      },
      {
        q: 'How do the prices compare?',
        a: 'We do not republish anyone else’s prices, because they change and a stale table is worse than none. Open both pricing pages and compare what is inside the plan rather than the headline number: whether the AI agent is included or an add-on, how many agent seats you get, and what extra seats cost. Meta’s WhatsApp conversation charges are billed on top on either platform.',
      },
      {
        q: 'Do we need to build chat flows in ChatPro365?',
        a: 'No. You upload the material you already have — price lists, brochures, policy documents, or your website link — and the AI answers from it, citing the document it used. There are no flowcharts to draw and no question-answer pairs to type in.',
      },
      {
        q: 'Can ChatPro365 handle regional-language customers?',
        a: 'Yes, in eleven languages including Roman-script Hinglish, detected from the customer’s own message rather than configured per campaign. Quotation messages, booking confirmations and follow-ups all follow the customer’s language.',
      },
    ],
  },
];

export const findComparison = (slug) => comparisons.find((c) => c.slug === slug);
export { BUYER_CHECKLIST, CHATPRO_APPROACH };
