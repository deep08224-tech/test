import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";

const PrivacyPolicy = () => {
  const breadcrumbItems = [{ label: "Privacy Policy" }];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 font-sans">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="mt-8 space-y-8 text-gray-700 dark:text-gray-300">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
          <h1 className="font-serif text-3xl md:text-4.5xl font-black text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mt-2">Last Updated: August 15, 2026</p>
        </div>

        <p className="text-sm md:text-base leading-relaxed font-light">
          At <strong>Paradise Optics</strong>, accessible from our Ludhiana showroom and our digital catalog, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Paradise Optics and how we use it.
        </p>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            1. Information We Collect
          </h2>
          <p className="text-sm leading-relaxed font-light">
            When you use our boutique order form or book an appointment on our website, we collect standard customer details to process your queries:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1.5 pl-2 font-light">
            <li><strong>Personal details</strong>: Your full name, email address, and phone number.</li>
            <li><strong>Delivery coordinates</strong>: Your physical shipping address (for home delivery option).</li>
            <li><strong>Clinical particulars</strong>: Lens power prescription measurements (sphere, cylinder, axis, addition) or frame customization choices that you input to request order preparation.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            2. How We Use Your Information
          </h2>
          <p className="text-sm leading-relaxed font-light">
            We use the information we collect in the following ways:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1.5 pl-2 font-light">
            <li>To compile your custom optical specs and safely transfer you to our WhatsApp Sales Agent to complete the checkout.</li>
            <li>To register and block time slots for computerized clinical eye testing appointments in our Ludhiana showroom.</li>
            <li>To send updates, order confirmations, and promotional vouchers if you subscribe to our luxury catalog newsletter.</li>
            <li>To maintain secure logs and verify checkout authentication parameters.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            3. Data Security & Exclusions
          </h2>
          <p className="text-sm leading-relaxed font-light">
            We implement high-grade SSL encryption and secure backend handlers to protect your details. We **never** sell, trade, or share your contact info or prescription records with third-party marketing companies. 
          </p>
          <p className="text-sm leading-relaxed font-light">
            Your appointment booking lists are stored securely in local database layers and are accessible only by our showroom administrator and chief optometrist.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            4. Cookies & Wishlists
          </h2>
          <p className="text-sm leading-relaxed font-light">
            Like any modern website, we use functional local cookies and browser local-storage states to enable convenience features:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1.5 pl-2 font-light">
            <li>Saving item indices in your personal **Wishlist Drawer** so you don't lose them when you refresh.</li>
            <li>Remembering your **Dark Mode / Light Mode** theme preference.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            5. Contact Information
          </h2>
          <p className="text-sm leading-relaxed font-light">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us:
          </p>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-850 rounded-xl text-xs space-y-2">
            <p>📍 <strong>Showroom Address</strong>: DMC Road, Opposite Police Line Gate No. 2, Dandi Swami, Civil Lines, Ludhiana, Punjab 141001</p>
            <p>📞 <strong>Hotline Phone</strong>: +91 98154 84044</p>
            <p>✉️ <strong>Email Address</strong>: info@paradiseoptics.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
