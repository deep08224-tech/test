import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCopy, FaTicketAlt, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if dismissed in this session (bypass in local development for easier testing)
    const isDismissed = sessionStorage.getItem("offer_popup_dismissed");
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if (isDismissed && !isLocal) return;

    // Trigger popup 5 seconds after page open
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("offer_popup_dismissed", "true");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("PARADISE20");
    setCopied(true);
    if (window.showToast) {
      window.showToast("Coupon code PARADISE20 copied!", "success");
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookNow = () => {
    handleClose();
    navigate("/appointment");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md pointer-events-auto"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-3xl overflow-hidden shadow-premium max-w-md w-full relative p-6 md:p-8 text-center space-y-6 z-10 font-sans pointer-events-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-700 dark:hover:text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close offer popup"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Top Icon */}
            <div className="mx-auto w-16 h-16 rounded-full bg-amber-500/10 dark:bg-gold/10 flex items-center justify-center text-primary dark:text-gold animate-bounce" style={{ animationDuration: "3s" }}>
              <FaTicketAlt className="text-2xl" />
            </div>

            {/* Heading Texts */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-primary dark:text-gold uppercase tracking-[0.25em] block">
                Exclusive Welcome Offer
              </span>
              <h2 className="font-serif text-2xl md:text-3.5xl font-black text-gray-850 dark:text-white leading-tight">
                Get Flat 20% Off
              </h2>
              <p className="text-xs text-gray-600 dark:text-gray-350 leading-relaxed font-light">
                Receive 20% off on all premium frames and a free computerized eye test on your first showroom visit.
              </p>
            </div>

            {/* Dashed Coupon Ticket Box */}
            <div className="p-4 bg-gray-50 dark:bg-gray-950/60 border border-dashed border-gray-300 dark:border-gray-800 rounded-2xl flex items-center justify-between relative overflow-hidden">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-6 bg-white dark:bg-gray-900 rounded-r-full -translate-x-2 border-r border-gray-150 dark:border-gray-800" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-6 bg-white dark:bg-gray-900 rounded-l-full translate-x-2 border-l border-gray-150 dark:border-gray-800" />

              <div className="text-left pl-2">
                <span className="text-[8px] font-bold text-gray-400 dark:text-gray-550 uppercase tracking-widest block">PROMO CODE</span>
                <span className="text-sm font-serif font-black text-gray-800 dark:text-white tracking-wider">PARADISE20</span>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-2 bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all focus:outline-none active:scale-95"
              >
                <FaCopy />
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* CTA Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleBookNow}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 font-bold rounded-xl text-xs uppercase tracking-widest transition-all shadow-md active:scale-98"
              >
                <FaCalendarAlt className="text-xs" />
                <span>Book Free Appointment</span>
              </button>
              
              <button
                onClick={handleClose}
                className="text-[10px] font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider hover:text-gray-700 dark:hover:text-white transition-colors focus:outline-none"
              >
                No thanks, I'll browse first
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default OfferPopup;
