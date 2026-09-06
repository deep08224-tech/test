import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaDirections, FaCalendarCheck, FaPaperPlane } from "react-icons/fa";
import Breadcrumb from "../../components/common/Breadcrumb";
import { CONTACT_INFO } from "../../constants";
import { useProducts } from "../../context/ProductContext";
import { getShowroomStatus } from "../../utils/timeHelper";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Eye Testing",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { siteContent } = useProducts();
  const [showroomStatus, setShowroomStatus] = useState({ isOpen: true, message: "Open Now" });

  useEffect(() => {
    const update = () => setShowroomStatus(getShowroomStatus());
    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  const phone = siteContent?.phone || CONTACT_INFO.phone;
  const emailVal = siteContent?.email || CONTACT_INFO.email;
  const address = siteContent?.address || CONTACT_INFO.address;
  const whatsappNum = siteContent?.whatsapp || CONTACT_INFO.whatsapp;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || CONTACT_INFO.formspreeId || "xyzygypd";
    const endpoint = `https://formspree.io/f/${formspreeId}`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "Eye Testing", message: "" });
        if (window.showToast) {
          window.showToast("Message submitted successfully! Thank you.", "success");
        }
      } else {
        throw new Error("Formspree response not OK");
      }
    } catch (err) {
      console.error("Formspree submit error:", err);
      if (window.showToast) {
        window.showToast("Failed to send message. Please contact us directly.", "error");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`;
  const callUrl = `tel:${phone.replace(/\s+/g, "")}`;

  const breadcrumbItems = [{ label: "Contact Showroom" }];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Title */}
      <div className="text-center my-8 max-w-2xl mx-auto space-y-3">
        <span className="text-primary dark:text-gold text-xs font-bold uppercase tracking-[0.25em]">
          CONTACT US
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black text-gray-800 dark:text-white">
          We’d Love to Hear From You
        </h1>
        <p className="text-xs md:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed font-light">
          Have a question about your prescription, lenses, contact lenses or frames? Our team is happy to help.
        </p>
        <div className="w-16 h-1 bg-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10">
        {/* Left: Contact Info & Map (5 Cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Info List */}
          <div className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-850 p-6 rounded-xl shadow-premium space-y-5">
            <h2 className="font-serif text-xl font-bold text-gray-800 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2.5">
              Contact Paradise Optics
            </h2>

            <div className="space-y-4 text-xs md:text-sm">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-primary dark:text-gold text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-850 dark:text-white block">Address</span>
                  <span className="text-gray-600 dark:text-gray-350 leading-relaxed font-light">{address}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-primary dark:text-gold text-base mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-850 dark:text-white block">Call Center</span>
                  <a href={callUrl} className="text-gray-600 dark:text-gray-350 hover:underline">{phone}</a>
                </div>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-primary dark:text-gold text-base mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-gray-850 dark:text-white block">Email Address</span>
                  <a href={`mailto:${emailVal}`} className="text-gray-600 dark:text-gray-350 hover:underline">{emailVal}</a>
                </div>
              </div>

              <div className="flex gap-3">
                <FaClock className="text-primary dark:text-gold text-base mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-850 dark:text-white">Opening Hours</span>
                    <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                      showroomStatus.isOpen 
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" 
                        : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                    }`}>
                      <span className={`w-1 h-1 rounded-full animate-pulse ${
                        showroomStatus.isOpen ? "bg-emerald-500" : "bg-rose-500"
                      }`} />
                      {showroomStatus.isOpen ? "Open" : "Closed"}
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-350 leading-relaxed font-light text-xs">
                    {CONTACT_INFO.businessHours.map((bh, i) => (
                      <span key={i} className="block">
                        {bh.days}: {bh.hours}
                      </span>
                    ))}
                    <span className={`block font-semibold text-[10px] mt-1.5 ${
                      showroomStatus.isOpen ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"
                    }`}>
                      {showroomStatus.message}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Container */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href={CONTACT_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-gold text-gray-700 dark:text-gray-300 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <FaDirections className="text-base text-primary dark:text-gold" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Right: Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-855 rounded-xl p-6 md:p-8 shadow-premium h-full flex flex-col justify-between">
            {!success ? (
              /* Contact Form Box */
              <div className="space-y-6">
                <h2 className="font-serif text-xl font-bold text-gray-800 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2.5">
                  Quick Enquiry
                </h2>
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs md:text-sm">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider block">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white"
                      required
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider block">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your Phone or WhatsApp number"
                      className="w-full px-3 py-2 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-955 dark:text-white"
                      required
                    />
                  </div>

                  {/* What are you looking for? */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider block">What are you looking for?</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-950 dark:text-white cursor-pointer"
                    >
                      <option value="Eye Testing">Eye Testing</option>
                      <option value="Prescription Glasses">Prescription Glasses</option>
                      <option value="Progressive Lenses">Progressive Lenses</option>
                      <option value="Contact Lenses">Contact Lenses</option>
                      <option value="Sunglasses">Sunglasses</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Email (Optional) */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-750 dark:text-gray-500 uppercase tracking-wider block">Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@email.com"
                      className="w-full px-3 py-2 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-955 dark:text-white"
                    />
                  </div>

                  {/* Message (Optional) */}
                  <div className="space-y-1.5">
                    <label className="font-bold text-gray-750 dark:text-gray-500 uppercase tracking-wider block">Enquiry Details (Optional)</label>
                    <textarea
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific details, power requirements, or brand preferences..."
                      className="w-full px-3 py-2 border border-gray-250 dark:border-gray-800 rounded bg-white dark:bg-gray-955 dark:text-white"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-gold disabled:bg-gray-400 text-white dark:bg-gold dark:text-gray-950 font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors shadow"
                  >
                    <FaPaperPlane />
                    <span>{submitting ? "Submitting Enquiry..." : "Submit Enquiry"}</span>
                  </button>
                </form>
              </div>
            ) : (
              /* Success Box */
              <div className="text-center py-10 space-y-4 my-auto">
                <span className="text-5xl text-emerald-500 block">✔️</span>
                <h3 className="font-serif text-xl font-bold text-gray-800 dark:text-white">Enquiry Transmitted!</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-350 max-w-sm mx-auto leading-relaxed">
                  Thank you for submitting your enquiry. Our showroom representative will call you back or reply within 24 business hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-primary hover:bg-gold text-white dark:bg-gray-800 dark:hover:bg-gold dark:hover:text-gray-950 font-bold px-6 py-2.5 rounded text-xs uppercase tracking-wider transition-all"
                >
                  Send Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Google Maps embed section */}
      <section className="mt-16">
        <h2 className="font-serif text-xl font-bold text-gray-800 dark:text-white mb-4">Showroom Location</h2>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow border border-gray-150 dark:border-gray-800 bg-gray-100">
          <iframe
            title="Paradise Optics Store Map"
            src={CONTACT_INFO.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
