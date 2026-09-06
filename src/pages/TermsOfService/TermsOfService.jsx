import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";

const TermsOfService = () => {
  const breadcrumbItems = [{ label: "Terms of Service" }];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 font-sans">
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="mt-8 space-y-8 text-gray-700 dark:text-gray-300">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
          <h1 className="font-serif text-3xl md:text-4.5xl font-black text-gray-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-gray-500 mt-2">Last Updated: August 15, 2026</p>
        </div>

        <p className="text-sm md:text-base leading-relaxed font-light">
          Welcome to <strong>Paradise Optics</strong>. These Terms of Service govern your use of our website and services. By accessing our catalog or scheduling appointments, you agree to be fully bound by these terms.
        </p>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            1. Professional Eyecare Services
          </h2>
          <p className="text-sm leading-relaxed font-light">
            All clinical eye test evaluations, contact lens fitting consultations, and vision refraction assessments scheduled via our appointment portal are conducted on-site in our Ludhiana showroom under the direct supervision of licensed optometrists led by **Mr. Kulwinder Singh**. 
          </p>
          <p className="text-sm leading-relaxed font-light">
            Online listings and guides are for promotional information only and do not replace professional medical eye diagnostics.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            2. Orders & WhatsApp Checkout
          </h2>
          <p className="text-sm leading-relaxed font-light">
            We display a high-fidelity digital catalog of global eyewear brands (Ray-Ban, Oakley, Carrera, Prada). 
          </p>
          <ul className="list-disc list-inside text-sm space-y-1.5 pl-2 font-light">
            <li><strong>Checkout finalization</strong>: Tapping "Order via WhatsApp" compiles your specs and connects you to our showroom support desk. No financial transactions are processed directly on this website.</li>
            <li><strong>Pricing</strong>: All prices listed are in Indian Rupees (₹) and include applicable showroom discount vouchers. We reserve the right to modify catalog pricing at any time.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            3. Prescription Fittings & Accuracy
          </h2>
          <p className="text-sm leading-relaxed font-light">
            Custom spectacles require clinical pupillary centration. If you order prescription lenses, you must provide accurate, current optical readings. Paradise Optics is not responsible for visual adaptation problems arising from outdated or incorrect optical prescription details provided by the customer. We strongly recommend scheduling a complimentary on-site frame fitting and verification check.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            4. Returns, Refitting, & Adjustments
          </h2>
          <p className="text-sm leading-relaxed font-light">
            Since prescription lenses are bespoke medical items custom-cut to your specific measurements, they are ineligible for standard change-of-mind refunds. However:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1.5 pl-2 font-light">
            <li>We offer **free lifetime frame tuning** (alignment resets, hinge tightening) in our showroom.</li>
            <li>If you experience visual adaptation discomfort with your new lenses, contact our optometry desk within 15 days of pickup, and we will perform a computerized lens verification check.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            5. Governing Law
          </h2>
          <p className="text-sm leading-relaxed font-light">
            These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of your transactions or visits to Paradise Optics will be subject to the exclusive jurisdiction of the courts in **Ludhiana, Punjab**.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-bold text-gray-850 dark:text-white">
            6. Contact Details
          </h2>
          <p className="text-sm leading-relaxed font-light">
            For questions regarding these terms, please contact our administrative desk:
          </p>
          <div className="p-4 bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-850 rounded-xl text-xs space-y-2">
            <p>📞 <strong>Hotline Phone</strong>: +91 98154 84044</p>
            <p>✉️ <strong>Email Address</strong>: info@paradiseoptics.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
