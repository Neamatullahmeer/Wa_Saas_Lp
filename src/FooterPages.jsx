import { Link, useParams } from 'react-router-dom';
import { clearConsent } from './lib/consent';
import { posts, findPost, relatedPosts } from './content/blog';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, FileText, Globe, Cookie, HeadphonesIcon, Code2, BookOpen, Users, CheckCircle, ArrowRight, MessageSquare, Zap, RefreshCw, AlertTriangle, Mail, Phone, MapPin, Clock, Building2 } from 'lucide-react';

// ─────────────────────────────────────────────
// Shared Page Modal Wrapper
// ─────────────────────────────────────────────
// These pages started life as modals opened from the landing page, so the
// wrapper took an onClose prop and never rendered it. Once they became real
// URLs that was a dead end in both directions: a visitor arriving from search
// had no way back to the site, and a crawler had no link to follow onward.
// The header and footer below fix both — real <a> elements via <Link>, not
// onClick handlers, so they are crawlable.
const LEGAL_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/refund', label: 'Refund' },
  { to: '/acceptable-use', label: 'Acceptable Use' },
  { to: '/gdpr', label: 'GDPR' },
  { to: '/cookie-policy', label: 'Cookies' },
];

// The real pages, linked from every sub-page. Deep pages that nothing links to
// are the ones crawlers reach last and AI assistants never see at all.
const PRODUCT_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/industries', label: 'Industries' },
  { to: '/compare', label: 'Compare' },
  { to: '/blog', label: 'Blog' },
  { to: '/help', label: 'Help Center' },
];

export const PageModal = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#09090b] relative z-10 flex flex-col">
      <header className="fixed top-0 inset-x-0 z-20 bg-[#09090b]/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white font-bold tracking-tight hover:text-emerald-400 transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> ChatPro365
          </Link>
        </div>
      </header>

      <div className="flex-1 pt-24 pb-12">
        {children}
      </div>

      <footer className="border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400 font-medium">
            {PRODUCT_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-emerald-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500 mt-5">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-emerald-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          {/* No dynamic year: the page is rendered at build time and hydrated
              whenever the visitor arrives, so a computed year would mismatch
              across a new year and break hydration. */}
          <p className="text-zinc-600 text-xs mt-6">© ChatPro365. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// ─────────────────────────────────────────────
