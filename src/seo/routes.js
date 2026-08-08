// Single source of truth for every indexable URL on the marketing site.
//
// Used twice:
//   1. At build time by scripts/postbuild-seo.mjs — writes a real HTML file per
//      route with its own <title>/description/canonical, and generates sitemap.xml.
//   2. At runtime by <RouteSeo /> in App.jsx — keeps the tags correct when the
//      visitor navigates client-side.
//
// Keep this file plain ESM with no imports so Node can read it directly.

export const SITE = 'https://chatpro365.com';

const OG_IMAGE = `${SITE}/og-image.png`;

// The landing page is one long scrolling page. /features, /pricing etc. are
// scroll-to-section aliases that render the exact same markup, so they point
// their canonical back at the homepage and stay out of the sitemap — otherwise
// Google sees six copies of one page.
const sectionAlias = (path, title, description) => ({
  path,
  title,
  description,
  canonical: '/',
  inSitemap: false,
});

const page = (path, title, description, priority = '0.5', changefreq = 'monthly') => ({
  path,
  title,
  description,
  canonical: path,
  inSitemap: true,
  priority,
  changefreq,
});

export const routes = [
  {
    path: '/',
    title: 'ChatPro365 | Best WhatsApp Business API & AI Automation Platform',
    description:
      'Turn WhatsApp into your 24/7 AI Sales Agent that sells in 11 Indian languages — Hindi, Hinglish, Tamil, Telugu, Bengali, Marathi & more. Auto quotations, CRM, bulk broadcasts, chatbot auto-replies. Start free!',
    canonical: '/',
    inSitemap: true,
    priority: '1.0',
    changefreq: 'weekly',
  },

  // Landing-page sections (canonical → homepage)
  sectionAlias(
    '/features',
    'Features | ChatPro365 WhatsApp AI Sales Automation',
    'AI chatbot in 11 Indian languages, auto quotation PDFs, lead scoring, bulk broadcasts, drip campaigns and CRM webhooks — every ChatPro365 feature in one place.'
  ),
  sectionAlias(
    '/pricing',
    'Pricing | ChatPro365 WhatsApp Business API Plans',
    'Simple WhatsApp Business API pricing for Indian businesses. Starter and Pro plans with AI replies, broadcasts, CRM and team inbox included. 14-day free trial.'
  ),
  sectionAlias(
    '/compare',
    'ChatPro365 vs Other WhatsApp Automation Tools',
    'See how ChatPro365 compares on multilingual AI selling, auto quotations, lead scoring and pricing against other WhatsApp Business API platforms.'
  ),
  sectionAlias(
    '/about',
    'About ChatPro365 | WhatsApp AI Built for Bharat',
    'ChatPro365 is a WhatsApp Business API platform built for Indian businesses — an AI sales agent that talks to your customers in their own language, around the clock.'
  ),
  sectionAlias(
    '/faq',
    'FAQ | ChatPro365 WhatsApp Business API Questions Answered',
    'Common questions about the WhatsApp Business API, AI chatbot languages, bulk broadcast limits, human handoff, CRM integration and ChatPro365 pricing.'
  ),

  // Real standalone pages
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
    '/case-studies',
    'Case Studies | Real WhatsApp Automation Results',
    'How e-commerce, real estate and service businesses in India used ChatPro365 to lift conversion rates, cut response times and close more deals on WhatsApp.',
    '0.6'
  ),
  page(
    '/community',
    'Community | ChatPro365 WhatsApp Growth Group',
    'Join 500+ Indian business owners sharing WhatsApp marketing tactics, automation tips and early access to new ChatPro365 features.',
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
    'Which cookies ChatPro365 uses, what they do, and how you can control them.',
    '0.4'
  ),
];

/** Route metadata for a pathname, or undefined if the URL is not a real page. */
export const findRoute = (pathname) => {
  const clean =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return routes.find((r) => r.path === clean);
};

export const sitemapRoutes = routes.filter((r) => r.inSitemap);

export { OG_IMAGE };
