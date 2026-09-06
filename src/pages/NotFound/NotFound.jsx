import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaRegEyeSlash } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-6">
      <div className="relative">
        <FaRegEyeSlash className="text-8xl text-gray-250 dark:text-gray-800 animate-pulse mx-auto" />
        <span className="absolute -top-2 right-4 bg-gold text-gray-950 text-[10px] font-bold px-2 py-0.5 rounded shadow">
          404 ERROR
        </span>
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl md:text-4.5xl font-serif font-black text-gray-800 dark:text-white">
          Vision Blurred?
        </h1>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-light">
          We couldn't find the page you are looking for. It might have been relocated, or your active URL prescription has expired!
        </p>
      </div>

      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-gold text-white dark:bg-gold dark:text-gray-950 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md"
        >
          <FaHome />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
