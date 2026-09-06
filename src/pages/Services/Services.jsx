import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Breadcrumb from "../../components/common/Breadcrumb";

const Services = () => {
  const servicesList = [
    {
      id: 1,
      number: "01",
      title: "Comprehensive Eye Examination",
      description: "We reject automated, machine-only shortcuts. Exceptional optical correction begins with an exhaustive evaluation of visual function, ocular health, and personal lifestyle demands. Our practitioners conduct thorough subjective refractions, binocular alignment evaluations, digital eye strain screenings, and anterior segment health checks.",
      image: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      number: "02",
      title: "Progressive and Occupational Lens Dispensing",
      description: "Modern visual demands require continuous visual clarity without distortion or compromised posture. We specialize in custom digital progressive and occupational lens designs, engineered specifically for your distinct habits—from extended digital screen sessions to dynamic distance vision. Every pair is custom-crafted to your unique ocular measurements, accounting for bridge fitting, frame wrap angle, vertex distance, and pantoscopic tilt to guarantee smooth, natural visual transitions across every focal plane.",
      image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      number: "03",
      title: "Specialized Dispensing & Medical Prosthetic",
      description: "We engineer custom spectacle solutions for complex ocular-facial biomechanics and sensory support. Our dispensing masters craft specialized adaptations including mechanical ptosis crutches for eyelid elevation, pressure-relieved frames customized for behind-the-ear hearing aids, ground-in prism systems for diplopia, and custom moisture-retaining enclosures for chronic ocular surface disease. Every frame is hand-modified and balanced at the bench to solve severe visual, craniofacial, and ergonomic challenges where standard off-the-shelf eyewear fails.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      number: "04",
      title: "Specialty Contact Lens Fitting",
      description: "For patients seeking freedom from traditional spectacles or requiring complex visual rehabilitation, our fellowship-trained practitioners provide dedicated corneal fitting solutions. We offer individualized consultations for daily disposable soft lenses, multifocal contact lenses, advanced toric corrections for astigmatism, and specialized rigid gas-permeable (RGP) or scleral lenses for irregular corneas and keratoconus. Every fitting includes comprehensive corneal topography and trial balancing to ensure absolute ocular health, hydration, and sharp visual acuity.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      number: "05",
      title: "Private Eyewear Styling & Frame Fitting",
      description: "Selecting the ideal frame is an intimate balance between facial geometry, optical physics, and personal identity. During a dedicated private consultation, our optical stylists curate selections from our permanent collection of premier international fashion houses, matching frame weights, acetate hues, and titanium profiles to your facial architecture. Once chosen, each piece is meticulously hand-adjusted, temple-curved, and bridge-balanced to ensure weightless all-day comfort and precise lens alignment.",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const breadcrumbItems = [{ label: "Services", link: "/services" }];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 font-sans">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Header */}
      <div className="my-8 space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1C1B1B] whitespace-nowrap">
          Vision and Precision Care
        </h1>
        <p className="text-xs md:text-sm text-gray-500 font-light max-w-3xl leading-relaxed">
          Comprehensive optometrist examinations, custom progressive lens dispensing, and specialty clinical fittings delivered with uncompromising personal care.
        </p>
      </div>

      {/* Alternating Services Cards List matching Brands layout */}
      <div className="space-y-16 md:space-y-24 my-12 md:my-16">
        {servicesList.map((srv, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={srv.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center"
            >
              {/* Service Visual Image */}
              <div className={`md:col-span-5 lg:col-span-5 ${isEven ? "md:order-1" : "md:order-2"}`}>
                <div className="relative aspect-[4/3.5] sm:aspect-[4/3.2] rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-150">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1B1B]/80 backdrop-blur-xs text-white px-2.5 py-1 rounded text-[10px] font-mono font-bold tracking-widest">
                    {srv.number}
                  </div>
                </div>
              </div>

              {/* Service Title & Explanation */}
              <div className={`md:col-span-7 lg:col-span-7 space-y-4 ${isEven ? "md:order-2" : "md:order-1"}`}>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#8B1E22] uppercase tracking-[0.2em] block">
                    CLINICAL SERVICE {srv.number}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#1C1B1B] leading-snug">
                    {srv.title}
                  </h2>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  {srv.description}
                </p>

                <div className="pt-2">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E22] uppercase tracking-widest hover:underline transition-all"
                  >
                    <span>Schedule Consultation</span>
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

export default Services;
