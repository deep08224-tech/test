import React, { useState } from "react";
import { FaChevronDown, FaSearch, FaRegQuestionCircle } from "react-icons/fa";
import Breadcrumb from "../../components/common/Breadcrumb";
import { FAQS } from "../../data/productsData";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const breadcrumbItems = [{ label: "Help Center / FAQs" }];

  return (
    <div className="max-w-4xl mx-auto px-4 py-4">
      {/* Breadcrumbs */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Page Title */}
      <div className="text-center my-8 space-y-3">
        <span className="text-primary dark:text-gold text-xs font-bold uppercase tracking-[0.25em]">
          Support Desk
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-black text-gray-800 dark:text-white">
          Help & FAQs
        </h1>
        <div className="w-16 h-1 bg-gold mx-auto mt-2" />
      </div>

      {/* Search Input Box */}
      <div className="relative max-w-lg mx-auto mb-10">
        <input
          type="search"
          placeholder="Search questions (e.g. eye test, prescription time...)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-250 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-white text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-gold"
        />
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-450" />
      </div>

      {/* FAQ Accordion List */}
      {filteredFaqs.length > 0 ? (
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-850 rounded-xl overflow-hidden shadow-premium"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-xs md:text-sm text-gray-800 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-xs text-gray-450 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs md:text-sm text-gray-655 dark:text-gray-300 leading-relaxed border-t border-gray-50 dark:border-gray-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty search results */
        <div className="text-center py-16 space-y-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-150 dark:border-gray-850 shadow-premium flex flex-col items-center">
          <FaRegQuestionCircle className="text-5xl text-gray-300" />
          <h3 className="font-serif text-lg font-bold text-gray-850 dark:text-white">No Matching Questions</h3>
          <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
            We couldn't find any questions matching "{searchQuery}". Try using words like "lens", "prescription", or "returns".
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
