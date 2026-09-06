import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWhatsapp } from "react-icons/fa";
import { FiShoppingBag, FiX } from "react-icons/fi";
import { useWishlist } from "../../context/WishlistContext";
import { useProducts } from "../../context/ProductContext";
import { CONTACT_INFO } from "../../constants";

const WishlistDrawer = ({ isOpen, onClose }) => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { incrementWhatsappClicks } = useProducts();
  const navigate = useNavigate();

  const subtotal = wishlist.reduce((sum, item) => sum + (item.discountPrice || item.price), 0);

  // Close on Escape keypress
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Disable background scrolling
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBrowseClick = () => {
    onClose();
    navigate("/products");
  };

  const handleBookClick = () => {
    onClose();
    navigate("/appointment");
  };

  // Compile all wishlist items into a single WhatsApp enquiry message
  const getWhatsappUrl = () => {
    if (wishlist.length === 0) return "#";
    const itemsList = wishlist
      .map((item, idx) => `${idx + 1}. ${item.name} (${item.brand} - ₹${Math.round(item.discountPrice || item.price).toLocaleString("en-IN")})`)
      .join("\n");
    let message = `Hello Paradise Optics, I would like to order/enquire about these items from my cart:\n\n${itemsList}\n\n`;
    message += `Subtotal: ₹${Math.round(subtotal).toLocaleString("en-IN")}\n`;
    message += `\nPlease let me know availability and lens fittings details.`;
    return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
          />

          {/* Slide-in Drawer Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col justify-between border-l border-gray-150 font-sans"
          >
            {/* 1. Header Box */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-[#1C1B1B]">
                <FiShoppingBag className="text-xl text-[#1C1B1B]" />
                <h2 className="font-serif text-base sm:text-lg font-bold">My Cart - Bespoke Collection ({wishlist.length})</h2>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close cart drawer"
              >
                <FaTimes />
              </button>
            </div>

            {/* 2. Scrollable List Content */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4">
              {wishlist.length > 0 ? (
                wishlist.map((product) => {
                  const currentPrice = product.discountPrice || product.price;
                  return (
                    <div
                      key={product.id}
                      className="flex gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100 relative group transition-shadow"
                    >
                      {/* Mini Thumbnail */}
                      <Link
                        to={`/product/${product.id}`}
                        onClick={onClose}
                        className="w-20 h-20 bg-white rounded-lg overflow-hidden border border-gray-100 p-1 flex-shrink-0 flex items-center justify-center"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </Link>

                      {/* Content */}
                      <div className="flex-grow min-w-0 pr-6 space-y-1">
                        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider block">
                          {product.brand}
                        </span>
                        <Link
                          to={`/product/${product.id}`}
                          onClick={onClose}
                          className="font-semibold text-xs md:text-sm text-gray-900 hover:text-[#8B1E22] block truncate"
                        >
                          {product.name}
                        </Link>
                        <span className="block text-xs font-bold text-[#1C1B1B]">
                          ₹{Math.round(currentPrice).toLocaleString("en-IN")}
                        </span>
                      </div>

                      {/* Muted Cross Button to remove item */}
                      <button
                        onClick={() => removeFromWishlist(product.id)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 transition-colors focus:outline-none p-1"
                        aria-label="Remove item"
                        title="Remove item"
                      >
                        <FiX className="text-base" />
                      </button>
                    </div>
                  );
                })
              ) : (
                /* Empty Cart view */
                <div className="flex flex-col items-center justify-center text-center h-[50vh] space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                    <FiShoppingBag className="text-2xl" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-900">Your Cart is Empty</h3>
                  <p className="text-xs text-gray-500 max-w-xs leading-relaxed font-light">
                    Add your favorite glasses, sunglasses, and frames to the cart to keep track of them and order easily!
                  </p>
                  <button
                    onClick={handleBrowseClick}
                    className="bg-[#8B1E22] hover:bg-[#7A1519] text-white font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider transition-all"
                  >
                    Browse Collections
                  </button>
                </div>
              )}
            </div>

            {/* 3. Footer Action Panels */}
            {wishlist.length > 0 && (
              <div className="p-5 border-t border-gray-100 space-y-4 bg-gray-50/50">
                {/* Price Breakdown */}
                <div className="space-y-2 text-xs border-b border-gray-200/80 pb-3 font-medium">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Cart Subtotal</span>
                    <span className="text-gray-900 font-semibold">₹{Math.round(subtotal).toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-gray-900 pt-1">
                    <span>Estimated Total</span>
                    <span>₹{Math.round(subtotal).toLocaleString("en-IN")}</span>
                  </div>
                </div>

                {/* Clear All Option */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">Cart Items: {wishlist.length}</span>
                  <button
                    onClick={clearWishlist}
                    className="text-gray-500 hover:text-rose-600 hover:underline font-medium text-[11px]"
                  >
                    Clear All
                  </button>
                </div>

                {/* WhatsApp Bulk Enquiry */}
                <a
                  href={getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={incrementWhatsappClicks}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                >
                  <FaWhatsapp className="text-base" />
                  <span>INQUIRE VIA WHATSAPP</span>
                </a>

                {/* Book Atelier Consultation link */}
                <div className="text-center pt-1">
                  <button
                    onClick={handleBookClick}
                    className="nav-link-anim text-[11px] font-bold uppercase tracking-[0.16em] text-[#1C1B1B] inline-block py-1"
                  >
                    BOOK ATELIER CONSULTATION
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WishlistDrawer;
