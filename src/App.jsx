import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import {
  PrivacyPolicyPage, TermsOfServicePage, GDPRPage, CookiePolicyPage,
  HelpCenterPage, APIDocsPage, BlogPage, CommunityPage, CaseStudiesPage,
  RefundPolicyPage, AcceptableUsePage, ContactUsPage
} from './FooterPages';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main Pages with isolated sections via CSS */}
        <Route path="/" element={<LandingPage activeSection="all" />} />
        <Route path="/features" element={<LandingPage activeSection="features" />} />
        <Route path="/pricing" element={<LandingPage activeSection="pricing" />} />
        <Route path="/compare" element={<LandingPage activeSection="compare" />} />
        <Route path="/about" element={<LandingPage activeSection="about" />} />
        <Route path="/faq" element={<LandingPage activeSection="faq" />} />

        {/* Legal & Footer Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/refund" element={<RefundPolicyPage />} />
        <Route path="/acceptable-use" element={<AcceptableUsePage />} />
        <Route path="/gdpr" element={<GDPRPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/help" element={<HelpCenterPage />} />
        <Route path="/api-docs" element={<APIDocsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;