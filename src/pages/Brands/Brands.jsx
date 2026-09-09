import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Breadcrumb from "../../components/common/Breadcrumb";

const Brands = () => {
  const brandsList = [
    {
      name: "Ray-Ban",
      brandKey: "Ray-Ban",
      desc: "The undisputed pioneer of iconic eyewear since 1937. From cultural legends to contemporary street style, Ray-Ban delivers unmatched authenticity with timeless silhouettes like the Aviator, Wayfarer, and Clubmaster.",
      image: "/rb.jfif"
    },
    {
      name: "Prada",
      brandKey: "Prada",
      desc: "Avant-garde design meets modern intellectual minimalism. Prada eyewear redefines contemporary luxury through geometric angles, clean structural lines, and the unmistakable triangle insignia—crafted for refined individualists.",
      image: "/pradabrand.avif"
    },
    {
      name: "Versace",
      brandKey: "Versace",
      desc: "Unapologetic glamour and daring opulence. Rooted in classical mythology and high-octane Italian runway style, Versace frames command presence with rich golden Medusa accents, thick-cut acetates, and bold, confident profiles.",
      image: "/vsbrand.jfif"
    },
    {
      name: "Burberry",
      brandKey: "Burberry",
      desc: "Equestrian heritage reimagined for modern British elegance. Defined by clean tailoring and architectural balance, Burberry frames seamlessly integrate subtle signature check accents into understated, everyday luxury.",
      image: "/burberrybrand.jfif"
    },
    {
      name: "Dolce & Gabbana",
      brandKey: "Dolce & Gabbana",
      desc: "Passionate Mediterranean romance and unapologetic Sicilian opulence. Defined by bold baroque flourishes, signature gold monogram accents, and expressive silhouettes, Dolce & Gabbana eyewear transforms statement accessories into pure Italian drama.",
      image: "/dgbrand.jfif"
    },
    {
      name: "Emporio Armani",
      brandKey: "Emporio Armani",
      desc: "Masterful Milanese elegance defined by fluid restraint and understated luxury. Armani frames celebrate natural proportions and muted, sophisticated palettes, delivering timeless optical style that remains effortlessly sophisticated without excess.",
      image: "/eabrand.jfif"
    },
    {
      name: "Hugo Boss",
      brandKey: "Hugo Boss",
      desc: "Modern German precision tailored for the contemporary minimalist. BOSS eyewear champions clean lines, lightweight ergonomic frames, and refined detailing, creating versatile, understated silhouettes built for polished professional lifestyles.",
      image: "/hbbrand.jfif"
    },
    {
      name: "Michael Kors",
      brandKey: "Michael Kors",
      desc: "Jet-set American glamour designed for vibrant cosmopolitan lifestyles. Michael Kors optical frames combine sleek golden metalwork, polished acetates, and refined everyday luxury.",
      image: "/mkbrand.jfif"
    },
    {
      name: "Coach",
      brandKey: "Coach",
      desc: "Authentic New York heritage defined by classic American craftsmanship. Coach frames feature iconic Horse and Carriage motifs, signature sculpted temples, and effortless everyday elegance.",
      image: "/cbrabd.jfif"
    },
    {
      name: "Tory Burch",
      brandKey: "Tory Burch",
      desc: "Timeless American bohemian luxury infused with vibrant color palettes and polished geometric silhouettes. Characterized by the iconic double-T logo and refined coastal elegance.",
      image: "/tbbrand.jfif"
    },
    {
      name: "Marc Jacobs",
      brandKey: "Marc Jacobs",
      desc: "Bold, expressive, and unapologetically fashionable. Marc Jacobs eyewear blends playful retro shapes with avant-garde runway details, oversized proportions, and vibrant designer charisma.",
      image: "/mjrrand.jfif"
    },
    {
      name: "Calvin Klein",
      brandKey: "Calvin Klein",
      desc: "Iconic minimalist design centered on pure silhouettes, sleek metal profiles, and refined architectural aesthetics. Engineered for modern urban simplicity and all-day comfort.",
      image: "/ckbrand.jfif"
    },
    {
      name: "Tommy Hilfiger",
      brandKey: "Tommy Hilfiger",
      desc: "Classic American cool featuring preppy heritage styling, signature red-white-blue temple accents, and sporty, versatile silhouettes designed for dynamic modern living.",
      image: "/thbrand.jfif"
    },
    {
      name: "Guess",
      brandKey: "Guess",
      desc: "Youthful California energy and sensual glamour. Guess eyewear combines on-trend frame shapes with dazzling rhinestone accents, animal prints, and striking contemporary silhouettes.",
      image: "/gbrand.jfif"
    },
    {
      name: "Oakley",
      brandKey: "Oakley",
      desc: "High-performance sports optics engineered with revolutionary Prizm lens technology and ultra-lightweight stress-resistant O-Matter frame architecture for athletes and adventurers.",
      image: "/obrand.jfif"
    },
    {
      name: "Carrera",
      brandKey: "Carrera",
      desc: "Born from the legendary Carrera Panamericana auto race. Bold navigator frames, iconic bridge logos, and racing-inspired aerodynamics created for daring trendsetters.",
      image: "/cbrand.jfif"
    },
    {
      name: "IDEE",
      brandKey: "IDEE",
      desc: "Trendsetting urban eyewear crafted for the youthful and ambitious. IDEE eyewear offers lightweight durability, bold contemporary shapes, and vivid modern styling.",
      image: "/idee.jfif"
    },
    {
      name: "OPIUM",
      brandKey: "OPIUM",
      desc: "Edgy, futuristic, and statement-making. OPIUM eyewear is crafted for non-conformists who desire cutting-edge aesthetics, wrap-around contours, and striking presence.",
      image: "/opiumbrand.jfif"
    },
    {
      name: "Hopper",
      brandKey: "Hopper",
      desc: "Smart, durable, and stylish everyday eyewear. Hopper spectacles provide ergonomic comfort, flexible spring hinges, and versatile silhouettes for daily work and study.",
      image: "/hopper.jfif"
    },
    {
      name: "Ownspecs",
      brandKey: "Ownspecs",
      desc: "Custom-crafted optical elegance with exceptional precision. Ownspecs focuses on featherlight TR90 frames, crystal-clear optics, and superior everyday comfort.",
      image: "/os.jfif"
    },
    {
      name: "Acuvue",
      brandKey: "Acuvue",
      desc: "The global leader in contact lens innovation by Johnson & Johnson Vision. Featuring HydraLuxe and HydraClear technologies for exceptional all-day hydration and UV blocking.",
      image: "/Acuvue.jfif"
    },
    {
      name: "Alcon",
      brandKey: "Alcon",
      desc: "Pioneering ophthalmic science with Dailies Total1 and Air Optix water-gradient contact lenses. Delivers unmatched oxygen permeability and velvety cushion comfort.",
      image: "/Alcon.jfif"
    },
    {
      name: "Bausch & Lomb",
      brandKey: "Bausch & Lomb",
      desc: "Over 170 years of optical healthcare excellence. Creators of PureVision, Biotrue, and ULTRA contact lenses with MoistureSeal technology for crisp, fatigue-free vision.",
      image: "/blbrand.jfif"
    },
    {
      name: "CooperVision",
      brandKey: "CooperVision",
      desc: "World-renowned specialist in precision toric, multifocal, and spherical contact lenses like Biofinity and Clariti 1-day, ensuring natural breathability and exceptional clarity.",
      image: "/cvbrand.jfif"
    }
  ];

  const breadcrumbItems = [{ label: "Our Brands" }];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Header */}
      <div className="my-8 space-y-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-black tracking-widest text-gray-900 dark:text-white uppercase">
            OUR BRANDS
          </h1>
          <div className="w-16 h-0.5 bg-gray-400 dark:bg-gold mt-3" />
        </div>
        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-light max-w-3xl leading-relaxed">
          We proudly offer a diverse selection of top-tier eyewear brands, ensuring unparalleled quality and style for our clients.
        </p>
      </div>

      {/* Brands Cards List */}
      <div className="space-y-16 md:space-y-24 my-12 md:my-16">
        {brandsList.map((brand, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={brand.brandKey}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center"
            >
              {/* Editorial Model Image */}
              <div className={`md:col-span-5 lg:col-span-5 ${isEven ? "md:order-1" : "md:order-2"}`}>
                <div className="relative aspect-[4/4.5] sm:aspect-[4/4.2] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xs">
                  <img
                    src={brand.image}
                    alt={brand.brandKey}
                    className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Brand Name & Description */}
              <div className={`md:col-span-7 lg:col-span-7 space-y-5 ${isEven ? "md:order-2" : "md:order-1"}`}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-[0.2em] text-[#1C1B1B] dark:text-white uppercase font-bold">
                  {brand.name}
                </h2>
                
                <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-normal font-sans max-w-2xl">
                  {brand.desc}
                </p>

                <div className="pt-2">
                  <Link
                    to={`/products?brand=${encodeURIComponent(brand.brandKey)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E22] dark:text-gold uppercase tracking-widest hover:underline transition-all"
                  >
                    <span>Explore {brand.brandKey} Collection</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
