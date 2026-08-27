// The pages that used to be scroll-anchors on the landing page (/about,
// /pricing, /faq, /compare) plus the industry and comparison pages.
//
// Why they are real pages: an alias whose canonical points at the homepage is
// deliberately not indexed, so "about chatpro365", "chatpro365 pricing" and
// "chatpro365 vs …" had no page to return, and an AI assistant looking for a
// description of the company found only marketing sections inside one long
// scroller. Each page here owns content that exists nowhere else.
//
// Content rule: nothing on these pages may claim a customer, a number or a
// result we cannot show. Capability claims must match what the product does.

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  ArrowRight, Check, CheckCircle, MessageSquare, FileText, Globe, Bot, Users,
  Building2, Factory, Package, Layers, Hammer, Calendar, Shield, Sparkles,
  HelpCircle, Scale, Mail, Smartphone, MapPin, Link2,
} from 'lucide-react';
import { PageModal } from './FooterPages';
import { industries, findIndustry } from './content/industries';
import { comparisons, findComparison, BUYER_CHECKLIST } from './content/comparisons';
import { faqGroups } from './content/faq';
import { APP_BASE_URL } from './lib/apiConfig';

const WA_LINK = 'https://wa.me/918291929081';
const TRIAL_LINK = `${APP_BASE_URL}/register`;

// Icon keys live in the data files (which must stay import-free for the build),
// so the mapping back to components happens here.
const ICONS = {
  building: Building2,
  factory: Factory,
  package: Package,
  layers: Layers,
  hammer: Hammer,
  calendar: Calendar,
};

// ─────────────────────────────────────────────
// Shared bits
// ─────────────────────────────────────────────

/** Visible breadcrumb. Mirrors the BreadcrumbList emitted in postbuild-seo.mjs. */
const Crumbs = ({ trail }) => (
  <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 mb-8">
    {trail.map((c, i) => (
      <span key={i}>
        {c.to ? (
          <Link to={c.to} className="hover:text-emerald-400 transition-colors">{c.label}</Link>
        ) : (
          <span className="text-zinc-400">{c.label}</span>
        )}
        {i < trail.length - 1 && <span className="mx-2 text-zinc-700">›</span>}
      </span>
    ))}
  </nav>
);

