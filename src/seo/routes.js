// The site's fixed pages. Blog posts are discovered from markdown instead and
// live in ../content/blog.js; seo/manifest.js merges the two into the list that
// routing, prerendering and the sitemap all read.
//
// This file is loaded directly by scripts/postbuild-seo.mjs in plain Node,
// outside Vite — so it may only import other plain-data modules with explicit
// file extensions (never a component, an icon pack, or anything that relies on
// import.meta.glob).

import { industries } from '../content/industries.js';
import { comparisons } from '../content/comparisons.js';
import { allFaqs } from '../content/faq.js';
import { growthFaqs } from '../content/growth.js';

export const SITE = 'https://chatpro365.com';

const OG_IMAGE = `${SITE}/og-image.png`;

// /features renders the landing page scrolled to a section, so it points its
// canonical back at the homepage and stays out of the sitemap — otherwise Google
// sees two copies of one page. Pages that own real, distinct content (about,
// pricing, faq, compare) are no longer aliases; they are pages.
const sectionAlias = (path, title, description) => ({
  path,
  title,
  description,
  canonical: '/',
  inSitemap: false,
});

const page = (path, title, description, priority = '0.5', changefreq = 'monthly', extra = {}) => ({
  path,
  title,
  description,
  canonical: path,
  inSitemap: true,
  priority,
  changefreq,
  ...extra,
});

const crumb = (name, item) => (item ? { name, item } : { name });

