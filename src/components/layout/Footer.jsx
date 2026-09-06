import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../constants";
import { useProducts } from "../../context/ProductContext";

const Footer = () => {
  const { siteContent, incrementWhatsappClicks } = useProducts();

  const phone = siteContent?.phone || CONTACT_INFO.phone;
  const emailVal = siteContent?.email || CONTACT_INFO.email;
  const address = siteContent?.address || CONTACT_INFO.address;
  const whatsappNum = siteContent?.whatsapp || CONTACT_INFO.whatsapp;
  const callUrl = `tel:${phone.replace(/\s+/g, "")}`;
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;

  return (
    <footer className="bg-white text-[#1C1B1B] font-sans z-30 relative border-t border-[#E5E5E0]">
      {/* Signature Red Bisecting Accent Line */}
      <div className="h-[2px] bg-[#8B1E22] w-full" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-left">
          
          {/* COLUMN 1: ATELIER */}
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#8B1E22] uppercase block">
              ATELIER
            </span>
            <div className="space-y-1">
              <h3 className="font-serif text-lg md:text-xl font-bold uppercase tracking-wider text-[#1C1B1B]">
                PARADISE OPTICS
              </h3>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest">
                EST. 1990 · LUDHIANA
              </p>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Independent optometry, precision lens dispensing, and curated global eyewear.
            </p>

            {/* Social Icons - Borderless & Enlarged */}
            <div className="flex items-center space-x-5 pt-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1B1B] hover:text-[#8B1E22] text-xl transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C1B1B] hover:text-[#8B1E22] text-2xl transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={incrementWhatsappClicks}
                className="text-[#1C1B1B] hover:text-[#25D366] text-2xl transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* COLUMN 2: COLLECTIONS */}
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#8B1E22] uppercase block">
              COLLECTIONS
            </span>
            <div className="space-y-2.5 text-xs text-gray-700 font-normal">
              <div>
                <Link to="/products" className="hover:text-[#8B1E22] transition-colors block py-0.5">
                  Eyewear Gallery
                </Link>
              </div>
              <div>
                <Link to="/products?category=sunglasses" className="hover:text-[#8B1E22] transition-colors block py-0.5">
                  Iconic Sunglasses
                </Link>
              </div>
              <div>
                <Link to="/products?category=eyeglasses" className="hover:text-[#8B1E22] transition-colors block py-0.5">
                  Precision Opticals
                </Link>
              </div>
              <div>
                <Link to="/products?category=contact-lenses" className="hover:text-[#8B1E22] transition-colors block py-0.5">
                  Specialty Contact Lenses
                </Link>
              </div>
              <div>
                <Link to="/products?brand=Ray-Ban" className="hover:text-[#8B1E22] transition-colors block py-0.5 font-medium">
                  Ray-Ban | Meta
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN 3: CLINICAL */}
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#8B1E22] uppercase block">
              CLINICAL
            </span>
            <div className="space-y-2.5 text-xs text-gray-700 font-normal">
              <div>
                <Link to="/services" className="hover:text-[#8B1E22] transition-colors block py-0.5">
                  Comprehensive Eye Exams
                </Link>
              </div>
              <div>
                <Link to="/services" className="hover:text-[#8B1E22] transition-colors block py-0.5">
                  Pediatric Vision Care
                </Link>
              </div>
              <div>
                <Link to="/services" className="hover:text-[#8B1E22] transition-colors block py-0.5">
                  Progressive Lens Fitting
                </Link>
              </div>
              <div>
                <Link to="/services" className="hover:text-[#8B1E22] transition-colors block py-0.5">
                  Sunday Community Care
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN 4: SHOWROOM */}
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#8B1E22] uppercase block">
              SHOWROOM
            </span>
            <div className="space-y-2.5 text-xs text-gray-700 leading-relaxed font-light">
              <p>{address}</p>
              <p>
                <a href={callUrl} className="hover:text-[#8B1E22] transition-colors font-medium text-[#1C1B1B]">
                  {phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${emailVal}`} className="hover:text-[#8B1E22] transition-colors">
                  {emailVal}
                </a>
              </p>
              <div className="pt-2 text-[11px] text-gray-600 space-y-0.5 border-t border-gray-100">
                <p><strong className="text-gray-800 font-medium">Mon – Sat:</strong> 10 AM – 9 PM</p>
                <p><strong className="text-gray-800 font-medium">Sun:</strong> 4 PM – 8 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-light">
          <span>
            &copy; {new Date().getFullYear()} PARADISE OPTICS. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-6 font-normal">
            <Link to="/privacy-policy" className="hover:text-[#8B1E22] transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#8B1E22] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
