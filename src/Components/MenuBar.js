import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.svg";

function MenuBar() {
  const [currentPage, setCurrentPage] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setCurrentPage("HOME"); // Set the default page as HOME
  }, []);

  const handleMenuItemClick = (page) => {
    setCurrentPage(page);
    setShowMobileMenu(false); // Close mobile menu when a menu item is clicked
    document.body.style.overflow = "auto"; // Restore scrolling on body
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    document.body.style.overflow = showMobileMenu ? "auto" : "hidden"; // Toggle body scrolling
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center bg-black py-4">
        <div className="pl-16">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex-grow flex items-center justify-center">
          {/* Regular Navigation links */}
          <div
            className={`hidden md:flex space-x-6 md:space-x-6 justify-center ${
              showMobileMenu ? "hidden" : "flex"
            }`}
          >
            <Link
              to="/home"
              className={`font-sans text-xl ${
                currentPage === "HOME" ? "text-[#F48029]" : "text-white"
              } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("HOME")}
            >
              HOME
            </Link>
            <Link
              to="/about-us"
              className={`font-sans text-xl ${
                currentPage === "ABOUT US" ? "text-[#F48029]" : "text-white"
              } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("ABOUT US")}
            >
              ABOUT US
            </Link>
            <div
              className="relative flex items-center"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link
                to="#"
                className={`font-sans text-xl ${
                  currentPage === "SERVICES" ||
                  currentPage.includes("SERVICES: ")
                    ? "text-[#F48029]"
                    : "text-white"
                } hover:text-[#F48029]`}
                onClick={() => handleMenuItemClick("SERVICES")}
              >
                SERVICES
                <span className="text-white text-xs ml-1">▼</span>
              </Link>
              {showDropdown && (
                <ul className="whitespace-nowrap absolute top-full left-0 bg-white py-4 pl-4 pr-28 shadow">
                  <li className="border-b">
                    <Link
                      to="/seo"
                      className={`pt-2 block text-black ${
                        currentPage === "SERVICES: SEO"
                          ? "text-[#F48029]"
                          : "hover:text-[#F48029]"
                      }`}
                      onClick={() => handleMenuItemClick("SERVICES: SEO")}
                    >
                      SEO
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      to="/webdevelopment"
                      className={`pt-4 block text-black ${
                        currentPage === "SERVICES: WEB DEVELOPMENT"
                          ? "text-[#F48029]"
                          : "hover:text-[#F48029]"
                      }`}
                      onClick={() =>
                        handleMenuItemClick("SERVICES: WEB DEVELOPMENT")
                      }
                    >
                      WEB DEVELOPMENT
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      to="/ecommerce"
                      className={`pt-4 block text-black ${
                        currentPage === "SERVICES: E-COMMERCE"
                          ? "text-[#F48029]"
                          : "hover:text-[#F48029]"
                      }`}
                      onClick={() => handleMenuItemClick("SERVICES: E-COMMERCE")}
                    >
                      E-COMMERCE
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      to="/graphicdesign"
                      className={`pt-4 block text-black ${
                        currentPage === "SERVICES: GRAPHIC DESIGN"
                          ? "text-[#F48029]"
                          : "hover:text-[#F48029]"
                      }`}
                      onClick={() =>
                        handleMenuItemClick("SERVICES: GRAPHIC DESIGN")
                      }
                    >
                      GRAPHIC DESIGN
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              to="/blog"
              className={`font-sans text-xl ${
                currentPage === "BLOGS" ? "text-[#F48029]" : "text-white"
              } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("BLOGS")}
            >
              BLOGS
            </Link>
            <Link
              to="/contact-us"
              className={`font-sans text-xl ${
                currentPage === "CONTACT US" ? "text-[#F48029]" : "text-white"
              } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("CONTACT US")}
            >
              CONTACT US
            </Link>
          </div>
        </div>
        <div className="md:hidden flex items-center space-x-6 pr-6">
          <button
            className="text-white hover:text-[#F48029]"
            onClick={toggleMobileMenu}
          >
            {showMobileMenu ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {showMobileMenu && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 items-center border-b border-gray-300 w-full pb-1">
          {/* Mobile Navigation links */}
          <Link
            to="/home"
            className={`font-sans text-base pl-5 !py-4 ${
              currentPage === "HOME" ? "text-[#F48029]" : "text-black"
            } hover:text-[#F48029] border-b w-full border-gray-300 pb-1`}
            onClick={() => handleMenuItemClick("HOME")}
          >
            HOME
          </Link>
          <Link
            to="/about-us"
            className={`font-sans text-base pl-5 !py-4 ${
              currentPage === "ABOUT US" ? "text-[#F48029]" : "text-black"
            } hover:text-[#F48029] border-b w-full border-gray-300 pb-1`}
            onClick={() => handleMenuItemClick("ABOUT US")}
          >
            ABOUT US
          </Link>
          <Link
            to="/seo"
            className={`font-sans text-base pl-5 !py-4 ${
              currentPage === "SERVICES: SEO" ? "text-[#F48029]" : "text-black"
            } hover:text-[#F48029] border-b w-full border-gray-300 pb-1`}
            onClick={() => handleMenuItemClick("SERVICES: SEO")}
          >
            SEO
          </Link>
          <Link
            to="/webdevelopment"
            className={`font-sans text-base pl-5 !py-4 ${
              currentPage === "SERVICES: WEB DEVELOPMENT"
                ? "text-[#F48029]"
                : "hover:text-[#F48029]"
            } border-b w-full border-gray-300 pb-1`}
            onClick={() => handleMenuItemClick("SERVICES: WEB DEVELOPMENT")}
          >
            WEB DEVELOPMENT
          </Link>
          <Link
            to="/ecommerce"
            className={`font-sans text-base pl-5 !py-4 ${
              currentPage === "SERVICES: E-COMMERCE"
                ? "text-[#F48029]"
                : "hover:text-[#F48029]"
            } border-b w-full border-gray-300 pb-1`}
            onClick={() => handleMenuItemClick("SERVICES: E-COMMERCE")}
          >
            E-COMMERCE
          </Link>
          <Link
            to="/graphicdesign"
            className={`font-sans text-base pl-5 !py-4 ${
              currentPage === "SERVICES: GRAPHIC DESIGN"
                ? "text-[#F48029]"
                : "hover:text-[#F48029]"
            } border-b w-full border-gray-300 pb-1`}
            onClick={() => handleMenuItemClick("SERVICES: GRAPHIC DESIGN")}
          >
            GRAPHIC DESIGN
          </Link>
          <Link
            to="/blog"
            className={`font-sans text-base pl-5 !py-4 ${
              currentPage === "BLOGS" ? "text-[#F48029]" : "text-black"
            } hover:text-[#F48029] border-b w-full border-gray-300 pb-1`}
            onClick={() => handleMenuItemClick("BLOGS")}
          >
            BLOGS
          </Link>
          <Link
            to="/contact-us"
            className={`font-sans text-base pl-5 !py-4 ${
              currentPage === "CONTACT US" ? "text-[#F48029]" : "text-black"
            } hover:text-[#F48029] border-b w-full border-gray-300 pb-1`}
            onClick={() => handleMenuItemClick("CONTACT US")}
          >
            CONTACT US
          </Link>
        </div>
      )}
    </div>
  );
}

export default MenuBar;
