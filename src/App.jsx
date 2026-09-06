import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import QuickActionButtons from "./components/common/QuickActionButtons";
import Toast from "./components/common/Toast";
import WishlistDrawer from "./components/products/WishlistDrawer";
import OfferPopup from "./components/common/OfferPopup";

// Pages
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Services from "./pages/Services/Services";
import Lenses from "./pages/Lenses/Lenses";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Offers from "./pages/Offers/Offers";
import Appointment from "./pages/Appointment/Appointment";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import FAQ from "./pages/FAQ/FAQ";
import Brands from "./pages/Brands/Brands";
import AdminPanel from "./pages/Admin/AdminPanel";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import Login from "./pages/Auth/Login";
import AuthRoute from "./components/common/AuthRoute";

// Scroll to Top component on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

// Scroll Progress Bar component
const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gold z-50 transition-all duration-100 ease-out"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

// Back to Top button
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 md:bottom-40 right-6 bg-primary hover:bg-gold dark:bg-gold dark:hover:bg-yellow-500 text-white dark:text-gray-900 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-40 focus:outline-none"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

function App() {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";
  const [toasts, setToasts] = useState([]);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  // Expose toast method to window for global convenience
  useEffect(() => {
    window.showToast = (message, type = "success") => {
      const id = Date.now() + Math.random().toString();
      setToasts((prev) => [...prev, { id, message, type }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    };
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-darkText dark:text-gray-100 transition-colors duration-300">
      {!isAdmin && <OfferPopup />}
      <ScrollToTop />
      <ScrollProgressBar />
      
      {/* Premium Sticky Navigation Header */}
      {!isAdmin && <Navbar onOpenWishlist={() => setWishlistOpen(true)} />}

      {/* Main Content Area */}
      <main className={`flex-grow ${isAdmin ? "pt-0" : "pt-[120px] sm:pt-[130px] lg:pt-[165px]"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/lenses" element={<Lenses />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Premium Multi-column Footer */}
      {!isAdmin && <Footer />}

      {/* Mobile & Floating WhatsApp Button (Only WhatsApp Floating Action) */}
      {!isAdmin && <QuickActionButtons />}

      {/* Global Slide-in Wishlist Drawer */}
      <WishlistDrawer isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} />

      {/* Global Toasts Container */}
      <div className="fixed top-24 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
