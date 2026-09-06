import React from "react";
import { FaTag, FaCopy, FaCheck } from "react-icons/fa";
import Breadcrumb from "../../components/common/Breadcrumb";
import { useProducts } from "../../context/ProductContext";

const Offers = () => {
  const { coupons } = useProducts();
  const [copiedCode, setCopiedCode] = React.useState("");

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    if (window.showToast) {
      window.showToast(`Coupon code "${code}" copied to clipboard!`, "success");
    }
    setTimeout(() => setCopiedCode(""), 3000);
  };

  const breadcrumbItems = [{ label: "Special Offers" }];

  // Filter active coupons only
  const activeCoupons = coupons.filter((c) => c.active);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Title Header */}
      <div className="text-center my-8 max-w-xl mx-auto space-y-3">
        <span className="text-primary dark:text-gold text-xs font-bold uppercase tracking-[0.25em]">
          Exclusive Vouchers
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black text-gray-800 dark:text-white">
          Paradise Offers & Deals
        </h1>
        <div className="w-16 h-1 bg-gold mx-auto mt-2" />
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
          Unlock seasonal savings, lens packages, and custom frame discounts. Copy these active voucher codes and apply them during checkout to save.
        </p>
      </div>

      {/* Offers Grids (Dynamic Vouchers) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-8">
        {activeCoupons.map((coupon, idx) => (
          <div
            key={coupon.code || idx}
            className="bg-white dark:bg-gray-900 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-premium hover:shadow-luxury transition-shadow duration-300 relative overflow-hidden"
          >
            {/* Corner Decorative Dots */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-gray-50 dark:bg-gray-950 rounded-full" />
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-gray-50 dark:bg-gray-950 rounded-full" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gray-50 dark:bg-gray-950 rounded-full" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gray-50 dark:bg-gray-950 rounded-full" />

            <div className="space-y-4">
              {/* Header Icon & Validity */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5 text-primary dark:text-gold">
                  <FaTag className="text-sm" />
                  <span className="text-xs font-bold uppercase tracking-wider">Discount Voucher</span>
                </div>
                <span className="text-[10px] md:text-xs text-rose-500 bg-rose-50 dark:bg-rose-950/20 px-2.5 py-0.5 rounded font-semibold uppercase tracking-wider">
                  Active Offer
                </span>
              </div>

              {/* Offer Title & Text */}
              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-serif font-bold text-gray-800 dark:text-white leading-tight">
                  Flat {coupon.discount}% Off Eyewear
                </h2>
                <p className="text-xs md:text-sm text-gray-650 dark:text-gray-300 leading-relaxed font-light">
                  {coupon.description}
                </p>
              </div>
            </div>

            {/* Code Copy Box */}
            <div className="mt-8 pt-6 border-t border-dashed border-gray-150 dark:border-gray-850 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-850 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 w-full sm:w-auto justify-between">
                <code className="text-sm font-bold text-gray-800 dark:text-gold tracking-widest">{coupon.code}</code>
                <button
                  onClick={() => handleCopyCode(coupon.code)}
                  className="text-gray-450 hover:text-primary dark:hover:text-gold transition-colors focus:outline-none pl-3 border-l border-gray-200 dark:border-gray-700"
                  aria-label="Copy voucher code"
                >
                  {copiedCode === coupon.code ? <FaCheck className="text-emerald-500" /> : <FaCopy />}
                </button>
              </div>

              {/* T&C Text */}
              <p className="text-[10px] text-gray-450 dark:text-gray-550 leading-tight text-center sm:text-right max-w-xs font-light">
                *Min. purchase of ₹{coupon.minPurchase ? coupon.minPurchase.toLocaleString("en-IN") : "1,000"} required. Valid on prescription frames & sunglasses.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
