import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWhatsapp, FaHeart, FaRegHeart, FaStar, FaInfoCircle, FaChevronRight } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import { useProducts } from "../../context/ProductContext";
import { CONTACT_INFO } from "../../constants";
import WhatsAppOrderModal from "./WhatsAppOrderModal";

const ProductQuickView = ({ product, isOpen, onClose }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { incrementWhatsappClicks } = useProducts();
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  // Reset active image index when product changes
  useEffect(() => {
    setActiveImage(0);
  }, [product]);

  // Keydown listeners for ESC & arrow controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
        } else {
          onClose();
        }
      }
      if (isLightboxOpen && product?.images) {
        if (e.key === "ArrowRight") {
          setActiveImage((prev) => (prev + 1) % product.images.length);
        }
        if (e.key === "ArrowLeft") {
          setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isLightboxOpen, onClose, product]);

  if (!isOpen || !product) return null;

  const liked = isInWishlist(product.id);
  const currentPrice = product.discountPrice || product.price;

  // WhatsApp Enquiry Link
  const enquiryText = `💬 *PARADISE OPTICS - PRODUCT ENQUIRY*
---------------------------------------
👓 *Product:* ${product.name}
🏷️ *Brand:* ${product.brand}
💰 *Price:* ₹${currentPrice.toLocaleString("en-IN")}
---------------------------------------
📲 _Hello, I am interested in this eyewear. Is this model currently available in stock? Please share prescription options._`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(enquiryText)}`;

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    const added = toggleWishlist(product);
    if (window.showToast) {
      window.showToast(
        added ? `${product.name} added to wishlist!` : `${product.name} removed from wishlist!`,
        added ? "success" : "info"
      );
    }
  };

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-xs"
          />

          {/* Modal Window Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.45 }}
            className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-premium-hover overflow-hidden z-10 max-h-[92vh] flex flex-col md:flex-row border border-gray-100 dark:border-gray-800"
          >
            {/* Elegant Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md hover:bg-rose-500 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white text-gray-500 dark:text-gray-400 border border-gray-200/60 dark:border-gray-800 flex items-center justify-center z-20 focus:outline-none transition-all duration-300 shadow-sm"
              aria-label="Close modal"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Left Side: Product Showcase (Image & Gallery Carousel) */}
            <div className="w-full md:w-1/2 bg-gray-50 dark:bg-gray-950 p-6 flex flex-col items-center justify-between border-r border-gray-100 dark:border-gray-900 min-h-[320px] md:min-h-[480px]">
              {/* Top Tag Badges */}
              <div className="w-full flex items-center justify-between z-10">
                {product.discountPrice ? (
                  <span className="bg-primary/95 text-white dark:bg-gold dark:text-gray-950 text-[9px] font-bold px-3 py-1.5 rounded-sm tracking-widest uppercase shadow-sm">
                    Special Offer
                  </span>
                ) : (
                  <span className="text-[9px] font-semibold text-gray-450 tracking-wider uppercase">
                    Premium Quality
                  </span>
                )}
              </div>

              {/* Main Showcase Image with Zoom Click */}
              <div
                onClick={() => setIsLightboxOpen(true)}
                className="flex-grow flex items-center justify-center p-4 cursor-zoom-in group/img relative w-full"
              >
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={product.images[activeImage] || product.images[0]}
                  alt={product.name}
                  className="max-h-[220px] md:max-h-[300px] w-auto object-contain object-center transition-transform duration-500 group-hover/img:scale-[1.02]"
                />

                {/* Hover Click-to-Zoom Indicator overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                  <span className="bg-white/90 dark:bg-gray-900/90 text-primary dark:text-gold px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                    Click to Zoom
                  </span>
                </div>
              </div>

              {/* Thumbnail Navigation Row */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto py-2 px-1 max-w-full justify-center">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`w-12 h-12 rounded-lg bg-white dark:bg-gray-900 border overflow-hidden p-1 flex-shrink-0 flex items-center justify-center transition-all ${
                        activeImage === idx
                          ? "border-primary dark:border-gold scale-105 shadow-sm ring-2 ring-primary/10 dark:ring-gold/10"
                          : "border-gray-200 dark:border-gray-800 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="Thumbnail preview" className="max-h-full max-w-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Side: Product Details & Actions */}
            <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[50vh] md:max-h-[92vh]">
              <div className="space-y-4">
                {/* Brand and Rating Row */}
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-900 pb-3 pr-10 md:pr-12">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary dark:text-gold block">
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-405 font-medium">
                    <FaStar className="text-gold" />
                    <span className="font-bold text-gray-800 dark:text-gray-200">{product.rating}</span>
                    <span className="text-gray-300 dark:text-gray-700">|</span>
                    <span className="text-gray-450">{product.reviewsCount} reviews</span>
                  </div>
                </div>

                {/* Product Title */}
                <h2 className="text-xl md:text-2xl font-serif font-black text-gray-800 dark:text-white leading-tight">
                  {product.name}
                </h2>

                {/* Price Details */}
                <div className="flex items-baseline gap-3 pt-1">
                  <span className="text-2xl font-serif font-bold text-primary dark:text-gold">
                    ₹{currentPrice.toLocaleString("en-IN")}
                  </span>
                  {product.discountPrice && (
                    <span className="text-xs line-through text-gray-450 dark:text-gray-500 font-light">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>

                {/* Product Description */}
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-350 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Attributes Details Card Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    { label: "Frame Shape", value: product.frameShape },
                    { label: "Material", value: product.frameMaterial },
                    { label: "Frame Color", value: product.frameColor },
                    { label: "Size", value: product.size },
                  ].map((spec, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-gray-50/70 dark:bg-gray-950/40 border border-gray-150/60 dark:border-gray-900 rounded-lg text-xs"
                    >
                      <span className="text-gray-450 dark:text-gray-500 block uppercase tracking-widest text-[8px] font-bold mb-0.5">
                        {spec.label}
                      </span>
                      <span className="font-bold text-gray-800 dark:text-gray-200">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Panel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-900">
                {/* WhatsApp Order button */}
                <button
                  onClick={() => {
                    incrementWhatsappClicks();
                    setOrderModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2.5 py-3.5 bg-primary hover:bg-gold dark:bg-gold dark:hover:bg-yellow-500 text-white dark:text-gray-955 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
                >
                  <FaWhatsapp className="text-sm" />
                  <span>Order via WhatsApp</span>
                </button>

                {/* Wishlist toggle button */}
                <button
                  onClick={handleWishlistToggle}
                  className={`flex items-center justify-center gap-2 py-3.5 border rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 ${
                    liked
                      ? "bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-950/20 dark:border-rose-900/40 dark:text-rose-400 shadow-sm"
                      : "border-gray-250 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-850"
                  }`}
                >
                  {liked ? (
                    <>
                      <FaHeart className="text-rose-500 animate-pulse" />
                      <span>In Wishlist</span>
                    </>
                  ) : (
                    <>
                      <FaRegHeart />
                      <span>Add Wishlist</span>
                    </>
                  )}
                </button>

                {/* View Full Product Specifications Redirect button */}
                <Link
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="sm:col-span-2 flex items-center justify-center gap-2 py-3.5 bg-gray-50 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-850 border border-gray-200/60 dark:border-gray-850 text-[10px] text-primary dark:text-gold rounded-lg font-bold uppercase tracking-widest transition-all duration-300 group"
                >
                  <FaInfoCircle className="text-sm" />
                  <span>View Full Details & specs</span>
                  <FaChevronRight className="text-[9px] opacity-60 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Full-Screen Lightbox Portal/Overlay */}
      <WhatsAppOrderModal
        product={product}
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />

      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
            />

            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-rose-500 text-white flex items-center justify-center transition-all duration-300 shadow-lg border border-white/20 focus:outline-none"
              aria-label="Close zoom view"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Navigation Arrows */}
            {product.images && product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
                  }}
                  className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-md border border-white/15 focus:outline-none"
                  aria-label="Previous image"
                >
                  <span className="text-lg">❮</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage((prev) => (prev + 1) % product.images.length);
                  }}
                  className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 shadow-md border border-white/15 focus:outline-none"
                  aria-label="Next image"
                >
                  <span className="text-lg">❯</span>
                </button>
              </>
            )}

            {/* Lightbox Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative max-h-[80vh] max-w-[85vw] flex flex-col items-center justify-center select-none"
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="max-h-[72vh] max-w-[85vw] object-contain rounded-sm"
              />

              {/* Pagination Dots & Info */}
              <div className="mt-4 flex flex-col items-center gap-1.5 text-white/80">
                <span className="text-xs font-semibold tracking-wider">
                  {product.name} ({activeImage + 1} / {product.images.length})
                </span>
                <div className="flex gap-1.5 mt-1">
                  {product.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImage(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeImage === idx ? "bg-gold w-4" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductQuickView;
