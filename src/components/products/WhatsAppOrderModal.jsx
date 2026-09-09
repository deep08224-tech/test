import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaWhatsapp, FaStore, FaTruck, FaLock, FaChevronDown } from "react-icons/fa";
import { CONTACT_INFO } from "../../constants";

// Custom Dropdown Component to avoid native browser select positioning glitches inside transformed modals
const CustomSelect = ({ value, onChange, options, placeholder = "Select", direction = "down" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownPositionClass = direction === "up" ? "bottom-full mb-1" : "top-full mt-1";

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white dark:bg-[#0c1222] border border-gray-300 dark:border-gray-700 rounded-lg py-1.5 px-2.5 text-xs text-left text-gray-800 dark:text-gray-200 flex items-center justify-between focus:outline-none focus:border-primary dark:focus:border-gold transition-all shadow-sm"
      >
        <span className={value ? "font-semibold text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-400 font-normal"}>
          {value || placeholder}
        </span>
        <FaChevronDown className={`text-[10px] text-gray-400 transition-transform duration-200 flex-shrink-0 ml-1 ${isOpen ? "rotate-180 text-primary dark:text-gold" : ""}`} />
      </button>

      {isOpen && (
        <div className={`absolute left-0 right-0 ${dropdownPositionClass} max-h-44 overflow-y-auto bg-white dark:bg-[#141b2d] border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 py-1 text-xs`}>
          <button
            type="button"
            onClick={() => { onChange(""); setIsOpen(false); }}
            className={`w-full text-left px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${!value ? "text-primary dark:text-gold font-bold bg-primary/5 dark:bg-gold/5" : "text-gray-400 dark:text-gray-400"}`}
          >
            Select
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setIsOpen(false); }}
              className={`w-full text-left px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${value === opt ? "text-primary dark:text-gold font-bold bg-primary/5 dark:bg-gold/5" : "text-gray-700 dark:text-gray-200"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const WhatsAppOrderModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const [customerName, setCustomerName] = useState("");
  const [fulfillment, setFulfillment] = useState("Delivery"); // "Delivery" or "Pickup"
  const [address, setAddress] = useState("");

  // Power Prescription Grid State
  const [requestCallback, setRequestCallback] = useState(false);
  const [leftSph, setLeftSph] = useState("");
  const [rightSph, setRightSph] = useState("");
  const [leftCyl, setLeftCyl] = useState("");
  const [rightCyl, setRightCyl] = useState("");
  const [leftAxis, setLeftAxis] = useState("");
  const [rightAxis, setRightAxis] = useState("");
  const [leftBoxes, setLeftBoxes] = useState("");
  const [rightBoxes, setRightBoxes] = useState("");
  const [prescriptionNotes, setPrescriptionNotes] = useState("");

  const originalPrice = product.discountPrice || product.price;

  // Options arrays
  const sphOptions = [
    "Plano (0.00)",
    "-0.25", "-0.50", "-0.75", "-1.00", "-1.25", "-1.50", "-1.75", "-2.00",
    "-2.25", "-2.50", "-2.75", "-3.00", "-3.25", "-3.50", "-3.75", "-4.00",
    "-4.25", "-4.50", "-4.75", "-5.00", "-5.25", "-5.50", "-5.75", "-6.00",
    "+0.25", "+0.50", "+0.75", "+1.00", "+1.25", "+1.50", "+1.75", "+2.00",
    "+2.25", "+2.50", "+2.75", "+3.00", "+3.25", "+3.50", "+3.75", "+4.00"
  ];

  const cylOptions = ["None (0.00)", "-0.75", "-1.25", "-1.75", "-2.25", "-2.75"];

  const axisOptions = [
    "10°", "20°", "30°", "40°", "50°", "60°", "70°", "80°", "90°",
    "100°", "110°", "120°", "130°", "140°", "150°", "160°", "170°", "180°"
  ];

  const boxesOptions = ["1 Box", "2 Boxes", "3 Boxes", "4 Boxes", "5 Boxes", "6 Boxes", "10 Boxes"];

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

    // Compile Prescription Text
    let prescriptionSummary = "";
    if (requestCallback) {
      prescriptionSummary = "📞 Request a callback to check my power";
    } else {
      const leftParts = [
        leftSph && `SPH: ${leftSph}`,
        leftCyl && `CYL: ${leftCyl}`,
        leftAxis && `Axis: ${leftAxis}`,
        leftBoxes && `Boxes: ${leftBoxes}`
      ].filter(Boolean);

      const rightParts = [
        rightSph && `SPH: ${rightSph}`,
        rightCyl && `CYL: ${rightCyl}`,
        rightAxis && `Axis: ${rightAxis}`,
        rightBoxes && `Boxes: ${rightBoxes}`
      ].filter(Boolean);

      const details = [];
      if (leftParts.length > 0) details.push(`Left (OS): [${leftParts.join(", ")}]`);
      if (rightParts.length > 0) details.push(`Right (OD): [${rightParts.join(", ")}]`);
      if (prescriptionNotes.trim()) details.push(`Notes: ${prescriptionNotes.trim()}`);

      prescriptionSummary = details.length > 0 ? details.join(" | ") : "Frame Only / No Specific Power Selected";
    }

    // Compile Receipt text
    const orderMsg = `🛍️ *PARADISE OPTICS - NEW ORDER*
---------------------------------------
👓 *Product:* ${product.name}
🏷️ *Brand:* ${product.brand}
💰 *Price:* ₹${originalPrice.toLocaleString("en-IN")}
---------------------------------------
👤 *Customer Name:* ${customerName.trim()}
👁️ *Prescription / Power:* ${prescriptionSummary}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative bg-white dark:bg-[#0b0f19] border border-gray-200 dark:border-gray-800 rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col z-10 overflow-hidden max-h-[92vh]"
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
                    ₹{originalPrice.toLocaleString("en-IN")}
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

                  {/* Lens Power Prescription Section matching reference layout */}
                  <div className="space-y-3 pt-2">
                    {/* Request Callback Checkbox */}
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-gray-750 dark:text-gray-250">
                      <input
                        type="checkbox"
                        checked={requestCallback}
                        onChange={(e) => setRequestCallback(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 accent-primary dark:accent-gold cursor-pointer"
                      />
                      <span>Request a callback to check my power</span>
                    </label>

                    {/* Power Selection Grid */}
                    {!requestCallback && (
                      <div className="space-y-2.5 bg-gray-50/80 dark:bg-[#141b2d]/80 p-3.5 sm:p-4 rounded-xl border border-gray-200/90 dark:border-gray-800 shadow-sm">
                        {/* Grid Header */}
                        <div className="grid grid-cols-12 items-center text-xs font-bold text-gray-850 dark:text-gray-150 border-b border-gray-200 dark:border-gray-800 pb-2">
                          <div className="col-span-4 uppercase tracking-wider text-[11px]">Power</div>
                          <div className="col-span-4 text-center">Left(OS)</div>
                          <div className="col-span-4 text-center">Right(OD)</div>
                        </div>

                        {/* SPH Row */}
                        <div className="grid grid-cols-12 items-center text-xs gap-2">
                          <div className="col-span-4 font-semibold text-gray-700 dark:text-gray-300">SPH</div>
                          <div className="col-span-4">
                            <CustomSelect
                              value={leftSph}
                              onChange={setLeftSph}
                              options={sphOptions}
                              placeholder="Select"
                            />
                          </div>
                          <div className="col-span-4">
                            <CustomSelect
                              value={rightSph}
                              onChange={setRightSph}
                              options={sphOptions}
                              placeholder="Select"
                            />
                          </div>
                        </div>

                        {/* CYL Row */}
                        <div className="grid grid-cols-12 items-center text-xs gap-2">
                          <div className="col-span-4 font-semibold text-gray-700 dark:text-gray-300">CYL</div>
                          <div className="col-span-4">
                            <CustomSelect
                              value={leftCyl}
                              onChange={setLeftCyl}
                              options={cylOptions}
                              placeholder="Select"
                            />
                          </div>
                          <div className="col-span-4">
                            <CustomSelect
                              value={rightCyl}
                              onChange={setRightCyl}
                              options={cylOptions}
                              placeholder="Select"
                            />
                          </div>
                        </div>

                        {/* Axis Row */}
                        <div className="grid grid-cols-12 items-center text-xs gap-2">
                          <div className="col-span-4 font-semibold text-gray-700 dark:text-gray-300">Axis</div>
                          <div className="col-span-4">
                            <CustomSelect
                              value={leftAxis}
                              onChange={setLeftAxis}
                              options={axisOptions}
                              placeholder="Select"
                            />
                          </div>
                          <div className="col-span-4">
                            <CustomSelect
                              value={rightAxis}
                              onChange={setRightAxis}
                              options={axisOptions}
                              placeholder="Select"
                            />
                          </div>
                        </div>

                        {/* No of boxes Row */}
                        <div className="grid grid-cols-12 items-center text-xs gap-2">
                          <div className="col-span-4 font-semibold text-gray-700 dark:text-gray-300">No of boxes</div>
                          <div className="col-span-4">
                            <CustomSelect
                              value={leftBoxes}
                              onChange={setLeftBoxes}
                              options={boxesOptions}
                              placeholder="Select"
                              direction="up"
                            />
                          </div>
                          <div className="col-span-4">
                            <CustomSelect
                              value={rightBoxes}
                              onChange={setRightBoxes}
                              options={boxesOptions}
                              placeholder="Select"
                              direction="up"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Additional Notes */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-555 dark:text-gray-400 uppercase tracking-widest block">
                        Additional Notes / Custom Instructions
                      </label>
                      <textarea
                        rows="2"
                        placeholder="e.g. Frame adjustments, progressive lens preference, or blue-cut coating request..."
                        value={prescriptionNotes}
                        onChange={(e) => setPrescriptionNotes(e.target.value)}
                        className="w-full bg-gray-50 dark:bg-[#141b2d] border border-gray-200 dark:border-gray-800 rounded-lg py-2 px-4 text-xs text-gray-800 dark:text-white focus:outline-none focus:border-primary dark:focus:border-gold placeholder-gray-400 dark:placeholder-gray-650 resize-none"
                      />
                    </div>
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
                      className="w-full flex items-center justify-center gap-2 py-4 bg-[#00b275] hover:bg-[#00c782] active:scale-98 text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-lg cursor-pointer"
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

