import React, { createContext, useContext, useState, useEffect } from "react";
import { PRODUCTS as STATIC_PRODUCTS } from "../data/productsData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // 1. Custom Added Products State
  const [customProducts, setCustomProducts] = useState(() => {
    const saved = localStorage.getItem("custom_products");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Deleted Static Products State (so static database items can be deleted)
  const [deletedStaticIds, setDeletedStaticIds] = useState(() => {
    const saved = localStorage.getItem("deleted_static_ids");
    return saved ? JSON.parse(saved) : [];
  });

  // 2.5. Edited Static Products State (so static database items can be edited)
  const [editedStaticProducts, setEditedStaticProducts] = useState(() => {
    const saved = localStorage.getItem("edited_static_products");
    return saved ? JSON.parse(saved) : {};
  });

  // 3. Analytics: WhatsApp Clicks
  const [whatsappClicks, setWhatsappClicks] = useState(() => {
    const saved = localStorage.getItem("whatsapp_clicks");
    return saved ? Number(saved) : 0;
  });

  // 4. Website Copy Config
  const [siteContent, setSiteContent] = useState(() => {
    const saved = localStorage.getItem("site_content");
    const defaultContent = {
      heroTitle: "Experience Luxury Vision & Premium Eyewear",
      heroSubtitle: "Discover custom-fitted eyeglasses, trending sunglasses, and elite eye testing services at Paradise Optics showroom.",
      marqueeText: "⚡ Special Anniversary Offer: Flat 20% off on all Premium Frames & Free Computerized Eye Testing! Visit our Showroom today. ⚡",
      promoBannerText: "Exclusive Carrera & Oakley Collections Now In Stock - Flat 15% Off!",
      storeHours: "Mon - Sun: 10:30 AM - 08:30 PM",
      phone: "+91 98154 84044",
      email: "info@paradiseoptics.com",
      address: "DMC Road, Opposite Police Line Gate No. 2, Dandi Swami, New Deep Nagar, Civil Lines, Ludhiana, Punjab 141001",
      whatsapp: "919815484044",
    };
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        parsed.phone = "+91 98154 84044";
        parsed.whatsapp = "919815484044";
        localStorage.setItem("site_content", JSON.stringify(parsed));
        return parsed;
      } catch (e) {
        return defaultContent;
      }
    }
    return defaultContent;
  });

  // 5. Coupon Codes State
  const defaultCoupons = [
    { code: "PARADISE20", discount: 20, description: "Flat 20% Off for Anniversary celebrations", minPurchase: 2000, active: true },
    { code: "WELCOME10", discount: 10, description: "10% off for first-time store enquiries", minPurchase: 1000, active: true },
    { code: "LENSFREE", discount: 15, description: "15% off on lens upgrades", minPurchase: 3000, active: true },
    { code: "OPTICVIP", discount: 15, description: "Elite VIP discount on premium international collections", minPurchase: 5000, active: true },
    { code: "FESTIVE25", discount: 25, description: "Flat 25% Off during festive sales on premium frames", minPurchase: 4000, active: true },
    { code: "SUNGLASS30", discount: 30, description: "Flat 30% Off on designer sunglasses collection", minPurchase: 6000, active: true },
    { code: "BDAY20", discount: 20, description: "Special Birthday Celebration Discount: Flat 20% off on all frames & lenses", minPurchase: 1500, active: true },
    { code: "STUDENT15", discount: 15, description: "Exclusive Student Discount: Flat 15% off on premium eyewear collection", minPurchase: 1500, active: true }
  ];
  const [coupons, setCoupons] = useState(() => {
    const saved = localStorage.getItem("site_coupons");
    if (saved) {
      const parsed = JSON.parse(saved);
      // Check if newly added code BDAY20 exists to prevent legacy cache overrides
      const hasNewCoupon = parsed.some((c) => c.code === "BDAY20");
      if (hasNewCoupon) return parsed;
    }
    localStorage.setItem("site_coupons", JSON.stringify(defaultCoupons));
    return defaultCoupons;
  });

  // 6. Dynamic Gallery Images State
  const defaultGallery = [
    {
      id: 1,
      category: "interior",
      title: "Paradise Showroom Front",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      category: "lab",
      title: "Vision Testing Suite",
      image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "collections",
      title: "Premium Gold Frames Display",
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      category: "collections",
      title: "Designer Sunglasses Closet",
      image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      category: "customers",
      title: "Personal Style Fitting",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      category: "interior",
      title: "Luxury Lounge & Mirror Bay",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 7,
      category: "lab",
      title: "Digital Refractometry",
      image: "https://images.unsplash.com/photo-1582230347205-862300b8e72e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 8,
      category: "customers",
      title: "Optometrist consultation",
      image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop"
    }
  ];
  const [galleryImages, setGalleryImages] = useState(() => {
    const saved = localStorage.getItem("showroom_gallery");
    return saved ? JSON.parse(saved) : defaultGallery;
  });

  const defaultHeroBanners = [
    {
      id: "banner-1",
      title: "A Frame For Every Destination",
      subtitle: "From beach escapes to city summers.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      cta: "Shop Now",
      link: "/products?category=sunglasses",
      active: true
    },
    {
      id: "banner-2",
      title: "Refined Vision. Timeless Luxury.",
      subtitle: "Discover iconic frames handcrafted by premier luxury fashion houses.",
      image: "/banner1.png",
      cta: "Shop Now",
      link: "/products?category=eyeglasses",
      active: false
    },
    {
      id: "banner-3",
      title: "Summer Sunshine & Haute Couture",
      subtitle: "Shield your eyes in absolute luxury with polarized designer sunglasses.",
      image: "/banner2.png",
      cta: "Shop Now",
      link: "/products?category=sunglasses",
      active: false
    },
    {
      id: "banner-4",
      title: "Effortless Clarity, Every Day",
      subtitle: "Experience extreme breathing comfort with elite daily contact lenses.",
      image: "/banner4.png",
      cta: "Shop Now",
      link: "/products?category=contact-lenses",
      active: false
    }
  ];

  const [heroBanners, setHeroBanners] = useState(() => {
    try {
      const saved = localStorage.getItem("hero_banners");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const sanitized = parsed.map((b) => ({
            ...b,
            active: typeof b.active === "boolean" ? b.active : false
          }));
          if (!sanitized.some((b) => b.active)) {
            sanitized[0].active = true;
          }
          return sanitized;
        }
      }
    } catch (e) {
      console.error("Failed to parse hero_banners:", e);
    }
    return defaultHeroBanners;
  });

  // Persists states in localStorage
  useEffect(() => {
    localStorage.setItem("hero_banners", JSON.stringify(heroBanners));
  }, [heroBanners]);

  useEffect(() => {
    localStorage.setItem("custom_products", JSON.stringify(customProducts));
  }, [customProducts]);

  useEffect(() => {
    localStorage.setItem("deleted_static_ids", JSON.stringify(deletedStaticIds));
  }, [deletedStaticIds]);

  useEffect(() => {
    localStorage.setItem("whatsapp_clicks", whatsappClicks.toString());
  }, [whatsappClicks]);

  useEffect(() => {
    localStorage.setItem("site_content", JSON.stringify(siteContent));
  }, [siteContent]);

  useEffect(() => {
    localStorage.setItem("site_coupons", JSON.stringify(coupons));
  }, [coupons]);

  useEffect(() => {
    localStorage.setItem("showroom_gallery", JSON.stringify(galleryImages));
  }, [galleryImages]);

  useEffect(() => {
    localStorage.setItem("edited_static_products", JSON.stringify(editedStaticProducts));
  }, [editedStaticProducts]);

  const convertDriveUrl = (url) => {
    if (typeof url !== "string") return url;
    if (url.includes("drive.google.com")) {
      let fileId = "";
      if (url.includes("/file/d/")) {
        const parts = url.split("/file/d/");
        if (parts[1]) {
          fileId = parts[1].split("/")[0];
        }
      } else if (url.includes("id=")) {
        const match = url.match(/[?&]id=([^&]+)/);
        if (match && match[1]) {
          fileId = match[1];
        }
      }
      if (fileId) {
        return `https://lh3.googleusercontent.com/d/${fileId}`;
      }
    }
    return url;
  };

  const normalizeImages = (p) => {
    let imgs = [];
    if (Array.isArray(p.images) && p.images.length > 0) {
      imgs = p.images;
    } else if (p.imagePreset) {
      imgs = [p.imagePreset];
    } else if (p.image) {
      imgs = [p.image];
    } else if (p.images) {
      imgs = Array.isArray(p.images) ? p.images : [p.images];
    } else {
      imgs = ["https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=600&auto=format&fit=crop"];
    }

    return imgs.map((img) => {
      let url = typeof img === "string" && img.includes("photo-1625591439851-468f34bc0865")
        ? "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=600&auto=format&fit=crop"
        : img;
      return convertDriveUrl(url);
    });
  };

  // Combine static and custom products, filtering out deleted static products and merging overrides
  const products = [
    ...STATIC_PRODUCTS.filter((p) => !deletedStaticIds.includes(p.id)).map((p) => {
      const merged = editedStaticProducts[p.id] ? { ...p, ...editedStaticProducts[p.id] } : p;
      return { ...merged, images: normalizeImages(merged) };
    }),
    ...customProducts.map((p) => ({ ...p, images: normalizeImages(p) })),
  ];

  // Add new product
  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: newProduct.id || `custom-${Date.now()}`,
      rating: newProduct.rating || 5.0,
      reviewsCount: newProduct.reviewsCount || 0,
      inStock: newProduct.hasOwnProperty("inStock") ? newProduct.inStock : true,
    };
    setCustomProducts((prev) => [...prev, productWithId]);
  };

  // Delete product (checks if it's static or custom)
  const deleteProduct = (productId) => {
    if (STATIC_PRODUCTS.some((p) => p.id === productId)) {
      setDeletedStaticIds((prev) => [...prev, productId]);
    } else {
      setCustomProducts((prev) => prev.filter((p) => p.id !== productId));
    }
  };

  // Update product details
  const updateProduct = (productId, updatedProduct) => {
    if (STATIC_PRODUCTS.some((p) => p.id === productId)) {
      setEditedStaticProducts((prev) => ({
        ...prev,
        [productId]: { ...prev[productId], ...updatedProduct }
      }));
    } else {
      setCustomProducts((prev) =>
        prev.map((p) => (p.id === productId ? { ...p, ...updatedProduct } : p))
      );
    }
  };

  // Increment WhatsApp enquiries clicks
  const incrementWhatsappClicks = () => {
    setWhatsappClicks((prev) => prev + 1);
  };

  // Update specific site text copy values
  const updateSiteContent = (key, value) => {
    setSiteContent((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Coupon Creators
  const addCoupon = (newCoupon) => {
    setCoupons((prev) => [...prev, newCoupon]);
  };

  const deleteCoupon = (code) => {
    setCoupons((prev) => prev.filter((c) => c.code !== code));
  };

  const toggleCouponActive = (code) => {
    setCoupons((prev) =>
      prev.map((c) => (c.code === code ? { ...c, active: !c.active } : c))
    );
  };

  // Gallery Creators
  const addGalleryImage = (newImage) => {
    const imgWithId = {
      ...newImage,
      id: newImage.id || `gal-${Date.now()}`
    };
    setGalleryImages((prev) => [...prev, imgWithId]);
  };

  const deleteGalleryImage = (id) => {
    setGalleryImages((prev) => prev.filter((img) => img.id !== id));
  };

  // Hero Banners Management
  const addHeroBanner = (newBanner) => {
    const bannerWithId = {
      ...newBanner,
      id: newBanner.id || `banner-${Date.now()}`,
      active: true
    };
    setHeroBanners((prev) => [
      ...prev.map((b) => ({ ...b, active: false })),
      bannerWithId
    ]);
  };

  const updateHeroBanner = (id, updatedFields) => {
    setHeroBanners((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updatedFields } : b))
    );
  };

  const deleteHeroBanner = (id) => {
    setHeroBanners((prev) => {
      const filtered = prev.filter((b) => b.id !== id);
      // If we deleted the active one, activate the first remaining
      if (filtered.length > 0 && !filtered.some((b) => b.active)) {
        filtered[0].active = true;
      }
      return filtered;
    });
  };

  const setActiveHeroBanner = (id) => {
    setHeroBanners((prev) =>
      prev.map((b) => ({
        ...b,
        active: b.id === id
      }))
    );
  };

  const resetHeroBanners = () => {
    setHeroBanners(defaultHeroBanners);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        updateProduct,
        whatsappClicks,
        incrementWhatsappClicks,
        siteContent,
        updateSiteContent,
        coupons,
        addCoupon,
        deleteCoupon,
        toggleCouponActive,
        galleryImages,
        addGalleryImage,
        deleteGalleryImage,
        heroBanners,
        addHeroBanner,
        updateHeroBanner,
        deleteHeroBanner,
        setActiveHeroBanner,
        resetHeroBanners
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
