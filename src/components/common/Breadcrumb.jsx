import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex py-3 px-1 text-[#8C8C8C] text-[11px] font-sans tracking-[0.14em] uppercase" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 flex-wrap">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="hover:text-[#1C1B1B] transition-colors duration-200 font-medium"
          >
            HOME
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center space-x-2">
              <span className="text-gray-400 font-light">/</span>
              {item.link && !isLast ? (
                <Link
                  to={item.link}
                  className="hover:text-[#1C1B1B] transition-colors duration-200 font-medium truncate"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#1C1B1B] font-semibold truncate">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
