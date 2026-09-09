import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter, FaTimes, FaUndo, FaFrown, FaHeart, FaSearch, FaChevronDown } from "react-icons/fa";

// Components
import Breadcrumb from "../../components/common/Breadcrumb";
import ProductCard from "../../components/products/ProductCard";
import ProductQuickView from "../../components/products/ProductQuickView";

// Context & Data
import { useProducts } from "../../context/ProductContext";
import { useWishlist } from "../../context/WishlistContext";

const Products = () => {
  const { products: PRODUCTS } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist } = useWishlist();

  // Route URL triggers
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");
  const brandParam = searchParams.get("brand");
  const genderParam = searchParams.get("gender");
  // wishlistParam check disabled

  // Local State
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Accordion drawer sections state
  const [expandedSections, setExpandedSections] = useState({
    sortBy: true,
    gender: true,
    type: false,
    size: false,
    templeLength: false,
    color: false,
    brands: false,
    material: false,
    shape: false,
    price: false,
  });

  const [selectedTempleLengths, setSelectedTempleLengths] = useState([]);

  const handleTempleLengthChange = (len) => {
    setSelectedTempleLengths((prev) =>
      prev.includes(len) ? prev.filter((l) => l !== len) : [...prev, len]
    );
  };

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  // Prevent background scroll when mobile filter drawer is open
  useEffect(() => {
    if (filterDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [filterDrawerOpen]);

  // Filters State
  const [searchQuery, setSearchQuery] = useState(searchParam || "");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [selectedGender, setSelectedGender] = useState(genderParam || "all");
  const [selectedBrands, setSelectedBrands] = useState(brandParam ? [brandParam] : []);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState(80000);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  // Sync state with URL change
  useEffect(() => {
    setSelectedCategory(categoryParam || "all");
    setSearchQuery(searchParam || "");
    setSelectedGender(genderParam || "all");
    if (brandParam) {
      setSelectedBrands([brandParam]);
    } else {
      setSelectedBrands([]);
    }
  }, [categoryParam, searchParam, brandParam, genderParam]);

  // Initial page mount loading feel
  useEffect(() => {
    calculateFilters();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  // Run filter calculations instantly on criteria updates with zero skeleton flashing
  useEffect(() => {
    calculateFilters();
  }, [
    selectedCategory,
    searchQuery,
    selectedBrands,
    selectedShapes,
    selectedSizes,
    selectedTempleLengths,
    priceRange,
    onlyInStock,
    sortBy,
    selectedGender
  ]);

  const calculateFilters = () => {
    let list = [...PRODUCTS];

    // 1. Wishlist Check (Disabled - handled by slide-in drawer)

    // 2. Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.subCategory && p.subCategory.toLowerCase().includes(q))
      );
    }

    // 3. Category Filter
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // 3.5 Gender Filter
    if (selectedGender !== "all") {
      list = list.filter((p) => {
        if (!p.gender) return false;
        const g = p.gender.toLowerCase();
        if (selectedGender === "unisex") return g === "unisex" || g === "all";
        if (selectedGender === "men") return g === "men" || g === "unisex";
        if (selectedGender === "women") return g === "women" || g === "unisex";
        if (selectedGender === "kids") return g === "kids" || g === "children";
        return g === selectedGender.toLowerCase();
      });
    }

    // 4. Brands Filter
    if (selectedBrands.length > 0) {
      const lowerBrands = selectedBrands.map((b) => b.toLowerCase());
      list = list.filter((p) => p.brand && lowerBrands.includes(p.brand.toLowerCase()));
    }

    // 5. Frame Shape Filter
    if (selectedShapes.length > 0) {
      list = list.filter((p) => selectedShapes.includes(p.frameShape));
    }

    // 6. Frame Material Filter (Removed)

    // 7. Size Filter
    if (selectedSizes.length > 0) {
      list = list.filter((p) => selectedSizes.includes(p.size));
    }

    // 7.5 Temple Length Filter
    if (selectedTempleLengths.length > 0) {
      list = list.filter((p) => {
        if (!p.sizeInfo) return false;
        return selectedTempleLengths.some((len) =>
          p.sizeInfo.toLowerCase().includes(len.toLowerCase())
        );
      });
    }

    // 8. Price Range Filter
    list = list.filter((p) => (p.discountPrice || p.price) <= priceRange);

    // 9. In Stock Only Filter
    if (onlyInStock) {
      list = list.filter((p) => p.inStock);
    }

    // 10. Sorting
    if (sortBy === "price-low") {
      list.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    } else if (sortBy === "price-high") {
      list.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    } else if (sortBy === "rating") {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "newest") {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    setFilteredProducts(list);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      if (cat === "all") p.delete("category");
      else p.set("category", cat);
      return p;
    });
  };

  const handleGenderChange = (gen) => {
    setSelectedGender(gen);
    setSearchParams((prev) => {
      const p = new URLSearchParams(prev);
      if (gen === "all") p.delete("gender");
      else p.set("gender", gen);
      return p;
    });
  };

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) => {
      const updated = prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand];
      
      setSearchParams((p) => {
        const params = new URLSearchParams(p);
        if (updated.length === 1) {
          params.set("brand", updated[0]);
        } else {
          params.delete("brand");
        }
        return params;
      });

      return updated;
    });
  };

  const handleShapeChange = (shape) => {
    setSelectedShapes((prev) =>
      prev.includes(shape) ? prev.filter((s) => s !== shape) : [...prev, shape]
    );
  };

  const handleSizeChange = (sz) => {
    setSelectedSizes((prev) =>
      prev.includes(sz) ? prev.filter((s) => s !== sz) : [...prev, sz]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedGender("all");
    setSelectedBrands([]);
    setSelectedShapes([]);
    setSelectedSizes([]);
    setSelectedTempleLengths([]);
    setPriceRange(80000);
    setOnlyInStock(false);
    setSortBy("featured");
    setSearchParams({});
  };

  // Extract metadata options dynamically from PRODUCTS
  const brandsList = Array.from(new Set(PRODUCTS.map((p) => p.brand)));
  const shapesList = Array.from(new Set(PRODUCTS.map((p) => p.frameShape))).filter(Boolean);
  const sizesList = Array.from(new Set(PRODUCTS.map((p) => p.size))).filter(Boolean);

  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedGender !== "all" ? 1 : 0) +
    selectedBrands.length +
    selectedShapes.length +
    selectedSizes.length +
    selectedTempleLengths.length +
    (priceRange < 80000 ? 1 : 0) +
    (onlyInStock ? 1 : 0);

  // Dynamic page title & breadcrumbs based on active filter
  let dynamicTitle = "The Eyewear Gallery";
  let breadcrumbLabel = "";

  if (selectedCategory && selectedCategory !== "all") {
    const formattedCat = selectedCategory
      .replace("-", " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    dynamicTitle = `${formattedCat} Gallery`;
    breadcrumbLabel = `${formattedCat} Gallery`;
  } else if (selectedBrands.length === 1) {
    dynamicTitle = `${selectedBrands[0]} Collection`;
    breadcrumbLabel = selectedBrands[0];
  } else if (searchQuery.trim()) {
    dynamicTitle = `Search Results: "${searchQuery}"`;
    breadcrumbLabel = `Search: ${searchQuery}`;
  }

  const breadcrumbItems = breadcrumbLabel
    ? [
        { label: "The Eyewear Gallery", link: "/products" },
        { label: breadcrumbLabel },
      ]
    : [{ label: "The Eyewear Gallery" }];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
      {/* Breadcrumb Row */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Catalog Title Section */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-serif font-black text-[#1C1B1B] dark:text-white flex items-center gap-2">
            <span>{dynamicTitle}</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-450 dark:text-gray-500 mt-1">
            Displaying {filteredProducts.length} results matching your styles
          </p>
        </div>

        {/* Catalog Control Header: Sort & Filters Button */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3 pt-2">
          {/* Filters Trigger Button - Visible next to Sort By on Desktop & Mobile */}
          <button
            onClick={() => setFilterDrawerOpen(true)}
            className="flex items-center gap-2 bg-[#8B1E22] hover:bg-[#70161a] text-white dark:bg-gold dark:text-gray-950 dark:hover:bg-amber-400 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
          >
            <FaFilter className="text-xs" />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-white text-[#8B1E22] dark:bg-gray-950 dark:text-gold rounded-full font-black">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-450 dark:text-gray-500 hidden sm:inline font-medium">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-xs font-medium text-gray-850 dark:text-gray-200 focus:outline-none shadow-sm cursor-pointer hover:border-gray-300"
            >
              <option value="featured">Featured Collection</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="newest">New Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= PRODUCT DISPLAY CATALOG GRID (FULL WIDTH) ================= */}
      <div>
        {loading ? (
          /* Skeleton Loading Grid */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="border border-gray-100 dark:border-gray-800 rounded-xl p-4 bg-white dark:bg-gray-900 space-y-4 shadow animate-pulse"
              >
                <div className="aspect-square w-full bg-gray-200 dark:bg-gray-800 rounded-lg" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            /* Empty State Container */
            <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-xl border border-gray-150 dark:border-gray-800 shadow-premium flex flex-col items-center justify-center space-y-4">
              <FaFrown className="text-5xl text-gray-400 dark:text-gray-500 animate-bounce" />
              <h3 className="text-xl font-bold text-gray-850 dark:text-white">
                No Eyewear Found
              </h3>
              <p className="text-xs md:text-sm text-gray-450 dark:text-gray-500 max-w-sm">
                We couldn't find any products matching your current active filter conditions. Try resetting or adjusting criteria.
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

      {/* ================= ACCORDION FILTER & SORT DRAWER (SLIDE FROM LEFT) ================= */}
      <AnimatePresence>
        {filterDrawerOpen && (
          <>
            {/* Dark background modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { document.body.style.overflow = 'unset'; setFilterDrawerOpen(false); }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
            />

            {/* Slide-Over Left Drawer Box */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 w-full sm:w-[380px] bg-white dark:bg-gray-950 z-50 shadow-2xl flex flex-col"
              onAnimationStart={() => document.body.style.overflow = 'hidden'}
            >
              {/* Top Header Bar */}
              <div className="bg-[#8B1E22] text-white px-6 py-4 flex items-center justify-between shadow-md">
                <h2 className="font-serif text-xl tracking-wider font-medium">
                  Filter & Sort
                </h2>
                <button
                  onClick={() => { document.body.style.overflow = 'unset'; setFilterDrawerOpen(false); }}
                  className="text-white hover:opacity-75 transition-opacity text-xl cursor-pointer p-1"
                  aria-label="Close filters"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Accordion Filter Items */}
              <div className="flex-1 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-800 px-6">
                
                {/* Active Filter Chips (Top of Filter Drawer) */}
                {activeFiltersCount > 0 && (
                  <div className="py-4 space-y-2 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      <span>Active Filters ({activeFiltersCount})</span>
                      <button
                        type="button"
                        onClick={clearAllFilters}
                        className="text-[#8B1E22] dark:text-gold hover:underline cursor-pointer lowercase text-xs"
                      >
                        clear all
                      </button>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      {/* Search Query Chip */}
                      {searchQuery.trim() && (
                        <div className="bg-black text-white dark:bg-gray-900 px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-semibold tracking-wider">
                          <span>Search: {searchQuery}</span>
                          <button
                            type="button"
                            onClick={() => setSearchQuery("")}
                            className="hover:opacity-75 cursor-pointer ml-2 p-0.5"
                            aria-label="Remove search filter"
                          >
                            <FaTimes className="text-xs" />
                          </button>
                        </div>
                      )}

                      {/* Category Chip */}
                      {selectedCategory !== "all" && (
                        <div className="bg-black text-white dark:bg-gray-900 px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
                          <span>{selectedCategory.replace("-", " ")}</span>
                          <button
                            type="button"
                            onClick={() => setSelectedCategory("all")}
                            className="hover:opacity-75 cursor-pointer ml-2 p-0.5"
                            aria-label="Remove category filter"
                          >
                            <FaTimes className="text-xs" />
                          </button>
                        </div>
                      )}

                      {/* Gender Chip */}
                      {selectedGender !== "all" && (
                        <div className="bg-black text-white dark:bg-gray-900 px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
                          <span>{selectedGender}</span>
                          <button
                            type="button"
                            onClick={() => setSelectedGender("all")}
                            className="hover:opacity-75 cursor-pointer ml-2 p-0.5"
                            aria-label="Remove gender filter"
                          >
                            <FaTimes className="text-xs" />
                          </button>
                        </div>
                      )}

                      {/* Selected Brands Chips */}
                      {selectedBrands.map((brand) => (
                        <div
                          key={brand}
                          className="bg-black text-white dark:bg-gray-900 px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-semibold tracking-wider"
                        >
                          <span>{brand}</span>
                          <button
                            type="button"
                            onClick={() => setSelectedBrands((prev) => prev.filter((b) => b !== brand))}
                            className="hover:opacity-75 cursor-pointer ml-2 p-0.5"
                            aria-label={`Remove ${brand} filter`}
                          >
                            <FaTimes className="text-xs" />
                          </button>
                        </div>
                      ))}

                      {/* Selected Shapes Chips */}
                      {selectedShapes.map((shape) => (
                        <div
                          key={shape}
                          className="bg-black text-white dark:bg-gray-900 px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-semibold tracking-wider"
                        >
                          <span>{shape}</span>
                          <button
                            type="button"
                            onClick={() => setSelectedShapes((prev) => prev.filter((s) => s !== shape))}
                            className="hover:opacity-75 cursor-pointer ml-2 p-0.5"
                            aria-label={`Remove ${shape} filter`}
                          >
                            <FaTimes className="text-xs" />
                          </button>
                        </div>
                      ))}

                      {/* Selected Sizes Chips */}
                      {selectedSizes.map((sz) => (
                        <div
                          key={sz}
                          className="bg-black text-white dark:bg-gray-900 px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-semibold tracking-wider"
                        >
                          <span>{sz}</span>
                          <button
                            type="button"
                            onClick={() => setSelectedSizes((prev) => prev.filter((s) => s !== sz))}
                            className="hover:opacity-75 cursor-pointer ml-2 p-0.5"
                            aria-label={`Remove ${sz} filter`}
                          >
                            <FaTimes className="text-xs" />
                          </button>
                        </div>
                      ))}

                      {/* Selected Temple Lengths Chips */}
                      {selectedTempleLengths.map((len) => (
                        <div
                          key={len}
                          className="bg-black text-white dark:bg-gray-900 px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-semibold tracking-wider"
                        >
                          <span>{len}</span>
                          <button
                            type="button"
                            onClick={() => setSelectedTempleLengths((prev) => prev.filter((l) => l !== len))}
                            className="hover:opacity-75 cursor-pointer ml-2 p-0.5"
                            aria-label={`Remove ${len} filter`}
                          >
                            <FaTimes className="text-xs" />
                          </button>
                        </div>
                      ))}

                      {/* Price Range Chip */}
                      {priceRange < 80000 && (
                        <div className="bg-black text-white dark:bg-gray-900 px-4 py-2.5 rounded-lg flex items-center justify-between text-xs font-semibold tracking-wider">
                          <span>Under ₹{priceRange.toLocaleString("en-IN")}</span>
                          <button
                            type="button"
                            onClick={() => setPriceRange(80000)}
                            className="hover:opacity-75 cursor-pointer ml-2 p-0.5"
                            aria-label="Reset price filter"
                          >
                            <FaTimes className="text-xs" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* 1. SORT BY */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("sortBy")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      SORT BY
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.sortBy ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.sortBy && (
                    <div className="pb-4 pt-1 space-y-2 text-xs">
                      {[
                        { label: "Featured Collection", val: "featured" },
                        { label: "Price: Low to High", val: "price-low" },
                        { label: "Price: High to Low", val: "price-high" },
                        { label: "Customer Rating", val: "rating" },
                        { label: "New Arrivals", val: "newest" },
                      ].map((opt) => (
                        <label key={opt.val} className="flex items-center gap-3 cursor-pointer py-1 text-gray-700 dark:text-gray-300 hover:text-[#8B1E22] dark:hover:text-white">
                          <input
                            type="radio"
                            name="drawerSortBy"
                            checked={sortBy === opt.val}
                            onChange={() => setSortBy(opt.val)}
                            className="accent-[#8B1E22] dark:accent-gold"
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. GENDER */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("gender")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      GENDER
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.gender ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.gender && (
                    <div className="pb-4 pt-1 space-y-2 text-xs">
                      {[
                        { label: "All", val: "all" },
                        { label: "Unisex", val: "unisex" },
                        { label: "Men", val: "men" },
                        { label: "Women", val: "women" },
                        { label: "Kids", val: "kids" },
                      ].map((gen) => (
                        <label key={gen.val} className="flex items-center gap-3 cursor-pointer py-1 text-gray-700 dark:text-gray-300">
                          <input
                            type="radio"
                            name="drawerGender"
                            checked={selectedGender === gen.val}
                            onChange={() => handleGenderChange(gen.val)}
                            className="accent-[#8B1E22] dark:accent-gold"
                          />
                          <span>{gen.label}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* 3. TYPE (Category) */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("type")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      TYPE
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.type ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.type && (
                    <div className="pb-4 pt-1 space-y-2 text-xs">
                      {["all", "eyeglasses", "sunglasses", "contact-lenses"].map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer py-1 text-gray-700 dark:text-gray-300 capitalize">
                          <input
                            type="radio"
                            name="drawerCategory"
                            checked={selectedCategory === cat}
                            onChange={() => handleCategoryChange(cat)}
                            className="accent-[#8B1E22] dark:accent-gold"
                          />
                          <span>{cat.replace("-", " ")}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* 4. SIZE */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("size")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      SIZE
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.size ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.size && (
                    <div className="pb-4 pt-1 flex flex-wrap gap-2 text-xs">
                      {["Small", "Medium", "Large"].map((sz) => {
                        const isSelected = selectedSizes.includes(sz);
                        return (
                          <button
                            key={sz}
                            onClick={() => handleSizeChange(sz)}
                            className={`px-3.5 py-1.5 rounded border text-xs font-medium transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-[#8B1E22] text-white border-[#8B1E22] dark:bg-gold dark:text-gray-950 dark:border-gold"
                                : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {sz}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 4.5. TEMPLE LENGTH */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("templeLength")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      TEMPLE LENGTH
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.templeLength ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.templeLength && (
                    <div className="pb-4 pt-1 flex flex-wrap gap-2 text-xs">
                      {["135mm", "140mm", "145mm", "150mm"].map((len) => {
                        const isSelected = selectedTempleLengths.includes(len);
                        return (
                          <button
                            key={len}
                            onClick={() => handleTempleLengthChange(len)}
                            className={`px-3.5 py-1.5 rounded border text-xs font-medium transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-[#8B1E22] text-white border-[#8B1E22] dark:bg-gold dark:text-gray-950 dark:border-gold"
                                : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {len}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 5. COLOR */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("color")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      COLOR
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.color ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.color && (
                    <div className="pb-4 pt-1 flex flex-wrap gap-2 text-xs">
                      {["Black", "Gold", "Silver", "Tortoise", "Blue", "Transparent"].map((col) => (
                        <button
                          key={col}
                          onClick={() => setSearchQuery(searchQuery === col ? "" : col)}
                          className={`px-3.5 py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                            searchQuery.toLowerCase() === col.toLowerCase()
                              ? "bg-[#8B1E22] text-white border-[#8B1E22] dark:bg-gold dark:text-gray-950"
                              : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400"
                          }`}
                        >
                          {col}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 6. BRANDS */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("brands")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      BRANDS
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.brands ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.brands && (
                    <div className="pb-4 pt-1 flex flex-wrap gap-2 text-xs">
                      {brandsList.map((brand) => {
                        const isSelected = selectedBrands.some((b) => b.toLowerCase() === brand.toLowerCase());
                        return (
                          <button
                            key={brand}
                            onClick={() => handleBrandChange(brand)}
                            className={`px-3.5 py-1.5 rounded-full border text-xs font-medium transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-[#8B1E22] text-white border-[#8B1E22] dark:bg-gold dark:text-gray-950 dark:border-gold"
                                : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {brand}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 7. MATERIAL */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("material")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      MATERIAL
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.material ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.material && (
                    <div className="pb-4 pt-1 flex flex-wrap gap-2 text-xs">
                      {["Metal", "Acetate", "Titanium", "Plastic"].map((mat) => (
                        <button
                          key={mat}
                          onClick={() => setSearchQuery(searchQuery === mat ? "" : mat)}
                          className={`px-3.5 py-1.5 rounded border text-xs font-medium transition-colors cursor-pointer ${
                            searchQuery.toLowerCase() === mat.toLowerCase()
                              ? "bg-[#8B1E22] text-white border-[#8B1E22] dark:bg-gold dark:text-gray-950"
                              : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400"
                          }`}
                        >
                          {mat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 8. SHAPE */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("shape")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      SHAPE
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.shape ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.shape && (
                    <div className="pb-4 pt-1 flex flex-wrap gap-2 text-xs">
                      {shapesList.map((shape) => {
                        const isSelected = selectedShapes.includes(shape);
                        return (
                          <button
                            key={shape}
                            onClick={() => handleShapeChange(shape)}
                            className={`px-3.5 py-1.5 rounded border text-xs font-medium transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-[#8B1E22] text-white border-[#8B1E22] dark:bg-gold dark:text-gray-950 dark:border-gold"
                                : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400"
                            }`}
                          >
                            {shape}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 9. PRICE */}
                <div className="py-2">
                  <button
                    onClick={() => toggleSection("price")}
                    className="w-full py-3.5 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-gray-200 group-hover:text-[#8B1E22] dark:group-hover:text-gold transition-colors">
                      PRICE
                    </span>
                    <FaChevronDown
                      className={`text-xs text-gray-500 transition-transform duration-200 ${
                        expandedSections.price ? "rotate-180 text-[#8B1E22] dark:text-gold" : ""
                      }`}
                    />
                  </button>
                  {expandedSections.price && (
                    <div className="pb-4 pt-1 space-y-2 text-xs">
                      <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <span>Max Price</span>
                        <span className="text-[#8B1E22] dark:text-gold font-bold">₹{priceRange.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="80000"
                        step="500"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="w-full accent-[#8B1E22] dark:accent-gold cursor-pointer"
                      />
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center gap-3">
                <button
                  onClick={clearAllFilters}
                  className="w-1/3 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded font-bold text-xs uppercase tracking-wider hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  Reset
                </button>
                <button
                  onClick={() => { document.body.style.overflow = 'unset'; setFilterDrawerOpen(false); }}
                  className="w-2/3 py-3 bg-[#8B1E22] hover:bg-[#70161a] text-white dark:bg-gold dark:text-gray-950 font-bold text-xs uppercase tracking-wider rounded transition-colors shadow-md cursor-pointer"
                >
                  Apply ({filteredProducts.length})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Checkout system popup */}
    </div>
  );
};

export default Products;
