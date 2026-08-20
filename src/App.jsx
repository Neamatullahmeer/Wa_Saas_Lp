import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './LandingPage';
import { SITE, findRoute } from './seo/manifest';
import {
  PrivacyPolicyPage, TermsOfServicePage, GDPRPage, CookiePolicyPage,
  HelpCenterPage, APIDocsPage, BlogPage, BlogPostPage, CommunityPage,
  RefundPolicyPage, AcceptableUsePage, ContactUsPage
} from './FooterPages';
import {
  AboutPage, PricingPage, FaqPage, IndustriesPage, IndustryPage,
  ComparePage, ComparisonPage,
} from './MarketingPages';
import { industries } from './content/industries';
import { comparisons } from './content/comparisons';

// Maps route paths to section IDs on the landing page. Only /features is still
// an alias — about, pricing, faq and compare are real pages of their own now.
const ROUTE_TO_SECTION = {
  '/features': 'features',
};

const ScrollToSection = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const sectionId = ROUTE_TO_SECTION[pathname];
    if (sectionId) {
      // Small delay so the DOM is ready after route change
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

// Every route ships as its own static HTML file with the correct head already in
// it (see scripts/postbuild-seo.mjs) — that is what crawlers read. This only has
// to keep things straight during client-side navigation, and it does so by
// editing the existing tags in place. Appending a second <link rel="canonical">
// would make Google discard both.
const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = findRoute(pathname);

    if (!route) {
      document.title = 'Page Not Found | ChatPro365';
      setMeta('meta[name="robots"]', 'content', 'noindex, follow');
      return;
    }

    const url = route.path === '/' ? `${SITE}/` : `${SITE}${route.path}`;
    const canonical = route.canonical === '/' ? `${SITE}/` : `${SITE}${route.canonical}`;

    document.title = route.title;
    setMeta('meta[name="robots"]', 'content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('meta[name="title"]', 'content', route.title);
    setMeta('meta[name="description"]', 'content', route.description);
    setMeta('link[rel="canonical"]', 'href', canonical);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', route.title);
    setMeta('meta[property="og:description"]', 'content', route.description);
    setMeta('meta[name="twitter:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', route.title);
    setMeta('meta[name="twitter:description"]', 'content', route.description);
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

// Hard navigation to an unknown URL is served the static 404.html by Vercel with
// a real 404 status. This only renders when the visitor reaches a dead link
// through client-side routing.
const NotFoundPage = () => (
  <div className="min-h-screen bg-zinc-950 text-zinc-200 flex items-center justify-center px-6 text-center">
    <div>
      <div className="text-7xl font-extrabold text-emerald-500 leading-none">404</div>
      <h1 className="text-2xl font-bold text-white mt-4 mb-2">This page doesn't exist</h1>
      <p className="text-zinc-400 max-w-md mx-auto mb-8">
        The link may be broken or the page may have moved. Let's get you back on track.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <Link to="/" className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors">
          Go to homepage
        </Link>
        <Link to="/contact" className="px-6 py-3 rounded-full border border-zinc-700 hover:bg-zinc-900 text-zinc-300 font-semibold transition-colors">
          Contact us
        </Link>
      </div>
    </div>
  </div>
);

// The route tree without a router around it, so the prerender build can wrap the
// same tree in a MemoryRouter (see src/entry-server.jsx) while the browser gets
// a BrowserRouter below. ScrollToSection and RouteSeo only act inside effects,
// which never run during renderToString — nothing here touches the DOM on the
// server.
export function AppRoutes() {
  return (
    <>
      <ScrollToSection />
      <RouteSeo />
      <Routes>
        {/* Landing page (section anchors like /#features still work in-page) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<LandingPage />} />

        {/* Pages that own their own content */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FaqPage />} />

        {/* Industries — keyword URLs, so the slug is passed in rather than parsed */}
        <Route path="/industries" element={<IndustriesPage />} />
        {industries.map((ind) => (
          <Route key={ind.path} path={ind.path} element={<IndustryPage slug={ind.slug} />} />
        ))}

        {/* Comparisons */}
        <Route path="/compare" element={<ComparePage />} />
        {comparisons.map((cmp) => (
          <Route key={cmp.path} path={cmp.path} element={<ComparisonPage slug={cmp.slug} />} />
        ))}

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
        {/* One prerendered file per markdown post — see src/content/blog/ */}
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/community" element={<PageRoute component={CommunityPage} />} />

        {/* Unknown URLs → a real 404, not a silent copy of the landing page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
