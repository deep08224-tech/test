import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBoxes, FaWhatsapp, FaCalendarCheck, FaHeart, FaCog, FaChartBar, FaPlusCircle, FaTrash, FaCheck, FaTimes, FaUndo, FaSearch, FaTicketAlt, FaImage, FaSun, FaMoon, FaPen, FaSignOutAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { useProducts } from "../../context/ProductContext";
import { useTheme } from "../../context/ThemeContext";
import Breadcrumb from "../../components/common/Breadcrumb";
import { supabase } from "../../utils/supabaseClient";

const AdminPanel = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    products,
    addProduct,
    deleteProduct,
    updateProduct,
    whatsappClicks,
    siteContent,
    updateSiteContent,
    heroBanners,
    addHeroBanner,
    updateHeroBanner,
    deleteHeroBanner,
    setActiveHeroBanner,
    resetHeroBanners
  } = useProducts();

  // Local Page States
  const [activeTab, setActiveTab] = useState("analytics");
  const [editingId, setEditingId] = useState(null);
  const [editingBannerId, setEditingBannerId] = useState(null);
  const [bannerForm, setBannerForm] = useState({
    title: "",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    cta: "Shop Now",
    link: "/products?category=sunglasses"
  });
  const [appointments, setAppointments] = useState([]);
  const [wishlistSaves, setWishlistSaves] = useState(0);
  const [productSearch, setProductSearch] = useState("");
  const [bookingSearch, setBookingSearch] = useState("");

  // Supabase Authentication states
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Product Form State
  const [newProd, setNewProd] = useState({
    name: "",
    brand: "",
    category: "eyeglasses",
    price: "",
    discountPrice: "",
    description: "",
    frameShape: "Round",
    frameMaterial: "Titanium",
    frameColor: "Black",
    size: "Medium",
    images: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600&auto=format&fit=crop"]
  });

  const [customImageUrl, setCustomImageUrl] = useState("");

  // Settings State
  const [settingsForm, setSettingsForm] = useState({
    heroTitle: "",
    heroSubtitle: "",
    marqueeText: "",
    promoBannerText: "",
    storeHours: "",
    phone: "",
    email: "",
    address: "",
    whatsapp: ""
  });

  const convertDriveUrl = (url) => {
    if (!url) return "";
    if (url.includes("drive.google.com")) {
      let fileId = "";
      if (url.includes("/file/d/")) {
        const parts = url.split("/file/d/");
        if (parts[1]) {
          fileId = parts[1].split("/")[0];
        }
      } else if (url.includes("id=")) {
        const match = url.match(/[?&]id=([^&]+)/);
        if (match && match[1]) {
          fileId = match[1];
        }
      }
      if (fileId) {
        return `https://lh3.googleusercontent.com/d/${fileId}`;
      }
    }
    return url;
  };

  // Supabase Auth listener
  useEffect(() => {
    if (!supabase) {
      setAuthLoading(false);
      return;
    }

    // Check active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });

    // Listen for changes on auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setAuthLoading(false);
    });

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      if (window.showToast) window.showToast("Please enter email and password.", "error");
      return;
    }

    if (!supabase) {
      if (window.showToast) {
        window.showToast("Supabase is not configured. Please configure environment keys in your .env file.", "error");
      }
      return;
    }

    setSigningIn(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginEmail.trim(),
        password: loginPassword
      });

      if (error) throw error;

      setSession(data.session);
      if (window.showToast) window.showToast("Logged in successfully!", "success");
    } catch (err) {
      console.error("Sign in error:", err);
      if (window.showToast) {
        window.showToast(err.message || "Invalid credentials", "error");
      }
    } finally {
      setSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    setLoginEmail("");
    setLoginPassword("");
    if (supabase) {
      await supabase.auth.signOut();
      if (window.showToast) window.showToast("Signed out successfully.", "info");
    } else {
      setSession(null);
    }
    // Force a clean hard-refresh to clear all memory states and browser autofill caches
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  // Load local storage bookings and wishlist data on mount
  useEffect(() => {
    // Appointments
    const savedApts = localStorage.getItem("appointments");
    setAppointments(savedApts ? JSON.parse(savedApts) : []);

    // Wishlist saves count
    const savedWish = localStorage.getItem("wishlist");
    const parsedWish = savedWish ? JSON.parse(savedWish) : [];
    setWishlistSaves(parsedWish.length);

    // Site Settings Copy
    setSettingsForm({
      heroTitle: siteContent.heroTitle || "",
      heroSubtitle: siteContent.heroSubtitle || "",
      marqueeText: siteContent.marqueeText || "",
      promoBannerText: siteContent.promoBannerText || "",
      storeHours: siteContent.storeHours || "",
      phone: siteContent.phone || "",
      email: siteContent.email || "",
      address: siteContent.address || "",
      whatsapp: siteContent.whatsapp || ""
    });
  }, [siteContent]);

  // Appointment Status Toggles
  const handleAptStatusChange = (aptId, newStatus) => {
    const updated = appointments.map((apt) =>
      apt.id === aptId ? { ...apt, status: newStatus } : apt
    );
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    if (window.showToast) {
      window.showToast(`Appointment status updated to ${newStatus}!`, "success");
    }
  };

  const handleDeleteAppointment = (aptId) => {
    const filtered = appointments.filter((apt) => apt.id !== aptId);
    setAppointments(filtered);
    localStorage.setItem("appointments", JSON.stringify(filtered));
    if (window.showToast) {
      window.showToast("Booking request removed from records.", "info");
    }
  };

  // Add Product Submit
  const handleAddProductSubmit = (e) => {
    e.preventDefault();
    try {
      if (!newProd.name || !newProd.brand || !newProd.price) {
        if (window.showToast) window.showToast("Please fill in Name, Brand, and Price.", "error");
        return;
      }

      const priceNum = Number(newProd.price);
      const discNum = newProd.discountPrice ? Number(newProd.discountPrice) : null;

      if (discNum && discNum >= priceNum) {
        if (window.showToast) window.showToast("Discount price must be less than regular price.", "error");
        return;
      }

      const productPayload = {
        name: newProd.name,
        brand: newProd.brand,
        category: newProd.category,
        price: priceNum,
        discountPrice: discNum,
        description: newProd.description || "Premium showroom eyewear selection.",
        frameShape: newProd.frameShape,
        frameMaterial: newProd.frameMaterial,
        frameColor: newProd.frameColor,
        size: newProd.size,
        images: newProd.images && newProd.images.length > 0 ? newProd.images : ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600&auto=format&fit=crop"],
        featured: true,
        inStock: true,
        reviewsCount: 1,
        rating: 5.0,
        sizeInfo: `Lens Width: 50mm, Bridge: 18mm, Temple: 140mm`,
        lensCompatibility: "Single Vision, Bifocal, Progressive"
      };

      if (editingId) {
        updateProduct(editingId, productPayload);
        setEditingId(null);
        if (window.showToast) window.showToast(`${productPayload.name} updated successfully!`, "success");
      } else {
        addProduct(productPayload);
        if (window.showToast) window.showToast(`${productPayload.name} added to catalog!`, "success");
      }

      setNewProd({
        name: "",
        brand: "",
        category: "eyeglasses",
        price: "",
        discountPrice: "",
        description: "",
        frameShape: "Round",
        frameMaterial: "Titanium",
        frameColor: "Black",
        size: "Medium",
        images: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600&auto=format&fit=crop"]
      });
    } catch (err) {
      console.error("Error submitting product uploader form:", err);
      if (window.showToast) window.showToast(`Error: ${err.message}`, "error");
    }
  };

  const handleEditProductClick = (p) => {
    try {
      setEditingId(p.id);
      setNewProd({
        name: p.name || "",
        brand: p.brand || "",
        category: p.category || "eyeglasses",
        price: p.price || "",
        discountPrice: p.discountPrice || "",
        description: p.description || "",
        frameShape: p.frameShape || "Round",
        frameMaterial: p.frameMaterial || "Titanium",
        frameColor: p.frameColor || "Black",
        size: p.size || "Medium",
        images: Array.isArray(p.images) ? p.images : []
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Error populating product uploader form:", err);
      if (window.showToast) window.showToast(`Error: ${err.message}`, "error");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setNewProd({
      name: "",
      brand: "",
      category: "eyeglasses",
      price: "",
      discountPrice: "",
      description: "",
      frameShape: "Round",
      frameMaterial: "Titanium",
      frameColor: "Black",
      size: "Medium",
      images: ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600&auto=format&fit=crop"]
    });
  };

  const handleAddCustomImage = (e) => {
    e.preventDefault();
    const url = convertDriveUrl(customImageUrl.trim());
    if (!url) return;
    if (newProd.images.includes(url)) {
      if (window.showToast) window.showToast("This image is already added.", "info");
      return;
    }
    setNewProd((prev) => ({
      ...prev,
      images: [...prev.images, url]
    }));
    setCustomImageUrl("");
    if (window.showToast) window.showToast("Custom image added to gallery!", "success");
  };

  const handleRemoveImageIndex = (idx) => {
    setNewProd((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== idx)
    }));
  };

  const handleTogglePresetImage = (url) => {
    setNewProd((prev) => {
      const exists = prev.images.includes(url);
      const updated = exists
        ? prev.images.filter((img) => img !== url)
        : [...prev.images, url];
      return { ...prev, images: updated };
    });
  };

  // Hero Banner Form Handlers
  const handleBannerFormSubmit = (e) => {
    e.preventDefault();
    const finalImage = convertDriveUrl(bannerForm.image.trim());
    if (!finalImage) {
      if (window.showToast) window.showToast("Please enter a valid image URL", "error");
      return;
    }

    if (editingBannerId) {
      updateHeroBanner(editingBannerId, {
        title: bannerForm.title.trim() || "A Frame For Every Destination",
        subtitle: bannerForm.subtitle.trim() || "From beach escapes to city summers.",
        image: finalImage,
        cta: bannerForm.cta.trim() || "Shop Now",
        link: bannerForm.link.trim() || "/products?category=sunglasses"
      });
      setEditingBannerId(null);
      if (window.showToast) window.showToast("Hero Banner updated successfully!", "success");
    } else {
      addHeroBanner({
        title: bannerForm.title.trim() || "A Frame For Every Destination",
        subtitle: bannerForm.subtitle.trim() || "From beach escapes to city summers.",
        image: finalImage,
        cta: bannerForm.cta.trim() || "Shop Now",
        link: bannerForm.link.trim() || "/products?category=sunglasses",
        active: true
      });
      if (window.showToast) window.showToast("New Hero Banner created and set as active!", "success");
    }

    setBannerForm({
      title: "",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      cta: "Shop Now",
      link: "/products?category=sunglasses"
    });
  };

  const handleEditBannerClick = (b) => {
    setEditingBannerId(b.id);
    setBannerForm({
      title: b.title || "",
      subtitle: b.subtitle || "",
      image: b.image || "",
      cta: b.cta || "Shop Now",
      link: b.link || "/products?category=sunglasses"
    });
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleCancelBannerEdit = () => {
    setEditingBannerId(null);
    setBannerForm({
      title: "",
      subtitle: "",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      cta: "Shop Now",
      link: "/products?category=sunglasses"
    });
  };

  // Save Settings copy
  const handleSaveSettings = (e) => {
    e.preventDefault();
    Object.keys(settingsForm).forEach((key) => {
      updateSiteContent(key, settingsForm[key]);
    });
    if (window.showToast) window.showToast("Store configurations saved successfully!", "success");
  };

  // Category statistics counts
  const categoryCounts = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.brand.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(productSearch.toLowerCase())
  );

  const filteredBookings = appointments.filter(
    (apt) =>
      apt.name.toLowerCase().includes(bookingSearch.toLowerCase()) ||
      apt.phone.includes(bookingSearch) ||
      apt.service.toLowerCase().includes(bookingSearch.toLowerCase())
  );

  const breadcrumbItems = [
    { label: "Admin Console", link: "/admin" }
  ];

    // DEVELOPMENT BYPASS: Set to false to enable real Supabase Login screen when delivering the project
    const bypassAuth = false;

    if (!session && !bypassAuth) {
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#030712] flex items-center justify-center px-4 py-16 font-sans">
          <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-2xl shadow-premium space-y-6 relative overflow-hidden">
            {/* Subtle gold top border decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-gold" />
            
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-serif font-black text-gray-800 dark:text-white uppercase tracking-wider">
                Admin Portal
              </h2>
              <p className="text-xs text-gray-450 dark:text-gray-555">
                Sign in to manage showroom collection catalogs and settings.
              </p>
            </div>

            {!supabase && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/25 rounded-xl text-center text-amber-700 dark:text-amber-300 text-[11px] leading-relaxed">
                ⚠️ <strong>Connection Required:</strong> Supabase has not been configured yet. Please copy your API credentials to the <code>.env</code> file in the project directory.
              </div>
            )}

            <form onSubmit={handleSignIn} className="space-y-4 text-xs md:text-sm">
              <div className="space-y-1.5">
                <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="admin@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-3 border border-gray-250 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-950 dark:text-white placeholder-gray-450 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-gray-400 dark:text-gray-550 uppercase tracking-wider block">Security Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-9 pr-10 py-3 border border-gray-250 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-950 dark:text-white placeholder-gray-450 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-405" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-250 focus:outline-none text-[10px] font-bold uppercase tracking-wider"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={signingIn || !supabase}
                className="w-full py-3.5 bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 font-bold rounded-lg text-xs uppercase tracking-widest transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
              >
                {signingIn ? "Verifying Credentials..." : "Authenticate Admin"}
              </button>
            </form>

            <div className="text-center pt-2">
              <Link to="/" className="text-[11px] text-gray-450 hover:text-gold hover:underline transition-colors font-medium">
                ← Return to Main Storefront
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10">
        <Breadcrumb items={breadcrumbItems} />

      {/* Page Header */}
      <div className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-5">
        <h1 className="text-3xl md:text-4xl font-serif font-black text-gray-800 dark:text-white">
          Showroom Administrator Console
        </h1>
        <p className="text-xs md:text-sm text-gray-450 dark:text-gray-500 mt-1">
          Manage dynamic product catalogs, review customer bookings, manage banners, and configure store content copy.
        </p>
      </div>

      {/* Grid: Stats Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Stat 1: Total Products */}
        <div className="p-5 bg-white dark:bg-gray-900 border-t-4 border-t-primary dark:border-t-gold border-x border-b border-gray-150 dark:border-gray-800 rounded-2xl shadow-premium flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
          <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-gold/10 text-primary dark:text-gold flex items-center justify-center text-xl flex-shrink-0">
            <FaBoxes />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block">Total Catalog</span>
            <span className="text-xl font-bold text-gray-850 dark:text-white">{products.length} Items</span>
            <span className="text-[9px] text-gray-400 block mt-0.5">Live showroom items</span>
          </div>
        </div>

        {/* Stat 2: WhatsApp Enquiries */}
        <div className="p-5 bg-white dark:bg-gray-900 border-t-4 border-t-emerald-500 border-x border-b border-gray-150 dark:border-gray-800 rounded-2xl shadow-premium flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl flex-shrink-0">
            <FaWhatsapp />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block">WhatsApp Clicks</span>
            <span className="text-xl font-bold text-gray-850 dark:text-white">{whatsappClicks} Clicks</span>
            <span className="text-[9px] text-emerald-600 dark:text-emerald-400 block mt-0.5">↗ Tracked live conversions</span>
          </div>
        </div>

        {/* Stat 3: Booked Appointments */}
        <div className="p-5 bg-white dark:bg-gray-900 border-t-4 border-t-blue-500 border-x border-b border-gray-150 dark:border-gray-800 rounded-2xl shadow-premium flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
          <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl flex-shrink-0">
            <FaCalendarCheck />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block">Appointments</span>
            <span className="text-xl font-bold text-gray-850 dark:text-white">{appointments.length} Slots</span>
            <span className="text-[9px] text-gray-400 block mt-0.5">Active eye-tests</span>
          </div>
        </div>

        {/* Stat 4: Wishlist Saves */}
        <div className="p-5 bg-white dark:bg-gray-900 border-t-4 border-t-rose-500 border-x border-b border-gray-150 dark:border-gray-800 rounded-2xl shadow-premium flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
          <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-950/30 text-rose-500 dark:text-rose-400 flex items-center justify-center text-xl flex-shrink-0">
            <FaHeart />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 block">Wishlist Saves</span>
            <span className="text-xl font-bold text-gray-850 dark:text-white">{wishlistSaves} Likes</span>
            <span className="text-[9px] text-gray-400 block mt-0.5">Shopper saves count</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Tabs Nav Sidebar */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 bg-white dark:bg-gray-900 p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-premium">
          {/* Direct Back Navigation (As Navbar is hidden) */}
          <Link
            to="/"
            className="w-full flex items-center justify-start gap-2.5 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-800 transition-all focus:outline-none mb-2"
          >
            <FaUndo />
            <span>Back to Storefront</span>
          </Link>

          <button
            onClick={() => setActiveTab("analytics")}
            className={`w-full flex items-center justify-start gap-2.5 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all focus:outline-none whitespace-nowrap ${
              activeTab === "analytics"
                ? "bg-primary text-white dark:bg-gold dark:text-gray-950 shadow-md"
                : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <FaChartBar />
            <span>Overview Analytics</span>
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`w-full flex items-center justify-start gap-2.5 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all focus:outline-none whitespace-nowrap ${
              activeTab === "products"
                ? "bg-primary text-white dark:bg-gold dark:text-gray-950 shadow-md"
                : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <FaBoxes />
            <span>Product Catalog</span>
          </button>
          <button
            onClick={() => setActiveTab("hero-banners")}
            className={`w-full flex items-center justify-start gap-2.5 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all focus:outline-none whitespace-nowrap ${
              activeTab === "hero-banners"
                ? "bg-primary text-white dark:bg-gold dark:text-gray-950 shadow-md"
                : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <FaImage />
            <span>Hero Banners ({heroBanners ? heroBanners.length : 0})</span>
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className={`w-full flex items-center justify-start gap-2.5 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all focus:outline-none whitespace-nowrap ${
              activeTab === "bookings"
                ? "bg-primary text-white dark:bg-gold dark:text-gray-950 shadow-md"
                : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <FaCalendarCheck />
            <span>Bookings ({appointments.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center justify-start gap-2.5 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all focus:outline-none whitespace-nowrap ${
              activeTab === "settings"
                ? "bg-primary text-white dark:bg-gold dark:text-gray-950 shadow-md"
                : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <FaCog />
            <span>Site Editor</span>
          </button>

          {/* Sign Out Button (Only shown if signed in via Supabase) */}
          {session && (
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-start gap-2.5 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-transparent text-rose-500 hover:bg-rose-500/10 transition-all focus:outline-none mt-1 border-t border-gray-200 dark:border-gray-800 pt-3"
            >
              <FaSignOutAlt className="text-rose-500 text-sm" />
              <span>Sign Out</span>
            </button>
          )}
        </div>

        {/* Right Side: Tab Contents Panel */}
        <div className="lg:col-span-9 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-2xl shadow-premium p-6 min-h-[450px]">
          {/* TAB 1: OVERVIEW ANALYTICS */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                  Showroom Performance Metrics
                </h2>
                <p className="text-xs text-gray-450 dark:text-gray-500 mt-1">
                  Distribution of categories and customer engagement indices.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-850 rounded-xl space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Product Distribution by Category
                  </h3>
                  <div className="space-y-3.5">
                    {[
                      { key: "eyeglasses", label: "Eyeglasses", color: "bg-blue-500" },
                      { key: "sunglasses", label: "Sunglasses", color: "bg-amber-500" },
                      { key: "contact-lenses", label: "Contact Lenses", color: "bg-emerald-500" },
                      { key: "prescription-lenses", label: "Prescription Lenses", color: "bg-purple-500" }
                    ].map((item) => {
                      const count = categoryCounts[item.key] || 0;
                      const percentage = products.length ? Math.round((count / products.length) * 100) : 0;
                      return (
                        <div key={item.key} className="space-y-1 text-xs">
                          <div className="flex justify-between font-semibold">
                            <span className="text-gray-700 dark:text-gray-300">{item.label}</span>
                            <span className="text-gray-500">{count} frames ({percentage}%)</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${percentage}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-5 bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-850 rounded-xl flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">
                      Storefront Status Overview
                    </h3>
                    <p className="text-xs text-gray-550 dark:text-gray-400 leading-relaxed font-light font-sans">
                      This console manages product inventory, customer appointment slots, hero banner campaigns, and store text content.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-800 pt-3 text-xs space-y-1.5 font-medium">
                    <div className="flex justify-between">
                      <span className="text-gray-450">Configured Hero Banners:</span>
                      <span className="text-primary dark:text-gold font-bold">{heroBanners ? heroBanners.length : 0} Banners</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-450">Appointment Slots:</span>
                      <span className="text-gray-850 dark:text-white font-bold">{appointments.length} Bookings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCT MANAGEMENT */}
          {activeTab === "products" && (
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-2 mb-4">
                  <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
                    {editingId ? `Edit Product: ${newProd.name || "Details"}` : "Add New Product to Showroom"}
                  </h2>
                  {editingId && (
                    <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-500 rounded text-[9px] font-bold uppercase tracking-wider animate-pulse">
                      Edit Mode
                    </span>
                  )}
                </div>
                <form onSubmit={handleAddProductSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs">
                  {/* Left Column: Form Controls (8 Cols) */}
                  <div className="lg:col-span-8 space-y-6">
                    {/* Section 1: Core details */}
                    <div className="p-5 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-850 space-y-4">
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-gold block">
                        Step 1: Core Details
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Product Name</label>
                          <input
                            type="text"
                            placeholder="e.g. Ray-Ban Wayfarer Classic"
                            value={newProd.name}
                            onChange={(e) => setNewProd({ ...newProd, name: e.target.value })}
                            className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white"
                            required
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Brand Name</label>
                          <input
                            type="text"
                            placeholder="e.g. Ray-Ban"
                            value={newProd.brand}
                            onChange={(e) => setNewProd({ ...newProd, brand: e.target.value })}
                            className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white"
                            required
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Price (INR)</label>
                          <input
                            type="number"
                            placeholder="e.g. 5000"
                            value={newProd.price}
                            onChange={(e) => setNewProd({ ...newProd, price: e.target.value })}
                            className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white font-bold"
                            required
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Discount Price (INR - Optional)</label>
                          <input
                            type="number"
                            placeholder="e.g. 3999"
                            value={newProd.discountPrice}
                            onChange={(e) => setNewProd({ ...newProd, discountPrice: e.target.value })}
                            className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white font-bold"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Categories selection */}
                    <div className="p-5 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-850 space-y-3">
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-gold block">
                        Step 2: Select Category
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { key: "eyeglasses", label: "Eyeglasses", desc: "Prescription frames" },
                          { key: "sunglasses", label: "Sunglasses", desc: "UV Sun protection" },
                          { key: "contact-lenses", label: "Contact Lenses", desc: "Everyday comfort" },
                          { key: "prescription-lenses", label: "Optical Lenses", desc: "Custom power lenses" }
                        ].map((cat) => (
                          <div
                            key={cat.key}
                            onClick={() => setNewProd({ ...newProd, category: cat.key })}
                            className={`p-3 rounded-lg border text-center cursor-pointer transition-all ${
                              newProd.category === cat.key
                                ? "bg-primary border-primary text-white dark:bg-gold dark:border-gold dark:text-gray-950 shadow-md font-bold"
                                : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary dark:hover:border-gold"
                            }`}
                          >
                            <span className="block font-semibold text-xs">{cat.label}</span>
                            <span className={`text-[9px] block mt-0.5 leading-tight ${newProd.category === cat.key ? "text-white/80 dark:text-gray-900/80" : "text-gray-400"}`}>
                              {cat.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section 3: Style Specifications */}
                    <div className="p-5 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-850 space-y-4">
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-gold block">
                        Step 3: Style Specifications
                      </h3>
                      <div className="space-y-4">
                        {/* Shape pills */}
                        <div className="space-y-1.5">
                          <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Frame Shape</label>
                          <div className="flex flex-wrap gap-2">
                            {["Round", "Square", "Rectangle", "Aviator", "Hexagonal"].map((shape) => (
                              <button
                                key={shape}
                                type="button"
                                onClick={() => setNewProd({ ...newProd, frameShape: shape })}
                                className={`px-3.5 py-2 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all focus:outline-none ${
                                  newProd.frameShape === shape
                                    ? "bg-primary border-primary text-white dark:bg-gold dark:border-gold dark:text-gray-950 shadow-sm"
                                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-350 hover:bg-gray-50"
                                }`}
                              >
                                {shape}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Material pills */}
                        <div className="space-y-1.5">
                          <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Frame Material</label>
                          <div className="flex flex-wrap gap-2">
                            {["Titanium", "Acetate", "Stainless Steel", "TR90 Flexible"].map((mat) => (
                              <button
                                key={mat}
                                type="button"
                                onClick={() => setNewProd({ ...newProd, frameMaterial: mat })}
                                className={`px-3.5 py-2 rounded-full border text-[10px] font-bold uppercase tracking-wider transition-all focus:outline-none ${
                                  newProd.frameMaterial === mat
                                    ? "bg-primary border-primary text-white dark:bg-gold dark:border-gold dark:text-gray-950 shadow-sm"
                                    : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-350 hover:bg-gray-50"
                                }`}
                              >
                                {mat}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Color & Size */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Frame Color</label>
                            <input
                              type="text"
                              placeholder="e.g. Gold / Matte Black"
                              value={newProd.frameColor}
                              onChange={(e) => setNewProd({ ...newProd, frameColor: e.target.value })}
                              className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Frame Size</label>
                            <div className="flex gap-2">
                              {["Small", "Medium", "Wide"].map((size) => (
                                <button
                                  key={size}
                                  type="button"
                                  onClick={() => setNewProd({ ...newProd, size: size })}
                                  className={`flex-grow py-2 rounded border text-[10px] font-bold uppercase tracking-wider transition-all focus:outline-none ${
                                    newProd.size === size
                                      ? "bg-primary border-primary text-white dark:bg-gold dark:border-gold dark:text-gray-950 shadow-sm"
                                      : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-350 hover:bg-gray-50"
                                  }`}
                                >
                                  {size}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Choose Showcase Images */}
                    <div className="p-5 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-850 space-y-4">
                      <div>
                        <h3 className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-gold block mb-1">
                          Step 4: Attach Showcase Images
                        </h3>
                        <p className="text-[10px] text-gray-450">
                          Select one or more pictures for this product. Selected pictures show a checkmark (✓).
                        </p>
                      </div>
                      
                      {/* Visual Presets Grid */}
                      <div className="space-y-2">
                        <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">
                          Presets (Tap to select/deselect multiple):
                        </label>
                        <div className="grid grid-cols-4 gap-3">
                          {[
                            {
                              name: "Eyeglasses 1",
                              url: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600&auto=format&fit=crop"
                            },
                            {
                              name: "Sunglasses 1",
                              url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop"
                            },
                            {
                              name: "Sunglasses 2",
                              url: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop"
                            },
                            {
                              name: "Contact Lens",
                              url: "https://images.unsplash.com/photo-1516246838830-ec387063d803?q=80&w=600&auto=format&fit=crop"
                            }
                          ].map((preset) => {
                            const isSelected = newProd.images.includes(preset.url);
                            return (
                              <div
                                key={preset.url}
                                onClick={() => handleTogglePresetImage(preset.url)}
                                className={`relative aspect-square rounded-lg border-2 cursor-pointer overflow-hidden transition-all bg-white flex items-center justify-center p-1.5 ${
                                  isSelected
                                    ? "border-primary dark:border-gold shadow"
                                    : "border-gray-250 dark:border-gray-800 hover:border-gray-400"
                                }`}
                              >
                                <img
                                  src={preset.url}
                                  alt={preset.name}
                                  className="w-full h-full object-contain"
                                />
                                {isSelected && (
                                  <div className="absolute top-1 right-1 bg-primary dark:bg-gold text-white dark:text-gray-950 w-4 h-4 rounded-full flex items-center justify-center text-[7px]">
                                    <FaCheck />
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Custom URL addition */}
                      <div className="pt-3 border-t border-gray-200/50 dark:border-gray-850 space-y-2">
                        <label className="font-bold text-gray-400 dark:text-gray-550 uppercase tracking-wider block">Add Custom Image URL:</label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Paste custom link address..."
                            value={customImageUrl}
                            onChange={(e) => setCustomImageUrl(e.target.value)}
                            className="flex-grow p-2 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 text-gray-850 dark:text-white text-xs"
                          />
                          <button
                            type="button"
                            onClick={handleAddCustomImage}
                            className="px-3 bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 rounded text-[10px] font-bold uppercase tracking-wider transition-colors"
                          >
                            Add URL
                          </button>
                        </div>
                      </div>

                      {/* Selected Images list with delete buttons */}
                      {newProd.images.length > 0 && (
                        <div className="pt-3 border-t border-gray-200/50 dark:border-gray-850 space-y-2">
                          <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">
                            Attached Images ({newProd.images.length}):
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {newProd.images.map((img, index) => (
                              <div key={index} className="relative w-12 h-12 border border-gray-200 dark:border-gray-800 rounded bg-white p-0.5 group">
                                <img src={img} alt="" className="w-full h-full object-contain" />
                                <button
                                  type="button"
                                  onClick={() => handleRemoveImageIndex(index)}
                                  className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center text-[8px]"
                                  title="Remove image"
                                >
                                  <FaTimes />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Section 5: Description text */}
                    <div className="p-5 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-850 space-y-2">
                      <label className="font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">Description Details</label>
                      <textarea
                        rows="3"
                        placeholder="Product highlights, hinges comfort description..."
                        value={newProd.description}
                        onChange={(e) => setNewProd({ ...newProd, description: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white text-xs"
                        required
                      />
                    </div>

                    {/* Submit / Action Buttons */}
                    <div className="flex gap-3">
                      {editingId && (
                        <button
                          type="button"
                          onClick={handleCancelEdit}
                          className="w-1/3 flex items-center justify-center gap-2 py-3.5 border border-gray-300 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-850 text-gray-700 dark:text-gray-250 font-bold rounded-lg text-xs uppercase tracking-wider transition-all"
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        type="submit"
                        className={`${editingId ? "w-2/3" : "w-full"} flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 font-bold rounded-lg text-xs uppercase tracking-widest transition-all shadow-md`}
                      >
                        {editingId ? <FaCheck /> : <FaPlusCircle />}
                        <span>{editingId ? "Save Product Changes" : "Upload Product to Store"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Live Mock Preview Card (4 Cols) */}
                  <div className="lg:col-span-4 lg:sticky lg:top-10 space-y-4">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-450 dark:text-gray-500">
                      Live Preview Card
                    </h3>

                    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-150 dark:border-gray-800 shadow-premium transition-all duration-300">
                      <div className="aspect-square bg-gray-50 dark:bg-gray-950 flex items-center justify-center p-6 relative">
                        {newProd.images.length > 0 ? (
                          <img
                            src={newProd.images[0]}
                            alt="Mock preview"
                            onError={(e) => { e.target.style.display = "none"; }}
                            className="max-h-[160px] w-auto object-contain"
                          />
                        ) : (
                          <div className="text-center text-gray-400 space-y-1">
                            <FaImage className="text-2xl mx-auto opacity-30 animate-pulse" />
                            <span className="text-[9px] font-bold block">No Showcase Image</span>
                          </div>
                        )}
                        <span className="absolute top-3 left-3 bg-primary dark:bg-gold text-white dark:text-gray-950 text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                          Preview Mock
                        </span>
                        {newProd.discountPrice && (
                          <span className="absolute top-3 right-3 bg-rose-500 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                            Sale
                          </span>
                        )}
                        {/* Dynamic Images Count Badge */}
                        {newProd.images.length > 1 && (
                          <span className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur-md text-white text-[8px] font-bold px-2 py-0.5 rounded">
                            +{newProd.images.length - 1} angles
                          </span>
                        )}
                      </div>

                      {/* Display row of thumbnails in card preview */}
                      {newProd.images.length > 1 && (
                        <div className="px-4 py-2 bg-gray-50/50 dark:bg-gray-955/20 border-t border-gray-100 dark:border-gray-850 flex gap-1.5 overflow-x-auto">
                          {newProd.images.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt=""
                              className="w-8 h-8 rounded border border-gray-200 dark:border-gray-800 bg-white object-contain p-0.5 flex-shrink-0"
                            />
                          ))}
                        </div>
                      )}

                      <div className="p-4 space-y-2 border-t border-gray-100 dark:border-gray-850">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-primary dark:text-gold block">
                          {newProd.brand || "Brand Name"}
                        </span>
                        <h4 className="font-serif font-black text-sm text-gray-800 dark:text-white truncate">
                          {newProd.name || "Enter Product Name"}
                        </h4>

                        <div className="flex flex-wrap gap-1 mt-1">
                          <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-[8px] text-gray-555 dark:text-gray-400 font-bold rounded uppercase tracking-wide">
                            {newProd.frameShape}
                          </span>
                          <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-[8px] text-gray-555 dark:text-gray-400 font-bold rounded uppercase tracking-wide">
                            {newProd.frameMaterial}
                          </span>
                          <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-[8px] text-gray-555 dark:text-gray-400 font-bold rounded uppercase tracking-wide">
                            {newProd.size}
                          </span>
                        </div>

                        <div className="flex items-baseline gap-2 pt-2 border-t border-gray-55 dark:border-gray-850 mt-2">
                          <span className="text-xs font-bold text-gray-850 dark:text-white">
                            ₹{(Number(newProd.discountPrice) || Number(newProd.price) || 0).toLocaleString("en-IN")}
                          </span>
                          {newProd.discountPrice && newProd.price && (
                            <span className="text-[10px] line-through text-gray-400">
                              ₹{Number(newProd.price).toLocaleString("en-IN")}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[10px] text-amber-700 dark:text-amber-300 leading-relaxed font-light font-sans">
                      💡 <strong>Quick Tip:</strong> Use the preset links to test immediately, or paste any Unsplash image address to showcase custom model photos!
                    </div>
                  </div>
                </form>
              </div>

              {/* Products Table */}
              <div className="pt-6 border-t border-gray-150 dark:border-gray-800 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="font-serif text-lg font-bold text-gray-800 dark:text-white">
                    Showroom Catalog Manager ({products.length})
                  </h3>
                  <div className="relative w-full sm:w-60">
                    <input
                      type="text"
                      placeholder="Search catalog..."
                      value={productSearch}
                      onChange={(e) => setProductSearch(e.target.value)}
                      className="w-full text-xs py-2 pl-3 pr-8 rounded border border-gray-250 dark:border-gray-800 bg-white dark:bg-gray-950 dark:text-white"
                    />
                    <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-gray-150 dark:border-gray-800 shadow-premium bg-white dark:bg-gray-900">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-50/50 dark:bg-gray-950/50 text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider border-b border-gray-150 dark:border-gray-800">
                        <th className="p-4 text-[10px] tracking-wider">Product Details</th>
                        <th className="p-4 text-[10px] tracking-wider">Category</th>
                        <th className="p-4 text-[10px] tracking-wider">Price (INR)</th>
                        <th className="p-4 text-[10px] tracking-wider text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-850">
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((p) => (
                          <tr key={p.id} className="hover:bg-gray-50/40 dark:hover:bg-gray-950/30 text-gray-750 dark:text-gray-200 transition-colors duration-200">
                            <td className="p-4 flex items-center gap-4 py-3">
                              <img 
                                src={p.images[0]} 
                                alt="" 
                                className="w-12 h-12 object-contain rounded-xl border border-gray-150 dark:border-gray-800 bg-white p-1.5 shadow-sm flex-shrink-0" 
                              />
                              <div className="space-y-1">
                                <span className="font-bold text-sm text-gray-800 dark:text-white block leading-tight">{p.name}</span>
                                <div className="flex items-center gap-2 mt-1 flex-wrap">
                                  <span className="text-[10px] text-gray-400 font-medium">{p.brand}</span>
                                  <span className="text-gray-300 dark:text-gray-800">|</span>
                                  <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-[8px] text-gray-500 dark:text-gray-400 font-semibold rounded uppercase tracking-wider">
                                    {p.frameShape}
                                  </span>
                                  <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-[8px] text-gray-500 dark:text-gray-400 font-semibold rounded uppercase tracking-wider">
                                    {p.frameMaterial}
                                  </span>
                                  <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-[8px] text-gray-500 dark:text-gray-400 font-semibold rounded uppercase tracking-wider">
                                    {p.size}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full font-bold text-[9px] uppercase tracking-wider">
                                {p.category.replace("-", " ")}
                              </span>
                            </td>
                            <td className="p-4 font-serif font-black text-sm text-gray-900 dark:text-white">
                              ₹{(p.discountPrice || p.price).toLocaleString("en-IN")}
                              {p.discountPrice && (
                                <span className="text-[10px] line-through text-gray-400 font-light block mt-0.5 font-sans">
                                  ₹{p.price.toLocaleString("en-IN")}
                                </span>
                              )}
                            </td>
                            <td className="p-4 text-right">
                              <div className="flex justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => handleEditProductClick(p)}
                                  className="w-8 h-8 rounded-lg bg-indigo-50 hover:bg-indigo-500 text-indigo-600 hover:text-white dark:bg-indigo-950/20 dark:hover:bg-indigo-500 flex items-center justify-center transition-all duration-200 border border-indigo-100/30 dark:border-indigo-900/10 focus:outline-none"
                                  title="Edit Product Details"
                                >
                                  <FaPen className="text-[9px]" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => deleteProduct(p.id)}
                                  className="w-8 h-8 rounded-lg bg-rose-50 hover:bg-rose-500 text-rose-600 hover:text-white dark:bg-rose-950/20 dark:hover:bg-rose-500 flex items-center justify-center transition-all duration-200 border border-rose-100/30 dark:border-rose-900/10 focus:outline-none"
                                  title="Delete Product"
                                >
                                  <FaTrash className="text-[9px]" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center p-8 text-gray-450 dark:text-gray-500 font-light">
                            No products match your search.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: BOOKINGS MANAGER */}
          {activeTab === "bookings" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white pb-1">
                    Booked Appointments Manager ({appointments.length})
                  </h2>
                  <p className="text-xs text-gray-450 dark:text-gray-500">
                    Review and update client computerized eye test booking slots.
                  </p>
                </div>
                <div className="relative w-full sm:w-60">
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    value={bookingSearch}
                    onChange={(e) => setBookingSearch(e.target.value)}
                    className="w-full text-xs py-2 pl-3 pr-8 rounded border border-gray-250 dark:border-gray-800 bg-white dark:bg-gray-950 dark:text-white"
                  />
                  <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((apt) => (
                    <div key={apt.id} className="p-4 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-2xl shadow-premium space-y-3 hover:border-primary dark:hover:border-gold transition-colors duration-300">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-sm block text-gray-800 dark:text-white">{apt.name}</span>
                          <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-550 block mt-0.5">📞 {apt.phone}</span>
                        </div>
                        <span
                          className={`text-[8px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                            apt.status === "Confirmed"
                              ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/20 dark:text-emerald-355"
                              : apt.status === "Cancelled"
                              ? "bg-rose-50 text-rose-800 dark:bg-rose-950/20 dark:text-rose-350"
                              : "bg-amber-50 text-amber-850 dark:bg-amber-950/20 dark:text-amber-300"
                          }`}
                        >
                          {apt.status}
                        </span>
                      </div>

                      <div className="py-2.5 px-3 bg-gray-50 dark:bg-gray-950/50 rounded-xl space-y-1.5 text-[10px] font-sans">
                        <div className="flex justify-between font-bold text-primary dark:text-gold uppercase tracking-wider text-[9px]">
                          <span>Service Requested:</span>
                          <span>{apt.service}</span>
                        </div>
                        <div className="flex justify-between text-gray-550 dark:text-gray-400 font-light">
                          <span>Slot Details:</span>
                          <span>📅 {apt.date} at ⏰ {apt.time}</span>
                        </div>
                        {apt.message && (
                          <div className="text-[9px] italic text-gray-450 dark:text-gray-500 border-t border-gray-200/50 dark:border-gray-800/40 pt-1.5 mt-1.5">
                            "{apt.message}"
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-850 text-[9px] font-light text-gray-400">
                        <span>{apt.email || "No email provided"}</span>
                        <div className="flex gap-1.5">
                          {apt.status === "Pending" && (
                            <button
                              onClick={() => handleAptStatusChange(apt.id, "Confirmed")}
                              className="px-2.5 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded text-[8px] font-bold uppercase tracking-wider transition-colors"
                            >
                              Confirm
                            </button>
                          )}
                          {apt.status !== "Cancelled" && (
                            <button
                              onClick={() => handleAptStatusChange(apt.id, "Cancelled")}
                              className="px-2.5 py-1 bg-rose-50 hover:bg-rose-500 text-rose-600 hover:text-white rounded text-[8px] font-bold uppercase tracking-wider transition-colors"
                            >
                              Cancel
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteAppointment(apt.id)}
                            className="px-2.5 py-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-850 dark:hover:bg-gray-850 text-gray-650 dark:text-gray-350 rounded text-[8px] font-bold uppercase tracking-wider transition-colors"
                            title="Delete Slot"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12 bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-150 dark:border-gray-850 text-gray-400">
                    No active appointment slots found matching search filters.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: HERO BANNERS MANAGER */}
          {activeTab === "hero-banners" && (
            <div className="space-y-8">
              {/* 1. Live Storefront Active Banner Preview */}
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2 mb-4">
                  <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
                    Live Active Hero Banner Preview
                  </h2>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                    Active on Storefront
                  </span>
                </div>

                {(() => {
                  const activeB = (heroBanners && heroBanners.find((b) => b.active)) || (heroBanners && heroBanners[0]) || {
                    title: "A Frame For Every Destination",
                    subtitle: "From beach escapes to city summers.",
                    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
                    cta: "Shop Now"
                  };
                  return (
                    <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-premium border border-gray-200 dark:border-gray-800 flex items-center justify-center text-center p-6 bg-gray-950">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                        style={{ backgroundImage: `url('${activeB.image}')` }}
                      />
                      <div className="absolute inset-0 bg-black/45 z-10" />
                      <div className="relative z-20 space-y-3 max-w-2xl mx-auto text-white">
                        <h3 className="font-serif text-xl sm:text-3xl font-black uppercase tracking-wider drop-shadow-md">
                          {activeB.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-200">
                          {activeB.subtitle}
                        </p>
                        <div className="pt-2">
                          <span className="inline-block bg-white text-[#1C1B1B] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded shadow">
                            {activeB.cta || "Shop Now"}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* 2. Form: Add / Edit Banner */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-150 dark:border-gray-800 shadow-premium space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
                  <h3 className="font-serif text-lg font-bold text-gray-800 dark:text-white">
                    {editingBannerId ? "✏️ Edit Hero Banner" : "➕ Create New Hero Banner"}
                  </h3>
                  {editingBannerId && (
                    <button
                      type="button"
                      onClick={handleCancelBannerEdit}
                      className="text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 uppercase tracking-wider"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                <form onSubmit={handleBannerFormSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Main Headline */}
                    <div className="space-y-1 sm:col-span-2">
                      <label className="font-bold text-gray-500 uppercase tracking-wider block">
                        Main Headline Title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. A Frame For Every Destination"
                        value={bannerForm.title}
                        onChange={(e) => setBannerForm({ ...bannerForm, title: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white font-medium"
                        required
                      />
                    </div>

                    {/* Subtitle */}
                    <div className="space-y-1 sm:col-span-2">
                      <label className="font-bold text-gray-500 uppercase tracking-wider block">
                        Subtitle / Tagline
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. From beach escapes to city summers."
                        value={bannerForm.subtitle}
                        onChange={(e) => setBannerForm({ ...bannerForm, subtitle: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white"
                        required
                      />
                    </div>

                    {/* Image URL / Google Drive link */}
                    <div className="space-y-1 sm:col-span-2">
                      <label className="font-bold text-gray-500 uppercase tracking-wider block">
                        Background Image URL / Google Drive Link
                      </label>
                      <input
                        type="text"
                        placeholder="https://images.unsplash.com/... or Google Drive share link"
                        value={bannerForm.image}
                        onChange={(e) => setBannerForm({ ...bannerForm, image: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white"
                        required
                      />
                    </div>

                    {/* Quick Presets */}
                    <div className="sm:col-span-2 space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                        Quick Preset Background Images:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { label: "🏖️ Beach Sunglasses", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop" },
                          { label: "🕶️ Fashion Model 1", url: "/banner1.png" },
                          { label: "🌴 Summer Shades 2", url: "/banner2.png" },
                          { label: "👁️ Contact Lenses 4", url: "/banner4.png" },
                          { label: "✨ Luxury Showroom", url: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1600&auto=format&fit=crop" }
                        ].map((preset, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setBannerForm({ ...bannerForm, image: preset.url })}
                            className="text-[10px] font-semibold bg-gray-100 dark:bg-gray-800 hover:bg-[#8B1E22] hover:text-white dark:hover:bg-gold dark:hover:text-gray-950 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Button Text */}
                    <div className="space-y-1">
                      <label className="font-bold text-gray-500 uppercase tracking-wider block">
                        Button CTA Label
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Shop Now"
                        value={bannerForm.cta}
                        onChange={(e) => setBannerForm({ ...bannerForm, cta: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white font-medium"
                      />
                    </div>

                    {/* Button Target Link */}
                    <div className="space-y-1">
                      <label className="font-bold text-gray-500 uppercase tracking-wider block">
                        Button Target Link
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. /products?category=sunglasses"
                        value={bannerForm.link}
                        onChange={(e) => setBannerForm({ ...bannerForm, link: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 font-bold uppercase tracking-wider rounded transition-all shadow-sm"
                    >
                      {editingBannerId ? "Save Changes" : "Create & Activate Banner"}
                    </button>
                    {editingBannerId && (
                      <button
                        type="button"
                        onClick={handleCancelBannerEdit}
                        className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wider rounded transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* 3. Existing Banners List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                  <h3 className="font-serif text-lg font-bold text-gray-800 dark:text-white">
                    All Configured Hero Banners ({heroBanners ? heroBanners.length : 0})
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm("Reset all hero banners to original factory defaults?")) {
                        resetHeroBanners();
                        if (window.showToast) window.showToast("Banners reset to defaults", "info");
                      }
                    }}
                    className="text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-rose-500 transition-colors"
                  >
                    Reset Defaults
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {heroBanners && heroBanners.map((banner) => (
                    <div
                      key={banner.id}
                      className={`p-4 rounded-xl border bg-white dark:bg-gray-900 shadow-sm transition-all flex flex-col justify-between space-y-3 ${
                        banner.active
                          ? "border-emerald-500 dark:border-emerald-500 ring-2 ring-emerald-500/20"
                          : "border-gray-200 dark:border-gray-800"
                      }`}
                    >
                      <div className="flex gap-3">
                        <img
                          src={banner.image}
                          alt={banner.title}
                          className="w-24 h-20 rounded-lg object-cover bg-gray-100 flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-serif font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">
                              {banner.title}
                            </h4>
                            {banner.active ? (
                              <span className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 flex-shrink-0">
                                Active
                              </span>
                            ) : (
                              <span className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 flex-shrink-0">
                                Inactive
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                            {banner.subtitle}
                          </p>
                          <div className="flex items-center gap-2 text-[10px] text-gray-400">
                            <span>Button: <strong>{banner.cta || "Shop Now"}</strong></span>
                            <span>•</span>
                            <span className="truncate">Link: <strong>{banner.link || "/products"}</strong></span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                        {!banner.active ? (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveHeroBanner(banner.id);
                              if (window.showToast) window.showToast(`Set "${banner.title}" as active hero banner!`, "success");
                            }}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[10px] font-bold uppercase tracking-wider transition-colors"
                          >
                            ✓ Set as Active on Homepage
                          </button>
                        ) : (
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                            ✓ Currently Live
                          </span>
                        )}

                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => handleEditBannerClick(banner)}
                            className="px-2.5 py-1 text-[10px] font-bold uppercase bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded transition-colors"
                          >
                            Edit
                          </button>
                          {heroBanners.length > 1 && (
                            <button
                              type="button"
                              onClick={() => {
                                if (window.confirm(`Delete banner "${banner.title}"?`)) {
                                  deleteHeroBanner(banner.id);
                                  if (window.showToast) window.showToast("Banner deleted", "info");
                                }
                              }}
                              className="px-2.5 py-1 text-[10px] font-bold uppercase bg-rose-50 hover:bg-rose-500 text-rose-600 hover:text-white rounded transition-colors"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: GLOBAL SITE TEXT EDITOR */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                  Global Store Content Editor
                </h2>
                <p className="text-xs text-gray-450 dark:text-gray-500 mt-1">
                  Instantly configure visible text copy values across landing and navigation zones.
                </p>
              </div>

              <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
                {/* Hero Title */}
                <div className="space-y-1.5">
                  <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Home Hero Banner Title</label>
                  <input
                    type="text"
                    value={settingsForm.heroTitle}
                    onChange={(e) => setSettingsForm({ ...settingsForm, heroTitle: e.target.value })}
                    className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white"
                    required
                  />
                </div>

                {/* Hero Subtitle */}
                <div className="space-y-1.5">
                  <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Home Hero Banner Subtitle</label>
                  <textarea
                    rows="2"
                    value={settingsForm.heroSubtitle}
                    onChange={(e) => setSettingsForm({ ...settingsForm, heroSubtitle: e.target.value })}
                    className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white text-xs"
                    required
                  />
                </div>

                {/* Marquee Header bar */}
                <div className="space-y-1.5">
                  <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Navbar Header Marquee Text</label>
                  <input
                    type="text"
                    value={settingsForm.marqueeText}
                    onChange={(e) => setSettingsForm({ ...settingsForm, marqueeText: e.target.value })}
                    className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white"
                    required
                  />
                </div>

                {/* Promo banner text */}
                <div className="space-y-1.5">
                  <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Promo Banner Announcement</label>
                  <input
                    type="text"
                    value={settingsForm.promoBannerText}
                    onChange={(e) => setSettingsForm({ ...settingsForm, promoBannerText: e.target.value })}
                    className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-955 dark:text-white text-xs"
                    required
                  />
                </div>

                {/* Store Hours */}
                <div className="space-y-1.5">
                  <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Store Opening Hours Details</label>
                  <input
                    type="text"
                    value={settingsForm.storeHours}
                    onChange={(e) => setSettingsForm({ ...settingsForm, storeHours: e.target.value })}
                    className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white"
                    required
                  />
                </div>

                {/* Contact Coordinates Block */}
                <div className="p-5 bg-gray-50 dark:bg-gray-955/25 rounded-xl border border-gray-150 dark:border-gray-850 space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-gold block">
                    Showroom Contact Coordinates
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Contact Phone Number</label>
                      <input
                        type="text"
                        value={settingsForm.phone}
                        onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white text-xs"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Contact Email Address</label>
                      <input
                        type="email"
                        value={settingsForm.email}
                        onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white text-xs"
                        required
                      />
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">WhatsApp Direct Number (no symbols/spaces)</label>
                      <input
                        type="text"
                        value={settingsForm.whatsapp}
                        onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white text-xs"
                        placeholder="e.g. 919876543210"
                        required
                      />
                    </div>
                    <div className="space-y-1 sm:col-span-2">
                      <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Store Physical Address</label>
                      <textarea
                        rows="2.5"
                        value={settingsForm.address}
                        onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                        className="w-full p-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-900 dark:text-white text-xs"
                        required
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 font-bold rounded-lg text-xs uppercase tracking-widest transition-all mt-6 shadow"
                >
                  <FaCog />
                  <span>Apply Configurations</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
