import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiShoppingBag, FiSearch, FiCalendar, FiX, FiArrowRight } from "react-icons/fi";
import { FaBars, FaStar } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import { useWishlist } from "../../context/WishlistContext";
import { useProducts } from "../../context/ProductContext";
import { useAuth } from "../../context/AuthContext";
import { CONTACT_INFO } from "../../constants";
import MobileMenu from "../navigation/MobileMenu";

const Navbar = ({ onOpenWishlist }) => {
  const { wishlistCount } = useWishlist();
  const { siteContent, products: ALL_PRODUCTS } = useProducts();
  const { user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const phone = siteContent?.phone || CONTACT_INFO.phone;

  // Auto focus input when search modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  // Handle escape key to close search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  // Instant live search matches
  const liveResults = searchQuery.trim()
    ? (ALL_PRODUCTS || []).filter((p) => {
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.subCategory && p.subCategory.toLowerCase().includes(q))
        );
      }).slice(0, 5)
    : [];

  const isLinkActive = (linkPath) => {
    if (linkPath === "/") {
      return location.pathname === "/" && !location.search;
    }
    if (linkPath.includes("?")) {
      const [path, search] = linkPath.split("?");
      return location.pathname === path && location.search.includes(search);
    }
    return location.pathname === linkPath && !location.search;
  };

  const mainNavLinks = [
    { label: "SUNGLASSES", path: "/products?category=sunglasses" },
    { label: "OPTICALS", path: "/products?category=eyeglasses" },
    { label: "CONTACT LENSES", path: "/products?category=contact-lenses" },
    { label: "BRANDS", path: "/brands" },
    { label: "META", path: "/products?brand=Ray-Ban", isMeta: true },
    { label: "OUR STORY", path: "/about" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full font-sans bg-white shadow-xs">
        {/* 1. Top Announcement Bar - Google Rating & Contact */}
        <div className="bg-[#18181B] text-white text-[10px] md:text-[11px] py-1.5 px-4 sm:px-8 border-b border-gray-800">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            {/* Google Rating */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Paradise+Optics+Ludhiana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              title="View our Google Business Reviews"
            >
              <span className="font-bold text-amber-400">4.9</span>
              <div className="flex text-amber-400 text-[9px] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-gray-400 font-normal">powered by <strong className="text-gray-200">Google</strong></span>
            </a>

            {/* Top Phone / Address */}
            <div className="flex items-center gap-4">
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="text-gray-300 hover:text-white transition-colors tracking-wide hidden sm:inline"
              >
                📞 {phone}
              </a>
              <span className="text-gray-400 hidden md:inline">Ludhiana Showroom</span>
            </div>
          </div>
        </div>

        {/* 2. Top Header Canvas: Services/Contact | Logo | Search/Cart/Book Button */}
        <div className="border-b border-gray-100 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 py-3 flex items-center justify-between">
            {/* Left Utilities: Services & Contact Us (Desktop) */}
            <div className="hidden lg:flex items-center space-x-6 text-[11px] tracking-[0.14em] text-[#1C1B1B]">
              <Link
                to="/services"
                className={`nav-link-anim ${isLinkActive("/services") ? "active font-semibold" : ""}`}
              >
                SERVICES
              </Link>
              <Link
                to="/contact"
                className={`nav-link-anim ${isLinkActive("/contact") ? "active font-semibold" : ""}`}
              >
                CONTACT US
              </Link>
            </div>

            {/* Mobile Menu Hamburger (Mobile Only) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#1C1B1B] hover:bg-gray-100 focus:outline-none"
                aria-label="Open menu"
              >
                <FaBars className="text-lg" />
              </button>
            </div>

            {/* Center: Brand Typography */}
            <Link to="/" className="flex flex-col text-center items-center group py-0.5">
              <span className="text-[8px] sm:text-[9px] font-sans font-semibold text-gray-400 tracking-[0.2em] uppercase leading-none mb-1">
                Dr. Kuckreja's
              </span>
              <span className="font-serif text-[18px] sm:text-2xl md:text-3xl font-black uppercase tracking-[0.22em] text-[#7A1519] leading-none">
                Paradise Optics
              </span>
              <span className="hidden sm:block text-[8px] md:text-[9px] font-sans font-medium text-gray-400 uppercase tracking-[0.25em] mt-1">
                Clear Vision. Better Living. Since 1990.
              </span>
            </Link>

            {/* Right Utilities: Search | Cart | Book Appointment */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Hollow Search Icon */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#1C1B1B] hover:text-[#8B1E22] hover:bg-gray-50 transition-colors focus:outline-none cursor-pointer"
                aria-label="Search"
                title="Search Products"
              >
                <FiSearch className="text-lg" />
              </button>

              {/* Hollow Cart Shopping Bag Icon with counter badge */}
              <button
                onClick={onOpenWishlist}
                className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#1C1B1B] hover:text-[#8B1E22] hover:bg-gray-50 transition-colors focus:outline-none cursor-pointer"
                aria-label="View Cart"
                title="View Cart"
              >
                <FiShoppingBag className="text-lg" />
                {wishlistCount > 0 && (
                  <span className="absolute 0 top-0.5 right-0.5 w-4 h-4 bg-[#8B1E22] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Book an Appointment CTA Button */}
              <Link
                to="/appointment"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#8B1E22] hover:bg-[#7A1519] text-white px-4 py-2 rounded text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <FiCalendar className="text-xs" />
                <span>Book an Appointment</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Main Centered Menu Bar */}
        <nav className="hidden lg:block bg-white py-2.5">
          <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-center space-x-10 text-[12px] tracking-[0.15em] text-[#1C1B1B]">
            {mainNavLinks.map((link, idx) => {
              const active = isLinkActive(link.path);
              return (
                <Link
                  key={idx}
                  to={link.path}
                  className={`nav-link-anim py-1 font-medium inline-flex items-center ${active ? "active font-semibold" : ""}`}
                >
                  {link.isMeta ? (
                    <span className="inline-flex items-center gap-2">
                      <SiMeta className="text-[21px] inline-block transform -translate-y-[0.5px]" />
                      <span>META</span>
                    </span>
                  ) : (
                    link.label
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {/* 4. Luxury Live Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs transition-all animate-fadeIn">
          {/* Backdrop click to close */}
          <div className="fixed inset-0" onClick={() => setSearchOpen(false)} />

          {/* Modal Box */}
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-gray-150 animate-scaleUp">
            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b border-gray-150 p-4 sm:p-5 bg-gray-50/50">
              <FiSearch className="text-gray-400 text-xl mr-3 flex-shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by brand, frame model, sunglasses, eyeglasses..."
                className="w-full bg-transparent text-sm sm:text-base text-[#1C1B1B] placeholder-gray-400 focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-gray-600 mr-2 p-1 text-sm"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-200/70 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors flex-shrink-0 ml-1"
                aria-label="Close search"
              >
                <FiX className="text-base" />
              </button>
            </form>

            {/* Live Search Results / Quick Suggestions */}
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
              {searchQuery.trim() ? (
                liveResults.length > 0 ? (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                      Matching Products ({liveResults.length})
                    </span>
                    {liveResults.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-150 transition-all group"
                      >
                        <img
                          src={product.images?.[0] || product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover bg-gray-100 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E22] block">
                            {product.brand}
                          </span>
                          <h4 className="text-xs sm:text-sm font-semibold text-[#1C1B1B] truncate group-hover:text-[#8B1E22] transition-colors">
                            {product.name}
                          </h4>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="text-xs sm:text-sm font-bold text-[#1C1B1B]">
                            ₹{(product.discountPrice || product.price).toLocaleString("en-IN")}
                          </span>
                        </div>
                      </Link>
                    ))}

                    <div className="pt-3 text-center border-t border-gray-100">
                      <button
                        onClick={handleSearchSubmit}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B1E22] hover:underline"
                      >
                        <span>View All Search Results for "{searchQuery}"</span>
                        <FiArrowRight className="text-xs" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-8 text-center text-gray-500 space-y-2">
                    <p className="text-sm font-medium">No products found for "{searchQuery}"</p>
                    <p className="text-xs text-gray-400 font-light">Try searching for brands like Ray-Ban, Gucci, Prada, Burberry or Cartier</p>
                  </div>
                )
              ) : (
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block">
                    Popular Brand Searches
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Ray-Ban", "Gucci", "Prada", "Versace", "Burberry", "Oakley", "Cartier", "Tom Ford"].map((brand) => (
                      <button
                        key={brand}
                        type="button"
                        onClick={() => {
                          navigate(`/products?brand=${encodeURIComponent(brand)}`);
                          setSearchOpen(false);
                        }}
                        className="bg-gray-100 hover:bg-[#8B1E22] hover:text-white text-gray-700 text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer"
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenWishlist={onOpenWishlist}
      />
    </>
  );
};

export default Navbar;
