import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronRight } from "react-icons/fa";
import { FiShoppingBag, FiCalendar } from "react-icons/fi";
import { SiMeta } from "react-icons/si";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";

const MobileMenu = ({ isOpen, onClose, onOpenWishlist }) => {
  const { wishlistCount } = useWishlist();
  const { user, signOut } = useAuth();

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuItems = [
    { label: "SUNGLASSES", path: "/products?category=sunglasses" },
    { label: "OPTICALS", path: "/products?category=eyeglasses" },
    { label: "CONTACT LENSES", path: "/products?category=contact-lenses" },
    { label: "BRANDS", path: "/brands" },
    { label: "META", path: "/products?brand=Ray-Ban", isMeta: true },
    { label: "SERVICES", path: "/services" },
    { label: "OUR STORY", path: "/about" },
    { label: "CONTACT US", path: "/contact" },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Drawer Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white z-50 shadow-2xl p-6 overflow-y-auto lg:hidden border-l border-gray-100 font-sans"
          >
            {/* Header Area */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <Link to="/" onClick={handleLinkClick} className="flex flex-col text-left">
                <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-widest leading-none pl-3">
                  Dr. Kuckreja's
                </span>
                <span className="font-serif text-lg font-black uppercase tracking-widest text-[#7A1519]">
                  Paradise Optics
                </span>
              </Link>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:text-gray-800 focus:outline-none transition-colors border border-gray-150"
                aria-label="Close menu"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-2 mb-8">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.14em] text-[#1C1B1B] hover:text-[#8B1E22] border-b border-gray-100 py-3 transition-colors duration-200 group"
                >
                  {item.isMeta ? (
                    <span className="inline-flex items-center gap-2">
                      <SiMeta className="text-[20px] inline-block transform -translate-y-[0.5px]" />
                      <span>META</span>
                    </span>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  <FaChevronRight className="text-[9px] text-gray-400 group-hover:translate-x-0.5 group-hover:text-[#8B1E22] transition-all" />
                </Link>
              ))}
            </nav>

            {/* CTA & Cart Actions */}
            <div className="space-y-3">
              <Link
                to="/appointment"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-[#8B1E22] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-xs active:scale-95"
              >
                <FiCalendar className="text-sm" />
                <span>Book an Appointment</span>
              </Link>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  if (onOpenWishlist) onOpenWishlist();
                }}
                className="flex w-full items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 text-[#1C1B1B] bg-gray-50 font-semibold text-xs tracking-wider uppercase relative transition-all shadow-xs active:scale-95"
              >
                <FiShoppingBag className="text-sm text-[#8B1E22]" />
                <span>My Cart</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#8B1E22] text-white rounded-full text-[9px] w-5 h-5 flex items-center justify-center font-bold shadow-xs border border-white">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {user && (
                <div className="pt-4 border-t border-gray-150 space-y-2">
                  <Link
                    to="/admin"
                    onClick={handleLinkClick}
                    className="flex w-full items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-xs tracking-wider uppercase text-center"
                  >
                    Admin Panel
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      onClose();
                      window.showToast?.("Signed out successfully", "info");
                    }}
                    className="flex w-full items-center justify-center gap-2 py-2 rounded-xl text-red-600 font-bold text-xs uppercase"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
