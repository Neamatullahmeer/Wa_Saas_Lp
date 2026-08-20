// Comparison pages.
//
// Rule for this file: we only state a competitor fact we have read on that
// competitor's own public page, and we record the URL and the date we read it.
// Everything else on these pages describes what ChatPro365 does, or gives the
// reader questions to ask any vendor. Inventing a rival's feature list is both
// unfair and self-defeating — buyers check, and so do AI assistants.
//
// Pure data, no imports: routes.js pulls this into plain Node at build time.

export const CHATPRO_PLANS = [
  { plan: 'Starter', price: '₹2,999', unit: '/month' },
  { plan: 'Pro', price: '₹7,999', unit: '/month' },
  { plan: 'Enterprise', price: 'Custom', unit: '' },
];

// What ChatPro365 does. Stated once here and reused on every comparison page so
// the pages cannot drift apart.
const CHATPRO_APPROACH = [
  {
    title: 'It quotes, not just replies',
    desc: 'The AI collects the requirement in conversation, applies your rate card, adds GST and sends a branded quotation PDF inside the chat. Anything it must not guess is quoted as pending for your team to fill, after which the final quote is resent automatically.',
  },
  {
    title: 'Trained from your documents, not from flows',
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
      'An honest comparison of ChatPro365 and AiSensy for Indian businesses — published plan pricing, what each is built for, and the questions to ask before you buy.',
    h1: 'ChatPro365 vs AiSensy',
    intro:
      'Both platforms sit on the official WhatsApp Business Platform, and both let an Indian business run broadcasts and automated replies from a shared team inbox. They are built around different centres of gravity, though: AiSensy positions itself around WhatsApp marketing and broadcast campaigns, while ChatPro365 is built around the sales conversation itself — qualifying a buyer, quoting a price and following up until the deal moves.',
    verified: {
      source: 'https://aisensy.com/pricing',
      label: 'aisensy.com/pricing',
      checkedOn: '20 August 2026',
      note: 'AiSensy lists chatbots and AI agents as add-ons charged separately on top of any plan, and WhatsApp conversation charges are billed on top of the subscription.',
      rows: [
        { plan: 'Free Forever', price: '₹0' },
        { plan: 'Basic', price: '₹1,500 / month' },
        { plan: 'Pro', price: '₹3,200 / month' },
        { plan: 'Premium', price: '₹9,100 / month' },
        { plan: 'Unlimited / Enterprise', price: 'Custom' },
        { plan: 'Extra agent seat', price: '₹750 / month each' },
      ],
    },
    approach: CHATPRO_APPROACH,
    checklist: BUYER_CHECKLIST,
    faq: [
      {
        q: 'Is ChatPro365 cheaper than AiSensy?',
        a: 'The subscriptions are not directly comparable, so compare what is included rather than the headline number. As published on aisensy.com/pricing on 20 August 2026, AiSensy runs from a free tier through ₹1,500, ₹3,200 and ₹9,100 per month, with chatbot and AI agent capability charged as separate add-ons and extra agent seats at ₹750 per month. ChatPro365 is ₹2,999 or ₹7,999 per month with the AI sales agent included rather than sold as an add-on. On both platforms, WhatsApp conversation charges are set by Meta and billed on top.',
      },
      {
        q: 'What is the main difference between the two?',
        a: 'AiSensy leads with WhatsApp marketing and broadcasting. ChatPro365 leads with selling: the AI collects a requirement, prices it from your rate card, sends a GST quotation PDF in the chat, remembers the customer between conversations and follows up when a quote goes unanswered. If your need is mainly to blast campaigns, that difference matters less; if your need is to convert enquiries into priced deals, it is the whole point.',
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
      'An honest comparison of ChatPro365 and Interakt for Indian businesses — published plan pricing, what each is built for, and the questions to ask before you buy.',
    h1: 'ChatPro365 vs Interakt',
    intro:
      'Interakt is widely used by Indian e-commerce and D2C sellers for WhatsApp commerce — catalogues, order updates and campaign notifications. ChatPro365 is built for businesses whose sale needs a conversation before it needs a checkout: where the price depends on size, quantity, specification or location, and somebody has to ask questions before a number can be quoted.',
    verified: {
      source: 'https://www.interakt.shop/pricing/',
      label: 'interakt.shop/pricing',
      checkedOn: '20 August 2026',
      note: 'Prices are listed exclusive of taxes. WhatsApp conversation charges are set by Meta and billed separately from the subscription.',
      rows: [
        { plan: 'Starter', price: '₹999 / month + taxes' },
        { plan: 'Growth', price: '₹2,499 / month + taxes' },
        { plan: 'Advanced', price: '₹3,499 / month + taxes' },
        { plan: 'Sales CRM add-on', price: '₹499 / month + taxes' },
      ],
    },
    approach: CHATPRO_APPROACH,
    checklist: BUYER_CHECKLIST,
    faq: [
      {
        q: 'Which is better for an online store?',
        a: 'If your business is a catalogue with fixed prices and the job is order notifications, abandoned-cart recovery and campaigns, a commerce-first tool like Interakt is squarely aimed at that. ChatPro365 also syncs with Shopify and WooCommerce, but its centre of gravity is the quotation: it is the better fit when the price is not printed on the product and has to be worked out per enquiry.',
      },
      {
        q: 'How do the prices compare?',
        a: 'As published on interakt.shop/pricing on 20 August 2026, Interakt lists Starter at ₹999, Growth at ₹2,499 and Advanced at ₹3,499 per month plus taxes, with a Sales CRM add-on at ₹499 per month. ChatPro365 is ₹2,999 or ₹7,999 per month, with the AI sales agent, quotation engine and follow-up automation included. On either platform, WhatsApp conversation charges are set by Meta and billed on top of the subscription.',
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
