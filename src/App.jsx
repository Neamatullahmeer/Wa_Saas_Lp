import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './LandingPage';
import {
  PrivacyPolicyPage, TermsOfServicePage, GDPRPage, CookiePolicyPage,
  HelpCenterPage, APIDocsPage, BlogPage, CommunityPage, CaseStudiesPage,
  RefundPolicyPage, AcceptableUsePage, ContactUsPage
} from './FooterPages';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// The footer / legal pages are built as modals (isOpen + onClose). When visited
// as their own URL we render them full-page with isOpen forced on, and the close
// button takes the visitor back to the home page.
const PageRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  return <Component isOpen={true} onClose={() => navigate('/')} />;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Landing page (section anchors like /#features still work in-page) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<LandingPage />} />
        <Route path="/pricing" element={<LandingPage />} />
        <Route path="/compare" element={<LandingPage />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/faq" element={<LandingPage />} />

        {/* Legal & Footer Pages (real URLs for SEO) */}
        <Route path="/privacy-policy" element={<PageRoute component={PrivacyPolicyPage} />} />
        <Route path="/terms" element={<PageRoute component={TermsOfServicePage} />} />
        <Route path="/refund" element={<PageRoute component={RefundPolicyPage} />} />
        <Route path="/acceptable-use" element={<PageRoute component={AcceptableUsePage} />} />
        <Route path="/gdpr" element={<PageRoute component={GDPRPage} />} />
        <Route path="/cookie-policy" element={<PageRoute component={CookiePolicyPage} />} />
        <Route path="/contact" element={<PageRoute component={ContactUsPage} />} />
        <Route path="/help" element={<PageRoute component={HelpCenterPage} />} />
        <Route path="/api-docs" element={<PageRoute component={APIDocsPage} />} />
        <Route path="/blog" element={<PageRoute component={BlogPage} />} />
        <Route path="/community" element={<PageRoute component={CommunityPage} />} />
        <Route path="/case-studies" element={<PageRoute component={CaseStudiesPage} />} />

        {/* Unknown URLs → home */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
