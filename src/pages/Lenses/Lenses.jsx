import React from "react";
import { Link } from "react-router-dom";
import { FaGlasses, FaCompass, FaLaptop, FaSun, FaEye, FaAward, FaCalendarAlt, FaShieldAlt, FaCircleNotch, FaMagic } from "react-icons/fa";
import Breadcrumb from "../../components/common/Breadcrumb";

const Lenses = () => {
  const breadcrumbItems = [{ label: "Lenses Guide" }];

  const spectacleLenses = [
    {
      title: "Single Vision Lenses",
      desc: "For clear vision at a specific distance.",
      icon: <FaGlasses className="text-xl text-primary dark:text-gold" />
    },
    {
      title: "Progressive Lenses",
      desc: "For people requiring distance, intermediate and near vision in one pair of glasses.",
      icon: <FaCompass className="text-xl text-primary dark:text-gold" />
    },
    {
      title: "Occupational / Computer Lenses",
      desc: "Designed for people who spend significant time working at intermediate and near distances.",
      icon: <FaLaptop className="text-xl text-primary dark:text-gold" />
    },
    {
      title: "Photochromic Lenses",
      desc: "Lenses that adapt to changing light conditions.",
      icon: <FaSun className="text-xl text-primary dark:text-gold" />
    },
    {
      title: "Polarised Prescription Lenses",
      desc: "Suitable for reducing glare and improving visual comfort during outdoor activities and driving.",
      icon: <FaShieldAlt className="text-xl text-primary dark:text-gold" />
    },
    {
      title: "Premium Anti-Reflective Lenses",
      desc: "Designed to reduce reflections and improve visual comfort and appearance.",
      icon: <FaMagic className="text-xl text-primary dark:text-gold" />
    }
  ];

  const contactLensSolutions = [
    "Prescription contact lenses",
    "Monthly contact lenses",
    "Multifocal contact lenses",
    "Cosmetic / colour contact lenses",
    "Prescription sunglasses alternatives",
    "Contact lens trials"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Title */}
      <div className="text-center my-8 max-w-2xl mx-auto space-y-3">
        <span className="text-primary dark:text-gold text-xs font-bold uppercase tracking-[0.25em]">
          Vision Solutions
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black text-gray-800 dark:text-white">
          Lenses & Contact Lenses
        </h1>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
          Your frame is what people see, but your lenses are what you see through every day. Find the perfect fit for your lifestyle.
        </p>
        <div className="w-16 h-1 bg-gold mx-auto mt-2" />
      </div>

      {/* Section 1: Spectacle Lenses */}
      <section className="py-12 border-t border-gray-150 dark:border-gray-850">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-5">
            <span className="text-primary dark:text-gold text-xs font-bold uppercase tracking-[0.2em] block">
              Spectacle Lenses
            </span>
            <h2 className="text-2xl md:text-3.5xl font-serif font-black text-gray-800 dark:text-white leading-tight">
              The Right Lens Makes All the Difference
            </h2>
            <div className="w-16 h-0.5 bg-gold mt-2" />
            <p className="text-xs md:text-sm text-gray-655 dark:text-gray-350 leading-relaxed font-light max-w-2xl">
              At Paradise Optics, we help you select lenses according to your prescription, working environment, lifestyle and visual requirements.
            </p>
          </div>
        </div>

        {/* Spectacles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {spectacleLenses.map((lens, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-850 p-6 rounded-2xl shadow-premium hover:shadow-premium-hover hover:border-gold/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/5 to-gold/10 dark:from-gray-800 dark:to-gold/15 rounded-xl flex items-center justify-center shadow-inner group-hover:bg-gold/20 transition-colors duration-300">
                  {lens.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-serif font-black text-gray-800 dark:text-white uppercase tracking-wide group-hover:text-primary dark:group-hover:text-gold transition-colors duration-300">
                    {lens.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                    {lens.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Lens Brands Showcase */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-900/60 p-6 md:p-8 rounded-xl border border-gray-150 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <h3 className="font-serif text-lg md:text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <FaAward className="text-gold" />
              <span>Premium Lens Brands</span>
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed font-light">
              We offer lens solutions from leading manufacturers, subject to availability.
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto py-2 items-center justify-center">
            {["ZEISS", "Crizal", "Essilor"].map((brand, i) => (
              <span key={i} className="text-xs font-bold px-5 py-2 bg-white dark:bg-gray-800 border border-gray-250 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 shadow-sm">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Contact Lenses */}
      <section className="py-16 border-t border-gray-150 dark:border-gray-850">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-primary dark:text-gold text-xs font-bold uppercase tracking-[0.2em] block">
              Contact Lenses
            </span>
            <h2 className="text-2xl md:text-3.5xl font-serif font-black text-gray-800 dark:text-white leading-tight">
              See Clearly. Feel Free.
            </h2>
            <div className="w-16 h-0.5 bg-gold mt-2" />
            <p className="text-xs md:text-sm text-gray-655 dark:text-gray-350 leading-relaxed font-light">
              Contact lenses can offer freedom from spectacles for work, travel, functions, sports and everyday activities.
            </p>
            <p className="text-xs md:text-sm text-gray-655 dark:text-gray-300 leading-relaxed font-light">
              We provide guidance on contact lens selection, fitting, wearing and care.
            </p>
            {/* Highlight Alert Box for Over 40 */}
            <div className="bg-gray-50 dark:bg-gray-900 border-l-4 border-gold p-5 rounded-r-xl space-y-3 mt-6 text-left">
              <h4 className="text-sm font-bold text-gray-800 dark:text-white uppercase tracking-wide">
                Over 40?
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-light font-sans">
                If you are over 40 and want to enjoy functions and special occasions without spectacles, ask us about multifocal contact lenses.
              </p>
              <div className="pt-1">
                <span className="inline-block bg-primary/5 dark:bg-gold/10 text-primary dark:text-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  Free Contact Lens Trial Available
                </span>
                <p className="text-[9px] text-gray-400 dark:text-gray-500 mt-1.5 leading-snug">
                  * Trial availability and suitability are subject to professional assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Solutions Panel */}
          <div className="lg:col-span-6 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-850 p-6 md:p-8 rounded-3xl shadow-premium space-y-6">
            <h3 className="font-serif text-lg font-bold text-gray-855 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2.5">
              Available Solutions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
              {contactLensSolutions.map((sol, i) => (
                <div key={i} className="flex items-center gap-2.5 text-gray-600 dark:text-gray-300">
                  <FaCircleNotch className="text-[10px] text-gold flex-shrink-0" />
                  <span className="font-light">{sol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Teaser Card */}
      <section className="bg-primary dark:bg-gray-900 text-white rounded-2xl p-8 lg:p-12 mb-8 border border-white/5 text-center space-y-5">
        <h2 className="text-xl md:text-3xl font-serif font-bold tracking-wide">
          Ready to Experience Perfect Clarity?
        </h2>
        <p className="text-xs md:text-sm text-gray-300 max-w-lg mx-auto font-light leading-relaxed">
          Book a computerized eye test or schedule a contact lens fitting session with our licensed clinical consultants in Ludhiana.
        </p>
        <div className="pt-2">
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 bg-gold hover:bg-yellow-500 text-gray-950 font-bold uppercase tracking-wider text-xs md:text-sm px-8 py-3.5 rounded shadow-lg transition-transform transform hover:-translate-y-0.5"
          >
            <FaCalendarAlt className="text-xs" />
            <span>Book Your Eye Test</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Lenses;
