import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilter, FaTimes, FaUndo, FaFrown, FaHeart, FaSearch } from "react-icons/fa";

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
    setPriceRange(80000);
    setOnlyInStock(false);
    setSortBy("featured");
    setSearchParams({});
  };

  // Extract metadata options dynamically from PRODUCTS
  const brandsList = Array.from(new Set(PRODUCTS.map((p) => p.brand)));
  const shapesList = Array.from(new Set(PRODUCTS.map((p) => p.frameShape))).filter(Boolean);
  const sizesList = Array.from(new Set(PRODUCTS.map((p) => p.size))).filter(Boolean);

  const breadcrumbItems = [
    { label: "The Eyewear Gallery", link: "/products" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
      {/* Breadcrumb Row */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Catalog Title Section */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-serif font-black text-[#1C1B1B] dark:text-white flex items-center gap-2">
            <span>The Eyewear Gallery</span>
          </h1>
          <p className="text-xs md:text-sm text-gray-450 dark:text-gray-500 mt-1">
            Displaying {filteredProducts.length} results matching your styles
          </p>
        </div>

        {/* Catalog Control Header: Sort & Filters Button */}
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3 pt-2">
          {/* Mobile Filter Trigger */}
          <button
            onClick={() => setFilterDrawerOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-gray-100 hover:bg-gold dark:bg-gray-850 dark:hover:bg-gold hover:text-gray-950 px-4 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <FaFilter />
            <span>Filters</span>
          </button>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-450 dark:text-gray-500 hidden sm:inline">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded px-3 py-2 text-xs font-medium text-gray-850 dark:text-gray-200 focus:outline-none"
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* ================= DESKTOP FILTER SIDEBAR ================= */}
        <aside className="hidden lg:block bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 p-6 rounded-xl space-y-6 shadow-premium">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
            <h2 className="font-bold text-sm uppercase tracking-wider text-gray-800 dark:text-white">
              Filter Options
            </h2>
            <button
              onClick={clearAllFilters}
              className="text-xs text-primary dark:text-gold hover:underline flex items-center gap-1 font-semibold"
            >
              <FaUndo className="text-[10px]" />
              <span>Reset</span>
            </button>
          </div>

          {/* Text Search Input inside sidebar */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Search</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs py-2 pl-3 pr-8 rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 dark:text-white"
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            </div>
          </div>

          {/* Category Radios */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Category</h3>
            <div className="flex flex-col gap-1.5 text-sm">
              {["all", "eyeglasses", "sunglasses", "contact-lenses"].map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat}
                    onChange={() => handleCategoryChange(cat)}
                    className="accent-primary dark:accent-gold"
                  />
                  <span className="capitalize">{cat.replace("-", " ")}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Gender Filter */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Gender</h3>
            <div className="flex flex-col gap-1.5 text-sm">
              {[
                { label: "All", val: "all" },
                { label: "Unisex", val: "unisex" },
                { label: "Men", val: "men" },
                { label: "Women", val: "women" },
                { label: "Kids", val: "kids" }
              ].map((gen) => (
                <label key={gen.val} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    checked={selectedGender === gen.val}
                    onChange={() => handleGenderChange(gen.val)}
                    className="accent-primary dark:accent-gold"
                  />
                  <span>{gen.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brands Filter removed from top position */}

          {/* Price Range Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">
              <span>Max Price</span>
              <span className="text-primary dark:text-gold">₹{priceRange.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="20000"
              step="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-primary dark:accent-gold cursor-pointer"
            />
          </div>

          {/* Frame Shape */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Frame Shape</h3>
            <div className="flex flex-col gap-1.5 text-sm">
              {shapesList.map((shape) => (
                <label key={shape} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedShapes.includes(shape)}
                    onChange={() => handleShapeChange(shape)}
                    className="accent-primary dark:accent-gold"
                  />
                  <span>{shape}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Brands</h3>
            <div className="flex flex-col gap-1.5 text-sm">
              {brandsList.map((brand) => (
                <label key={brand} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedBrands.some((b) => b.toLowerCase() === brand.toLowerCase())}
                    onChange={() => handleBrandChange(brand)}
                    className="accent-primary dark:accent-gold"
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Frame Size</h3>
            <div className="flex flex-col gap-1.5 text-sm">
              {sizesList.map((sz) => (
                <label key={sz} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(sz)}
                    onChange={() => handleSizeChange(sz)}
                    className="accent-primary dark:accent-gold"
                  />
                  <span>{sz}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability Toggle */}
          <div className="pt-2">
            <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={() => setOnlyInStock(!onlyInStock)}
                className="accent-primary dark:accent-gold"
              />
              <span className="font-semibold text-xs uppercase tracking-wider text-gray-450 dark:text-gray-500">In Stock Only</span>
            </label>
          </div>
        </aside>

        {/* ================= PRODUCT DISPLAY CATALOG GRID ================= */}
        <div className="lg:col-span-3">
          {loading ? (
            /* Skeleton Loading Grid */
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {Array.from({ length: 6 }).map((_, idx) => (
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
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
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
      </div>

      {/* ================= MOBILE BOTTOM SHEET FILTERS DRAWER ================= */}
      <AnimatePresence>
        {filterDrawerOpen && (
          <>
            {/* Dark background modal layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { document.body.style.overflow = 'unset'; setFilterDrawerOpen(false); }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 lg:hidden"
            />

            {/* Bottom Drawer Box */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed bottom-0 left-0 right-0 max-h-[80vh] bg-white dark:bg-gray-900 z-50 rounded-t-2xl shadow-2xl p-6 pb-28 overflow-y-auto lg:hidden"
              onAnimationStart={() => document.body.style.overflow = 'hidden'}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 mb-4">
                <h2 className="font-bold text-sm uppercase tracking-wider text-gray-850 dark:text-white">
                  Filter Eyewear
                </h2>
                <div className="flex items-center gap-4">
                  <button onClick={clearAllFilters} className="text-xs text-primary dark:text-gold hover:underline">
                    Reset
                  </button>
                  <button
                    onClick={() => setFilterDrawerOpen(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Form Content List */}
              <div className="space-y-6 flex-grow pb-8">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Search</label>
                  <input
                    type="text"
                    placeholder="Search specifications..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-sm py-2 px-3 rounded border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 dark:text-white"
                  />
                </div>

                {/* Categories */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Category</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {["all", "eyeglasses", "sunglasses", "contact-lenses"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`py-2 px-3 border rounded text-xs capitalize ${
                          selectedCategory === cat
                            ? "bg-primary border-primary text-white dark:bg-gold dark:border-gold dark:text-gray-950"
                            : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {cat.replace("-", " ")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gender (Mobile) */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Gender</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "All", val: "all" },
                      { label: "Unisex", val: "unisex" },
                      { label: "Men", val: "men" },
                      { label: "Women", val: "women" },
                      { label: "Kids", val: "kids" }
                    ].map((gen) => (
                      <button
                        key={gen.val}
                        type="button"
                        onClick={() => handleGenderChange(gen.val)}
                        className={`py-2 px-3 border rounded text-xs ${
                          selectedGender === gen.val
                            ? "bg-primary border-primary text-white dark:bg-gold dark:border-gold dark:text-gray-950"
                            : "border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {gen.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brands filter removed from mobile top position */}

                {/* Price Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">
                    <span>Max Price</span>
                    <span className="text-primary dark:text-gold font-bold">₹{priceRange.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full accent-primary dark:accent-gold"
                  />
                </div>

                {/* Frame Shapes */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Frame Shape</h3>
                  <div className="flex flex-wrap gap-2">
                    {shapesList.map((shape) => {
                      const isSelected = selectedShapes.includes(shape);
                      return (
                        <button
                          key={shape}
                          onClick={() => handleShapeChange(shape)}
                          className={`py-1.5 px-3 rounded border text-xs ${
                            isSelected
                              ? "bg-primary border-primary text-white dark:bg-gold dark:border-gold dark:text-gray-950"
                              : "border-gray-250 dark:border-gray-800 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {shape}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Brands */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-gray-450 dark:text-gray-500 uppercase tracking-wider">Brands</h3>
                  <div className="flex flex-wrap gap-2">
                    {brandsList.map((brand) => {
                      const isSelected = selectedBrands.some((b) => b.toLowerCase() === brand.toLowerCase());
                      return (
                        <button
                          key={brand}
                          onClick={() => handleBrandChange(brand)}
                          className={`py-1.5 px-3 rounded-full text-xs font-medium ${
                            isSelected
                              ? "bg-primary text-white dark:bg-gold dark:text-gray-950"
                              : "bg-gray-150 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {brand}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Stock Toggle */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={onlyInStock}
                      onChange={() => setOnlyInStock(!onlyInStock)}
                      className="accent-primary dark:accent-gold w-4 h-4"
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-450 dark:text-gray-500">In Stock Only</span>
                  </label>
                </div>
              </div>

              {/* Mobile CTA Apply Button */}
              <button
                onClick={() => setFilterDrawerOpen(false)}
                className="w-full bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-955 font-bold py-3.5 rounded-lg text-sm uppercase tracking-wider transition-all mt-6 mb-4"
              >
                Apply Active Filters ({filteredProducts.length})
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Checkout system popup */}
    </div>
  );
};

export default Products;
