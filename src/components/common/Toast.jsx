import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";

const Toast = ({ message, type = "success", onClose }) => {
  const iconMap = {
    success: <FaCheckCircle className="text-emerald-500" />,
    error: <FaExclamationCircle className="text-rose-500" />,
    warning: <FaExclamationCircle className="text-amber-500" />,
    info: <FaInfoCircle className="text-sky-500" />
  };

  const bgMap = {
    success: "border-emerald-500/20 bg-emerald-50/95 dark:bg-emerald-950/90 text-emerald-900 dark:text-emerald-100",
    error: "border-rose-500/20 bg-rose-50/95 dark:bg-rose-950/90 text-rose-900 dark:text-rose-100",
    warning: "border-amber-500/20 bg-amber-50/95 dark:bg-amber-950/90 text-amber-900 dark:text-amber-100",
    info: "border-sky-500/20 bg-sky-50/95 dark:bg-sky-950/90 text-sky-900 dark:text-sky-100"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg max-w-sm glass-effect ${bgMap[type]}`}
      role="alert"
    >
      <div className="text-lg flex-shrink-0">{iconMap[type]}</div>
      <p className="text-sm font-medium pr-4">{message}</p>
      <button
        onClick={onClose}
        className="ml-auto text-current opacity-60 hover:opacity-100 transition-opacity p-1 focus:outline-none"
        aria-label="Close notification"
      >
        <FaTimes className="text-sm" />
      </button>
    </motion.div>
  );
};

export default Toast;
