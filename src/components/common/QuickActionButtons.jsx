import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaDirections } from "react-icons/fa";
import { useProducts } from "../../context/ProductContext";
import { CONTACT_INFO } from "../../constants";

const QuickActionButtons = () => {
  const { incrementWhatsappClicks, siteContent } = useProducts();
  
  const phone = siteContent?.phone || CONTACT_INFO.phone;
  const whatsappNum = siteContent?.whatsapp || CONTACT_INFO.whatsapp;
  
  // Pre-filled WhatsApp link
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;
  const callUrl = `tel:${phone.replace(/\s+/g, "")}`;

  return (
    <>
      {/* Floating WhatsApp Button - Desktop Only */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={incrementWhatsappClicks}
        className="hidden md:flex fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 z-40 animate-pulse-gold group"
        aria-label="Enquire on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
        <span className="absolute right-16 bg-white text-[#1C1B1B] px-3 py-1 rounded shadow-md text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
          Chat with Us
        </span>
      </a>

      {/* Sticky Bottom Bar - Mobile/Tablet Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 grid grid-cols-3 z-50 h-16 pb-safe font-sans">
        {/* Call Button */}
        <a
          href={callUrl}
          className="flex flex-col items-center justify-center text-[#1C1B1B] border-r border-gray-100 active:bg-gray-50 transition-colors"
        >
          <FaPhoneAlt className="text-base mb-1 text-[#8B1E22]" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={incrementWhatsappClicks}
          className="flex flex-col items-center justify-center bg-[#25D366] text-white active:bg-[#20bd5a] transition-colors"
        >
          <FaWhatsapp className="text-xl mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Get Directions Button */}
        <a
          href={CONTACT_INFO.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-[#1C1B1B] active:bg-gray-50 transition-colors"
        >
          <FaDirections className="text-base mb-1 text-[#8B1E22]" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </>
  );
};

export default QuickActionButtons;