const PageHead = ({ badge, icon: Icon = Sparkles, title, sub }) => (
  <div className="mb-14">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm font-bold mb-6">
      <Icon className="w-4 h-4" /> {badge}
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">{title}</h1>
    {sub && <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">{sub}</p>}
  </div>
);

const Section = ({ title, children, className = '' }) => (
  <section className={`mb-14 ${className}`}>
    {title && <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>}
    {children}
  </section>
);

const CardGrid = ({ items, cols = 2 }) => (
  <div className={`grid grid-cols-1 ${cols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
    {items.map((it, i) => (
      <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
        <h3 className="font-bold text-white mb-2">{it.title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{it.desc}</p>
      </div>
    ))}
  </div>
);

/** Questions rendered as visible text — the structured data mirrors these. */
const FaqList = ({ items }) => (
  <div className="space-y-4">
    {items.map((f, i) => (
      <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
        <h3 className="font-bold text-white mb-3">{f.q}</h3>
        <p className="text-zinc-400 leading-relaxed">{f.a}</p>
      </div>
    ))}
  </div>
);

const CtaBlock = ({ title, sub, waText }) => (
  <div className="bg-gradient-to-r from-emerald-900/50 to-blue-900/50 border border-emerald-700/40 rounded-3xl p-8 md:p-10 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
    {sub && <p className="text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed">{sub}</p>}
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a href={TRIAL_LINK} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3.5 rounded-full font-bold transition-opacity hover:opacity-90 shadow-lg">
        Start the 14-day free trial <ArrowRight className="w-5 h-5" />
      </a>
      <a href={`${WA_LINK}?text=${encodeURIComponent(waText || 'Hi! I want to know more about ChatPro365')}`}
        target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg">
        <MessageSquare className="w-5 h-5" /> Ask us on WhatsApp
      </a>
    </div>
  </div>
);

/** A WhatsApp-style transcript. Illustrative, and labelled as such. */
const ChatDemo = ({ messages }) => (
  <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-5 md:p-6">
    <div className="flex flex-col gap-2.5">
      {messages.map((m, i) => (
        <div
          key={i}
          className={
            m.from === 'user'
              ? 'self-end bg-emerald-700/90 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-sm'
              : 'self-start bg-zinc-800 text-zinc-100 px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[90%] text-sm'
          }
        >
          {m.text}
        </div>
      ))}
    </div>
    <p className="text-zinc-600 text-xs mt-5">
      Illustrative conversation. The AI answers from your own catalogue, documents and pricing.
    </p>
  </div>
);

// ─────────────────────────────────────────────
// About
// ─────────────────────────────────────────────
export const AboutPage = () => (
  <PageModal>
    <div className="max-w-4xl mx-auto px-6 py-16 text-zinc-300">
      <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'About' }]} />

      <PageHead
        badge="About"
        icon={Bot}
        title="ChatPro365 is an AI sales agent for WhatsApp"
        sub="It answers your customers on your own WhatsApp number, works out what they want, prices it from your rate card, sends a branded GST quotation PDF, books appointments and follows up — while your team watches and steps in from a shared dashboard."
      />

      <Section title="What ChatPro365 is">
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            ChatPro365 is a WhatsApp Business API platform with an AI sales agent built into it.
            It is not a flow-builder and not a broadcast tool with a chatbot attached. The centre
            of the product is a single job: take a customer who has messaged your business on
            WhatsApp and move them towards a decision, without a person having to type every reply.
          </p>
          <p>
            In practice that means the AI holds the conversation — asking what a salesperson would
            ask, answering only from your own documents, calculating a price from your own rate
            card, sending an itemised quotation PDF with GST, booking a site visit or demo, and
            following up days later if the customer goes quiet. Everything it does is visible in a
            dashboard where your team can take over at any point.
          </p>
        </div>
      </Section>

      <Section title="The problem it solves">
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            Most Indian businesses already sell on WhatsApp, by hand, one message at a time. The
            enquiries do not arrive during office hours; they arrive at eleven at night, from an
            Instagram post or a Click-to-WhatsApp ad, and they ask the one question the owner
            cannot answer in one line: <em>what will this cost?</em>
          </p>
          <p>
            The honest answer needs questions first — size, quantity, specification, location — and
            then a price built from a rate card that usually lives in one person’s spreadsheet. By
            the time anyone gets to it, the customer has asked three competitors. That gap between
            the enquiry and the quotation is where the deal is lost, and closing it is what
            ChatPro365 is for.
          </p>
        </div>
      </Section>

      <Section title="Who it is for">
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            Small and medium businesses in India whose price depends on the enquiry: manufacturers,
            portable cabin and prefab sellers, interior and modular firms, construction
            contractors, real estate teams, event and catering companies, and service businesses
            that quote per job.
          </p>
          <p>
            It is a weaker fit for businesses that only need bulk marketing blasts, or for a fixed
            catalogue where a customer simply adds to cart — those needs are served well by
            commerce-first tools.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-6">
          {industries.map((ind) => (
            <Link key={ind.slug} to={ind.path}
              className="bg-zinc-900 border border-zinc-800 hover:border-emerald-600 text-zinc-300 text-sm font-medium px-4 py-2 rounded-full transition-colors">
              {ind.name}
            </Link>
          ))}
        </div>
      </Section>

      <Section title="What makes it different">
        <CardGrid
          items={[
            { title: 'It quotes, not just replies', desc: 'The AI produces a real, itemised quotation PDF with GST from your rate card — inside the chat, without a human typing it.' },
            { title: 'Trained from documents, not flows', desc: 'Upload price lists, brochures and policies, or paste your website. The AI answers from that material and cites the document it used.' },
            { title: 'It refuses to invent', desc: 'When your material does not cover a question, it says so and offers a human. Prices it must not guess are quoted as pending for your team to fill.' },
            { title: 'Eleven Indian languages', desc: 'Detected from the customer’s own message, including Roman-script Hinglish — no separate flow per language.' },
            { title: 'It remembers customers', desc: 'A buyer returning days later is greeted with what they were looking at, not a blank slate.' },
            { title: 'It audits itself', desc: 'A QA supervisor reads real failed conversations, finds where the bot lost the customer, and proposes the fix for you to approve.' },
          ]}
        />
      </Section>

      <Section title="How it works, end to end">
        <ol className="space-y-4">
          {[
            ['Connect your WhatsApp number', 'Through the official WhatsApp Business Platform, so automation never puts the number at risk.'],
            ['Upload what you already have', 'Price lists, brochures, catalogues, policy documents — PDF, Word, CSV, or a photo of a printed sheet. Or paste your website link.'],
            ['Test before customers do', 'The playground shows every answer and the document it came from, so you fix your material rather than discovering gaps in production.'],
            ['Go live', 'The AI answers, qualifies, quotes, books and follows up on your number, in your customer’s language.'],
            ['Your team stays in control', 'Every chat is visible; agents take over when they want to, and the owner is alerted when a lead is hot.'],
          ].map(([title, desc], i) => (
            <li key={i} className="flex gap-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
              <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
              <div>
                <h3 className="font-bold text-white mb-1">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Technology and integrations">
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            ChatPro365 is built on the official WhatsApp Business Platform. On top of it sit a
            document-grounded AI that answers from your uploaded material, a quotation engine that
            produces branded GST PDFs, an appointment system with per-slot capacity, a shared team
            inbox with assignment and handoff, and campaign and follow-up automation that respects
            WhatsApp’s messaging rules.
          </p>
          <p>
            It connects outward too: leads and chat activity can be pushed to your existing CRM
            over webhooks, your CRM can push contacts back in, and Shopify or WooCommerce
            catalogues can be synced both ways.
          </p>
        </div>
      </Section>

      <Section title="Who is behind ChatPro365">
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            ChatPro365 was founded in 2025 by Neamatullah Meer, and is built and run from
            Bengaluru, Karnataka, for businesses across India.
          </p>
          <p>
            The product exists because of a gap its founder kept running into: Indian businesses
            were already selling on WhatsApp by hand, and losing enquiries not for want of effort
            but because nobody could answer a pricing question at midnight. ChatPro365 is the
            attempt to close that gap properly — with an AI that quotes from your real rate card
            rather than a chatbot that deflects.
          </p>
          <p>
            <a className="text-emerald-400 hover:text-emerald-300 font-semibold"
              href="https://www.linkedin.com/company/chatpro365/" target="_blank" rel="noopener noreferrer">
              ChatPro365 on LinkedIn
            </a>
          </p>
        </div>
      </Section>

      <Section title="Relationship with WhatsApp and Meta">
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-zinc-400 leading-relaxed">
          <p className="flex gap-3">
            <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
            <span>
              ChatPro365 is an independent platform built on the official WhatsApp Business
              Platform. WhatsApp is a trademark of Meta Platforms, Inc. ChatPro365 is not endorsed
              by, sponsored by, or affiliated with Meta Platforms, Inc. Messaging rules, template
              approval and conversation charges are set by Meta and apply to every provider on the
              official API, including this one.
            </span>
          </p>
        </div>
      </Section>

      <Section title="Where we are and how to reach us">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
            <p className="flex items-center gap-3 text-zinc-300"><Mail className="w-4 h-4 text-emerald-400 shrink-0" /> <a className="hover:text-emerald-400" href="mailto:support@chatpro365.com">support@chatpro365.com</a></p>
            <p className="flex items-center gap-3 text-zinc-300"><Smartphone className="w-4 h-4 text-emerald-400 shrink-0" /> <a className="hover:text-emerald-400" href={WA_LINK} target="_blank" rel="noopener noreferrer">+91 82919 29081</a></p>
            <p className="flex items-center gap-3 text-zinc-300"><MapPin className="w-4 h-4 text-emerald-400 shrink-0" /> Bengaluru, Karnataka, India</p>
            <p className="flex items-center gap-3 text-zinc-300"><Globe className="w-4 h-4 text-emerald-400 shrink-0" /> Serving businesses across India</p>
            <p className="flex items-center gap-3 text-zinc-300">
              <Link2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <a className="hover:text-emerald-400" href="https://www.linkedin.com/company/chatpro365/" target="_blank" rel="noopener noreferrer">ChatPro365 on LinkedIn</a>
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-3">Product areas</h3>
            <ul className="text-zinc-400 text-sm space-y-2">
              <li>· AI sales agent on WhatsApp</li>
              <li>· Automated quotations with GST</li>
              <li>· Lead capture, scoring and CRM sync</li>
              <li>· Appointments and reminders</li>
              <li>· Campaigns, drip sequences and follow-up</li>
              <li>· Shared team inbox and analytics</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
              <Link to="/pricing" className="text-emerald-400 hover:text-emerald-300">Pricing →</Link>
              <Link to="/faq" className="text-emerald-400 hover:text-emerald-300">FAQ →</Link>
              <Link to="/compare" className="text-emerald-400 hover:text-emerald-300">Compare →</Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBlock
        title="See it answer as your business"
        sub="Load your own price list in the trial — that is the only way to know whether the AI quotes your products correctly."
        waText="Hi! I read the About page and want to see ChatPro365 in action."
      />
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Pricing
// ─────────────────────────────────────────────
const PLAN_DETAIL = [
  {
    name: 'Starter',
    price: '₹2,999',
    unit: '/month',
    for: 'A single business getting its WhatsApp number to sell on its own.',
    features: [
      'AI sales agent on one WhatsApp number',
      'Document training — price lists, brochures, policies, website',
      'Automated quotations with GST',
      'Lead capture, tagging and scoring',
      'Appointment booking with reminders',
      'Shared team inbox',
      'Broadcasts and drip sequences',
    ],
  },
  {
    name: 'Pro',
    price: '₹7,999',
    unit: '/month',
    highlight: true,
    for: 'Teams running real volume, with agents and a CRM behind them.',
    features: [
      'Everything in Starter',
      'Higher usage limits',
      'CRM webhooks — leads in and out',
      'Shopify and WooCommerce catalogue sync',
      'Behaviour-triggered follow-up with approval inbox',
      'AI QA supervisor and deeper analytics',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: '',
    for: 'Multiple numbers, large teams, or requirements that need a conversation.',
    features: [
      'Everything in Pro',
      'Multiple WhatsApp numbers',
      'Custom limits and onboarding',
      'Dedicated support',
    ],
  },
];

export const PricingPage = () => (
  <PageModal>
    <div className="max-w-5xl mx-auto px-6 py-16 text-zinc-300">
      <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]} />

      <PageHead
        badge="Pricing"
        icon={FileText}
        title="WhatsApp Business API pricing, in rupees"
        sub="Two published plans and a custom tier. WhatsApp conversation charges are set by Meta and billed on top — that is true of every platform on the official API, and anyone who tells you otherwise is hiding a line item."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {PLAN_DETAIL.map((p) => (
          <div key={p.name}
            className={`rounded-3xl p-7 border flex flex-col ${p.highlight ? 'bg-gradient-to-b from-emerald-900/50 to-blue-900/40 border-emerald-600/60' : 'bg-zinc-900/60 border-zinc-800'}`}>
            <h2 className="text-xl font-bold text-white mb-1">{p.name}</h2>
            <div className="mb-3">
              <span className="text-3xl font-bold text-white">{p.price}</span>
              <span className="text-zinc-400 text-sm">{p.unit}</span>
            </div>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{p.for}</p>
            <ul className="space-y-2.5 mb-7 flex-1">
              {p.features.map((f, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> {f}
                </li>
              ))}
            </ul>
            <a href={p.name === 'Enterprise' ? `${WA_LINK}?text=${encodeURIComponent('Hi! I want to discuss ChatPro365 Enterprise pricing.')}` : TRIAL_LINK}
              target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-opacity hover:opacity-90 ${p.highlight ? 'bg-white text-zinc-900' : 'bg-emerald-600 text-white'}`}>
              {p.name === 'Enterprise' ? 'Talk to us' : 'Start free trial'}
            </a>
          </div>
        ))}
      </div>

      <Section title="What Meta charges on top">
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-zinc-400 leading-relaxed space-y-3">
          <p>
            WhatsApp messaging is billed by Meta, separately from any platform subscription. Rates
            depend on the conversation category — marketing, utility, authentication or service —
            and Meta revises them from time to time. Replies you send inside the 24-hour service
            window after a customer messages you are treated differently from marketing messages
            you start.
          </p>
          <p>
            ChatPro365 does not mark these charges up in the plan price. Budget for them separately,
            and ask the same question of every vendor you compare.
          </p>
        </div>
      </Section>

      <Section title="The trial">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: '14 days, no card', desc: 'No credit card is required to start, and nothing charges automatically at the end.' },
            { title: 'Use your own price list', desc: 'Upload your real rate card and documents. A demo on someone else’s catalogue tells you nothing about yours.' },
            { title: 'Test before customers see it', desc: 'The playground shows every answer and its source, so you fix gaps in your material first.' },
          ].map((c, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-bold text-white mb-2">{c.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Common pricing questions">
        <FaqList items={faqGroups.find((g) => g.id === 'pricing').items} />
        <p className="text-zinc-500 text-sm mt-5">
          More answers on the <Link to="/faq" className="text-emerald-400 hover:text-emerald-300">FAQ page</Link>, or see how we
          compare on the <Link to="/compare" className="text-emerald-400 hover:text-emerald-300">comparison pages</Link>.
        </p>
      </Section>

      <CtaBlock
        title="Start with the trial, not a sales call"
        sub="Fourteen days on your own catalogue answers the question better than any deck."
        waText="Hi! I have a question about ChatPro365 pricing."
      />
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────
export const FaqPage = () => (
  <PageModal>
    <div className="max-w-4xl mx-auto px-6 py-16 text-zinc-300">
      <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]} />

      <PageHead
        badge="Questions & answers"
        icon={HelpCircle}
        title="ChatPro365, answered plainly"
        sub="What the product does, what it refuses to do, what WhatsApp’s own rules impose, and what it costs. If an answer here is wrong for your business, tell us and we will fix the page."
      />

      {/* On-page contents: helps readers, and gives answer engines a map. */}
      <nav className="flex flex-wrap gap-2.5 mb-12">
        {faqGroups.map((g) => (
          <a key={g.id} href={`#${g.id}`}
            className="bg-zinc-900 border border-zinc-800 hover:border-emerald-600 text-zinc-300 text-sm font-medium px-4 py-2 rounded-full transition-colors">
            {g.title}
          </a>
        ))}
      </nav>

      {faqGroups.map((g) => (
        <section key={g.id} id={g.id} className="mb-14 scroll-mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{g.title}</h2>
          <FaqList items={g.items} />
        </section>
      ))}

      <CtaBlock
        title="Still have a question?"
        sub="Ask it on WhatsApp — the same channel the product runs on."
        waText="Hi! I have a question about ChatPro365 that the FAQ did not answer."
      />
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Industries — hub and detail
// ─────────────────────────────────────────────
export const IndustriesPage = () => (
  <PageModal>
    <div className="max-w-5xl mx-auto px-6 py-16 text-zinc-300">
      <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Industries' }]} />

      <PageHead
        badge="Industries"
        icon={Users}
        title="Built for businesses that have to quote before they can sell"
        sub="The pattern is the same everywhere: an enquiry arrives on WhatsApp, the price depends on the details, and whoever answers first with a clear number gets the deal. What changes is which questions have to be asked."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
        {industries.map((ind) => {
          const Icon = ICONS[ind.icon] || Sparkles;
          return (
            <Link key={ind.slug} to={ind.path}
              className="bg-zinc-900/60 border border-zinc-800 hover:border-emerald-600 rounded-2xl p-6 transition-colors group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-blue-600 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-lg font-bold text-white mb-2">{ind.name}</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{ind.description}</p>
              <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                See how it works <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          );
        })}
      </div>

      <Section title="Not on this list?">
        <p className="text-zinc-400 leading-relaxed">
          The AI has no built-in idea of any industry — it learns your business from the catalogue,
          price list and documents you upload, so a business type we have not written a page for is
          not a business type it cannot handle. Tell us what you sell and we will show you the
          conversation it would have.
        </p>
      </Section>

      <CtaBlock
        title="See it work on your catalogue"
        waText="Hi! My business is not on your industries list — can ChatPro365 handle it?"
      />
    </div>
  </PageModal>
);

// Industry URLs are keyword paths rather than /industries/:slug, so the router
// passes the slug in as a prop; useParams stays as a fallback.
export const IndustryPage = ({ slug: slugProp }) => {
  const params = useParams();
  const ind = findIndustry(slugProp || params.slug);

  if (!ind) {
    return (
      <PageModal>
        <div className="max-w-3xl mx-auto px-6 py-24 text-center text-zinc-300">
          <h1 className="text-3xl font-bold text-white mb-4">Industry page not found</h1>
          <Link to="/industries" className="text-emerald-400 font-semibold">See all industries →</Link>
        </div>
      </PageModal>
    );
  }

  const Icon = ICONS[ind.icon] || Sparkles;
  const others = industries.filter((i) => i.slug !== ind.slug).slice(0, 3);

  return (
    <PageModal>
      <div className="max-w-4xl mx-auto px-6 py-16 text-zinc-300">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Industries', to: '/industries' }, { label: ind.name }]} />

        <PageHead badge={ind.name} icon={Icon} title={ind.h1} sub={ind.intro} />

        <Section title="What goes wrong today">
          <CardGrid items={ind.problems} />
        </Section>

        <Section title="What the AI does instead">
          <ol className="space-y-3">
            {ind.flow.map((s, i) => (
              <li key={i} className="flex gap-4 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
                <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="How that conversation looks">
          <ChatDemo messages={ind.chat} />
        </Section>

        <Section title={`What you get for ${ind.name.toLowerCase()}`}>
          <CardGrid items={ind.features} />
        </Section>

        <Section title="Questions from businesses like yours">
          <FaqList items={ind.faq} />
        </Section>

        <Section title="Other industries">
          <div className="flex flex-wrap gap-2.5">
            {others.map((o) => (
              <Link key={o.slug} to={o.path}
                className="bg-zinc-900 border border-zinc-800 hover:border-emerald-600 text-zinc-300 text-sm font-medium px-4 py-2 rounded-full transition-colors">
                {o.name}
              </Link>
            ))}
            <Link to="/industries"
              className="bg-zinc-900 border border-zinc-800 hover:border-emerald-600 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full transition-colors">
              All industries →
            </Link>
          </div>
        </Section>

        <CtaBlock
          title={`Put an AI salesperson on your ${ind.name.toLowerCase()} number`}
          sub="Load your own rate card during the trial and watch it quote."
          waText={`Hi! I run a ${ind.name.toLowerCase()} business and want to see ChatPro365.`}
        />
      </div>
    </PageModal>
  );
};

// ─────────────────────────────────────────────
// Comparisons — hub and detail
// ─────────────────────────────────────────────
export const ComparePage = () => (
  <PageModal>
    <div className="max-w-4xl mx-auto px-6 py-16 text-zinc-300">
      <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Compare' }]} />

      <PageHead
        badge="Compare"
        icon={Scale}
        title="Comparing ChatPro365 with other WhatsApp platforms"
        sub="Every vendor’s comparison page makes the vendor win, so here is our rule: we do not republish anyone else’s prices or invent their feature list — plans change weekly and a stale table would mislead you. We link to their own pages, describe what ChatPro365 does precisely enough that you can hold us to it, and give you the questions to ask both of us."
      />

      <Section title="The comparisons">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {comparisons.map((c) => (
            <Link key={c.slug} to={c.path}
              className="bg-zinc-900/60 border border-zinc-800 hover:border-emerald-600 rounded-2xl p-6 transition-colors group">
              <h2 className="text-lg font-bold text-white mb-2">ChatPro365 vs {c.competitor}</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">{c.intro.slice(0, 150)}…</p>
              <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all">
                Read the comparison <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="ChatPro365 vs a basic WhatsApp chatbot">
        <div className="overflow-x-auto rounded-2xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-900">
              <tr>
                <th className="text-left p-4 font-bold text-zinc-300">What matters</th>
                <th className="text-left p-4 font-bold text-zinc-300">Basic chatbot tools</th>
                <th className="text-left p-4 font-bold text-emerald-400">ChatPro365</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              {[
                ['Training the bot', 'Type question-answer pairs, build flows by hand', 'Upload your price list, brochures or website — indexed in minutes'],
                ['When it does not know', 'Improvises an answer', 'Says so, cites sources when it does answer, offers a human'],
                ['Price quotations', 'Manual, or not supported', 'Itemised GST quotation PDF generated in the chat'],
                ['Customer memory', 'Forgets after each chat', 'Recalls past interest and re-engages'],
                ['Languages', 'English only, or one flow per language', 'Eleven Indian languages, auto-detected including Hinglish'],
                ['Follow-up', 'Scheduled blasts to everyone', 'Triggered by behaviour, written per customer, under your rules'],
              ].map((row, i) => (
                <tr key={i} className="border-t border-zinc-800">
                  <td className="p-4 font-medium text-zinc-300">{row[0]}</td>
                  <td className="p-4">{row[1]}</td>
                  <td className="p-4 text-zinc-200">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Ask every vendor these questions">
        <p className="text-zinc-400 leading-relaxed mb-5">
          Including us. A platform that dodges any of these is telling you something.
        </p>
        <ul className="space-y-3">
          {BUYER_CHECKLIST.map((q, i) => (
            <li key={i} className="flex gap-3 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 text-zinc-300 text-sm">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> {q}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBlock
        title="Compare on your own catalogue"
        sub="Run the trial with your real price list — it settles more arguments than a feature table."
        waText="Hi! I am comparing WhatsApp platforms and want to understand ChatPro365."
      />
    </div>
  </PageModal>
);

export const ComparisonPage = ({ slug: slugProp }) => {
  const params = useParams();
  const cmp = findComparison(slugProp || params.slug);

  if (!cmp) {
    return (
      <PageModal>
        <div className="max-w-3xl mx-auto px-6 py-24 text-center text-zinc-300">
          <h1 className="text-3xl font-bold text-white mb-4">Comparison not found</h1>
          <Link to="/compare" className="text-emerald-400 font-semibold">See all comparisons →</Link>
        </div>
      </PageModal>
    );
  }

  return (
    <PageModal>
      <div className="max-w-4xl mx-auto px-6 py-16 text-zinc-300">
        <Crumbs trail={[{ label: 'Home', to: '/' }, { label: 'Compare', to: '/compare' }, { label: cmp.competitor }]} />

        <PageHead badge="Comparison" icon={Scale} title={cmp.h1} sub={cmp.intro} />

        <Section title="On pricing: read it at the source">
          <p className="text-zinc-400 leading-relaxed mb-5">
            We do not publish a rival’s price table here. Plans change every few weeks, and a
            monthly figure on its own compares nothing when one platform includes the AI agent and
            another sells it as an add-on. Open both pages and compare what sits inside the plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <a href={cmp.pricingLink.url} target="_blank" rel="noopener noreferrer nofollow"
              className="bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-6 transition-colors">
              <h3 className="font-bold text-white mb-1">{cmp.competitor} pricing</h3>
              <span className="text-emerald-500 text-sm">{cmp.pricingLink.label} →</span>
            </a>
            <Link to="/pricing"
              className="bg-gradient-to-b from-emerald-900/50 to-blue-900/40 border border-emerald-600/60 hover:border-emerald-400 rounded-2xl p-6 transition-colors">
              <h3 className="font-bold text-white mb-1">ChatPro365 pricing</h3>
              <span className="text-emerald-300 text-sm">Plans, and what Meta charges on top →</span>
            </Link>
          </div>
          <ul className="space-y-3">
            {cmp.watchFor.map((w, i) => (
              <li key={i} className="flex gap-3 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 text-zinc-300 text-sm">
                <Scale className="w-5 h-5 text-emerald-400 shrink-0" /> {w}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="What ChatPro365 is built to do">
          <p className="text-zinc-400 leading-relaxed mb-5">
            We are not going to publish a feature table for someone else’s product — capabilities
            change weekly and a table we cannot verify would mislead you. Here is our side, stated
            precisely enough that you can hold us to it.
          </p>
          <CardGrid items={cmp.approach} />
        </Section>

        <Section title="Questions to ask both of us">
          <ul className="space-y-3">
            {cmp.checklist.map((q, i) => (
              <li key={i} className="flex gap-3 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 text-zinc-300 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" /> {q}
              </li>
            ))}
          </ul>
        </Section>

        <Section title={`ChatPro365 vs ${cmp.competitor}: common questions`}>
          <FaqList items={cmp.faq} />
        </Section>

        <p className="text-zinc-600 text-xs leading-relaxed mb-12">
          {cmp.competitor} is a trademark of its respective owner and is not affiliated with
          ChatPro365. This page describes our own product and points you to {cmp.competitor}’s
          official pages for theirs; we do not speak for them, and their plans and features change.
          If anything here is inaccurate, write to support@chatpro365.com and we will correct it.
        </p>

        <CtaBlock
          title="Try both, on your own price list"
          sub="Fourteen days, no card. Load your real catalogue and see which one quotes it correctly."
          waText={`Hi! I am comparing ChatPro365 with ${cmp.competitor}.`}
        />
      </div>
    </PageModal>
  );
};
