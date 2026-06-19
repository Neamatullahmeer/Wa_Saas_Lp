import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { API_BASE_URL, APP_BASE_URL } from './lib/apiConfig';
import api from './lib/api';
import {
  Bot, ChevronRight, MessageSquare, Zap, Clock, Users, ArrowRight, Shield,
  Globe, Smartphone, CheckCircle, Check, Database, Sparkles, X, Loader2,
  Menu, Star, TrendingUp, Target, BarChart3, Layers, Settings, Bell,
  Award, ChevronDown, Play, HeadphonesIcon, Package, Calendar, Activity,
  UserCheck, Filter, Megaphone, Send, Repeat, Brain, Eye, Crown, Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─────────────────────────────────────────────
// Logo SVG
// ─────────────────────────────────────────────
const ChatproLogo = ({ className = "h-12 w-auto" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" className={className} role="img" aria-label="ChatPro365 Logo - WhatsApp Business Automation">
    <defs>
      <linearGradient id="gradLeftBubble" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5BF55D" />
        <stop offset="100%" stopColor="#0CA678" />
      </linearGradient>
      <linearGradient id="gradRightBubble" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0CA678" />
        <stop offset="100%" stopColor="#0077FF" />
      </linearGradient>
      <linearGradient id="gradCheckLight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#73F26D" />
        <stop offset="100%" stopColor="#20C997" />
      </linearGradient>
      <linearGradient id="gradCheckDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#20C997" />
        <stop offset="100%" stopColor="#0077FF" />
      </linearGradient>
    </defs>
    <g transform="translate(400, 200)">
      <path d="M -20 -95 A 95 95 0 0 0 -50 80" fill="none" stroke="url(#gradLeftBubble)" strokeWidth="18" strokeLinecap="round" />
      <path d="M -50 80 A 95 95 0 0 0 85 45" fill="none" stroke="url(#gradRightBubble)" strokeWidth="18" strokeLinecap="round" />
      <path d="M -48 83 L -90 125 L -20 92 Z" fill="#0CA678" />
      <path d="M -35 5 L -5 35 L 55 -55" fill="none" stroke="url(#gradCheckLight)" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M -15 25 L 15 55 L 75 -35" fill="none" stroke="url(#gradCheckDark)" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    </g>
    <g transform="translate(400, 420)">
      <text x="0" y="0" fontFamily="'Montserrat', 'Arial Black', sans-serif" fontWeight="900" fontSize="72" textAnchor="middle" letterSpacing="1">
        <tspan fill="#0F172A">CHATPRO</tspan><tspan fill="#2BAE57">365</tspan>
      </text>
    </g>
  </svg>
);

// ─────────────────────────────────────────────
// Animation Variants
// ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// ─────────────────────────────────────────────
// FAQ Item Component
// ─────────────────────────────────────────────
const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border border-zinc-200 rounded-2xl overflow-hidden bg-white hover:border-violet-200 transition-colors"
      whileHover={{ y: -1 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-bold text-zinc-900 text-base md:text-lg">{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="w-5 h-5 text-violet-500 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <p className="px-6 pb-6 text-zinc-500 font-medium leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', phone: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const dashboardUrl = APP_BASE_URL || 'http://localhost:5173';
    const targetUrl = `${dashboardUrl}/register?phone=${encodeURIComponent(leadData.phone)}&name=${encodeURIComponent(leadData.name)}`;
    try {
      await api.post('/platform-leads/capture', {
        name: leadData.name,
        phone: leadData.phone,
        source: 'Landing Page Get Started'
      });
    } catch (error) {
      console.error("Lead Capture failed", error);
    }
    window.location.href = targetUrl;
  };

  // ── Data ──────────────────────────────────────
  const problems = [
    { icon: Clock, color: 'red', title: 'Delayed Replies', desc: 'Customers leave if you don\'t reply within 5 minutes. Every minute costs you money.' },
    { icon: Target, color: 'orange', title: 'Missed Leads', desc: 'Excel sheets and chaotic chat lists cause hot leads to slip away permanently.' },
    { icon: Activity, color: 'amber', title: 'Agent Inefficiency', desc: 'No way to track if your support team is actually converting or just slacking.' },
  ];

  const usps = [
    {
      icon: Brain,
      gradient: 'from-violet-500 to-fuchsia-500',
      bg: 'from-violet-50 to-fuchsia-50',
      border: 'border-violet-100',
      title: 'Human + AI Hybrid Chat with Quality Supervision',
      desc: 'Give your customers the speed of AI and the empathy of humans. Our system handles FAQs instantly via a Category-Based AI Bot and routes complex queries to human agents seamlessly, while the AI Quality Supervisor monitors chat standards.',
      badges: ['Category-Based AI Bot', 'AI Quality Supervisor', 'Seamless Handoff'],
    },
    {
      icon: Crown,
      gradient: 'from-amber-500 to-orange-500',
      bg: 'from-amber-50 to-orange-50',
      border: 'border-amber-100',
      title: 'Advanced Lead Intelligence (Scoring & VIP System)',
      desc: 'Stop treating every lead the same. Automatically capture inbound leads, tag them based on interest, rank them using Lead Scoring, and fast-track high-value buyers through our dedicated VIP Lead System.',
      badges: ['Lead Scoring', 'VIP Lead System', 'Intent Tagging'],
    },
    {
      icon: Repeat,
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'from-emerald-50 to-teal-50',
      border: 'border-emerald-100',
      title: 'Automated Nurturing (Drip Campaigns & Auto Follow-Up)',
      desc: 'Broadcasters just blast messages; we build relationships. Launch automated Drip Campaigns and activate the Auto Follow-Up Engine to re-engage cold prospects and increase conversion rates up to 3x.',
      badges: ['Drip Campaigns', 'Auto Follow-Up Engine', '3x Conversions'],
    },
  ];

  const pillars = [
    {
      icon: Bot,
      gradient: 'from-violet-600 to-fuchsia-600',
      title: 'AI & Intelligent Automation',
      features: [
        { icon: Brain, name: 'Category-Based AI Bot', desc: 'Handles complex, department-specific queries instantly.' },
        { icon: Smartphone, name: 'WhatsApp AI Assistant', desc: 'Acts as your 24/7 dedicated digital salesman.' },
        { icon: Clock, name: 'Working Hours Intelligence', desc: 'Automatically manages out-of-office flows.' },
        { icon: MessageSquare, name: 'Interactive WA Buttons', desc: 'Drives higher engagement with clickable menus.' },
      ]
    },
    {
      icon: Megaphone,
      gradient: 'from-orange-500 to-red-500',
      title: 'Ultimate Marketing Suite',
      features: [
        { icon: Send, name: 'Bulk Broadcast & Scheduled Campaigns', desc: 'Send instantly or queue for later delivery.' },
        { icon: Filter, name: 'Audience Targeting', desc: 'Segment contacts to send laser-targeted messages.' },
        { icon: Package, name: 'File & Image Sharing', desc: 'Send catalogs, invoices, and rich media effortlessly.' },
        { icon: TrendingUp, name: 'Campaign ROI Tracking', desc: 'Measure every campaign\'s impact in real-time.' },
      ]
    },
    {
      icon: Database,
      gradient: 'from-emerald-500 to-teal-600',
      title: 'Lead & Sales Management CRM',
      features: [
        { icon: Package, name: 'Product & Inventory Management', desc: 'Showcase and manage products right inside WhatsApp.' },
        { icon: Sparkles, name: 'AI Product Recommendations', desc: 'Let AI analyze behavior and cross-sell relevant products.' },
        { icon: Globe, name: 'CRM Integration', desc: 'Seamlessly sync data with your existing CRMs.' },
        { icon: Calendar, name: 'Subscription & Appointment Management', desc: 'Track bookings, plans, and appointments.' },
      ]
    },
    {
      icon: Shield,
      gradient: 'from-blue-500 to-indigo-600',
      title: 'Enterprise Team & Ops Control',
      features: [
        { icon: UserCheck, name: 'Auto Chat Assignment & SLA', desc: 'Set SLAs and assign chats automatically.' },
        { icon: Eye, name: 'Agent Online/Offline Tracking', desc: 'Monitor agent availability and response speed.' },
        { icon: BarChart3, name: 'AI Performance Analytics', desc: 'Microscopic insights into campaigns and team performance.' },
        { icon: Lock, name: 'Super Admin Panel', desc: 'Manage roles, permissions, and all settings centrally.' },
      ]
    },
  ];

  const comparisonRows = [
    { feature: 'Chat Capability', basic: 'Basic Broadcasts Only', pro: 'Hybrid Human + AI Chat' },
    { feature: 'Lead Nurturing', basic: 'Manual Follow-ups', pro: 'Auto Follow-Up Engine' },
    { feature: 'Lead Prioritization', basic: 'Simple Contact Lists', pro: 'Lead Scoring & VIP Tracking' },
    { feature: 'Quality Control', basic: 'No Oversight', pro: 'AI Quality Supervisor' },
    { feature: 'Analytics', basic: 'Basic Sent/Delivered Status', pro: 'Advanced AI Performance Insights' },
    { feature: 'AI Automation', basic: 'None', pro: 'Category-Based AI Bot' },
    { feature: 'Drip Campaigns', basic: 'Not Available', pro: 'Full Multi-Step Automation' },
  ];

  const testimonials = [
    {
      quote: "Before ChatPro365, managing our WhatsApp leads was a nightmare. Now, with the Inbound Lead Capture and Auto Chat Assignment, our conversion rate jumped by 40% and no lead is ever left unaddressed!",
      name: "Siddharth M.",
      role: "E-commerce Founder",
      rating: 5,
      avatar: "SM",
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      quote: "The AI Quality Supervisor alone is worth it. We went from having zero visibility into our team's chats to having full performance dashboards. Remarkable product!",
      name: "Priya K.",
      role: "Sales Director, Real Estate",
      rating: 5,
      avatar: "PK",
      color: "from-emerald-500 to-teal-500"
    },
    {
      quote: "We ran a drip campaign to 2,000 cold leads and got 38% replies within 3 days. ChatPro365's automation is unmatched. It paid for itself in the first week.",
      name: "Rohit A.",
      role: "Digital Marketing Agency Owner",
      rating: 5,
      avatar: "RA",
      color: "from-orange-500 to-red-500"
    },
  ];

  const faqs = [
    {
      question: "What is ChatPro365, and how does it use the WhatsApp Business API?",
      answer: "ChatPro365 is an official WhatsApp Business API based AI automation platform. It allows businesses to send bulk WhatsApp broadcasts, build AI chatbot auto-replies, and manage a high volume of customer support messages from a single, unified CRM dashboard."
    },
    {
      question: "Do I need to be online 24/7 to manage customer chats?",
      answer: "No. With ChatPro365's Category-Based AI Bot and automated WhatsApp Assistant, your business stays active 24/7. The bot can calculate prices, share catalogs, and qualify leads while your human team is asleep."
    },
    {
      question: "What happens if the AI chatbot cannot resolve a customer query?",
      answer: "ChatPro365 operates on a Human + AI Hybrid Chat model. If a lead requires human empathy or asks complex questions, the Auto Chat Assignment system instantly routes the WhatsApp conversation to an available live sales agent."
    },
    {
      question: "Can we execute bulk WhatsApp marketing campaigns on this platform?",
      answer: "Absolutely. ChatPro365 acts as a powerful Bulk WhatsApp Sender. You can send targeted promotional broadcasts, set up scheduled campaigns, and trigger multi-step Drip Campaigns without the risk of getting banned, thanks to the official API integration."
    },
    {
      question: "How does the Lead Management System score WhatsApp leads?",
      answer: "The platform automatically captures inbound WhatsApp leads, applies custom Intent Tags, and calculates engagement using Lead Scoring. Hot prospects are automatically moved to a VIP Lead System for immediate follow-up."
    },
    {
      question: "Can I track my support team's performance?",
      answer: "Yes. The platform provides complete Team Management, Agent Online/Offline Tracking, SLA Management, and deep AI Performance Analytics to monitor team efficiency."
    },
    {
      question: "Can I manage my products and inventory through WhatsApp?",
      answer: "Yes. You can leverage our Product & Inventory Management system to keep track of items, and use the AI Product Recommendation engine to automatically showcase relevant catalog products to buyers."
    },
    {
      question: "Does ChatPro365 integrate with existing CRM tools like HubSpot or Shopify?",
      answer: "Yes. Using ChatPro365's universal Webhook Integration, you can seamlessly sync WhatsApp leads and chat histories with external tools like HubSpot, Salesforce, Shopify, Zoho, or any custom backend system."
    },
  ];

  // ── Render ──────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 font-sans text-slate-900 overflow-x-hidden selection:bg-violet-200">

      {/* ── COMPREHENSIVE SEO & GEO OPTIMIZATION ── */}
      <Helmet>
        <title>ChatPro365 | Best WhatsApp Business API & AI Automation Platform</title>
        <meta name="description" content="Turn WhatsApp into your 24/7 AI Sales Agent. Automate WhatsApp marketing, integrate with any CRM, send bulk broadcasts, and setup chatbot auto-replies. Start free trial!" />
        <meta name="keywords" content="WhatsApp Business API, WhatsApp marketing software, AI WhatsApp bot, CRM webhook integration, bulk WhatsApp sender, AI sales agent, ChatPro365, lead automation, auto reply bot" />
        <link rel="canonical" href="https://chatpro365.com/" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="ChatPro365 — Your AI WhatsApp Sales Engine" />
        <meta property="og:description" content="Turn WhatsApp into your 24/7 AI Sales Agent. Close deals while you sleep with custom AI prompts, bulk broadcasting, and seamless CRM integration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chatpro365.com/" />
        <meta property="og:image" content="https://chatpro365.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChatPro365 — Your AI WhatsApp Sales Engine" />
        <meta name="twitter:description" content="Send interactive WhatsApp buttons, bulk campaigns, and push leads to your CRM automatically." />
        <meta name="twitter:image" content="https://chatpro365.com/og-image.jpg" />
      </Helmet>

      {/* ── LEAD CAPTURE MODAL ── */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/70 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full relative z-10 shadow-2xl border border-zinc-100"
            >
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-900 bg-zinc-50 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="text-center mb-6 mt-2">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-900">Book a Free Live Demo</h3>
                <p className="text-zinc-500 font-medium mt-2">Enter your details and we'll set it up instantly.</p>
              </div>
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-1.5">Full Name</label>
                  <input
                    type="text" required placeholder="e.g. Rahul Sharma"
                    value={leadData.name} onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 mb-1.5">WhatsApp Number</label>
                  <input
                    type="tel" required placeholder="e.g. +91 9876543210"
                    value={leadData.phone} onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all outline-none"
                  />
                </div>
                <button
                  type="submit" disabled={loading}
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all flex justify-center items-center gap-2 mt-2 shadow-lg"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Book My Demo <ArrowRight className="w-4 h-4" /></>}
                </button>
                <p className="text-xs text-center text-zinc-400 mt-4">⭐ Trusted by 500+ businesses · No Credit Card Required</p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── NAVBAR ── */}
      <motion.nav
        initial={{ y: -100 }} animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200/50"
        role="navigation" aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }} role="link" aria-label="ChatPro365 home">
              <ChatproLogo className="h-12 sm:h-14 w-auto drop-shadow-sm -ml-2" />
            </div>
            <div className="hidden md:flex space-x-8 text-zinc-500 font-medium">
              <a href="#problem" className="hover:text-zinc-900 transition-colors">Why ChatPro365</a>
              <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
              <a href="#comparison" className="hover:text-zinc-900 transition-colors">Compare</a>
              <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
              <a href="#about" className="hover:text-zinc-900 transition-colors">About Us</a>
              <a href="#faq" className="hover:text-zinc-900 transition-colors">FAQ</a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <a href={`${APP_BASE_URL}/login`} className="text-zinc-500 font-medium hover:text-zinc-900 transition-colors">Login</a>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-violet-900/20"
                aria-label="Book a Free Demo"
              >
                Book a Free Demo →
              </motion.button>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <a href={`${APP_BASE_URL}/login`} className="text-zinc-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-zinc-100 transition-colors" aria-label="Login">Login</a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-5 h-5 text-zinc-800" /> : <Menu className="w-5 h-5 text-zinc-800" />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-zinc-100"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {['#problem|Why ChatPro365', '#features|Features', '#comparison|Compare', '#pricing|Pricing', '#about|About Us', '#faq|FAQ'].map((item) => {
                  const [href, label] = item.split('|');
                  return (
                    <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-zinc-700 font-semibold hover:bg-zinc-50 transition-colors text-base">
                      {label}
                    </a>
                  );
                })}
                <div className="mt-3 pt-3 border-t border-zinc-100">
                  <button onClick={() => { setShowModal(true); setMenuOpen(false); }} className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-1">
                    Book a Free Live Demo →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ════════════════════════════════════════
          SECTION 1: HERO
      ════════════════════════════════════════ */}
      <section className="relative pt-28 pb-16 sm:pt-36 lg:pt-48 lg:pb-32 overflow-hidden" aria-label="Hero section">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] opacity-25 bg-gradient-to-b from-violet-500 via-fuchsia-400 to-transparent blur-[140px] -z-10 rounded-full mix-blend-multiply" />
        <div className="absolute top-20 left-0 w-[400px] h-[400px] opacity-20 bg-gradient-to-br from-emerald-400 to-teal-300 blur-[100px] -z-10 rounded-full" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] opacity-20 bg-gradient-to-br from-orange-400 to-amber-300 blur-[100px] -z-10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">

            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-violet-100 text-violet-700 text-sm font-bold mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-fuchsia-500 animate-pulse" />
              ⭐ Trusted by 500+ Growing Businesses · No Credit Card Required
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="text-hero font-extrabold tracking-tight mb-6 max-w-5xl mx-auto">
              Don't Just Send WhatsApp Messages.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500">
                Automate Your Entire Sales & Support Funnel
              </span>{' '}
              on Autopilot!
            </motion.h1>

            {/* Sub-headline */}
            <motion.p variants={fadeUp} className="text-lead text-zinc-500 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
              Meet <strong className="text-zinc-800">ChatPro365</strong>—The Ultimate AI-Powered WhatsApp Business Automation Platform. Capture inbound leads, score their intent, nurture them with automated drip campaigns, and scale your business 24/7.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-16 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -5px rgba(124, 58, 237, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="relative overflow-hidden bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto group"
                id="hero-cta-demo"
              >
                <span className="relative z-10 flex items-center gap-2">Book a Free Live Demo <ArrowRight className="w-5 h-5" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/917457863240?text=Hi! I want to know more about ChatPro365', '_blank')}
                className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md w-full sm:w-auto"
                id="hero-cta-video"
              >
                <Play className="w-5 h-5 text-fuchsia-500 fill-fuchsia-500" /> Watch 2-Min Explainer Video
              </motion.button>
            </motion.div>

            {/* Stats Strip */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: '500+', label: 'Growing Businesses' },
                { value: '3x', label: 'Conversion Rate Boost' },
                { value: '24/7', label: 'Automated Operations' },
                { value: '40%', label: 'Average Lead Increase' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-extrabold text-zinc-900">{stat.value}</div>
                  <div className="text-sm text-zinc-500 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Chat Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto max-w-3xl mt-20 px-4"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative bg-white/90 rounded-[2rem] shadow-2xl border border-white overflow-hidden backdrop-blur-2xl">
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shadow-inner">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white">ChatPro365 AI Agent</h3>
                <p className="text-xs text-violet-200 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online · Responding instantly
                </p>
              </div>
              <div className="ml-auto flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
              </div>
            </div>
            <div className="p-6 bg-[#f0f2f5] h-[340px] overflow-y-auto flex flex-col gap-4">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[80%]">
                <p className="text-zinc-800 font-medium leading-relaxed">Hi! 👋 I'm your AI Sales Agent. I noticed you're interested in automating your WhatsApp. What type of business do you run?</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <span className="bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1.5 rounded-full border border-violet-200 cursor-pointer hover:bg-violet-200 transition-colors">E-Commerce</span>
                  <span className="bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1.5 rounded-full border border-violet-200 cursor-pointer hover:bg-violet-200 transition-colors">Real Estate</span>
                  <span className="bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1.5 rounded-full border border-violet-200 cursor-pointer hover:bg-violet-200 transition-colors">Other</span>
                </div>
                <p className="text-[10px] text-zinc-400 mt-2 text-right">Just now</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.2 }} className="bg-zinc-950 p-4 rounded-2xl rounded-tr-sm shadow-md max-w-[75%] self-end">
                <p className="text-white font-medium">E-Commerce. I have 5 agents but leads keep slipping through!</p>
                <p className="text-[10px] text-zinc-500 mt-2 text-right">✓✓</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.4 }} className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[85%]">
                <p className="text-zinc-800 font-medium leading-relaxed">Perfect! ChatPro365's <strong>Lead Scoring + VIP System</strong> flags hot leads automatically and assigns them to your best agent. You'll see 40%+ more conversions in week 1. 🚀</p>
                <div className="mt-3">
                  <button onClick={() => setShowModal(true)} className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-md">
                    Book a Free Demo Now →
                  </button>
                </div>
                <p className="text-[10px] text-zinc-400 mt-2 text-right">Just now</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2: PROBLEM & SOLUTION
      ════════════════════════════════════════ */}
      <section id="problem" className="py-12 md:py-24 bg-white shadow-sm border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold mb-6">
                ⚠️ The Hidden Problem
              </div>
              <h2 className="text-section-title font-extrabold mb-6 tracking-tight text-zinc-900">
                Why Manual WhatsApp Management is <span className="text-red-500">Killing Your Growth</span>
              </h2>
            </motion.div>

            {/* Problem Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-20">
              {problems.map((p, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -5 }} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-red-200 hover:bg-red-50/30 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-red-50 border border-red-100`}>
                    <p.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-900">{p.title}</h3>
                  <p className="text-zinc-500 font-medium leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Solution Banner */}
            <motion.div variants={fadeUp} className="relative bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-700 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold mb-6 border border-white/20">
                  <Sparkles className="w-4 h-4" /> The ChatPro365 Solution
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug max-w-3xl mx-auto">
                  "ChatPro365 brings your entire customer journey—from the first <em>hello</em> to the final checkout—into one unified, intelligent dashboard."
                </h3>
                <button onClick={() => setShowModal(true)} className="mt-8 bg-white text-violet-700 font-bold px-8 py-4 rounded-full hover:bg-violet-50 transition-colors shadow-xl text-lg inline-flex items-center gap-2">
                  See How It Works <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3: CORE USPs
      ════════════════════════════════════════ */}
      <section className="py-12 md:py-24 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-bold mb-6">
              <Award className="w-4 h-4" /> Why Top Brands Choose Us
            </div>
            <h2 className="text-section-title font-extrabold mb-6 tracking-tight text-zinc-900">
              Why Top Brands Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">ChatPro365</span> Over Basic WhatsApp Tools
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {usps.map((usp, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className={`bg-gradient-to-br ${usp.bg} border ${usp.border} rounded-3xl p-8 hover:shadow-xl transition-all duration-300`}>
                <div className={`w-14 h-14 bg-gradient-to-br ${usp.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <usp.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-card-title font-extrabold mb-4 text-zinc-900 leading-snug">{usp.title}</h3>
                <p className="text-lead text-zinc-600 font-medium leading-relaxed mb-6">{usp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {usp.badges.map((badge, j) => (
                    <span key={j} className={`bg-gradient-to-r ${usp.gradient} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>{badge}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4: 4 PILLARS FEATURE GRID
      ════════════════════════════════════════ */}
      <section id="features" className="py-12 md:py-24 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold mb-6">
              <Layers className="w-4 h-4" /> The 4 Pillars
            </div>
            <h2 className="text-section-title font-extrabold mb-6 tracking-tight text-zinc-900">
              Packed with Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Scale</span>
            </h2>
            <p className="text-lead text-zinc-500 font-medium">Every feature built specifically for WhatsApp-driven businesses.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, pi) => (
              <motion.div key={pi} variants={fadeIn} whileHover={{ y: -4 }} className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-card-title font-extrabold mb-5 text-zinc-900">{pillar.title}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {pillar.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-zinc-100 hover:border-zinc-200 transition-colors">
                      <div className={`w-10 h-10 bg-gradient-to-br ${pillar.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                        <feat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-zinc-900 text-sm">{feat.name}</p>
                        <p className="text-zinc-500 text-sm mt-0.5 font-medium">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 5: COMPARISON TABLE
      ════════════════════════════════════════ */}
      <section id="comparison" className="py-12 md:py-24 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-zinc-300 text-sm font-bold mb-6">
              <Shield className="w-4 h-4 text-violet-400" /> Head-to-Head Comparison
            </div>
            <h2 className="text-section-title font-extrabold text-white mb-4 tracking-tight">
              How ChatPro365 <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Defeats the Competition</span>
            </h2>
            <p className="text-lead text-zinc-400 font-medium">Not just better—in a completely different league.</p>
          </motion.div>

          {/* ── MOBILE: Card layout ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:hidden flex flex-col gap-4">
            {comparisonRows.map((row, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
                {/* Feature Label */}
                <div className="bg-zinc-900 px-5 py-3">
                  <span className="text-white font-bold text-sm uppercase tracking-wide">{row.feature}</span>
                </div>
                <div className="grid grid-cols-2 bg-zinc-950">
                  {/* Basic col */}
                  <div className="px-4 py-4 border-r border-zinc-800">
                    <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest mb-2">Standard WA Tools</p>
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-400 text-sm font-medium leading-snug">{row.basic}</span>
                    </div>
                  </div>
                  {/* Pro col */}
                  <div className="px-4 py-4 bg-violet-950/30">
                    <p className="text-violet-400 text-[11px] font-bold uppercase tracking-widest mb-2">ChatPro365 ✦</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-emerald-400 text-sm font-bold leading-snug">{row.pro}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── DESKTOP: Table layout ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="hidden md:block rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            {/* Header */}
            <div className="grid grid-cols-3 bg-zinc-900">
              <div className="px-6 py-5 text-zinc-400 font-bold text-sm uppercase tracking-wider">Feature</div>
              <div className="px-6 py-5 text-zinc-400 font-bold text-sm uppercase tracking-wider text-center border-l border-zinc-800">Standard WA Tools</div>
              <div className="px-6 py-5 text-center border-l border-zinc-800">
                <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-bold px-4 py-2 rounded-full">ChatPro365 ✦</span>
              </div>
            </div>
            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-zinc-900/50' : 'bg-zinc-900/30'} border-t border-zinc-800/50 hover:bg-zinc-800/50 transition-colors`}>
                <div className="px-6 py-5 text-zinc-300 font-semibold text-sm">{row.feature}</div>
                <div className="px-6 py-5 border-l border-zinc-800/50 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="text-zinc-500 text-sm font-medium">{row.basic}</span>
                  </div>
                </div>
                <div className="px-6 py-5 border-l border-zinc-800/50 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400 text-sm font-bold">{row.pro}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-center mt-10">
            <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-all shadow-xl text-lg inline-flex items-center gap-2">
              Start Your Free Trial Now <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 6: TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className="py-12 md:py-24 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" /> Social Proof
            </div>
            <h2 className="text-section-title font-extrabold mb-4 tracking-tight text-zinc-900">
              Loved by Hundreds of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Founders & Sales Teams</span>
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -8 }} className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, s) => <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-lead text-zinc-700 font-medium leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center font-extrabold text-white text-sm shadow-md`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">{t.name}</p>
                    <p className="text-zinc-500 text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 7: ABOUT US
      ════════════════════════════════════════ */}
      <section id="about" className="py-12 md:py-24 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>

            {/* Header */}
            <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" /> Our Story
              </div>
              <h2 className="text-section-title font-extrabold mb-6 tracking-tight text-zinc-900">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">ChatPro365</span>
              </h2>
              <p className="text-lead text-zinc-500 font-medium leading-relaxed">
                Revolutionizing WhatsApp Business Automation — one intelligent conversation at a time.
              </p>
            </motion.div>

            {/* Mission Banner */}
            <motion.div variants={fadeUp} className="relative bg-gradient-to-br from-violet-600 via-fuchsia-600 to-violet-700 rounded-3xl p-10 md:p-14 overflow-hidden mb-12 md:mb-20">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-bold mb-6 border border-white/20">
                  <Target className="w-4 h-4" /> Our Mission
                </div>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-snug">
                  To help you automate business operations, elevate the customer experience, and dramatically increase your sales conversions.
                </h3>
                <p className="text-violet-100 text-lg font-medium leading-relaxed">
                  We are dedicated to providing a platform that acts as the ultimate engine for your client management, intelligent automation, and limitless business growth.
                </p>
              </div>
            </motion.div>

            {/* What Makes Us Different Grid */}
            <motion.div variants={fadeUp} className="text-center mb-10 md:mb-12">
              <h3 className="text-card-title font-extrabold text-zinc-900 mb-3">What Makes Us Different?</h3>
              <p className="text-zinc-500 font-medium">We don't just send messages — we build smart, automated sales and support machines.</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-20">
              {[
                {
                  icon: Brain,
                  gradient: 'from-violet-500 to-fuchsia-500',
                  bg: 'from-violet-50 to-fuchsia-50',
                  border: 'border-violet-100',
                  title: 'Intelligent AI Automation',
                  desc: 'Never miss a customer interaction with our Category-Based AI Bot and WhatsApp AI Assistant. For complex conversations, our Human + AI Hybrid Chat ensures agents step in exactly when needed.',
                },
                {
                  icon: Crown,
                  gradient: 'from-amber-500 to-orange-500',
                  bg: 'from-amber-50 to-orange-50',
                  border: 'border-amber-100',
                  title: 'Advanced Lead Management',
                  desc: 'Take total control of your sales pipeline. Our platform features Inbound Lead Capture, Lead Tagging, Lead Scoring, and an exclusive VIP Lead System to ensure your highest-value prospects get top priority.',
                },
                {
                  icon: Megaphone,
                  gradient: 'from-emerald-500 to-teal-500',
                  bg: 'from-emerald-50 to-teal-50',
                  border: 'border-emerald-100',
                  title: 'High-Converting Campaigns',
                  desc: 'Scale your outreach effortlessly using Bulk Broadcast Campaigns, Scheduled Campaigns, and intelligent Drip Campaign Automation designed for precise Audience Targeting.',
                },
                {
                  icon: Users,
                  gradient: 'from-blue-500 to-indigo-600',
                  bg: 'from-blue-50 to-indigo-50',
                  border: 'border-blue-100',
                  title: 'Complete Team & Ops Control',
                  desc: 'Optimize your workforce with robust Team Management, Auto Chat Assignment, Agent Online/Offline Tracking, and strict SLA Management to guarantee lightning-fast response times.',
                },
                {
                  icon: BarChart3,
                  gradient: 'from-rose-500 to-pink-600',
                  bg: 'from-rose-50 to-pink-50',
                  border: 'border-rose-100',
                  title: 'Actionable Data & Insights',
                  desc: 'Make data-driven decisions using our comprehensive Dashboard Analytics, AI Performance Analytics, and the AI Quality Supervisor to track every interaction.',
                },
                {
                  icon: Globe,
                  gradient: 'from-cyan-500 to-sky-600',
                  bg: 'from-cyan-50 to-sky-50',
                  border: 'border-cyan-100',
                  title: 'Seamless Business Integration',
                  desc: 'Connect your existing tools instantly through our native CRM Integration, while managing your catalog via Product & Inventory Management and AI Product Recommendations.',
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }} className={`bg-gradient-to-br ${item.bg} border ${item.border} rounded-3xl p-8 hover:shadow-lg transition-all duration-300`}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-card-title font-extrabold text-zinc-900 mb-3">{item.title}</h4>
                  <p className="text-zinc-600 font-medium leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Your Complete Business Growth Partner */}
            <motion.div variants={fadeUp} className="bg-zinc-950 rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-zinc-300 text-sm font-bold mb-6 border border-white/10">
                  <Award className="w-4 h-4 text-violet-400" /> Your Complete Business Growth Partner
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-snug max-w-3xl">
                  ChatPro365 is designed to give founders and managers complete peace of mind.
                </h3>
                <p className="text-zinc-400 text-lg font-medium leading-relaxed mb-8 max-w-3xl">
                  Equipped with a powerful Super Admin Panel, Real-Time Notifications, and Business Control Features, you hold the reins to your entire operation. Whether it is managing Subscriptions, Support Tickets, Appointments, or File &amp; Image Sharing, we make it happen on autopilot.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Super Admin Panel', 'Real-Time Notifications', 'Support Tickets', 'Appointment Booking', 'File & Image Sharing', 'Subscription Management'].map((tag, i) => (
                    <span key={i} className="bg-white/10 border border-white/10 text-zinc-300 text-sm font-bold px-4 py-2 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 8: PRICING
      ════════════════════════════════════════ */}
      <section id="pricing" className="py-12 md:py-24 bg-gradient-to-br from-slate-50 via-white to-violet-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-bold mb-6">
              <Zap className="w-4 h-4" /> Simple, Transparent Pricing
            </div>
            <h2 className="text-section-title font-extrabold mb-6 tracking-tight text-zinc-900">
              Choose the Plan That <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Fits Your Growth</span>
            </h2>
            <p className="text-lead text-zinc-500 font-medium">No hidden fees. No lock-in contracts. Cancel anytime.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* Starter Plan */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 mb-1">Starter</h3>
                <p className="text-zinc-500 text-sm font-medium">Perfect for small businesses getting started with WhatsApp automation.</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-zinc-900">₹2,999</span>
                  <span className="text-zinc-400 font-medium mb-1">/month</span>
                </div>
                <p className="text-zinc-400 text-xs font-medium mt-1">Billed monthly · Cancel anytime</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  '1 WhatsApp Number',
                  'Up to 3 Agents',
                  '5,000 Monthly Messages',
                  'AI Auto-Reply Bot',
                  'Bulk Broadcast Campaigns',
                  'Basic Lead Management',
                  'Real-Time Dashboard',
                  'Email Support',
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-zinc-700 text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => setShowModal(true)}
                className="w-full border-2 border-violet-600 text-violet-600 font-bold py-3.5 rounded-xl hover:bg-violet-50 transition-all justify-center"
              >
                Get Started
              </motion.button>
            </motion.div>

            {/* Pro Plan – MOST POPULAR */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="relative bg-gradient-to-br from-violet-600 via-fuchsia-600 to-violet-700 rounded-3xl p-8 flex flex-col h-full shadow-2xl shadow-violet-500/30">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-zinc-900 text-xs font-extrabold px-5 py-2 rounded-full shadow-lg">⭐ MOST POPULAR</span>
              </div>
              <div className="absolute inset-0 opacity-10 rounded-3xl" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative z-10 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-md border border-white/20">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-1">Pro</h3>
                <p className="text-violet-100 text-sm font-medium">For growing teams that need advanced automation and lead management.</p>
              </div>
              <div className="relative z-10 mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">₹7,999</span>
                  <span className="text-violet-200 font-medium mb-1">/month</span>
                </div>
                <p className="text-violet-300 text-xs font-medium mt-1">Billed monthly · Cancel anytime</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8 relative z-10">
                {[
                  '3 WhatsApp Numbers',
                  'Up to 15 Agents',
                  '25,000 Monthly Messages',
                  'Human + AI Hybrid Chat',
                  'Lead Scoring & VIP System',
                  'Drip Campaign Automation',
                  'AI Quality Supervisor',
                  'SLA Management',
                  'CRM Integration (Webhook)',
                  'AI Performance Analytics',
                  'Priority Support',
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 10px 40px rgba(255,255,255,0.3)' }} whileTap={{ scale: 0.97 }}
                onClick={() => setShowModal(true)}
                className="w-full bg-white text-violet-700 font-extrabold py-3.5 rounded-xl hover:bg-violet-50 transition-all shadow-xl relative z-10 justify-center"
              >
                Start Free Trial →
              </motion.button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 flex flex-col h-full hover:shadow-xl hover:border-zinc-700 transition-all duration-300">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-1">Enterprise</h3>
                <p className="text-zinc-400 text-sm font-medium">For large-scale operations with custom needs, unlimited messages, and dedicated support.</p>
              </div>
              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">Custom</span>
                </div>
                <p className="text-zinc-500 text-xs font-medium mt-1">Tailored pricing for your business</p>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {[
                  'Unlimited WhatsApp Numbers',
                  'Unlimited Agents',
                  'Unlimited Messages',
                  'Everything in Pro',
                  'White-Label Options',
                  'Custom AI Training',
                  'Dedicated Account Manager',
                  'Custom Integrations',
                  'On-Premise Deployment',
                  '24/7 Priority Support',
                  'SLA Guarantee',
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className="text-zinc-300 text-sm font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => window.open('https://wa.me/917457863240?text=Hi! I want to know about the Enterprise plan for ChatPro365', '_blank')}
                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-lg justify-center"
              >
                Contact Sales
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Pricing Footer Note */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-6 text-zinc-500 text-sm font-medium">
              {[
                { icon: CheckCircle, text: 'No credit card required' },
                { icon: Shield, text: 'Bank-grade security' },
                { icon: Clock, text: 'Setup in under 10 minutes' },
                { icon: HeadphonesIcon, text: '24/7 dedicated support' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-emerald-500" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 9: FINAL CTA
      ════════════════════════════════════════ */}
      <section className="py-16 md:py-32 bg-zinc-950 relative overflow-hidden border-t border-zinc-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-violet-600/25 to-fuchsia-600/25 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-[80px]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-zinc-300 text-sm font-bold mb-8">
            <TrendingUp className="w-4 h-4 text-emerald-400" /> Ready to Scale?
          </div>
          <h2 className="text-section-title font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to Turn Your WhatsApp Into Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-orange-400">Highest Grossing Sales Channel?</span>
          </h2>
          <p className="text-lead text-zinc-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Sign up today and get access to the complete AI-powered business suite. No complex coding required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(124, 58, 237, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all flex items-center justify-center gap-2 shadow-2xl hover:opacity-90"
              id="final-cta-btn"
            >
              Start Your Free Trial Now <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
          <p className="mt-8 text-zinc-500 text-sm flex items-center justify-center gap-2 font-medium">
            <CheckCircle className="w-5 h-5 text-emerald-400" /> No credit card required &nbsp;·&nbsp; <CheckCircle className="w-5 h-5 text-emerald-400" /> No coding needed &nbsp;·&nbsp; <CheckCircle className="w-5 h-5 text-emerald-400" /> Setup in minutes
          </p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 8: FAQ
      ════════════════════════════════════════ */}
      <section id="faq" className="py-12 md:py-24 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-6">
              <HeadphonesIcon className="w-4 h-4" /> Got Questions?
            </div>
            <h2 className="text-section-title font-extrabold mb-4 tracking-tight text-zinc-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lead text-zinc-500 font-medium">Everything you need to know before getting started.</p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.05 }}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-center mt-12">
            <p className="text-zinc-500 font-medium mb-4">Still have questions?</p>
            <a href="https://wa.me/917457863240?text=Hi! I have a question about ChatPro365" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg text-base">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
              Chat With Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="bg-zinc-950 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
            <div className="md:col-span-1">
              <ChatproLogo className="h-16 w-auto drop-shadow-sm -ml-2 brightness-0 invert" />
              <p className="text-zinc-400 text-base mt-6 mb-8 font-medium leading-relaxed">
                ChatPro365 – Complete WhatsApp Business Automation Platform. Your entire customer journey in one intelligent dashboard.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-violet-400 hover:bg-zinc-700 transition-all border border-zinc-700">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-violet-400 hover:bg-zinc-700 transition-all border border-zinc-700">
                  <Smartphone className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg tracking-tight">Product</h4>
              <ul className="space-y-4 text-base font-medium text-zinc-400">
                <li><a href="#features" className="hover:text-violet-400 transition-colors">Product Features</a></li>
                <li><a href="#comparison" className="hover:text-violet-400 transition-colors">Compare Plans</a></li>
                <li><a href="#faq" className="hover:text-violet-400 transition-colors">Case Studies</a></li>
                <li><button onClick={() => setShowModal(true)} className="hover:text-violet-400 transition-colors text-left">Book a Demo</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg tracking-tight">Resources</h4>
              <ul className="space-y-4 text-base font-medium text-zinc-400">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg tracking-tight">Legal</h4>
              <ul className="space-y-4 text-base font-medium text-zinc-400">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">GDPR Compliance</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-500 text-sm font-medium">© 2026 ChatPro365. All Rights Reserved.</div>
            <div className="flex gap-6 text-sm text-zinc-500 font-medium">
              <span>Made with ❤️ for modern businesses.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href="https://wa.me/917457863240"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-zinc-900 text-white text-sm font-bold py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
          Chat with our Bot
        </span>
      </a>

    </div>
  );
};

export default LandingPage;