export const staticRoutes = [
  {
    path: '/',
    title: 'ChatPro365 | Best WhatsApp Business API & AI Automation Platform',
    // Keep descriptions under ~160 characters — Google truncates past that, and
    // the previous 209-character version lost everything after "bulk broadcasts".
    description:
      'Turn WhatsApp into a 24/7 AI sales agent that quotes from your own rate card, takes payment in the chat and follows up on its own. 11 Indian languages.',
    canonical: '/',
    inSitemap: true,
    priority: '1.0',
    changefreq: 'weekly',
  },

  // Landing-page section (canonical → homepage)
  sectionAlias(
    '/features',
    'Features | ChatPro365 WhatsApp AI Sales Automation',
    'AI chatbot in 11 Indian languages, auto quotation PDFs, lead scoring, bulk broadcasts, drip campaigns and CRM webhooks — every ChatPro365 feature in one place.'
  ),

  // ── Entity, pricing and answers: real pages, not aliases ──
  page(
    '/about',
    'About ChatPro365 | The AI Sales Agent for WhatsApp',
    'What ChatPro365 is, who it is for, how the AI sells on WhatsApp, and how to reach the company — the plain description of the product and the business behind it.',
    '0.9',
    'monthly',
    { breadcrumb: [crumb('Home', `${SITE}/`), crumb('About')] }
  ),
  page(
    '/pricing',
    'WhatsApp Business API Pricing in India | ChatPro365 Plans',
    'WhatsApp Business API pricing in India: ChatPro365 plans in rupees, what each includes, what Meta charges on top per conversation, and the 14-day free trial.',
    '0.9',
    'monthly',
    { breadcrumb: [crumb('Home', `${SITE}/`), crumb('Pricing')] }
  ),
  page(
    '/faq',
    'ChatPro365 FAQ | WhatsApp AI Sales Agent Questions Answered',
    'Straight answers about ChatPro365: how the AI is trained, whether it can quote prices, which Indian languages it speaks, WhatsApp’s 24-hour rule, CRM and pricing.',
    '0.8',
    'monthly',
    {
      faq: allFaqs,
      breadcrumb: [crumb('Home', `${SITE}/`), crumb('FAQ')],
    }
  ),

  // ── Industries ──
  page(
    '/industries',
    'WhatsApp Chatbot by Industry | AI Sales Agent | ChatPro365',
    'How ChatPro365 sells on WhatsApp for real estate, manufacturing, portable cabins, interiors, construction and catering — the enquiry, the quotation, the follow-up.',
    '0.8',
    'monthly',
    { breadcrumb: [crumb('Home', `${SITE}/`), crumb('Industries')] }
  ),
  ...industries.map((ind) =>
    page(ind.path, ind.title, ind.description, '0.8', 'monthly', {
      industry: ind.slug,
      faq: ind.faq.map(({ q, a }) => ({ q, a })),
      breadcrumb: [
        crumb('Home', `${SITE}/`),
        crumb('Industries', `${SITE}/industries`),
        crumb(ind.name),
      ],
    })
  ),

  // ── Comparisons ──
  // AI Growth (ads) — early access. In the sitemap because it is real content
  // the buyer asks for by name; low priority because it cannot be bought yet.
  page(
    '/growth',
    'AI Growth | Click-to-WhatsApp Ads Measured by Orders — ChatPro365',
    'Plan a Click-to-WhatsApp campaign from your own catalogue, launch it with one tap, and see which chats became confirmed orders. Early access.',
    '0.6',
    'monthly',
    {
      breadcrumb: [crumb('Home', `${SITE}/`), crumb('AI Growth')],
      faq: growthFaqs.map(({ q, a }) => ({ q, a })),
    }
  ),

  page(
    '/compare',
    'Compare ChatPro365 | WhatsApp Business API Platform Comparisons',
    'How ChatPro365 compares with other WhatsApp Business API platforms, what we can verify about each, and the questions worth asking any vendor before you buy.',
    '0.7',
    'monthly',
    { breadcrumb: [crumb('Home', `${SITE}/`), crumb('Compare')] }
  ),
  ...comparisons.map((cmp) =>
    page(cmp.path, cmp.title, cmp.description, '0.7', 'monthly', {
      comparison: cmp.slug,
      faq: cmp.faq.map(({ q, a }) => ({ q, a })),
      breadcrumb: [
        crumb('Home', `${SITE}/`),
        crumb('Compare', `${SITE}/compare`),
        crumb(cmp.competitor),
      ],
    })
  ),

  // ── Support, content and legal ──
  page(
    '/contact',
    'Contact ChatPro365 | WhatsApp Business API Support India',
    'Talk to the ChatPro365 team about WhatsApp Business API onboarding, demos, pricing or support. Reach us on WhatsApp or email.',
    '0.6'
  ),
  page(
    '/help',
    'Help Center | ChatPro365 WhatsApp Automation Guides',
    'Setup guides and answers for ChatPro365 — connecting WhatsApp Business API, configuring the AI bot, running broadcasts and managing your team inbox.',
    '0.6'
  ),
  page(
    '/blog',
    'Blog | WhatsApp Marketing & AI Automation Insights',
    'Practical guides on WhatsApp lead conversion, AI chatbot setup, lead scoring and broadcast strategy for Indian businesses.',
    '0.6'
  ),
  page(
    '/community',
    'Community | ChatPro365 WhatsApp Growth Group',
    'Join the ChatPro365 WhatsApp group for setup tips, automation ideas and early access to new features.',
    '0.4'
  ),
  page(
    '/api-docs',
    'API Documentation | ChatPro365 Developer Reference',
    'Developer reference for the ChatPro365 API — webhooks, CRM integration, message endpoints and authentication.',
    '0.4'
  ),
  page(
    '/privacy-policy',
    'Privacy Policy | ChatPro365',
    'How ChatPro365 collects, uses, stores and protects your data and your customers WhatsApp conversation data.',
    '0.5'
  ),
  page(
    '/terms',
    'Terms of Service | ChatPro365',
    'The terms governing your use of the ChatPro365 WhatsApp Business API platform, subscriptions and services.',
    '0.5'
  ),
  page(
    '/refund',
    'Refund Policy | ChatPro365',
    'ChatPro365 refund and cancellation policy for subscriptions, wallet top-ups and annual plans.',
    '0.5'
  ),
  page(
    '/acceptable-use',
    'Acceptable Use Policy | ChatPro365',
    'What is and is not allowed when sending WhatsApp messages through ChatPro365 — spam, opt-in rules and Meta policy compliance.',
    '0.4'
  ),
  page(
    '/gdpr',
    'GDPR Compliance | ChatPro365',
    'How ChatPro365 handles data subject rights, processing agreements and cross-border data transfers under GDPR.',
    '0.4'
  ),
  page(
    '/cookie-policy',
    'Cookie Policy | ChatPro365',
    'Exactly what ChatPro365 stores in your browser and why — the Meta Pixel, your sign-in session, and nothing else. Including how to clear it.',
    '0.4'
  ),
];

export { OG_IMAGE };
