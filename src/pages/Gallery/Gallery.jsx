import React, { useState, useEffect } from "react";
import { FaTimes, FaSearchPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useProducts } from "../../context/ProductContext";
import Breadcrumb from "../../components/common/Breadcrumb";

const Gallery = () => {
  const { galleryImages: galleryItems } = useProducts();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Close lightbox on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const breadcrumbItems = [{ label: "Showroom Gallery" }];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Header Title */}
      <div className="text-center my-8 max-w-xl mx-auto space-y-3">
        <span className="text-primary dark:text-gold text-xs font-bold uppercase tracking-[0.25em]">
          Showroom Tour
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black text-gray-800 dark:text-white">
          Paradise Optics Gallery
        </h1>
        <div className="w-16 h-1 bg-gold mx-auto mt-2" />
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 overflow-x-auto pb-4 mb-8">
        {[
          { key: "all", label: "Show All" },
          { key: "interior", label: "Store Interior" },
          { key: "lab", label: "Diagnostics Lab" },
          { key: "collections", label: "Eyewear Closets" },
          { key: "customers", label: "Happy Customers" }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              activeFilter === tab.key
                ? "bg-primary text-white dark:bg-gold dark:text-gray-950 shadow"
                : "bg-gray-50 dark:bg-gray-900 text-gray-650 dark:text-gray-300 border border-gray-150 dark:border-gray-850 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-premium border border-gray-100 dark:border-gray-850 cursor-pointer"
          >
            {/* Gallery Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />

            {/* Hover overlay details */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
              <FaSearchPlus className="text-xl text-gold mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform" />
              <h3 className="font-serif font-bold text-sm leading-tight translate-y-3 group-hover:translate-y-0 transition-transform delay-[50ms]">
                {item.title}
              </h3>
              <span className="text-[10px] uppercase font-semibold text-gray-300 tracking-wider capitalize translate-y-3 group-hover:translate-y-0 transition-transform delay-100">
                {item.category.replace("-", " ")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ================= LIGHTBOX OVERLAY DIALOG ================= */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          {/* Close trigger */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-gray-900 text-white flex items-center justify-center text-lg z-50 transition-colors"
            aria-label="Close Gallery Image"
          >
            <FaTimes />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-gold hover:text-gray-900 text-white flex items-center justify-center text-lg z-45 transition-colors focus:outline-none"
            aria-label="Previous Image"
          >
            <FaChevronLeft />
          </button>

          {/* Large Image Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative"
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            {/* Caption */}
            <div className="text-center text-white mt-4 space-y-1">
              <h4 className="font-serif text-lg font-bold">
                {filteredItems[lightboxIndex].title}
              </h4>
              <span className="text-xs text-gray-450 uppercase tracking-widest capitalize">
                Category: {filteredItems[lightboxIndex].category}
              </span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-gold hover:text-gray-900 text-white flex items-center justify-center text-lg z-45 transition-colors focus:outline-none"
            aria-label="Next Image"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