// Privacy Policy Page
// ─────────────────────────────────────────────
export const PrivacyPolicyPage = ({ isOpen, onClose }) => (
  <PageModal isOpen={isOpen} onClose={onClose}>
    <div className="max-w-4xl mx-auto px-6 py-20 text-zinc-300">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm font-bold mb-6">
          <Shield className="w-4 h-4" /> Legal Document
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-zinc-400 text-lg font-medium">Last updated: June 19, 2026 · Effective: June 19, 2026</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="prose prose-invert max-w-none space-y-10">

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
            <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">ChatPro365 ("we", "our", "us") collects information to provide better services to all our users. We collect the following types of information:</p>
            <ul className="space-y-3">
              {[
                { title: 'Account Information', desc: 'Name, email address, phone number, company name, and billing details when you register or subscribe.' },
                { title: 'WhatsApp Business Data', desc: 'Messages, contacts, broadcast lists, and chat histories processed through our platform on behalf of your business.' },
                { title: 'Usage Data', desc: 'Information about how you use our platform including features used, session duration, clicks, and navigation patterns.' },
                { title: 'Device & Technical Data', desc: 'IP address, browser type, operating system, device identifiers, and cookies.' },
                { title: 'Payment Information', desc: 'Billing details are securely processed via our payment partners (Razorpay / Stripe). We do not store full card numbers.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div><span className="font-semibold text-zinc-200">{item.title}: </span><span className="text-zinc-400">{item.desc}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
            <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
            {[
              'To provide, operate, and maintain the ChatPro365 platform and services.',
              'To process your transactions and send billing-related communications.',
              'To send service updates, security alerts, and administrative messages.',
              'To personalize your experience and improve our platform features.',
              'To analyze usage trends and optimize platform performance.',
              'To comply with legal obligations and enforce our Terms of Service.',
              'To detect, prevent, and address fraud and technical issues.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
                <p className="text-zinc-400">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
            <h2 className="text-2xl font-bold text-white">Data Sharing & Third Parties</h2>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 mb-4 leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share data with:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'WhatsApp / Meta', desc: 'As required by the Official WhatsApp Business API integration.' },
                { name: 'Payment Processors', desc: 'Razorpay / Stripe for secure billing transactions.' },
                { name: 'Cloud Infrastructure', desc: 'AWS / Google Cloud for secure data hosting and storage.' },
                { name: 'Meta (Ad Measurement)', desc: 'Only when you arrive from one of our ads: that you submitted the form, created an account, or opened a WhatsApp chat straight from an ad. Email and phone are sent as an irreversible hash, never in readable form.' },
              ].map((p, i) => (
                <div key={i} className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700">
                  <p className="font-semibold text-zinc-200 mb-1">{p.name}</p>
                  <p className="text-zinc-400 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">4</div>
            <h2 className="text-2xl font-bold text-white">Data Security & Retention</h2>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 encryption in transit, regular security audits, and role-based access controls. Chat data is retained for 90 days by default; account data is retained for the duration of your subscription plus 30 days post-cancellation.</p>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">5</div>
            <h2 className="text-2xl font-bold text-white">Your Rights</h2>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 mb-4">Depending on your jurisdiction, you have the right to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Access your personal data', 'Correct inaccurate data', 'Request data deletion', 'Object to data processing', 'Data portability', 'Withdraw consent at any time'].map((right, i) => (
                <div key={i} className="flex items-center gap-2 bg-zinc-800/50 rounded-xl p-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-zinc-300 text-sm font-medium">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-zinc-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">6</div>
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 mb-4">For any privacy-related questions or requests, contact our Data Protection Officer:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:privacy@chatpro365.com" className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl font-semibold transition-colors">
                📧 privacy@chatpro365.com
              </a>
              <a href="https://wa.me/917457863240?text=Hi! I have a privacy question about ChatPro365" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 rounded-xl font-semibold transition-colors">
                💬 WhatsApp Support
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Terms of Service Page
// ─────────────────────────────────────────────
export const TermsOfServicePage = ({ isOpen, onClose }) => (
  <PageModal isOpen={isOpen} onClose={onClose}>
    <div className="max-w-4xl mx-auto px-6 py-20 text-zinc-300">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-bold mb-6">
          <FileText className="w-4 h-4" /> Legal Agreement
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-zinc-400 text-lg font-medium">Last updated: June 19, 2026 · Effective: June 19, 2026</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="space-y-8">

        <div className="bg-blue-900/20 border border-blue-700/40 rounded-2xl p-6">
          <p className="text-blue-200 font-normal leading-relaxed">By accessing or using ChatPro365 ("Service"), you agree to be bound by these Terms of Service. Please read them carefully. If you disagree, do not use the Service.</p>
        </div>

        {[
          {
            num: '1', color: 'emerald', title: 'Acceptance of Terms',
            content: 'By creating an account and using ChatPro365, you represent that you are at least 18 years old, have the legal authority to enter into this agreement, and agree to comply with these Terms and all applicable laws and regulations.'
          },
          {
            num: '2', color: 'blue', title: 'Use of Services',
            content: 'ChatPro365 grants you a non-exclusive, non-transferable, revocable license to use the platform for your legitimate business communications via the WhatsApp Business API. You agree not to misuse the platform including sending spam, illegal content, unsolicited bulk messages beyond Meta\'s policies, or content that violates WhatsApp\'s Terms of Service.',
            bullets: [
              'You must comply with all WhatsApp Business API policies and guidelines',
              'You are responsible for all content sent through the platform',
              'Bulk messaging must only target opted-in contacts',
              'You must not use the Service for illegal, fraudulent, or harmful activities',
              'You must not attempt to reverse-engineer, hack, or disrupt the platform',
            ]
          },
          {
            num: '3', color: 'emerald', title: 'Subscription & Billing',
            content: 'Our Service operates on subscription plans billed monthly or annually. Fees are due in advance. Failure to pay may result in service suspension. Refunds are handled per our Refund Policy. Prices may change with 30 days advance notice.'
          },
          {
            num: '4', color: 'orange', title: 'Intellectual Property',
            content: 'All platform code, design, branding, trademarks, and proprietary technology belong to ChatPro365. Your data remains your property. We do not claim ownership over your business content or customer data.'
          },
          {
            num: '5', color: 'blue', title: 'Service Availability & SLA',
            content: 'We target 99.9% platform uptime. Scheduled maintenance will be announced in advance. We are not liable for downtime caused by third parties including Meta/WhatsApp API outages. Enterprise plans include dedicated SLA agreements.'
          },
          {
            num: '6', color: 'red', title: 'Termination',
            content: 'You may cancel your subscription at any time. We may terminate accounts that violate these Terms, WhatsApp\'s policies, or applicable law. Upon termination, your data will be available for export for 30 days before deletion.'
          },
          {
            num: '7', color: 'zinc', title: 'Limitation of Liability',
            content: 'To the maximum extent permitted by law, ChatPro365 shall not be liable for indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed the amounts paid by you in the 12 months preceding the claim.'
          },
          {
            num: '8', color: 'emerald', title: 'Governing Law',
            content: 'These Terms shall be governed by the laws of India. Any disputes shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Mumbai, India.'
          },
        ].map((sec, i) => (
          <section key={i}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-8 h-8 bg-${sec.color}-600 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>{sec.num}</div>
              <h2 className="text-2xl font-bold text-white">{sec.title}</h2>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400 leading-relaxed mb-4">{sec.content}</p>
              {sec.bullets && (
                <ul className="space-y-2">
                  {sec.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      <span className="text-zinc-400 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center">
          <p className="text-zinc-400 mb-4">Questions about our Terms? Contact our legal team:</p>
          <a href="mailto:legal@chatpro365.com" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            📧 legal@chatpro365.com
          </a>
        </div>

      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// GDPR Compliance Page
// ─────────────────────────────────────────────
export const GDPRPage = ({ isOpen, onClose }) => (
  <PageModal isOpen={isOpen} onClose={onClose}>
    <div className="max-w-4xl mx-auto px-6 py-20 text-zinc-300">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm font-bold mb-6">
          <Globe className="w-4 h-4" /> EU Regulation 2016/679
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">GDPR Compliance</h1>
        <p className="text-zinc-400 text-lg font-medium">Our commitment to European data protection standards</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      {/* GDPR Commitment Banner */}
      <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border border-emerald-700/40 rounded-2xl p-8 mb-10 text-center">
        <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">ChatPro365 is GDPR Compliant</h2>
        <p className="text-emerald-200 max-w-2xl mx-auto leading-relaxed">We are fully committed to protecting the privacy and rights of EU residents under the General Data Protection Regulation (GDPR). Our platform is designed with privacy by default and privacy by design principles.</p>
      </div>

      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
            Lawful Basis for Processing
          </h2>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 mb-4">We process personal data only when we have a lawful basis, which includes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { basis: 'Contract Performance', desc: 'Processing necessary to deliver our services as agreed.' },
                { basis: 'Legitimate Interests', desc: 'Platform security, fraud prevention, and service improvement.' },
                { basis: 'Legal Obligation', desc: 'Compliance with applicable laws and regulations.' },
                { basis: 'Consent', desc: 'For marketing communications and non-essential cookies.' },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                  <p className="font-semibold text-emerald-300 mb-1">{item.basis}</p>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
            Your GDPR Rights
          </h2>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { right: 'Right to Access (Art. 15)', desc: 'Request a copy of all personal data we hold about you.' },
                { right: 'Right to Rectification (Art. 16)', desc: 'Correct inaccurate or incomplete personal data.' },
                { right: 'Right to Erasure (Art. 17)', desc: '"Right to be forgotten" — request deletion of your data.' },
                { right: 'Right to Portability (Art. 20)', desc: 'Receive your data in a structured, machine-readable format.' },
                { right: 'Right to Restrict (Art. 18)', desc: 'Limit how we process your personal data.' },
                { right: 'Right to Object (Art. 21)', desc: 'Object to processing based on legitimate interests.' },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
                  <p className="font-semibold text-zinc-200 text-sm mb-1">{item.right}</p>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
            Data Transfers & Subprocessors
          </h2>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 mb-4">When data is transferred outside the EU/EEA, we ensure adequate protection via Standard Contractual Clauses (SCCs) and adequacy decisions. Key subprocessors include:</p>
            <div className="space-y-3">
              {[
                { name: 'Meta Platforms (WhatsApp Business API)', region: 'USA', safeguard: 'SCCs + DPA' },
                { name: 'Amazon Web Services (AWS)', region: 'EU-West / Mumbai', safeguard: 'SCCs + DPA' },
                { name: 'Razorpay / Stripe', region: 'India / USA', safeguard: 'SCCs + DPA' },
              ].map((sp, i) => (
                <div key={i} className="flex items-center justify-between bg-zinc-800/50 rounded-xl p-4">
                  <div>
                    <p className="font-semibold text-zinc-200">{sp.name}</p>
                    <p className="text-zinc-400 text-sm">Region: {sp.region}</p>
                  </div>
                  <span className="bg-emerald-900/50 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-700/50">{sp.safeguard}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">4</div>
            Data Breach Response
          </h2>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 leading-relaxed">In the event of a personal data breach, we will notify the relevant supervisory authority within 72 hours as required by GDPR Article 33. Affected users will be notified without undue delay when the breach poses a high risk to their rights and freedoms.</p>
          </div>
        </section>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center">
          <p className="text-zinc-300 font-semibold mb-2">Data Protection Officer (DPO)</p>
          <p className="text-zinc-400 mb-4">To exercise your GDPR rights or for data protection inquiries:</p>
          <a href="mailto:dpo@chatpro365.com" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            📧 dpo@chatpro365.com
          </a>
        </div>

      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Cookie Policy Page
// ─────────────────────────────────────────────
export const CookiePolicyPage = ({ isOpen, onClose }) => (
  <PageModal isOpen={isOpen} onClose={onClose}>
    <div className="max-w-4xl mx-auto px-6 py-20 text-zinc-300">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-900/40 border border-amber-700/50 text-amber-300 text-sm font-bold mb-6">
          <Cookie className="w-4 h-4" /> Cookie Information
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
        <p className="text-zinc-400 text-lg font-medium">Last updated: August 25, 2026</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </div>

      <div className="space-y-8">

        <div className="bg-amber-900/20 border border-amber-700/40 rounded-2xl p-6">
          <p className="text-amber-200 leading-relaxed">This policy explains what ChatPro365 stores on your device when you visit chatpro365.com or use the platform at app.chatpro365.com. The short version: we run exactly one third-party tool, the Meta Pixel, so that we can tell which of our ads actually work — and it only loads if you agree to it on the banner. There is no analytics suite, no session recording, and nothing is sold or handed to data brokers. Everything stored on your device is listed below by name.</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Cookies and Similar Technologies</h2>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4">
            <p className="text-zinc-400 leading-relaxed">Cookies are small text files a website stores on your device and sends back to its server with every request. ChatPro365 itself sets none — the only cookies here come from the Meta Pixel, and they are named below. Everything else we keep uses two browser storage mechanisms that stay on your device and are never transmitted automatically:</p>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><strong className="text-zinc-200">localStorage</strong> — persists until you clear it. Used by the platform to keep you signed in and to remember interface preferences.</li>
              <li><strong className="text-zinc-200">sessionStorage</strong> — cleared automatically when you close the tab. Used on the marketing site to remember which campaign brought you here.</li>
            </ul>
            <p className="text-zinc-400 leading-relaxed text-sm">Both are covered by this policy because they serve the same purpose as cookies from your point of view, even though the technology differs.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What We Store</h2>
          <div className="space-y-4">
            {[
              {
                type: 'Sign-in and Session',
                color: 'emerald',
                required: true,
                desc: 'Keeps you logged in to the platform at app.chatpro365.com. Stored in localStorage; clearing it signs you out. Not present on this marketing site.',
                examples: ['token — your signed-in session', 'user — your name, role and business', 'superAdminToken — staff console session', 'chatpro_token — legacy session key']
              },
              {
                type: 'Interface Preferences',
                color: 'blue',
                required: false,
                desc: 'Remembers small choices so the dashboard looks the same next time. Nothing here identifies you to anyone else.',
                examples: ['sidebar-collapsed — sidebar open or closed', 'businessName — shown in the header']
              },
              {
                type: 'Campaign Attribution',
                color: 'orange',
                required: false,
                desc: 'On this marketing site only. When you arrive from an ad or a tagged link, the campaign details in that link are held for the length of your visit so that a signup can be credited to the right campaign. Stored in sessionStorage, which your browser clears the moment you close the tab.',
                examples: ['cp_attribution — campaign, source and search term from your link', 'Cleared automatically when the tab closes', 'Sent only to our own servers', 'Never used to build a profile or follow you across other sites']
              },
              {
                type: 'Advertising Measurement (Meta Pixel)',
                color: 'orange',
                required: false,
                desc: 'We advertise on Facebook and Instagram. The Meta Pixel is how we tell which of those ads brought someone who actually signed up, rather than guessing. It reports page views plus two moments: submitting the trial form, and creating an account. Nothing here loads or is sent unless you accept the banner — declining stops both the browser pixel and the copy our own server would otherwise send.',
                examples: ['_fbp — a random id for your browser, set by Meta', '_fbc — written when you arrive from a Meta ad', 'The same two events are also sent from our own server, so ad blockers do not distort our numbers', 'Your email and phone go to Meta only as an irreversible hash — never in readable form', 'We do not upload contact lists or build advertising audiences from your data', 'cp_consent — your answer to the banner, remembered for six months']
              },
            ].map((category, i) => (
              <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-lg font-bold text-${category.color}-300`}>{category.type}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${category.required ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-700/50' : 'bg-zinc-800 text-zinc-400 border border-zinc-700'}`}>
                    {category.required ? 'Always Active' : 'Optional'}
                  </span>
                </div>
                <p className="text-zinc-400 mb-4 text-sm">{category.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {category.examples.map((ex, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-zinc-400">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${category.color}-400 shrink-0`} />
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What We Do Not Use</h2>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 mb-4 leading-relaxed">As of the date at the top of this page, none of the following run on chatpro365.com or app.chatpro365.com:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'Third-party analytics suites (Google Analytics and similar)',
                'Session recording, heatmaps or screen capture',
                'Retargeting audiences built from your data',
                'Contact lists uploaded to any ad platform',
                'Data brokers or audience-sharing networks',
                'Selling or renting your information to anyone',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-zinc-500 text-sm mt-5 leading-relaxed">The Meta Pixel described above is the only third-party tool on this site. If we ever add another, this page will name it here before it goes live.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Managing What Is Stored</h2>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 mb-4">You stay in control of all of it:</p>
            <div className="space-y-3">
              {[
                { method: 'Change Your Answer', desc: 'Use the button below to bring the banner back and choose again. Declining after having accepted stops any further reporting straight away.' },
                { method: 'Clear Site Data', desc: 'In your browser settings, clearing site data for chatpro365.com removes everything listed above. On the platform this signs you out; nothing else is lost.' },
                { method: 'Close the Tab', desc: 'Campaign attribution lives in sessionStorage, so closing the tab discards it automatically. You do not have to do anything.' },
                { method: 'Sign Out', desc: 'Signing out of the platform removes the session keys straight away.' },
                { method: 'Private Browsing', desc: 'The site works in private or incognito windows, and everything stored is discarded when you close the window. Blocking storage entirely only affects the sign-in session.' },
                { method: 'Opt Out of Ad Tracking', desc: 'Your Meta account settings control how Meta uses activity from sites like ours (Settings → Ads → Ad settings). Browser tracking protection and most content blockers stop the pixel from loading here at all, and the site works exactly the same without it.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-zinc-800/50 rounded-xl p-4">
                  <div className="w-8 h-8 bg-amber-600/30 rounded-lg flex items-center justify-center shrink-0">
                    <Cookie className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-200">{item.method}</p>
                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center">
          <p className="text-zinc-400 mb-4">Want to change your answer about advertising measurement?</p>
          <button
            onClick={() => { clearConsent(); window.location.reload(); }}
            className="inline-flex items-center gap-2 border border-zinc-700 hover:bg-zinc-800 text-zinc-200 px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            <Cookie className="w-4 h-4" /> Show the banner again
          </button>
        </div>

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center">
          <p className="text-zinc-400 mb-4">Questions about our cookie practices?</p>
          <a href="mailto:privacy@chatpro365.com" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            📧 privacy@chatpro365.com
          </a>
        </div>

      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Help Center Page
// ─────────────────────────────────────────────
export const HelpCenterPage = ({ isOpen, onClose }) => (
  <PageModal isOpen={isOpen} onClose={onClose}>
    <div className="max-w-5xl mx-auto px-6 py-20 text-zinc-300">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-sm font-bold mb-6">
          <HeadphonesIcon className="w-4 h-4" /> 24/7 Support
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Help Center</h1>
        <p className="text-zinc-400 text-lg font-medium">Get answers, tutorials, and direct support — we're here for you</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      {/* Quick Contact Channels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {[
          {
            icon: MessageSquare, color: 'from-green-600 to-emerald-600',
            title: 'WhatsApp Support', desc: 'Fastest response — usually within 5 minutes',
            cta: 'Chat Now', href: 'https://wa.me/917457863240?text=Hi! I need help with ChatPro365',
            badge: '🟢 Online Now'
          },
          {
            icon: HeadphonesIcon, color: 'from-emerald-600 to-blue-600',
            title: 'Email Support', desc: 'Detailed queries — response within 4 hours',
            cta: 'Send Email', href: 'mailto:support@chatpro365.com',
            badge: '📧 24/7 Active'
          },
          {
            icon: Zap, color: 'from-orange-600 to-amber-600',
            title: 'Book a Demo Call', desc: 'Personalized onboarding with our experts',
            cta: 'Schedule Now', href: null, onClick: true,
            badge: '🎯 Free Call'
          },
        ].map((channel, i) => (
          <div key={i} className="bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-6 transition-all">
            <div className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
              <channel.icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold text-zinc-500 mb-2 block">{channel.badge}</span>
            <h3 className="text-lg font-bold text-white mb-2">{channel.title}</h3>
            <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{channel.desc}</p>
            {channel.href ? (
              <a href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${channel.color} text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90`}>
                {channel.cta} <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <button onClick={onClose} className={`inline-flex items-center gap-2 bg-gradient-to-r ${channel.color} text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90`}>
                {channel.cta} <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* FAQ Topics */}
      <h2 className="text-2xl font-bold text-white mb-6">Popular Help Topics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { category: '🚀 Getting Started', topics: ['How to connect WhatsApp Business API', 'Creating your first chatbot', 'Setting up your team members', 'Importing existing contacts'] },
          { category: '📢 Broadcasting', topics: ['Sending bulk messages safely', 'Creating campaign templates', 'Scheduling broadcasts', 'Tracking message delivery rates'] },
          { category: '🤖 AI & Automation', topics: ['Setting up AI bot categories', 'Configuring auto-reply rules', 'Drip campaign setup', 'AI Quality Supervisor setup'] },
          { category: '👥 Team Management', topics: ['Adding and managing agents', 'Setting up auto assignment', 'SLA configuration', 'Agent performance reports'] },
          { category: '💳 Billing & Plans', topics: ['Upgrading your subscription', 'Payment methods accepted', 'Invoice and billing history', 'Cancellation and refunds'] },
          { category: '🔗 Integrations', topics: ['Webhook setup guide', 'CRM integration (HubSpot, Zoho)', 'Shopify integration', 'Zapier / Make.com automation'] },
        ].map((section, i) => (
          <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-bold text-white mb-3">{section.category}</h3>
            <ul className="space-y-2">
              {section.topics.map((topic, j) => (
                <li key={j} className="flex items-center gap-2 text-zinc-400 text-sm hover:text-emerald-300 cursor-pointer transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 text-zinc-600" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-emerald-900/40 to-blue-900/40 border border-emerald-700/40 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Can't find what you're looking for?</h3>
        <p className="text-zinc-400 mb-6">Our support team is available 24/7 via WhatsApp and responds within minutes.</p>
        <a href="https://wa.me/917457863240?text=Hi! I need help with ChatPro365" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg">
          <MessageSquare className="w-5 h-5" /> Get Instant Help on WhatsApp
        </a>
      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// API Documentation Page
// ─────────────────────────────────────────────
export const APIDocsPage = ({ isOpen, onClose }) => (
  <PageModal isOpen={isOpen} onClose={onClose}>
    <div className="max-w-5xl mx-auto px-6 py-20 text-zinc-300">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm font-bold mb-6">
          <Code2 className="w-4 h-4" /> Developer Resources
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">API Documentation</h1>
        <p className="text-zinc-400 text-lg font-medium">Integrate ChatPro365 with your existing systems using our powerful REST API</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      {/* API Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: 'REST', label: 'API Type' },
          { value: 'JSON', label: 'Data Format' },
          { value: 'TLS 1.3', label: 'Encryption' },
          { value: '99.9%', label: 'Uptime SLA' },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-emerald-300">{stat.value}</div>
            <div className="text-zinc-500 text-sm font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Endpoints Overview */}
      <h2 className="text-2xl font-bold text-white mb-6">Available API Endpoints</h2>
      <div className="space-y-4 mb-12">
        {[
          { method: 'POST', endpoint: '/api/v1/messages/send', desc: 'Send a WhatsApp message to a contact', auth: 'Bearer Token' },
          { method: 'POST', endpoint: '/api/v1/broadcasts/create', desc: 'Create and schedule a bulk broadcast campaign', auth: 'Bearer Token' },
          { method: 'GET', endpoint: '/api/v1/contacts', desc: 'List all contacts with pagination and filters', auth: 'Bearer Token' },
          { method: 'POST', endpoint: '/api/v1/contacts/import', desc: 'Import contacts via CSV or JSON', auth: 'Bearer Token' },
          { method: 'GET', endpoint: '/api/v1/chats/{id}/messages', desc: 'Retrieve message history for a specific chat', auth: 'Bearer Token' },
          { method: 'POST', endpoint: '/api/v1/webhooks/configure', desc: 'Set up webhook endpoints to receive real-time events', auth: 'Bearer Token' },
          { method: 'GET', endpoint: '/api/v1/analytics/overview', desc: 'Get dashboard analytics and performance metrics', auth: 'Bearer Token' },
          { method: 'GET', endpoint: '/api/v1/leads', desc: 'List all leads with scoring and tags', auth: 'Bearer Token' },
        ].map((ep, i) => (
          <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex items-start gap-4">
            <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-lg mt-0.5 ${ep.method === 'GET' ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50' : 'bg-blue-900/60 text-blue-300 border border-blue-700/50'}`}>
              {ep.method}
            </span>
            <div className="flex-1 min-w-0">
              <code className="text-emerald-300 font-mono text-sm">{ep.endpoint}</code>
              <p className="text-zinc-400 text-sm mt-1">{ep.desc}</p>
            </div>
            <span className="shrink-0 text-xs font-bold text-zinc-500 bg-zinc-800 px-2 py-1 rounded border border-zinc-700">{ep.auth}</span>
          </div>
        ))}
      </div>

      {/* Code Sample */}
      <h2 className="text-2xl font-bold text-white mb-4">Quick Start Example</h2>
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mb-8 overflow-x-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-zinc-500 text-sm ml-2">send-message.js</span>
        </div>
        <pre className="text-sm font-mono">
          <code>
            <span className="text-zinc-500">{'// Send a WhatsApp message via ChatPro365 API\n'}</span>
            <span className="text-blue-300">{'const '}</span>
            <span className="text-white">{'response = '}</span>
            <span className="text-yellow-300">{'await '}</span>
            <span className="text-white">{'fetch('}</span>
            <span className="text-emerald-300">{"'https://api.chatpro365.com/api/v1/messages/send'"}</span>
            <span className="text-white">{', {\n'}</span>
            <span className="text-white">{'  method: '}</span>
            <span className="text-emerald-300">{"'POST'"}</span>
            <span className="text-white">{',\n'}</span>
            <span className="text-white">{'  headers: {\n'}</span>
            <span className="text-white">{'    '}</span>
            <span className="text-emerald-300">{"'Authorization'"}</span>
            <span className="text-white">{': '}</span>
            <span className="text-emerald-300">{"'Bearer YOUR_API_KEY'"}</span>
            <span className="text-white">{',\n'}</span>
            <span className="text-white">{'    '}</span>
            <span className="text-emerald-300">{"'Content-Type'"}</span>
            <span className="text-white">{': '}</span>
            <span className="text-emerald-300">{"'application/json'\n"}</span>
            <span className="text-white">{'  },\n'}</span>
            <span className="text-white">{'  body: JSON.stringify({\n'}</span>
            <span className="text-white">{'    phone: '}</span>
            <span className="text-emerald-300">{"'+917457863240'"}</span>
            <span className="text-white">{',\n'}</span>
            <span className="text-white">{'    message: '}</span>
            <span className="text-emerald-300">{"'Hello from ChatPro365 API! 🚀'\n"}</span>
            <span className="text-white">{'  })\n'}</span>
            <span className="text-white">{'});\n\n'}</span>
            <span className="text-blue-300">{'const '}</span>
            <span className="text-white">{'data = '}</span>
            <span className="text-yellow-300">{'await '}</span>
            <span className="text-white">{'response.json();\n'}</span>
            <span className="text-white">{'console.log(data); '}</span>
            <span className="text-zinc-500">{'// { success: true, messageId: "msg_xxx" }'}</span>
          </code>
        </pre>
      </div>

      <div className="bg-gradient-to-r from-emerald-900/40 to-blue-900/40 border border-emerald-700/40 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Need API Access or Custom Integration?</h3>
        <p className="text-zinc-400 mb-6">Contact our developer team for API keys, sandbox access, and integration support.</p>
        <a href="mailto:dev@chatpro365.com" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg">
          <Code2 className="w-5 h-5" /> Contact Developer Team
        </a>
      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Blog Page
// ─────────────────────────────────────────────
export const BlogPage = ({ isOpen, onClose }) => {
  if (!posts.length) return null;

  return (
    <PageModal isOpen={isOpen} onClose={onClose}>
      <div className="max-w-6xl mx-auto px-6 py-20 text-zinc-300">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-900/40 border border-orange-700/50 text-orange-300 text-sm font-bold mb-6">
            <BookOpen className="w-4 h-4" /> Expert Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ChatPro365 Blog</h1>
          <p className="text-zinc-400 text-lg font-medium">WhatsApp marketing strategies, automation guides, and growth playbooks</p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        </div>

        {/* Featured Post — the whole card is one link, so crawlers follow it */}
        <Link to={`/blog/${posts[0].slug}`} className="block bg-gradient-to-br from-emerald-900/50 to-blue-900/50 border border-emerald-700/40 hover:border-emerald-500/70 rounded-3xl p-8 mb-10 transition-colors">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/50 mb-4">⭐ Featured Post</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
            {posts[0].emoji} {posts[0].title}
          </h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">{posts[0].description}</p>
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-sm">{posts[0].date}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500 text-sm">{posts[0].readTime}</span>
            <span className="ml-auto inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              Read article <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-6 transition-all hover:-translate-y-1 duration-300">
              <div className={`inline-flex items-center gap-1 text-xs font-bold text-white bg-gradient-to-r ${post.color} px-3 py-1 rounded-full mb-4`}>
                {post.category}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {post.emoji} {post.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.description}</p>
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-4">Want personalized growth strategies for your business?</p>
          <a href="https://wa.me/918291929081?text=Hi! I want personalized WhatsApp growth strategies for my business" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg">
            <MessageSquare className="w-5 h-5" /> Chat with Our Growth Expert
          </a>
        </div>
      </div>
    </PageModal>
  );
};

// ─────────────────────────────────────────────
// Blog Post Page
// ─────────────────────────────────────────────
// One of these is prerendered per markdown file in src/content/blog/. The body
// HTML is produced at build time by the blogMarkdown plugin in vite.config.js —
// it is our own content, not user input, so injecting it is safe here.
export const BlogPostPage = () => {
  const { slug } = useParams();
  const post = findPost(slug);

  // Unknown slugs are served the static 404 on a real page load; this only
  // shows if someone reaches a dead link through client-side navigation.
  if (!post) {
    return (
      <PageModal>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Post not found</h1>
          <p className="text-zinc-400 mb-8">This article may have been moved or renamed.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold transition-colors">
            Back to the blog
          </Link>
        </div>
      </PageModal>
    );
  }

  const related = relatedPosts(slug);

  return (
    <PageModal>
      <article className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
        </nav>

        <div className={`inline-flex items-center gap-1 text-xs font-bold text-white bg-gradient-to-r ${post.color || 'from-emerald-600 to-blue-600'} px-3 py-1 rounded-full mb-5`}>
          {post.category}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
          {post.emoji} {post.title}
        </h1>

        <div className="flex items-center gap-3 text-sm text-zinc-500 mb-10 pb-10 border-b border-zinc-800">
          <span>{post.date}</span>
          <span className="text-zinc-700">·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />

        <div className="mt-14 bg-gradient-to-r from-emerald-900/40 to-blue-900/40 border border-emerald-700/40 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Want this running on your WhatsApp?</h2>
          <p className="text-zinc-400 mb-6">See what ChatPro365 does, or ask us anything about your setup.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold transition-colors">
              See the platform
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-zinc-700 hover:bg-zinc-900 text-zinc-300 px-6 py-3 rounded-full font-semibold transition-colors">
              Contact us
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-bold text-white mb-6">Keep reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="block bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-5 transition-colors">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">{r.category}</p>
                  <h3 className="font-bold text-white leading-snug mb-2">{r.title}</h3>
                  <p className="text-zinc-500 text-sm">{r.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </PageModal>
  );
};

// ─────────────────────────────────────────────
// Community Page
// ─────────────────────────────────────────────
export const CommunityPage = ({ isOpen, onClose }) => (
  <PageModal isOpen={isOpen} onClose={onClose}>
    <div className="max-w-5xl mx-auto px-6 py-20 text-zinc-300">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm font-bold mb-6">
          <Users className="w-4 h-4" /> WhatsApp Group
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ChatPro365 Community</h1>
        <p className="text-zinc-400 text-lg font-medium">A WhatsApp group for owners setting up an AI sales agent on their own number</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      {/* Community CTA */}
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-700/40 rounded-3xl p-10 text-center mb-12">
        <div className="text-6xl mb-6">💬</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join the ChatPro365 WhatsApp Group</h2>
        <p className="text-green-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Ask setup questions, see what other businesses are automating, and hear about new features before they ship. Message us and we will add you.
        </p>
        <a href="https://wa.me/917457863240?text=Hi! I want to join the ChatPro365 community group" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-full font-bold text-xl transition-colors shadow-2xl">
          <MessageSquare className="w-6 h-6" /> Join the Group →
        </a>
        <p className="text-green-400 text-sm mt-4">🔒 Free to join · No spam</p>
      </div>

      {/* What the group is for */}
      <h2 className="text-2xl font-bold text-white mb-6">What the group is for</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { emoji: '🛠', title: 'Setup help', desc: 'Getting your WhatsApp Business API connected, your price list uploaded and your first quotation flowing — asked and answered in the open.' },
          { emoji: '🚀', title: 'Early access to features', desc: 'New capabilities are shared here first, and what the group asks for genuinely shapes what gets built next.' },
          { emoji: '📋', title: 'Templates and rules that work', desc: 'What Meta approves, what gets rejected, and how other businesses word their follow-ups.' },
          { emoji: '💡', title: 'Direct line to us', desc: 'Questions about the AI, WhatsApp policy or your own setup go straight to the people building the product.' },
        ].map((benefit, i) => (
          <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
            <div className="text-3xl shrink-0">{benefit.emoji}</div>
            <div>
              <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Refund & Cancellation Policy Page
// NOTE: Placeholder/demo terms — review with a professional and update the
// refund window / entity details before going live and before payment-gateway
// (Razorpay/PayU) onboarding.
// ─────────────────────────────────────────────
export const RefundPolicyPage = ({ isOpen, onClose }) => (
  <PageModal isOpen={isOpen} onClose={onClose}>
    <div className="max-w-4xl mx-auto px-6 py-20 text-zinc-300">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm font-bold mb-6">
          <RefreshCw className="w-4 h-4" /> Billing Policy
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Refund &amp; Cancellation Policy</h1>
        <p className="text-zinc-400 text-lg font-medium">Last updated: June 19, 2026</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="space-y-8">
        <div className="bg-emerald-900/20 border border-emerald-700/40 rounded-2xl p-6">
          <p className="text-emerald-200 font-normal leading-relaxed">We want you to be confident trying ChatPro365. This policy explains how billing, cancellations, and refunds work for our subscription plans.</p>
        </div>

        {[
          {
            num: '1', color: 'emerald', title: 'Free Trial',
            content: 'New accounts include a 14-day free trial. You are not charged during the trial. If you cancel before the trial ends, no payment is taken.'
          },
          {
            num: '2', color: 'blue', title: 'Subscription & Billing',
            content: 'Paid plans are billed in advance on a monthly or annual basis and renew automatically until cancelled. You will receive a reminder before each renewal. WhatsApp Business API conversation/message charges levied by Meta (where applicable) are separate and non-refundable.'
          },
          {
            num: '3', color: 'emerald', title: 'Cancellation',
            content: 'You can cancel anytime from your dashboard or by emailing us. After cancellation your plan stays active until the end of the current paid period, and you will not be billed again. We do not auto-delete your data immediately — see our Terms for the export window.'
          },
          {
            num: '4', color: 'orange', title: 'Refund Eligibility',
            content: 'For your first subscription payment, you may request a full refund within 7 days of that payment if you are not satisfied. Renewals (after the first 7 days) and partial unused periods are non-refundable unless required by law.'
          },
          {
            num: '5', color: 'blue', title: 'Non-Refundable Items',
            bullets: [
              'Used or consumed WhatsApp message / conversation credits',
              'One-time setup, onboarding, or customization fees',
              'Add-ons and overage charges already delivered',
              'Renewal payments beyond the 7-day first-purchase window',
              'Custom / Enterprise contracts (handled per the signed agreement)',
            ],
            content: 'The following are not eligible for refunds:'
          },
          {
            num: '6', color: 'red', title: 'Refund Processing',
            content: 'Approved refunds are issued to the original payment method within 5–7 business days. Depending on your bank or card provider, it may take additional time to reflect in your account.'
          },
          {
            num: '7', color: 'zinc', title: 'How to Request a Refund',
            content: 'Email billing@chatpro365.com from your registered email with your account details and the reason for the request. Our team will respond within 2 business days.'
          },
        ].map((sec, i) => (
          <section key={i}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-8 h-8 bg-${sec.color}-600 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>{sec.num}</div>
              <h2 className="text-2xl font-bold text-white">{sec.title}</h2>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400 leading-relaxed mb-4">{sec.content}</p>
              {sec.bullets && (
                <ul className="space-y-2">
                  {sec.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      <span className="text-zinc-400 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center">
          <p className="text-zinc-400 mb-4">Questions about billing or refunds? Contact our team:</p>
          <a href="mailto:billing@chatpro365.com" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            📧 billing@chatpro365.com
          </a>
        </div>
      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Acceptable Use / Messaging Policy Page
// ─────────────────────────────────────────────
export const AcceptableUsePage = ({ isOpen, onClose }) => (
  <PageModal isOpen={isOpen} onClose={onClose}>
    <div className="max-w-4xl mx-auto px-6 py-20 text-zinc-300">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-900/40 border border-orange-700/50 text-orange-300 text-sm font-bold mb-6">
          <AlertTriangle className="w-4 h-4" /> Acceptable Use
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Acceptable Use &amp; Messaging Policy</h1>
        <p className="text-zinc-400 text-lg font-medium">Last updated: June 19, 2026</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      </div>

      <div className="space-y-8">
        <div className="bg-orange-900/20 border border-orange-700/40 rounded-2xl p-6">
          <p className="text-orange-200 font-normal leading-relaxed">ChatPro365 is built on the official WhatsApp Business Platform. To keep your number healthy and the platform safe, every user must follow this policy in addition to WhatsApp&apos;s own rules.</p>
        </div>

        {[
          {
            num: '1', color: 'emerald', title: 'Compliance with WhatsApp & Meta Policies',
            content: 'You must comply with the WhatsApp Business Messaging Policy, the WhatsApp Commerce Policy, and Meta\'s Terms. ChatPro365 does not override these — where this policy and Meta\'s policies differ, the stricter rule applies.'
          },
          {
            num: '2', color: 'blue', title: 'Opt-In & Consent',
            content: 'You may only message people who have opted in to hear from your business on WhatsApp.',
            bullets: [
              'Collect and keep proof of opt-in for every contact',
              'Clearly identify your business in your first message',
              'Honour opt-outs (e.g. "STOP") immediately and stop messaging',
              'Never message numbers that were purchased, scraped, or harvested',
            ]
          },
          {
            num: '3', color: 'emerald', title: 'Prohibited Content & Activities',
            content: 'You must not use ChatPro365 to send or promote:',
            bullets: [
              'Spam or unsolicited bulk messages to non-opted-in users',
              'Illegal, regulated, or restricted goods (drugs, weapons, adult content, etc.)',
              'Scams, phishing, malware, or deceptive/misleading claims',
              'Hate speech, harassment, threats, or content that violates others\' rights',
              'Impersonation of any person, brand, or of ChatPro365 / WhatsApp itself',
            ]
          },
          {
            num: '4', color: 'orange', title: 'Your Responsibility',
            content: 'You are solely responsible for the content you send, the consent of your recipients, and your compliance with all applicable laws (including data protection and anti-spam laws). You agree to indemnify ChatPro365 against claims arising from your misuse of the platform.'
          },
          {
            num: '5', color: 'blue', title: 'Enforcement',
            content: 'Violations may result in a warning, temporary suspension, or permanent termination without refund — depending on severity. Where required, we cooperate with Meta/WhatsApp and relevant authorities, and we may report serious abuse.'
          },
          {
            num: '6', color: 'red', title: 'Reporting Abuse',
            content: 'If you believe someone is misusing ChatPro365, or you received an unwanted message sent via our platform, report it to abuse@chatpro365.com so we can investigate.'
          },
        ].map((sec, i) => (
          <section key={i}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-8 h-8 bg-${sec.color}-600 rounded-lg flex items-center justify-center text-white font-bold text-sm`}>{sec.num}</div>
              <h2 className="text-2xl font-bold text-white">{sec.title}</h2>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <p className="text-zinc-400 leading-relaxed mb-4">{sec.content}</p>
              {sec.bullets && (
                <ul className="space-y-2">
                  {sec.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-2" />
                      <span className="text-zinc-400 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center">
          <p className="text-zinc-400 mb-4">Report abuse or ask a question:</p>
          <a href="mailto:abuse@chatpro365.com" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
            📧 abuse@chatpro365.com
          </a>
        </div>
      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Contact Us Page
// NOTE: The street address here was a placeholder and has been removed — a
// fake address on a public contact page is worse than no address, both for
// trust and for the consistency search engines expect across listings. Put the
// registered address and GSTIN back once the company is registered.
// ─────────────────────────────────────────────
export const ContactUsPage = ({ isOpen, onClose }) => {
  const cards = [
    { icon: Building2, color: 'emerald', label: 'Business', lines: ['ChatPro365', 'Company registration in progress'] },
    { icon: MapPin, color: 'blue', label: 'Location', lines: ['Bengaluru, Karnataka', 'India'] },
    { icon: Mail, color: 'emerald', label: 'Email Us', lines: ['Sales — sales@chatpro365.com', 'Support — support@chatpro365.com', 'Billing — billing@chatpro365.com'] },
    { icon: Phone, color: 'blue', label: 'Phone / WhatsApp', lines: ['+91 82919 29081'] },
    { icon: Clock, color: 'orange', label: 'Hours', lines: ['Mon – Sat', '10:00 AM – 7:00 PM IST'] },
  ];
  return (
    <PageModal isOpen={isOpen} onClose={onClose}>
      <div className="max-w-4xl mx-auto px-6 py-20 text-zinc-300">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-sm font-bold mb-6">
            <MessageSquare className="w-4 h-4" /> Get in Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-zinc-400 text-lg font-medium">We usually reply within one business day.</p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        </div>

        <div className="bg-amber-900/20 border border-amber-700/40 rounded-2xl p-4 mb-10 text-center">
          <p className="text-amber-200 text-sm font-medium">Note: company registration is in progress — the address and entity details below are provisional and will be updated soon.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {cards.map((c, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex items-start gap-4">
              <div className={`w-11 h-11 bg-${c.color}-600 rounded-xl flex items-center justify-center shrink-0`}>
                <c.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">{c.label}</p>
                {/* Each line is wrapped in a <p> even when it is a link. An <a> is
                    inline in the markup regardless of the CSS class on it, and
                    crawlers reading the raw HTML ran the lines together —
                    "sales@chatpro365.comSupport" was showing in the search result. */}
                {c.lines.map((line, j) => {
                  const m = line.match(/[\w.+-]+@[\w.-]+\.\w+/);
                  return (
                    <p key={j} className="text-zinc-300 font-normal leading-relaxed">
                      {m ? (
                        <a href={`mailto:${m[0]}`} className="hover:text-emerald-400 transition-colors">{line}</a>
                      ) : line}
                    </p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-900/40 to-blue-900/40 border border-emerald-700/40 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Prefer to chat?</h3>
          <p className="text-zinc-400 mb-6">Message us on WhatsApp and our team will help you right away.</p>
          <a href="https://wa.me/918291929081?text=Hi! I have a question about ChatPro365" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg">
            <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </PageModal>
  );
};
