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

  const isContactLens =
    product.category?.toLowerCase().includes("contact") ||
    product.category?.toLowerCase().includes("lenses") ||
    product.subCategory?.toLowerCase().includes("contact");

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
                transform: isZoomed
                  ? "scale(2.2)"
                  : isContactLens
                  ? "scale(1.4)"
                  : "scale(1)",
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
            {isContactLens ? (
              <>
                <div className="grid grid-cols-3">
                  <span className="text-gray-400 dark:text-gray-500">Lens Type</span>
                  <span className="col-span-2 font-semibold text-gray-750 dark:text-gray-200">
                    {product.subCategory || "Contact Lenses"}
                  </span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-gray-400 dark:text-gray-500">Material Type</span>
                  <span className="col-span-2 font-semibold text-gray-750 dark:text-gray-200">
                    {product.frameMaterial || "Hydrogel / Silicone Hydrogel"}
                  </span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="text-gray-400 dark:text-gray-500">Parameters</span>
                  <span className="col-span-2 font-semibold text-gray-750 dark:text-gray-200">
                    {product.sizeInfo || "Base Curve: 8.5mm, Diameter: 14.2mm"}
                  </span>
                </div>
              </>
            ) : (
              <>
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
              </>
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

      {/* Technical Specifications Section */}
      <section className="mt-16 border-t border-gray-250 dark:border-gray-800 pt-8">
        <div className="border-b border-gray-200 dark:border-gray-850 pb-4 mb-8">
          <h2 className="font-serif text-lg md:text-xl font-bold uppercase tracking-wider text-primary dark:text-gold inline-block border-b-2 border-primary dark:border-gold pb-1">
            Technical Specifications
          </h2>
        </div>

        {/* Technical specifications sheet */}
        {isContactLens ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-3">Lens Details</h3>
              <table className="w-full text-xs md:text-sm">
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-850">
                    <td className="py-2.5 text-gray-400">Brand Manufacturer</td>
                    <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.brand}</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-850">
                    <td className="py-2.5 text-gray-400">Lens Type</td>
                    <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.subCategory || "Contact Lenses"}</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-850">
                    <td className="py-2.5 text-gray-400">Lens Color / Tint</td>
                    <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.frameColor || "Clear"}</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-850">
                    <td className="py-2.5 text-gray-400">Material Type</td>
                    <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.frameMaterial || "Etafilcon A (Hydrogel)"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-3">Lens Specifications</h3>
              <table className="w-full text-xs md:text-sm">
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-850">
                    <td className="py-2.5 text-gray-400">Packaging Type</td>
                    <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.size || "Standard Box"}</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-850">
                    <td className="py-2.5 text-gray-400">Lens Size parameters</td>
                    <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.sizeInfo || "Base Curve: 8.5mm, Diameter: 14.2mm"}</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-850">
                    <td className="py-2.5 text-gray-400">Target Audience</td>
                    <td className="py-2.5 font-semibold text-gray-800 dark:text-white">{product.gender || "Unisex"}</td>
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
        )}
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
