import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { API_BASE_URL, APP_BASE_URL } from './lib/apiConfig';
import api from './lib/api'; // 🟢 NAYA: Axios Import kiya API call ke liye
import { Bot, ChevronRight, MessageSquare, Zap, Clock, Users, ArrowRight, Shield, Globe, Smartphone, CheckCircle, Check, Database, Sparkles, X, Loader2, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatproLogo = ({ className = "h-12 w-auto" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" className={className}>
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

const LandingPage = () => {

  // Modal aur Form State for Lead Capture
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', phone: '' });
  // ✅ Mobile hamburger menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // 1️⃣ Puraana User: Seedha Login par bhejo
  // (Login is now handled via an <a> tag directly below)

  // 2️⃣ Naya User: Form Submit karne par Lead Capture karo aur fir Register par bhejo
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

    // Redirecting directly (do not unmount the modal or reset loading,
    // otherwise the browser might cancel the navigation)
    console.log("Redirecting to: ", targetUrl);
    window.location.href = targetUrl;
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 overflow-x-hidden selection:bg-violet-200 relative">

      {/* SEO Meta Tags specific to this page */}
      <Helmet>
        <title>Chatpro365 | Turn WhatsApp into a 24/7 AI Sales Agent</title>
        <meta name="description" content="Automate your sales on WhatsApp with Chatpro365. Custom AI prompts, interactive buttons, and universal CRM webhooks to close deals while you sleep." />
        <link rel="canonical" href="https://chatpro365.com/" />
      </Helmet>

      {/* 🟢 NAYA: LEAD CAPTURE MODAL (POPUP) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
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
                <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-900">Let's get started!</h3>
                <p className="text-zinc-500 font-medium mt-2">Enter your details to create your 24/7 AI Sales Agent.</p>
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
                  className="w-full bg-zinc-950 text-white font-bold py-3.5 rounded-xl hover:bg-zinc-800 transition-all flex justify-center items-center gap-2 mt-2"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Continue <ArrowRight className="w-4 h-4" /></>}
                </button>
                <p className="text-xs text-center text-zinc-400 mt-4">We'll never share your details with anyone.</p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ✅ MOBILE-FIRST Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200/50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => { window.scrollTo(0, 0); setMenuOpen(false); }}
              role="link"
              aria-label="Chatpro365 home"
            >
              <ChatproLogo className="h-12 sm:h-14 w-auto drop-shadow-sm -ml-2" />
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8 text-zinc-500 font-medium">
              <a href="#features" className="hover:text-zinc-900 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-zinc-900 transition-colors">How it Works</a>
              <a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a>
            </div>

            {/* Desktop Right Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`${APP_BASE_URL}/login`}
                className="text-zinc-500 font-medium hover:text-zinc-900 transition-colors"
              >
                Login
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)}
                className="bg-zinc-950 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-zinc-900/20"
                aria-label="Get Started with Chatpro365"
              >
                Get Started
              </motion.button>
            </div>

            {/* ✅ Mobile: Login + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`${APP_BASE_URL}/login`}
                className="text-zinc-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-zinc-100 transition-colors"
                aria-label="Login to your account"
              >
                Login
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X className="w-5 h-5 text-zinc-800" /> : <Menu className="w-5 h-5 text-zinc-800" />}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Slide-Down Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-zinc-100"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                <a
                  href="#features"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-zinc-700 font-semibold hover:bg-zinc-50 transition-colors text-base"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-zinc-700 font-semibold hover:bg-zinc-50 transition-colors text-base"
                >
                  How it Works
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-zinc-700 font-semibold hover:bg-zinc-50 transition-colors text-base"
                >
                  Pricing
                </a>
                <div className="mt-3 pt-3 border-t border-zinc-100">
                  <button
                    onClick={() => { setShowModal(true); setMenuOpen(false); }}
                    className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-bold text-base transition-colors hover:bg-zinc-800"
                    aria-label="Get Started with Chatpro365"
                  >
                    Get Started — Free Trial
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ✅ Hero Section — mobile-first padding */}
      <section className="relative pt-28 pb-16 sm:pt-36 lg:pt-48 lg:pb-32 overflow-hidden" aria-label="Hero section">
        {/* Deep Modern Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-30 bg-gradient-to-b from-violet-500 via-fuchsia-400 to-transparent blur-[120px] -z-10 rounded-full mix-blend-multiply" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-violet-100 text-violet-700 text-sm font-bold mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-fuchsia-500 animate-pulse" />
              New: Universal CRM Webhooks are live
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Turn WhatsApp into your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-500">
                24/7 AI Sales Agent
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto mb-10 font-medium">
              Automatically calculate prices, send interactive buttons, and push leads directly to your CRM—while you sleep.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-20 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowModal(true)} // 🟢 NAYA: Hero section walo ko bhi pehle Popup dikhao
                className="bg-zinc-950 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-zinc-900/20 flex items-center justify-center gap-2 w-full sm:w-auto relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">Start Free Trial <ArrowRight className="w-5 h-5" /></span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/91XXXXXXXXXX?text=Hi! I want a demo of Chatpro365', '_blank')}
                className="bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md w-full sm:w-auto"
              >
                Book a Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Fake Chat UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto max-w-3xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white/80 rounded-[2rem] shadow-2xl border border-white overflow-hidden backdrop-blur-2xl">
              <div className="bg-white/50 px-6 py-4 border-b border-zinc-100/50 flex items-center gap-4 backdrop-blur-md">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center shadow-inner">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-zinc-900">Chatpro365 Bot</h3>
                  <p className="text-xs text-emerald-500 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
                  </p>
                </div>
              </div>
              <div className="p-6 bg-[#f8f8f8]/50 h-[400px] overflow-y-auto flex flex-col gap-4 relative backdrop-blur-sm">

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-100 max-w-[80%] text-left"
                >
                  <p className="text-zinc-800 font-medium leading-relaxed">Hi there! 👋 I saw you were looking at our premium plans. Can I help you find the right fit?</p>
                  <p className="text-[10px] text-zinc-400 mt-2 text-right">10:42 AM</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 2.2 }}
                  className="bg-zinc-950 p-4 rounded-2xl rounded-tr-sm shadow-md max-w-[80%] self-end text-left"
                >
                  <p className="text-white font-medium leading-relaxed">Yes, I have a team of 5. How much would it cost?</p>
                  <p className="text-[10px] text-zinc-400 mt-2 text-right">10:45 AM</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 3.5 }}
                  className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-100 max-w-[80%] text-left"
                >
                  <p className="text-zinc-800 font-medium leading-relaxed">For a team of 5, the Pro Plan is perfect. It's $49/mo and includes unlimited AI chats and auto-follow-ups.</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <button className="bg-zinc-50 hover:bg-zinc-100 transition-colors text-zinc-800 py-2.5 rounded-xl font-bold border border-zinc-200 text-sm">View Full Pricing</button>
                    <button onClick={() => setShowModal(true)} className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 transition-opacity text-white py-2.5 rounded-xl font-bold shadow-md text-sm">Start 14-Day Trial</button>
                  </div>
                  <p className="text-[10px] text-zinc-400 mt-2 text-right">10:45 AM</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 border-y border-zinc-200/50 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-8">
            Trusted by 100+ innovative businesses
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
            <div className="flex items-center gap-2"><Globe className="w-8 h-8 text-zinc-800" /> <span className="font-display font-extrabold text-2xl text-zinc-800 tracking-tight">Acme Corp</span></div>
            <div className="flex items-center gap-2"><Shield className="w-8 h-8 text-zinc-800" /> <span className="font-display font-extrabold text-2xl text-zinc-800 tracking-tight">Stark Ind.</span></div>
            <div className="flex items-center gap-2"><Smartphone className="w-8 h-8 text-zinc-800" /> <span className="font-display font-extrabold text-2xl text-zinc-800 tracking-tight">Globex</span></div>
            <div className="flex items-center gap-2"><Zap className="w-8 h-8 text-zinc-800" /> <span className="font-display font-extrabold text-2xl text-zinc-800 tracking-tight">Initech</span></div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid (Bento Layout) */}
      <section id="features" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-zinc-900">Work smarter, not harder.</h2>
            <p className="text-xl text-zinc-500 font-medium">Everything you need to automate your WhatsApp sales and close deals faster.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Feature 1 */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-violet-50 rounded-2xl flex items-center justify-center mb-6 border border-violet-100">
                <Bot className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900">Custom System Prompts</h3>
              <p className="text-zinc-500 text-lg mb-6 font-medium">Train your AI with specific rules, pricing, and FAQs so it answers exactly like your best salesperson.</p>
              <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100 font-mono text-sm text-zinc-600 shadow-inner">
                <span className="text-violet-600 font-bold">System:</span> "You are an expert real estate agent. Always ask for their budget and preferred location before showing properties."
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 border border-orange-100">
                <Clock className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Smart Auto-Follow-ups</h3>
              <p className="text-zinc-500 font-medium">Never lose a warm lead. Automatically ping inactive users after 24 hours to revive the conversation.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 border border-emerald-100">
                <MessageSquare className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Interactive Buttons</h3>
              <p className="text-zinc-500 font-medium">Boost conversions by 3x. Use clickable buttons for booking demos or adding items to cart directly in chat.</p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-fuchsia-50 rounded-2xl flex items-center justify-center mb-6 border border-fuchsia-100">
                <Database className="w-7 h-7 text-fuchsia-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Universal CRM Integration</h3>
              <p className="text-zinc-500 font-medium mb-6">Our global webhook format pushes hot leads instantly to HubSpot, Zoho, or any custom CRM you use.</p>
              <div className="bg-zinc-950 p-4 rounded-2xl font-mono text-xs text-emerald-400 overflow-hidden shadow-inner flex items-center border border-zinc-800">
                <span className="text-zinc-600 mr-2">{'>'}</span> {`{ "lead": "verified", "source": "whatsapp" }`}
              </div>
            </motion.div>

            {/* Feature 5 */}
            <motion.div variants={fadeUp} whileHover={{ y: -5 }} className="bg-zinc-950 rounded-3xl p-8 shadow-xl border border-zinc-800 hover:shadow-2xl transition-all duration-300 overflow-hidden relative text-white">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10 backdrop-blur-md border border-white/5">
                <Users className="w-7 h-7 text-fuchsia-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">Seamless Human Handoff</h3>
              <p className="text-zinc-400 text-lg relative z-10 font-medium">When a deal gets complex, the AI steps back and notifies your team to take over.</p>
              <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
                <Users className="w-64 h-64 text-zinc-800" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-zinc-900">Up and running in minutes.</h2>
            <p className="text-xl text-zinc-500 font-medium">No coding required. Connect and automate.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
          >
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-violet-100 via-fuchsia-100 to-orange-100 z-0"></div>

            {[
              { icon: Smartphone, title: "1. Connect WhatsApp", desc: "Scan a QR code to link your business number securely." },
              { icon: Bot, title: "2. Set AI Rules", desc: "Give the AI a prompt and define when to follow up." },
              { icon: Zap, title: "3. Watch Sales Grow", desc: "Sit back while the AI handles inquiries and pushes leads to your CRM." }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 bg-white border-4 border-zinc-50 rounded-[2rem] shadow-xl flex items-center justify-center mb-8 group-hover:border-violet-50 transition-colors"
                >
                  <step.icon className="w-10 h-10 text-violet-600" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-zinc-900">{step.title}</h3>
                <p className="text-zinc-500 font-medium text-lg px-4">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-zinc-50 border-t border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-zinc-900">Simple, transparent pricing.</h2>
            <p className="text-xl text-zinc-500 font-medium">Start for free, then choose a plan that scales with your business.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center"
          >
            {/* Starter Plan */}
            <motion.div variants={fadeUp} className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2 text-zinc-900">Starter</h3>
              <p className="text-zinc-500 mb-8 font-medium">Perfect for small businesses just getting started.</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold tracking-tight text-zinc-900">$29</span>
                <span className="text-zinc-400 font-bold text-lg">/month</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(true)} // 🟢 NAYA: Pricing section me bhi Popup
                className="w-full bg-zinc-50 hover:bg-zinc-100 text-zinc-900 py-4 rounded-2xl font-bold transition-colors mb-8 border border-zinc-200 text-lg shadow-sm"
              >
                Start 14-Day Free Trial
              </motion.button>
              <ul className="space-y-4">
                {['Up to 1,000 AI messages/mo', 'Basic System Prompts', 'Standard Auto-Follow-ups', 'Email Support'].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emerald-500 shrink-0" />
                    <span className="text-zinc-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              variants={fadeUp}
              className="bg-zinc-950 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border border-zinc-800 relative md:scale-105 z-10"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-[2.5rem] blur opacity-20 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider border border-white/10">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <p className="text-zinc-400 mb-8 font-medium">For growing teams that need more power and automation.</p>
                <div className="mb-8">
                  <span className="text-5xl font-extrabold text-white tracking-tight">$79</span>
                  <span className="text-zinc-500 font-bold text-lg">/month</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowModal(true)} // 🟢 NAYA: Pricing section me bhi Popup
                  className="w-full bg-white text-zinc-950 py-4 rounded-2xl font-bold transition-all mb-8 shadow-lg text-lg hover:bg-zinc-100"
                >
                  Start 14-Day Free Trial
                </motion.button>
                <ul className="space-y-4">
                  {['Unlimited AI messages', 'Advanced System Prompts', 'Universal Webhooks (Any CRM)', 'Interactive WhatsApp Buttons', 'Seamless Human Handoff', '24/7 Priority Support'].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-violet-400 shrink-0" />
                      <span className="text-zinc-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Deep CTA Section */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden border-t border-zinc-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Ready to hire your new <br /> best salesperson?
          </h2>
          <p className="text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">
            Stop losing leads to slow response times. Let Chatpro365 handle the heavy lifting while you focus on scaling.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(124, 58, 237, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)} // 🟢 NAYA: Yahan bhi popup
              className="bg-white text-zinc-950 px-10 py-5 rounded-full font-bold text-xl transition-all flex items-center justify-center gap-2 hover:bg-zinc-100"
            >
              Start Your Free Trial
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
          <p className="mt-8 text-zinc-500 text-sm flex items-center justify-center gap-2 font-medium">
            <CheckCircle className="w-5 h-5 text-emerald-400" /> No credit card required. 14-day free trial.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <ChatproLogo className="h-16 w-auto drop-shadow-sm -ml-2" />
              </div>
              <p className="text-zinc-500 text-base mb-8 font-medium">
                Turn your WhatsApp into a 24/7 AI sales engine. Close deals while you sleep.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 hover:text-violet-600 hover:bg-violet-50 transition-all border border-zinc-100"><Globe className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-zinc-50 rounded-full flex items-center justify-center text-zinc-400 hover:text-violet-600 hover:bg-violet-50 transition-all border border-zinc-100"><Smartphone className="w-5 h-5" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-zinc-900 mb-6 text-lg tracking-tight">Product</h4>
              <ul className="space-y-4 text-base font-medium text-zinc-500">
                <li><a href="#features" className="hover:text-violet-600 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-violet-600 transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-violet-600 transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-zinc-900 mb-6 text-lg tracking-tight">Resources</h4>
              <ul className="space-y-4 text-base font-medium text-zinc-500">
                <li><a href="#" className="hover:text-violet-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">API Documentation</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-zinc-900 mb-6 text-lg tracking-tight">Company</h4>
              <ul className="space-y-4 text-base font-medium text-zinc-500">
                <li><a href="#" className="hover:text-violet-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Chatpro365 Inc. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-zinc-500 font-medium">
              <span>Made with ❤️ for modern businesses.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 🟢 NAYA: Floating WhatsApp Button */}
      <a
        href="https://wa.me/917457863240"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
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