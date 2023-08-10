import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../img/logo.svg";

function SocialIcons() {
  // ... (your existing SocialIcons component code)
}

function MenuBar() {
  const [currentPage, setCurrentPage] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // Add state for mobile menu

  useEffect(() => {
    // Set the default page as HOME when the component is first rendered
    setCurrentPage("HOME");
  }, []);

  const handleMenuItemClick = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to the top of the page
    setShowMobileMenu(false); // Close mobile menu when a menu item is clicked
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center bg-black py-4">
        {/* Logo aligned to the left */}
        <div className="pl-16">
          <img src={logo} alt=" " />
        </div>
        {/* Centered menu */}
        <div className="flex-grow flex items-center justify-center">
        {/* Regular navigation links */}
        <div
          className={`hidden md:flex space-x-6 md:space-x-6 justify-center ${showMobileMenu ? "hidden" : "flex"
            }`}
        >
          {/* Navigation links */}
          <Link
            to="/home"
            className={`font-sans text-xl ${currentPage === "HOME" ? "text-[#F48029]" : "text-white"
              } hover:text-[#F48029]`}
            onClick={() => handleMenuItemClick("HOME")}
          >
            HOME
          </Link>
          <Link
            to="/about-us"
            className={`font-sans text-xl ${currentPage === "ABOUT US" ? "text-[#F48029]" : "text-white"
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
              className={`font-sans text-xl ${currentPage === "SERVICES" || currentPage.includes("SERVICES: ")
                ? "text-[#F48029]"
                : "text-white"
                } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("SERVICES")}
            >
              SERVICES
              <span className="text-white text-xs ml-1">▼</span>
            </Link>
            {/* Dropdown content */}
            {showDropdown && (
              <ul className="whitespace-nowrap absolute top-full left-0 bg-white py-4 pl-4 pr-28 shadow">
                <li className="border-b">
                  <Link
                    to="/seo"
                    className={`pt-2 block text-black ${currentPage === "SERVICES: SEO"
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
                    className={`pt-4 block text-black ${currentPage === "SERVICES: WEB DEVELOPMENT"
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
                    className={`pt-4 block text-black ${currentPage === "SERVICES: E-COMMERCE"
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
                    className={`pt-4 block text-black ${currentPage === "SERVICES: GRAPHIC DESIGN"
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
            className={`font-sans text-xl ${currentPage === "BLOGS" ? "text-[#F48029]" : "text-white"
              } hover:text-[#F48029]`}
            onClick={() => handleMenuItemClick("BLOGS")}
          >
            BLOGS
          </Link>
          <Link
            to="/contact-us"
            className={`font-sans text-xl ${currentPage === "CONTACT US" ? "text-[#F48029]" : "text-white"
              } hover:text-[#F48029]`}
            onClick={() => handleMenuItemClick("CONTACT US")}
          >
            CONTACT US
          </Link>

            {/* Add your other navigation links here */}
          </div>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center space-x-6 pr-6">
          <button
            className="text-white hover:text-[#F48029]"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
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
          </button>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden flex flex-col mt-4 space-y-2 items-center">
            <Link
              to="/home"
              className={`font-sans text-xl ${currentPage === "HOME"
                ? "text-[#F48029]"
                : "text-white"
                } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("HOME")}
            >
              HOME
            </Link>
            <Link
              to="/about-us"
              className={`font-sans text-xl ${currentPage === "ABOUT US" ? "text-[#F48029]" : "text-white"
                } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("ABOUT US")}
            >
              ABOUT US
            </Link>

            <Link
              to="/seo"
              className={`font-sans text-xl ${currentPage === "SERVICES: SEO"
                ? "text-[#F48029]"
                : "text-white"
                } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("SERVICES: SEO")}
            >
              SEO
            </Link>

            <Link
              to="/webdevelopment"
              className={`font-sans text-xl ${currentPage === "SERVICES: WEB DEVELOPMENT"
                ? "text-[#F48029]"
                : "text-white"
                } hover:text-[#F48029]`}
              onClick={() =>
                handleMenuItemClick("SERVICES: WEB DEVELOPMENT")
              }
            >
              WEB DEVELOPMENT
            </Link>

            <Link
              to="/ecommerce"
              className={`font-sans text-xl ${currentPage === "SERVICES: E-COMMERCE"
                ? "text-[#F48029]"
                : "text-white"
                } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("SERVICES: E-COMMERCE")}
            >
              E-COMMERCE
            </Link>

            <Link
              to="/graphicdesign"
              className={`font-sans text-xl ${currentPage === "SERVICES: GRAPHIC DESIGN"
                ? "text-[#F48029]"
                : "text-white"
                } hover:text-[#F48029]`}
              onClick={() =>
                handleMenuItemClick("SERVICES: GRAPHIC DESIGN")
              }
            >
              GRAPHIC DESIGN
            </Link>
            <Link
              to="/blog"
              className={`font-sans text-xl ${currentPage === "BLOGS" ? "text-[#F48029]" : "text-white"
                } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("BLOGS")}
            >
              BLOGS
            </Link>
            <Link
              to="/contact-us"
              className={`font-sans text-xl ${currentPage === "CONTACT US" ? "text-[#F48029]" : "text-white"
                } hover:text-[#F48029]`}
              onClick={() => handleMenuItemClick("CONTACT US")}
            >
              CONTACT US
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuBar;
