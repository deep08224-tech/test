import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaHeart, FaRegHeart, FaWhatsapp, FaStar, FaCalendarCheck, FaTruck, FaUndo, FaShieldAlt, FaChevronRight, FaTimes, FaChevronLeft, FaShoppingBag } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Components
import Breadcrumb from "../../components/common/Breadcrumb";
import ProductCard from "../../components/products/ProductCard";
import WhatsAppOrderModal from "../../components/products/WhatsAppOrderModal";

// Context & Data
import { useProducts } from "../../context/ProductContext";
import { useWishlist } from "../../context/WishlistContext";
import { CONTACT_INFO } from "../../constants";

// Swiper Styles
import "swiper/css";

const ProductDetails = () => {
  const { products: PRODUCTS, incrementWhatsappClicks } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Find matching product
  const product = PRODUCTS.find((p) => p.id === id);

  // If product doesn't exist, redirect to 404
  useEffect(() => {
    if (!product) {
      navigate("/404", { replace: true });
    }
  }, [product, navigate]);

  if (!product) return null;

  // Local State
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState("description");
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [userRating, setUserRating] = useState(5);
  const [userReviewName, setUserReviewName] = useState("");
  const [userReviewComment, setUserReviewComment] = useState("");
  const [localReviews, setLocalReviews] = useState([
    {
      name: "Suresh Kumar",
      rating: 5,
      date: "August 2, 2026",
      comment: "Excellent frame quality! Extremely light and the rose gold color looks very premium. Fits my face perfectly."
    },
    {
      name: "Anjali Rao",
      rating: 4.5,
      date: "July 24, 2026",
      comment: "Very comfortable to wear for long office hours. Lens fitting is absolute perfection. Highly recommended optical store."
    }
  ]);

  // Sync active image when product ID changes
  useEffect(() => {
    setActiveImage(product.images[0]);
  }, [product]);

  const liked = isInWishlist(product.id);
  const currentPrice = product.discountPrice || product.price;

  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  // Prevent background scroll when image lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const handleImageClick = () => {
    const idx = product.images.indexOf(activeImage);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  // WhatsApp Enquiry Link
  const enquiryText = `💬 *PARADISE OPTICS - PRODUCT ENQUIRY*
---------------------------------------
👓 *Product:* ${product.name}
🏷️ *Brand:* ${product.brand}
💰 *Price:* ₹${currentPrice.toLocaleString("en-IN")}
---------------------------------------
📲 _Hello, I am interested in this eyewear. Is this model currently available in stock? Please share prescription options._`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(enquiryText)}`;

  const handleWishlistToggle = () => {
    const added = toggleWishlist(product);
    if (window.showToast) {
      window.showToast(
        added ? `${product.name} added to cart!` : `${product.name} removed from cart!`,
        added ? "success" : "info"
      );
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!userReviewName.trim() || !userReviewComment.trim()) {
      if (window.showToast) window.showToast("Please fill in all review fields.", "error");
      return;
    }

    const newReview = {
      name: userReviewName,
      rating: userRating,
      date: "Today",
      comment: userReviewComment
    };

    setLocalReviews((prev) => [newReview, ...prev]);
    setUserReviewName("");
    setUserReviewComment("");
    setUserRating(5);

    if (window.showToast) window.showToast("Review submitted successfully! Thank you.", "success");
  };

  // Filter related products (same category, excluding current product)
  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id);

  const breadcrumbItems = [
    { label: "Products Catalog", link: "/products" },
    { label: product.category.charAt(0).toUpperCase() + product.category.slice(1), link: `/products?category=${product.category}` },
    { label: product.name }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Product Presentation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-4 items-start">
        {/* Left: Product Images Gallery (5 Cols) */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image Display with Lens Magnification */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onClick={handleImageClick}
            className="aspect-square bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-xl overflow-hidden flex items-center justify-center p-6 relative group cursor-zoom-in"
          >
            <img
              src={activeImage}
              alt={product.name}
              style={{
                transformOrigin: isZoomed ? `${zoomPos.x}% ${zoomPos.y}%` : "center center",
                transform: isZoomed ? "scale(2.2)" : "scale(1)",
                transition: isZoomed ? "none" : "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              className="max-h-[380px] md:max-h-[480px] w-auto object-contain"
            />
            {/* Subtle Zoom Hint Banner */}
            <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 pointer-events-none shadow-sm opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <span className="hidden md:inline">Hover to Zoom</span>
              <span className="inline md:hidden">Tap to Expand</span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border p-2 flex-shrink-0 transition-all ${
                    activeImage === img
                      ? "border-primary dark:border-gold ring-1 ring-primary dark:ring-gold"
                      : "border-gray-200 dark:border-gray-850 hover:border-gray-400"
                  }`}
                  aria-label={`View product image ${idx + 1}`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Buy Panel (6 Cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Brand */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-450 dark:text-gray-500">
              {product.brand}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3.5xl font-serif font-black text-gray-800 dark:text-white leading-tight">
            {product.name}
          </h1>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-4 pt-2 border-t border-gray-100 dark:border-gray-850">
            <span className="text-3xl font-serif font-bold text-primary dark:text-gold">
              ₹{currentPrice.toLocaleString("en-IN")}
            </span>
            {product.discountPrice && (
              <>
                <span className="text-lg line-through text-gray-400">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="bg-rose-100 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-bold px-2 py-0.5 rounded">
                  Save ₹{(product.price - product.discountPrice).toLocaleString("en-IN")}
                </span>
              </>
            )}
          </div>

          {/* Sub-description teaser */}
          <p className="text-sm md:text-base text-gray-650 dark:text-gray-300 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Quick Specifications list */}
          <div className="bg-gray-50 dark:bg-gray-900/60 p-4 rounded-xl space-y-2.5 border border-gray-100 dark:border-gray-850 text-xs">
            <div className="grid grid-cols-3">
              <span className="text-gray-400 dark:text-gray-500">Frame Material</span>
              <span className="col-span-2 font-semibold text-gray-750 dark:text-gray-200">{product.frameMaterial}</span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-gray-400 dark:text-gray-500">Frame Shape</span>
              <span className="col-span-2 font-semibold text-gray-750 dark:text-gray-200">{product.frameShape}</span>
            </div>
            <div className="grid grid-cols-3">
              <span className="text-gray-400 dark:text-gray-500">Dimensions</span>
              <span className="col-span-2 font-semibold text-gray-750 dark:text-gray-200">{product.sizeInfo}</span>
            </div>
            {product.lensCompatibility && (
              <div className="grid grid-cols-3">
                <span className="text-gray-400 dark:text-gray-500">Lens Options</span>
                <span className="col-span-2 font-semibold text-gray-750 dark:text-gray-200">{product.lensCompatibility}</span>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 dark:border-gray-850">
            {/* WhatsApp Enquiry */}
            <button
              onClick={() => {
                incrementWhatsappClicks();
                setOrderModalOpen(true);
              }}
              className="flex-grow flex items-center justify-center gap-2.5 py-3.5 bg-primary hover:bg-gold text-white dark:bg-gray-800 dark:hover:bg-gold dark:hover:text-gray-950 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors duration-300 shadow-md"
            >
              <FaWhatsapp className="text-lg" />
              <span>Order via WhatsApp</span>
            </button>

            {/* Add to Cart Button */}
            <button
              onClick={handleWishlistToggle}
              className={`flex items-center justify-center gap-2 py-3.5 px-6 border rounded-lg text-sm font-bold transition-all ${
                liked
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-gray-250 hover:border-primary text-gray-750 hover:bg-gray-50"
              }`}
            >
              <FaShoppingBag className="text-lg" />
              <span>{liked ? "Added to Cart" : "Add to Cart"}</span>
            </button>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            <Link to="/appointment" className="flex items-center gap-1.5 hover:text-primary dark:hover:text-gold transition-colors">
              <FaCalendarCheck />
              <span>Schedule Frame Fitting Appointment</span>
            </Link>
          </div>


        </div>
      </div>

      {/* Tabs Section: Specifications & Reviews */}
      <section className="mt-16 border-t border-gray-250 dark:border-gray-800">
        {/* Tab Headers */}
        <div className="flex border-b border-gray-200 dark:border-gray-850">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-4 px-6 font-serif text-sm md:text-base font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === "description"
                ? "border-primary dark:border-gold text-primary dark:text-gold"
                : "border-transparent text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-4 px-6 font-serif text-sm md:text-base font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === "reviews"
                ? "border-primary dark:border-gold text-primary dark:text-gold"
                : "border-transparent text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Reviews ({localReviews.length})
          </button>
        </div>

        {/* Tab Contents */}
        <div className="py-8">
          {activeTab === "description" ? (
            /* Technical specifications sheet */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-3">Frame Details</h3>
                <table className="w-full text-xs md:text-sm">
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-850">
                      <td className="py-2.5 text-gray-400">Brand Manufacturer</td>
                      <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.brand}</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-850">
                      <td className="py-2.5 text-gray-400">Frame Structure</td>
                      <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.frameShape}</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-850">
                      <td className="py-2.5 text-gray-400">Primary Color</td>
                      <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.frameColor}</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-850">
                      <td className="py-2.5 text-gray-400">Material Type</td>
                      <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.frameMaterial}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-3">Size & Fit</h3>
                <table className="w-full text-xs md:text-sm">
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-850">
                      <td className="py-2.5 text-gray-400">Frame Width Status</td>
                      <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.size}</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-850">
                      <td className="py-2.5 text-gray-400">Lens Size parameters</td>
                      <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.sizeInfo}</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-850">
                      <td className="py-2.5 text-gray-400">Target Audience</td>
                      <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.gender}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {product.features && (
                <div className="md:col-span-2">
                  <h3 className="font-bold text-xs uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-3">Product Highlights</h3>
                  <ul className="list-disc list-inside text-xs md:text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    {product.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            /* Review Feed & Form */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Review List */}
              <div className="lg:col-span-7 space-y-6">
                {localReviews.map((rev, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-900/60 p-5 rounded-xl border border-gray-100 dark:border-gray-850">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-xs md:text-sm text-gray-800 dark:text-white">{rev.name}</h4>
                      <span className="text-[10px] text-gray-400">{rev.date}</span>
                    </div>
                    <div className="flex text-amber-500 text-[10px] gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(rev.rating) ? "text-amber-500" : "text-gray-300"} />
                      ))}
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-350 leading-relaxed font-light">
                      {rev.comment}
                    </p>
                  </div>
                ))}
              </div>

              {/* Review submission Form */}
              <div className="lg:col-span-5 bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-xl p-6 shadow-premium">
                <h3 className="font-serif text-lg font-bold text-gray-800 dark:text-white mb-4">Write a Customer Review</h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs md:text-sm">
                  {/* Rating Selector */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setUserRating(val)}
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-bold transition-all border ${
                            userRating === val
                              ? "bg-primary border-primary text-white dark:bg-gold dark:border-gold dark:text-gray-950 shadow"
                              : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-350 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      value={userReviewName}
                      onChange={(e) => setUserReviewName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white text-xs"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider block">Review Comments</label>
                    <textarea
                      rows="4"
                      placeholder="Write review details..."
                      value={userReviewComment}
                      onChange={(e) => setUserReviewComment(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white text-xs"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 font-bold py-3 rounded text-xs uppercase tracking-wider transition-all"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Products Recommendation */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center md:text-left">
            Related Products Recommendation
          </h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            {relatedProducts.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard product={p} onQuickView={() => navigate(`/product/${p.id}`)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Global WhatsApp Checkout Modal */}
      <WhatsAppOrderModal
        product={product}
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />

      {/* Premium Fullscreen Lightbox Gallery */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4">
            {/* Backdrop Click to Close */}
            <div 
              className="absolute inset-0 z-0" 
              onClick={() => setLightboxOpen(false)}
            />

            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 focus:outline-none"
              aria-label="Close fullscreen view"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Lightbox Content Container */}
            <div className="relative z-10 max-w-4xl w-full h-[70vh] flex items-center justify-center">
              {/* Prev Button */}
              {product.images.length > 1 && (
                <button
                  onClick={() => setLightboxIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                  className="absolute left-2 md:-left-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 focus:outline-none"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="text-lg" />
                </button>
              )}

              {/* Main Image */}
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={product.images[lightboxIndex]}
                alt={product.name}
                className="max-w-full max-h-full object-contain rounded-lg select-none"
              />

              {/* Next Button */}
              {product.images.length > 1 && (
                <button
                  onClick={() => setLightboxIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 md:-right-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20 focus:outline-none"
                  aria-label="Next image"
                >
                  <FaChevronRight className="text-lg" />
                </button>
              )}
            </div>

            {/* Thumbnails strip at the bottom of Lightbox */}
            {product.images.length > 1 && (
              <div className="relative z-10 flex gap-2 mt-8 overflow-x-auto max-w-full px-4 py-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className={`w-14 h-14 bg-white/5 rounded-lg overflow-hidden border p-1 flex-shrink-0 transition-all ${
                      lightboxIndex === idx
                        ? "border-gold ring-1 ring-gold"
                        : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 text-xs font-mono text-gray-400">
              {lightboxIndex + 1} / {product.images.length}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;
