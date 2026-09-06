import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaArrowRight, FaStar, FaChevronDown } from "react-icons/fa";
import { PRODUCTS, TESTIMONIALS, FAQS } from "../../data/productsData";
import ProductCard from "../../components/products/ProductCard";
import { useProducts } from "../../context/ProductContext";

const Home = () => {
  const { heroBanners } = useProducts();
  const [activeTab, setActiveTab] = useState("all");
  const [activeFaq, setActiveFaq] = useState(null);

  const activeHeroBanner =
    (heroBanners && heroBanners.find((b) => b.active)) ||
    (heroBanners && heroBanners[0]) || {
      title: "A Frame For Every Destination",
      subtitle: "From beach escapes to city summers.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
      cta: "Shop Now",
      link: "/products?category=sunglasses"
    };

  const categoryCards = [
    {
      name: "Men's Collection",
      desc: "Classic & Premium Frames for Men",
      image: "/products/men.jpeg",
      link: "/products?gender=men"
    },
    {
      name: "Women's Collection",
      desc: "Chic & Fashion-Forward Eyewear",
      image: "/products/women1.jfif",
      link: "/products?gender=women"
    },
    {
      name: "Kids' Collection",
      desc: "Durable & Play-Safe Frames",
      image: "/products/kids.jpg",
      link: "/products?gender=kids"
    },
    {
      name: "Contact Lenses",
      desc: "Comfortable Everyday Vision",
      image: "/products/contact-lens.jpg",
      link: "/products?category=contact-lenses"
    }
  ];

  const brandCampaigns = [
    {
      name: "Ray-Ban",
      logo: "RAY-BAN",
      subLogo: "EST. 1937",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Prada",
      logo: "PRADA",
      subLogo: "MILANO",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Versace",
      logo: "VERSACE",
      subLogo: "ITALY",
      image: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Burberry",
      logo: "BURBERRY",
      subLogo: "LONDON",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Dolce & Gabbana",
      logo: "DOLCE & GABBANA",
      subLogo: "MILANO",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Emporio Armani",
      logo: "EMPORIO ARMANI",
      subLogo: "MILANO",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Hugo Boss",
      logo: "BOSS",
      subLogo: "HUGO BOSS",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Michael Kors",
      logo: "MICHAEL KORS",
      subLogo: "NEW YORK",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Coach",
      logo: "COACH",
      subLogo: "NEW YORK",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Tory Burch",
      logo: "TORY BURCH",
      subLogo: "NEW YORK",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Marc Jacobs",
      logo: "MARC JACOBS",
      subLogo: "NEW YORK",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Calvin Klein",
      logo: "CALVIN KLEIN",
      subLogo: "EYEWEAR",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Tommy Hilfiger",
      logo: "TOMMY HILFIGER",
      subLogo: "EST. 1985",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Guess",
      logo: "GUESS",
      subLogo: "LOS ANGELES",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Oakley",
      logo: "OAKLEY",
      subLogo: "PRIZM OPTICS",
      image: "https://images.unsplash.com/photo-1625591439851-468f34bc0865?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Carrera",
      logo: "CARRERA",
      subLogo: "SINCE 1956",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "IDEE",
      logo: "IDEE",
      subLogo: "EYEWEAR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "OPIUM",
      logo: "OPIUM",
      subLogo: "EYEWEAR",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Hopper",
      logo: "HOPPER",
      subLogo: "SPECS",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Ownspecs",
      logo: "OWNSPECS",
      subLogo: "HANDCRAFTED",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Acuvue",
      logo: "ACUVUE",
      subLogo: "CONTACT LENSES",
      image: "https://images.unsplash.com/photo-1583912267670-6575ad362e48?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Alcon",
      logo: "ALCON",
      subLogo: "VISION CARE",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Bausch & Lomb",
      logo: "BAUSCH + LOMB",
      subLogo: "EST. 1853",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "CooperVision",
      logo: "COOPERVISION",
      subLogo: "CONTACT LENSES",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop"
    }
  ];

  // Filter products for the featured section
  const getFeaturedProducts = () => {
    if (activeTab === "all") return PRODUCTS.slice(0, 4);
    return PRODUCTS.filter((p) => p.category === activeTab).slice(0, 4);
  };

  return (
    <div className="w-full font-sans bg-white text-[#1C1B1B]">
      {/* 1. Cinematic Single Dynamic Hero Banner */}
      <section className="relative w-full h-[65vh] sm:h-[72vh] md:h-[78vh] bg-gray-950 text-white overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('${activeHeroBanner.image}')`
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Centered Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center text-white space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-black tracking-[0.16em] uppercase leading-tight drop-shadow-md">
            {activeHeroBanner.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-normal tracking-[0.2em] uppercase text-gray-200 drop-shadow-sm max-w-2xl">
            {activeHeroBanner.subtitle}
          </p>
          <div className="pt-3">
            <Link
              to={activeHeroBanner.link || "/products?category=sunglasses"}
              className="inline-block bg-white hover:bg-gray-100 text-[#1C1B1B] text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded shadow-lg transition-transform transform hover:-translate-y-0.5"
            >
              {activeHeroBanner.cta || "Shop Now"}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Shop Categories Section (4 in One Row) */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[#8B1E22] text-xs font-bold uppercase tracking-[0.2em] block mb-1">
            Curated Eyewear
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1C1B1B]">
            Shop By Category
          </h2>
          <div className="w-16 h-0.5 bg-[#8B1E22] mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative h-64 rounded-xl overflow-hidden shadow-xs border border-gray-100 bg-white"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${cat.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-lg font-serif font-bold tracking-wide">{cat.name}</h3>
                <p className="text-xs text-gray-300 font-light mb-4">{cat.desc}</p>
                <Link
                  to={cat.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider hover:text-white transition-colors"
                >
                  <span>Explore Collection</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Dual Promo Section: Gifts for Him & Gifts for Her (Page 3) */}
      <section className="py-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Gifts For Him */}
          <div className="group space-y-4">
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-xl bg-gray-100 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
                alt="Gifts for Him"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#1C1B1B] uppercase">
                Gifts For Him
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] font-normal">
                Sharp. Stylish. Unforgettable.
              </p>
              <div>
                <Link
                  to="/products?gender=men"
                  className="nav-link-anim text-[12px] font-medium tracking-[0.14em] uppercase text-[#1C1B1B] inline-block pt-1"
                >
                  Shop for Him
                </Link>
              </div>
            </div>
          </div>

          {/* Gifts For Her */}
          <div className="group space-y-4">
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-xl bg-gray-100 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Gifts for Her"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#1C1B1B] uppercase">
                Gifts For Her
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4A4A] font-normal">
                Elegant. Timeless. Made to impress.
              </p>
              <div>
                <Link
                  to="/products?gender=women"
                  className="nav-link-anim text-[12px] font-medium tracking-[0.14em] uppercase text-[#1C1B1B] inline-block pt-1"
                >
                  Shop for Her
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RARE AND RELOVED Section (Page 3 & 4 - Formerly Featured Eyewear) */}
      <section className="py-16 bg-[#FAF9F6] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-[#8B1E22] text-xs font-bold uppercase tracking-[0.2em] block mb-1">
                New Arrivals
              </span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1C1B1B] uppercase tracking-wide">
                Rare and Reloved
              </h2>
            </div>
            {/* Filter Tabs */}
            <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2">
              {["all", "eyeglasses", "sunglasses", "contact-lenses"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeTab === tab
                      ? "bg-[#8B1E22] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {tab === "all" ? "Best Sellers" : tab.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getFeaturedProducts().map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-[#8B1E22] hover:bg-[#8B1E22] hover:text-white text-[#8B1E22] px-6 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>View Full Catalog</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Premium Brands Showcase */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[#8B1E22] text-xs font-bold uppercase tracking-[0.25em] block mb-2">
              Authorized Eyewear Gallery
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1C1B1B]">
              Premium Brands Showcase
            </h2>
            <div className="w-16 h-0.5 bg-[#8B1E22] mx-auto mt-3" />
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={18}
            slidesPerView={2.2}
            breakpoints={{
              480: { slidesPerView: 2.8 },
              640: { slidesPerView: 3.5 },
              768: { slidesPerView: 4.2 },
              1024: { slidesPerView: 5.2 },
              1280: { slidesPerView: 6.2 }
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }}
            speed={3800}
            loop={true}
            className="flex items-center swiper-linear-marquee py-4"
          >
            {brandCampaigns.map((brand, idx) => (
              <SwiperSlide key={idx} className="flex justify-center items-center py-2">
                <Link
                  to={`/products?brand=${encodeURIComponent(brand.name)}`}
                  className="w-full relative aspect-square rounded-xl overflow-hidden group shadow-xs hover:shadow-xl transition-all duration-500 bg-gray-900 border border-gray-150 block cursor-pointer"
                >
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/35 group-hover:from-black/90 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-center">
                    <span className={`font-serif font-black text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase drop-shadow-md ${brand.logoColor || "text-white"} group-hover:text-amber-300 transition-colors block`}>
                      {brand.logo}
                    </span>
                    {brand.subLogo && (
                      <span className="text-[7px] sm:text-[8px] tracking-widest text-gray-300 uppercase block mt-0.5 font-medium">
                        {brand.subLogo}
                      </span>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CTA to explore all brands */}
          <div className="text-center mt-8">
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 border-2 border-[#8B1E22] hover:bg-[#8B1E22] hover:text-white text-[#8B1E22] px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-xs"
            >
              <span>Explore All 24 Brands Directory</span>
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Customer Reviews Section (Page 6 & 7) */}
      <section className="py-16 bg-[#F8FAFC] border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-normal uppercase tracking-[0.2em] text-[#1C1B1B]">
              WHAT OUR PATIENTS SAY ABOUT US
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
              We are grateful for the trust our customers have placed in Paradise Optics over the years.
            </p>
            <div className="w-16 h-0.5 bg-[#8B1E22] mx-auto mt-2" />
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-10"
          >
            {TESTIMONIALS.map((tst) => (
              <SwiperSlide key={tst.id} className="h-auto">
                <div className="bg-white border border-gray-150 rounded-xl p-6 shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-3">
                    {/* Patient Name at Top */}
                    <div className="flex items-center justify-between">
                      <h4 className="font-sans text-sm sm:text-base font-semibold text-[#1C1B1B]">
                        {tst.name}
                      </h4>
                    </div>

                    {/* Review text without quotation marks and not italic */}
                    <p className="text-xs text-gray-600 font-light leading-relaxed whitespace-normal break-words">
                      {tst.review}
                    </p>
                  </div>

                  {/* Rating Stars (Muted Gold) */}
                  <div className="flex text-amber-400/90 gap-1 pt-1">
                    {Array.from({ length: tst.rating || 5 }).map((_, i) => (
                      <FaStar key={i} className="text-xs" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Google Reviews Badge at the Bottom */}
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Paradise+Optics+Ludhiana"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border border-gray-200 px-5 py-2.5 rounded-full shadow-xs hover:shadow-md hover:border-[#8B1E22] transition-all"
              title="Click to view our Google Reviews"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="text-xs font-semibold text-gray-700">Google Rating</span>
              <span className="text-xs font-bold text-amber-500">4.9 ★★★★★</span>
              <span className="text-xs text-gray-400 font-light">(250+ Reviews)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Interactive FAQ Accordion */}
      <section className="py-16 max-w-4xl mx-auto px-4" id="faq">
        <div className="text-center mb-12">
          <span className="text-[#8B1E22] text-xs font-bold uppercase tracking-[0.2em] block mb-1">
            Questions & Answers
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#1C1B1B]">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-0.5 bg-[#8B1E22] mx-auto mt-3" />
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 6).map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-xs md:text-sm text-[#1C1B1B] pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-xs text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#8B1E22]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Sunday Community Vision Section (Page 8 & 9) */}
      <section className="py-16 bg-[#F4F4F0] border-t border-gray-200 text-[#1C1B1B]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <div>
            <span className="inline-block border border-[#8B1E22] text-[#8B1E22] px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              SUNDAY COMMUNITY VISION
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-serif font-black uppercase tracking-wider leading-tight text-[#1C1B1B]">
            FREE EYE TESTING EVERY SUNDAY
          </h2>

          <div className="space-y-2 text-xs md:text-sm text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            <p>
              For 3 decades, Paradise Optics has been offering free eye testing every Sunday as part of our commitment to the community.
            </p>
            <p>
              Thousands of people have benefited from this initiative over the years.
            </p>
            <p className="font-semibold text-[#8B1E22] pt-1">
              It is our way of ensuring comprehensive vision care remains accessible to everyone.
            </p>
          </div>

          <div className="pt-3 space-y-3">
            <Link
              to="/appointment"
              className="inline-block bg-[#8B1E22] hover:bg-[#7A1519] text-white font-bold uppercase tracking-wider text-xs md:text-sm px-8 py-3.5 rounded shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Book Your Eye Test
            </Link>
            <p className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">
              Please contact us to confirm timings and availability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
