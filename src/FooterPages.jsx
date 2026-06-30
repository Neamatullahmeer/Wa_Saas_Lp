import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText, Globe, Cookie, HeadphonesIcon, Code2, BookOpen, Users, TrendingUp, CheckCircle, ArrowRight, MessageSquare, Zap, Star, RefreshCw, AlertTriangle, Mail, Phone, MapPin, Clock, Building2 } from 'lucide-react';

// ─────────────────────────────────────────────
// Shared Page Modal Wrapper
// ─────────────────────────────────────────────
const PageModal = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#09090b] pt-24 pb-12 relative z-10">
      {children}
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
                { name: 'Analytics Tools', desc: 'Anonymized usage data for product improvement insights.' },
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
        <p className="text-zinc-400 text-lg font-medium">Last updated: June 19, 2026</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </div>

      <div className="space-y-8">

        <div className="bg-amber-900/20 border border-amber-700/40 rounded-2xl p-6">
          <p className="text-amber-200 leading-relaxed">This Cookie Policy explains how ChatPro365 uses cookies and similar tracking technologies when you visit our website or use our platform. By continuing to use our services, you consent to the use of cookies as described in this policy.</p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 leading-relaxed">Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, maintain your session, and collect analytics data to improve user experience. Cookies cannot run programs or transmit viruses to your device.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>
          <div className="space-y-4">
            {[
              {
                type: 'Strictly Necessary Cookies',
                color: 'emerald',
                required: true,
                desc: 'Essential for the platform to function. Cannot be disabled.',
                examples: ['Session authentication tokens', 'CSRF security tokens', 'User preference settings', 'Load balancer routing']
              },
              {
                type: 'Performance & Analytics Cookies',
                color: 'blue',
                required: false,
                desc: 'Help us understand how visitors interact with our platform.',
                examples: ['Google Analytics (anonymized)', 'Platform usage heatmaps', 'Page load performance metrics', 'Error tracking (Sentry)']
              },
              {
                type: 'Functional Cookies',
                color: 'emerald',
                required: false,
                desc: 'Enable enhanced functionality and personalization.',
                examples: ['Language preferences', 'Dashboard layout preferences', 'Recently viewed contacts', 'Chat window state']
              },
              {
                type: 'Marketing Cookies',
                color: 'orange',
                required: false,
                desc: 'Used to deliver relevant advertisements and track campaign effectiveness.',
                examples: ['Facebook Pixel (if applicable)', 'Google Ads conversion tracking', 'Retargeting identifiers']
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
          <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-400 mb-4">You can control cookies through:</p>
            <div className="space-y-3">
              {[
                { method: 'Browser Settings', desc: 'Most browsers allow you to refuse cookies or delete existing ones. See your browser\'s help documentation.' },
                { method: 'Our Cookie Banner', desc: 'Customize your preferences when you first visit our website.' },
                { method: 'Platform Settings', desc: 'Logged-in users can manage analytics preferences from Account Settings.' },
                { method: 'Opt-Out Tools', desc: 'Use Google\'s opt-out tool or NAI opt-out for third-party advertising cookies.' },
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
  const posts = [
    {
      category: 'WhatsApp Marketing',
      color: 'from-green-600 to-emerald-600',
      title: 'How to 10x Your WhatsApp Lead Conversion Rate in 2026',
      excerpt: 'Discover the proven framework used by 500+ businesses to turn cold WhatsApp contacts into hot paying customers using AI-driven automation and smart segmentation.',
      date: 'June 15, 2026',
      readTime: '8 min read',
      emoji: '🚀'
    },
    {
      category: 'AI Automation',
      color: 'from-emerald-600 to-blue-600',
      title: 'The Complete Guide to Setting Up a WhatsApp AI Chatbot',
      excerpt: 'Step-by-step guide on configuring ChatPro365\'s Category-Based AI Bot to handle customer queries, qualify leads, and route conversations — all without a single line of code.',
      date: 'June 10, 2026',
      readTime: '12 min read',
      emoji: '🤖'
    },
    {
      category: 'Sales Strategy',
      color: 'from-orange-600 to-red-600',
      title: 'Lead Scoring on WhatsApp: Stop Wasting Time on Cold Prospects',
      excerpt: 'Learn how automatic lead scoring and the VIP Lead System help your sales team focus on high-intent buyers and close deals 3x faster than before.',
      date: 'June 5, 2026',
      readTime: '6 min read',
      emoji: '🎯'
    },
    {
      category: 'Drip Campaigns',
      color: 'from-blue-600 to-indigo-600',
      title: 'WhatsApp Drip Campaigns: The Ultimate Nurturing Strategy',
      excerpt: 'How one e-commerce brand used a 7-step WhatsApp drip campaign to recover 38% of abandoned carts and generate ₹18 lakhs in additional revenue in one month.',
      date: 'May 28, 2026',
      readTime: '10 min read',
      emoji: '💧'
    },
    {
      category: 'Case Study',
      color: 'from-emerald-600 to-teal-600',
      title: 'Real Estate Agency Closes 25 Deals/Month Using WhatsApp Automation',
      excerpt: 'A Mumbai-based real estate company shares how they scaled from 8 to 25 monthly closings after implementing ChatPro365\'s lead management and AI assistant.',
      date: 'May 20, 2026',
      readTime: '5 min read',
      emoji: '🏠'
    },
    {
      category: 'Product Update',
      color: 'from-pink-600 to-rose-600',
      title: 'New Feature: AI Quality Supervisor — Monitor Every Chat in Real-Time',
      excerpt: 'Introducing the AI Quality Supervisor — a game-changing feature that analyzes agent chats, flags poor responses, and gives managers instant visibility into team performance.',
      date: 'May 12, 2026',
      readTime: '4 min read',
      emoji: '👁️'
    },
  ];

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

        {/* Featured Post */}
        <div className="bg-gradient-to-br from-emerald-900/50 to-blue-900/50 border border-emerald-700/40 rounded-3xl p-8 mb-10">
          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-700/50 mb-4">⭐ Featured Post</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
            {posts[0].emoji} {posts[0].title}
          </h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">{posts[0].excerpt}</p>
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-sm">{posts[0].date}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-500 text-sm">{posts[0].readTime}</span>
            <a href="https://wa.me/917457863240?text=Hi! I read the blog on ChatPro365 and want to know more" target="_blank" rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors">
              Get This for My Business <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 rounded-2xl p-6 transition-all hover:-translate-y-1 duration-300">
              <div className={`inline-flex items-center gap-1 text-xs font-bold text-white bg-gradient-to-r ${post.color} px-3 py-1 rounded-full mb-4`}>
                {post.category}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {post.emoji} {post.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-4">Want personalized growth strategies for your business?</p>
          <a href="https://wa.me/917457863240?text=Hi! I want personalized WhatsApp growth strategies for my business" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg">
            <MessageSquare className="w-5 h-5" /> Chat with Our Growth Expert
          </a>
        </div>
      </div>
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
          <Users className="w-4 h-4" /> 500+ Members
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ChatPro365 Community</h1>
        <p className="text-zinc-400 text-lg font-medium">Join 500+ entrepreneurs sharing WhatsApp growth strategies</p>
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      {/* Community CTA */}
      <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-700/40 rounded-3xl p-10 text-center mb-12">
        <div className="text-6xl mb-6">💬</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our WhatsApp Community Group</h2>
        <p className="text-green-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Connect with 500+ business owners, share WhatsApp marketing tips, get first access to new features, and participate in exclusive growth challenges.
        </p>
        <a href="https://wa.me/917457863240?text=Hi! I want to join the ChatPro365 community group" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-full font-bold text-xl transition-colors shadow-2xl">
          <MessageSquare className="w-6 h-6" /> Join Free Community →
        </a>
        <p className="text-green-400 text-sm mt-4">🔒 Free to join · No spam · Expert-moderated</p>
      </div>

      {/* Community Benefits */}
      <h2 className="text-2xl font-bold text-white mb-6">What You Get in the Community</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {[
          { emoji: '📚', title: 'Weekly Masterclasses', desc: 'Live sessions with WhatsApp marketing experts every Thursday. Learn advanced automation strategies, growth hacks, and platform updates.' },
          { emoji: '🏆', title: 'Monthly Growth Challenges', desc: 'Compete with other members to hit revenue goals using WhatsApp automation. Winners get featured case studies and platform credits.' },
          { emoji: '🚀', title: 'Feature Early Access', desc: 'Community members get beta access to new ChatPro365 features before anyone else and influence our product roadmap.' },
          { emoji: '🤝', title: 'Peer Networking', desc: 'Connect with fellow entrepreneurs, share experiences, find collaboration opportunities, and get honest feedback on your campaigns.' },
          { emoji: '🎯', title: 'Campaign Templates', desc: 'Access a library of 50+ proven WhatsApp campaign templates shared by successful members across different industries.' },
          { emoji: '💡', title: 'Expert Q&A Sessions', desc: 'Ask our AI, sales, and WhatsApp compliance experts direct questions every week. Get actionable answers, not generic advice.' },
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

      {/* Testimonials strip */}
      <h2 className="text-2xl font-bold text-white mb-6">What Members Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { quote: "Joined 3 months ago, already got 2 big clients from networking in this community. Worth it!", name: "Rajesh K.", role: "E-commerce Owner" },
          { quote: "The weekly masterclasses alone are worth more than any paid course I've bought on WhatsApp marketing.", name: "Priya M.", role: "Marketing Consultant" },
          { quote: "Community templates saved us weeks of work. We launched our first drip campaign in 2 days!", name: "Amit S.", role: "SaaS Founder" },
        ].map((t, i) => (
          <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <p className="text-zinc-300 text-sm italic mb-4">"{t.quote}"</p>
            <p className="font-bold text-white text-sm">{t.name}</p>
            <p className="text-zinc-500 text-xs">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </PageModal>
);

// ─────────────────────────────────────────────
// Case Studies Page
// ─────────────────────────────────────────────
export const CaseStudiesPage = ({ isOpen, onClose }) => {
  const studies = [
    {
      industry: 'E-Commerce',
      emoji: '🛒',
      color: 'from-orange-600 to-red-600',
      company: 'Fashion E-Commerce Brand, Mumbai',
      metric1: { value: '+40%', label: 'Conversion Rate' },
      metric2: { value: '3 Days', label: 'ROI Payback' },
      metric3: { value: '₹22L', label: 'Revenue Generated' },
      challenge: 'Managing 500+ daily WhatsApp inquiries manually with a 3-person team. Leads were falling through cracks and response time was over 2 hours.',
      solution: 'Deployed ChatPro365\'s Category-Based AI Bot for instant FAQ replies, Inbound Lead Capture, and Auto Chat Assignment to route qualified buyers to agents.',
      result: 'Conversion rate jumped from 8% to 48% in week 1. Response time dropped to under 30 seconds. The team now handles 3x more chats without adding headcount.'
    },
    {
      industry: 'Real Estate',
      emoji: '🏠',
      color: 'from-emerald-600 to-blue-600',
      company: 'Real Estate Agency, Pune',
      metric1: { value: '25', label: 'Monthly Deals' },
      metric2: { value: '3x', label: 'Lead Conversion' },
      metric3: { value: '60%', label: 'Cost Reduction' },
      challenge: 'Agents manually following up with 200+ property inquiries per day via WhatsApp. Hot leads going cold because agents couldn\'t prioritize effectively.',
      solution: 'Implemented Lead Scoring with VIP Lead System to auto-flag high-intent buyers. Drip campaigns kept cold leads warm with property updates and market insights.',
      result: 'Scaled from 8 to 25 monthly property closings. Top agents now only talk to pre-qualified hot leads. Marketing spend reduced by 60% through better lead quality.'
    },
    {
      industry: 'Education',
      emoji: '🎓',
      color: 'from-blue-600 to-indigo-600',
      company: 'Online Coaching Institute, Delhi',
      metric1: { value: '5,000+', label: 'Students Enrolled' },
      metric2: { value: '38%', label: 'Drip Open Rate' },
      metric3: { value: '4x', label: 'Revenue Growth' },
      challenge: 'Admission counselors spending 80% of time answering repetitive questions about courses, fees, and eligibility. Low enrollment conversion from WhatsApp.',
      solution: 'Set up a WhatsApp AI Bot with course-specific knowledge categories. 7-step drip campaign for prospective students. Automated fee reminder sequences.',
      result: 'Enrolled 5,000+ students in one semester without increasing counselor headcount. Drip campaign achieved 38% reply rate vs. industry average of 12%.'
    },
  ];

  return (
    <PageModal isOpen={isOpen} onClose={onClose}>
      <div className="max-w-5xl mx-auto px-6 py-20 text-zinc-300">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-900/40 border border-orange-700/50 text-orange-300 text-sm font-bold mb-6">
            <TrendingUp className="w-4 h-4" /> Real Results
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Customer Case Studies</h1>
          <p className="text-zinc-400 text-lg font-medium">Real businesses, measurable results — see how ChatPro365 transforms WhatsApp into a revenue engine</p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        </div>

        <div className="space-y-8">
          {studies.map((study, i) => (
            <div key={i} className="bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden">
              {/* Header */}
              <div className={`bg-gradient-to-r ${study.color} p-6 flex items-center justify-between`}>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{study.emoji}</div>
                  <div>
                    <span className="text-white/70 text-sm font-bold uppercase tracking-wide">{study.industry}</span>
                    <h3 className="text-xl font-bold text-white">{study.company}</h3>
                  </div>
                </div>
                <div className="hidden md:flex gap-6">
                  {[study.metric1, study.metric2, study.metric3].map((m, j) => (
                    <div key={j} className="text-center">
                      <div className="text-2xl font-bold text-white">{m.value}</div>
                      <div className="text-white/70 text-xs">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Metrics */}
              <div className="md:hidden grid grid-cols-3 gap-px bg-zinc-800">
                {[study.metric1, study.metric2, study.metric3].map((m, j) => (
                  <div key={j} className="bg-zinc-900 p-4 text-center">
                    <div className="text-xl font-bold text-white">{m.value}</div>
                    <div className="text-zinc-400 text-xs">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: '🔴 Challenge', text: study.challenge },
                  { label: '🔵 Solution', text: study.solution },
                  { label: '🟢 Result', text: study.result },
                ].map((section, j) => (
                  <div key={j}>
                    <p className="font-bold text-zinc-300 mb-2 text-sm">{section.label}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-900/40 to-blue-900/40 border border-emerald-700/40 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Want Results Like These?</h3>
          <p className="text-zinc-400 mb-6">Book a free demo and we'll show you a custom growth plan for your business.</p>
          <a href="https://wa.me/917457863240?text=Hi! I want a custom growth plan for my business like your case studies" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3.5 rounded-full font-bold transition-opacity hover:opacity-90 shadow-lg">
            Get My Custom Growth Plan <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </PageModal>
  );
};

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
// NOTE: Demo/placeholder business details below — replace the legal entity name,
// registered address and GSTIN once the company is registered.
// ─────────────────────────────────────────────
export const ContactUsPage = ({ isOpen, onClose }) => {
  const cards = [
    { icon: Building2, color: 'emerald', label: 'Business', lines: ['ChatPro365', 'Company registration in progress'] },
    { icon: MapPin, color: 'blue', label: 'Address', lines: ['123, Demo Tower, MG Road', 'Bengaluru, Karnataka 560001', 'India'] },
    { icon: Mail, color: 'emerald', label: 'Email Us', lines: ['Sales — sales@chatpro365.com', 'Support — support@chatpro365.com', 'Billing — billing@chatpro365.com'] },
    { icon: Phone, color: 'blue', label: 'Phone / WhatsApp', lines: ['+91 74578 63240'] },
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
                {c.lines.map((line, j) => {
                  const m = line.match(/[\w.+-]+@[\w.-]+\.\w+/);
                  return m ? (
                    <a key={j} href={`mailto:${m[0]}`} className="block text-zinc-300 font-normal leading-relaxed hover:text-emerald-400 transition-colors">{line}</a>
                  ) : (
                    <p key={j} className="text-zinc-300 font-normal leading-relaxed">{line}</p>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-900/40 to-blue-900/40 border border-emerald-700/40 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Prefer to chat?</h3>
          <p className="text-zinc-400 mb-6">Message us on WhatsApp and our team will help you right away.</p>
          <a href="https://wa.me/917457863240?text=Hi! I have a question about ChatPro365" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3.5 rounded-full font-bold transition-colors shadow-lg">
            <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </PageModal>
  );
};
