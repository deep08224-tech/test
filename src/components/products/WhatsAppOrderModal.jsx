import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWhatsapp, FaStore, FaTruck, FaLock } from "react-icons/fa";
import { CONTACT_INFO } from "../../constants";
import { useProducts } from "../../context/ProductContext";

const WhatsAppOrderModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const { coupons } = useProducts();

  const [customerName, setCustomerName] = useState("");
  const [fulfillment, setFulfillment] = useState("Delivery"); // "Delivery" or "Pickup"
  const [address, setAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [prescription, setPrescription] = useState("");

  const originalPrice = product.discountPrice || product.price;
  
  // Recalculate Subtotal
  const discountAmount = Math.round((originalPrice * discountPercent) / 100);
  const subtotal = originalPrice - discountAmount;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    
    // Find matching coupon in active database listings
    const matchedCoupon = coupons.find(
      (c) => c.code.toUpperCase() === code && c.active
    );

    if (matchedCoupon) {
      // Check minimum purchase amount if applicable
      if (matchedCoupon.minPurchase && originalPrice < matchedCoupon.minPurchase) {
        if (window.showToast) {
          window.showToast(
            `Minimum purchase of ₹${matchedCoupon.minPurchase.toLocaleString("en-IN")} required for code ${matchedCoupon.code}.`,
            "error"
          );
        }
        return;
      }

      setDiscountPercent(matchedCoupon.discount);
      setAppliedPromo(matchedCoupon.code);
      if (window.showToast) {
        window.showToast(`Promo Code ${matchedCoupon.code} Applied! ${matchedCoupon.discount}% Discount Saved.`, "success");
      }
    } else {
      // Fallback fallback checks for absolute reliability
      if (code === "OPTICVIP") {
        setDiscountPercent(15);
        setAppliedPromo("OPTICVIP");
        if (window.showToast) window.showToast("Promo Code OPTICVIP Applied! 15% Discount Saved.", "success");
      } else {
        if (window.showToast) {
          window.showToast("Invalid or Expired Promo Code", "error");
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerName.trim()) {
      if (window.showToast) window.showToast("Please enter your name", "error");
      return;
    }
    if (fulfillment === "Delivery" && !address.trim()) {
      if (window.showToast) window.showToast("Please enter your delivery address", "error");
      return;
    }

    // Determine lens and power choice
    const prescriptionText = prescription.trim() || "Frame Only / No Prescription";

    // Compile Receipt text matching user format exactly
    const orderMsg = `🛍️ *PARADISE OPTICS - NEW ORDER*
---------------------------------------
👓 *Product:* ${product.name}
🏷️ *Brand:* ${product.brand}
💰 *Price:* ₹${subtotal.toLocaleString("en-IN")}${appliedPromo ? ` (Promo ${appliedPromo} Applied - ${discountPercent}% Off)` : ""}
---------------------------------------
👤 *Customer Name:* ${customerName.trim()}
⚙️ *Lens Selection:* ${prescription.trim() ? "Single Vision / Prescription" : "Frame Only"}
👁️ *Prescription:* ${prescriptionText}
🚚 *Fulfillment:* ${fulfillment === "Delivery" ? "Home Delivery" : "Store Pickup"}
${fulfillment === "Delivery" ? `📍 *Delivery Address:* ${address.trim()}` : ""}
---------------------------------------
📲 _Please confirm order availability and provide billing details._`;

    // Open WhatsApp
    const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(orderMsg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    
    if (window.showToast) {
      window.showToast("Redirecting to WhatsApp...", "success");
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal content container */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            className="relative bg-white dark:bg-[#0b0f19] border border-gray-200 dark:border-gray-800 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden overflow-x-hidden max-h-[90vh] flex flex-col z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-[#1e293b]/85 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white flex items-center justify-center transition-colors z-20 shadow-sm"
            >
              <FaTimes />
            </button>

            {/* Widescreen 2-Column Checkout Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 h-full overflow-hidden">
              
              {/* ================= LEFT PANEL (Boutique Checkout Summary) ================= */}
              <div className="md:col-span-5 bg-gray-50 dark:bg-[#070b13] p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-900">
                <div className="space-y-6">
                  <div>
                    <span className="text-primary dark:text-gold text-[10px] font-bold uppercase tracking-[0.25em] block">
                      Boutique Checkout
                    </span>
                    <div className="w-12 h-0.5 bg-primary dark:bg-gold mt-1.5" />
                  </div>

                  {/* Product Image Frame */}
                  <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-md aspect-4/3 bg-white dark:bg-gray-950 flex items-center justify-center p-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="max-h-[140px] w-auto object-contain"
                    />
                  </div>

                  {/* Product Metadata */}
                  <div className="space-y-1">
                    <span className="text-primary dark:text-gold text-xs font-bold uppercase tracking-wider block">
                      {product.brand}
                    </span>
                    <h2 className="text-xl font-serif font-bold text-gray-850 dark:text-white leading-tight">
                      {product.name}
                    </h2>
                  </div>
                </div>

                {/* Subtotal Footer */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-900 mt-6 md:mt-0 flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-xs font-bold tracking-widest uppercase">
                    Subtotal
                  </span>
                  <span className="text-2xl font-serif font-black text-primary dark:text-gold">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* ================= RIGHT PANEL (Secure Details Form) ================= */}
              <div className="md:col-span-7 p-4 md:p-8 space-y-5 overflow-y-auto overflow-x-hidden max-h-[85vh] md:max-h-[90vh] bg-white dark:bg-[#0c1222]">
                <div className="space-y-1">
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-855 dark:text-white">
                    Secure Delivery Details
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                    Fill in your details below. We will bundle your custom formula/eyewear specs and transfer you directly to our sales agent on WhatsApp to finalize checkout.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-550 dark:text-gray-400 uppercase tracking-widest block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Harvinder Singh"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-[#141b2d] border border-gray-200 dark:border-gray-800 rounded-lg py-2.5 px-4 text-base md:text-sm text-gray-800 dark:text-white focus:outline-none focus:border-primary dark:focus:border-gold placeholder-gray-400 dark:placeholder-gray-650"
                    />
                  </div>

                  {/* Delivery Option */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-555 dark:text-gray-400 uppercase tracking-widest block">
                      Delivery Option *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Home Delivery Card */}
                      <button
                        type="button"
                        onClick={() => setFulfillment("Delivery")}
                        className={`py-3 px-4 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-semibold ${
                          fulfillment === "Delivery"
                            ? "border-primary dark:border-gold bg-primary/5 dark:bg-gold/5 text-primary dark:text-gold"
                            : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#141b2d] text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                        }`}
                      >
                        <FaTruck className="text-base" />
                        <span>Home Delivery</span>
                      </button>

                      {/* Store Pickup Card */}
                      <button
                        type="button"
                        onClick={() => setFulfillment("Pickup")}
                        className={`py-3 px-4 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-semibold ${
                          fulfillment === "Pickup"
                            ? "border-primary dark:border-gold bg-primary/5 dark:bg-gold/5 text-primary dark:text-gold"
                            : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#141b2d] text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                        }`}
                      >
                        <FaStore className="text-base" />
                        <span>Store Pickup</span>
                      </button>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  {fulfillment === "Delivery" && (
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-gray-555 dark:text-gray-400 uppercase tracking-widest block">
                        Delivery Address *
                      </label>
                      <textarea
                        required
                        rows="2"
                        placeholder="Enter full street, sector, city, and pincode..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-[#141b2d] border border-gray-200 dark:border-gray-800 rounded-lg py-2 px-4 text-base md:text-sm text-gray-800 dark:text-white focus:outline-none focus:border-primary dark:focus:border-gold placeholder-gray-400 dark:placeholder-gray-650 resize-none"
                      />
                    </div>
                  )}

                  {/* Voucher / Promo Code */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-555 dark:text-gray-400 uppercase tracking-widest block">
                      Voucher / Promo Code
                    </label>
                    <div className="flex gap-2 w-full">
                      <input
                        type="text"
                        placeholder="e.g. OPTICVIP"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-grow min-w-0 w-full bg-gray-50 dark:bg-[#141b2d] border border-gray-200 dark:border-gray-800 rounded-lg py-2.5 px-4 text-base md:text-sm text-gray-800 dark:text-white focus:outline-none focus:border-primary dark:focus:border-gold placeholder-gray-400 dark:placeholder-gray-655"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="flex-shrink-0 bg-primary hover:bg-[#c5a880] hover:text-gray-950 text-white font-bold px-4 sm:px-6 rounded-lg text-xs uppercase tracking-wider transition-all"
                      >
                        Apply
                      </button>
                    </div>
                    {appliedPromo && (
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-1">
                        ✓ Promo Code {appliedPromo} applied successfully! Saved {discountPercent}% Off.
                      </span>
                    )}
                  </div>

                  {/* Lens Prescription */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-555 dark:text-gray-400 uppercase tracking-widest block">
                      Lens Prescription / Frame Adjustments
                    </label>
                    <textarea
                      rows="2.5"
                      placeholder="e.g. Sph: -1.50, Cyl: -0.50, Axis: 90 / Blue cut anti-glare coating..."
                      value={prescription}
                      onChange={(e) => setPrescription(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-[#141b2d] border border-gray-200 dark:border-gray-800 rounded-lg py-2 px-4 text-base md:text-sm text-gray-800 dark:text-white focus:outline-none focus:border-primary dark:focus:border-gold placeholder-gray-400 dark:placeholder-gray-650 resize-none"
                    />
                  </div>

                  {/* Store Pickup address snippet */}
                  {fulfillment === "Pickup" && (
                    <div className="p-3.5 bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-900/30 rounded-xl text-[11px] text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
                      <FaStore className="mt-0.5 text-base flex-shrink-0" />
                      <p className="leading-relaxed font-light">
                        Pickup ready at showroom: <strong>DMC Road, Opposite Police Line Gate No. 2, Dandi Swami, Civil Lines, Ludhiana, Punjab 141001</strong>. Phone: +91 98154 84044.
                      </p>
                    </div>
                  )}

                  {/* WhatsApp Order Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-[#00b275] hover:bg-[#00c782] active:scale-98 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
                    >
                      <FaWhatsapp className="text-sm" />
                      <span>Send Order to WhatsApp Lab</span>
                      <FaLock className="text-[10px] ml-1 opacity-70" />
                    </button>
                    <span className="text-[9px] text-gray-450 dark:text-gray-500 text-center block mt-2 tracking-wide">
                      ✓ Secure connection to Paradise Optics WhatsApp Business Support.
                    </span>
                  </div>
                </form>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppOrderModal;
