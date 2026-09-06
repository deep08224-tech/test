import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaShieldAlt, FaClock, FaHeart, FaChevronRight, FaRegSmileBeam, FaEye, FaGlasses, FaAward } from "react-icons/fa";
import Breadcrumb from "../../components/common/Breadcrumb";

const About = () => {
  const stats = [
    { value: "35+", label: "Years of Excellence", description: "Setting the benchmark for precision vision care since 1990." },
    { value: "50+", label: "Iconic Global Brands", description: "Official collections from premier luxury fashion houses." },
    { value: "15K+", label: "Tailored Fittings", description: "Bespoke vision solutions customized for unique lifestyles." },
    { value: "2-Gen", label: "Healthcare Legacy", description: "Backed by a clinical family foundation in optometry and medicine." }
  ];

  const coreValues = [
    {
      title: "Practitioner-Led Clinical Care",
      description: "In-depth vision assessments conducted directly by qualified optometrists, going beyond automated machine readings to evaluate lifestyle, ocular health, and visual performance.",
      icon: <FaEye className="text-2xl text-primary dark:text-gold" />
    },
    {
      title: "Bespoke Lens Engineering",
      description: "Precision fitting for progressive lenses, pediatric vision, and digital strain relief, customized for your visual demands.",
      icon: <FaCertificate className="text-2xl text-primary dark:text-gold" />
    },
    {
      title: "Iconic Luxury Gallery",
      description: "An authentic, curated gallery of international luxury fashion houses and premium eyewear designers.",
      icon: <FaGlasses className="text-2xl text-primary dark:text-gold" />
    }
  ];

  const breadcrumbItems = [{ label: "About Us" }];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 font-jost">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* 1. Founder Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Owner Image Container */}
          <div className="lg:col-span-4 max-w-sm mx-auto lg:max-w-none relative group">
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md aspect-[4/5] bg-gray-50">
              <img
                src="/dr-kulwinder.jpeg"
                alt="Mr. Kulwinder Singh - Founder of Paradise Optics"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white text-left">
                  <span className="text-[10px] text-gray-200 font-bold uppercase tracking-wider block">Est. 1990</span>
                  <span className="text-xs text-gray-300 font-light block">Ludhiana Showroom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Bio */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-1.5">
              <h1 className="text-3xl md:text-4.5xl font-serif font-black text-gray-900 leading-tight">
                Mr. Kulwinder Singh
              </h1>
              <span className="text-xs font-semibold text-[#8B1E22] uppercase tracking-widest block font-sans">
                Founder & Chief Optometrist — Paradise Optics
              </span>
            </div>

            <div className="space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed font-light">
              <p>
                With more than three decades of clinical optometry and precision dispensing experience, Mr. Kulwinder Singh founded Paradise Optics to bring practitioner-led vision care and authentic luxury eyewear to India.
              </p>
              <p>
                Holding a Bachelor’s Degree in Optometry (B.Optom), he specializes in comprehensive ocular evaluations, complex progressive lens fittings, and bespoke pediatric vision solutions. His clinical approach emphasizes diagnostic precision and personalized care over automated machine readings.
              </p>
              <p className="italic text-[#1C1B1B] border-l-2 border-[#1C1B1B] pl-4 font-serif py-1 font-normal">
                "Our mission is simple: we do not just sell spectacles; we engineer visual clarity and curate your personal styling. Your eyes deserve nothing less than the absolute zenith of precision and design."
              </p>
            </div>

            {/* Credentials Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
                <FaGraduationCap className="text-gray-600 text-sm" />
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">Bachelors of Optometry</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
                <FaCertificate className="text-gray-600 text-sm" />
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">35+ Years of Clinical Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. Executive Team Section - Gunraj on Left, Evneet on Right */}
      <section className="py-12 border-t border-gray-200">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-[#8B1E22] text-xs font-light uppercase tracking-[0.2em] block">
            Next Generation
          </span>
          <h2 className="text-2xl md:text-3.5xl font-serif font-bold text-gray-900">
            Clinical & Medical Advisory
          </h2>
          <p className="text-xs text-gray-500 max-w-lg mx-auto leading-relaxed font-light">
            Grounded in a family legacy of clinical medicine, advanced optometry, and patient-first healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Gunraj Singh (LEFT) */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl md:text-[22px] font-bold text-gray-900 leading-tight">
                    Dr. Gunraj Singh
                  </h3>
                  <p className="text-[11px] font-semibold text-[#8B1E22] uppercase tracking-wider">
                    MBBS · Medical Advisor
                  </p>
                </div>
                
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                  Bringing a medical perspective to Paradise Optics, Dr. Gunraj supports our practice with clinical insights into ocular-systemic health connections, preventative wellness, and evidence-based care standards.
                </p>
              </div>

              {/* Technical Specialties Grid */}
              <div className="pt-4 border-t border-gray-150 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Focus Area</span>
                  <span className="text-xs font-semibold text-gray-800">Systemic & Preventative Health</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Credentials</span>
                  <span className="text-xs font-semibold text-gray-800">General Medicine Doctor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Evneet Kaur (RIGHT) */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl md:text-[22px] font-bold text-gray-900 leading-tight">
                    Evneet Kaur
                  </h3>
                  <p className="text-[11px] font-semibold text-[#8B1E22] uppercase tracking-wider">
                    B.Optom (ESO), FBDO, Fellow Contact Lens (SN) · Optometric Advisor
                  </p>
                </div>
                
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                  An alumnus of the Elite School of Optometry (Chennai) with specialized fellowships from Sankara Nethralaya and the Association of British Dispensing Opticians (ABDO), Evneet guides our optical standards in advanced ocular refraction, specialty contact lenses, and complex visual corrections.
                </p>
              </div>

              {/* Technical Specialties Grid */}
              <div className="pt-4 border-t border-gray-150 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Focus Area</span>
                  <span className="text-xs font-semibold text-gray-800">Specialty Lenses & Refraction</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block">Affiliation</span>
                  <span className="text-xs font-semibold text-gray-800">Sankara Nethralaya & ABDO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Heritage Introduction */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-16 border-t border-gray-200">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-[#8B1E22] text-xs font-medium uppercase tracking-[0.2em]">
            Your Vision. Your Style. Our Expertise.
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Clinical Expertise & Luxury
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
            At Paradise Optics, we believe exceptional vision care extends far beyond simply selecting a frame. True optical correction requires practitioner-led clinical diagnostic skill, advanced lens engineering, and an aesthetic that effortlessly mirrors your individuality.
          </p>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
            With over three decades of clinical expertise and healthcare-backed precision, we provide comprehensive optometrist-led vision evaluations, bespoke progressive lens crafting, pediatric eye care, and specialty contact lens fittings. Every solution is seamlessly paired with an authentic gallery of the world’s most iconic luxury fashion houses.
          </p>
          <div className="pt-2">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 bg-[#8B1E22] hover:bg-[#7A1519] text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              <span>Schedule Showroom Visit</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-md">
          <img
            src="/enterparadise.avif"
            alt="Paradise Optics Premium Showroom Gallery"
            className="w-full h-full object-cover object-center absolute inset-0"
          />
        </div>
      </section>

      {/* 3. Stats Block */}
      <section className="py-12 bg-gray-50 rounded-2xl border border-gray-150">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-1.5"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#8B1E22]">
                {stat.value}
              </h2>
              <h4 className="font-bold text-xs uppercase tracking-wide text-gray-800">
                {stat.label}
              </h4>
              <p className="text-[11px] text-gray-500 leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. The Paradise Distinction */}
      <section className="py-16 border-t border-gray-200">
        <div className="text-center mb-12">
          <span className="text-[#8B1E22] text-xs font-light uppercase tracking-[0.2em] block mb-1">
            THE PARADISE DISTINCTION
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-light text-gray-900">
            Experience You Can Trust
          </h2>
          <p className="text-xs text-gray-500 max-w-xl mx-auto mt-2 leading-relaxed font-light">
            With more than three decades of experience, we combine professional knowledge with personalised service to help you make the right choice for your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-150 text-[#8B1E22]">
                  {val.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-serif font-bold text-gray-900 uppercase tracking-wide">
                    {val.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
