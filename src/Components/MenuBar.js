import React from "react";

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import logo from '../img/logo.svg';

function SocialIcons() {
    return (
      <div className="flex pl-16  py-2 bg-[#F48029]">
        <a
          href="https://www.facebook.com/NaqsTechDigital"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className=" px-1 w-6 h-6 text-black"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/naqstechdigital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="px-1 w-6 h-6 text-black"
          />
        </a>
        <a
          href="https://www.instagram.com/naqstechdigital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="px-1 w-6 h-6 text-black"
          />
        </a>
        <a
          href="https://www.pinterest.com/NaqsTechDigital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faPinterest}
            className=" px-1 w-6 h-6 text-black"
          />
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FNaqsTechDigital" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faTwitter}
            className="px-1 w-6 h-6 text-black"
          />
        </a>
      </div>
    );
  }

  function MenuBar() {
    const [currentPage, setCurrentPage] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
  
    useEffect(() => {
      // Set the default page as HOME when the component is first rendered
      setCurrentPage("HOME");
    }, []);
  
    const handleMenuItemClick = (page) => {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Scroll to the top of the page
    };
  
    return (
      <div className="sticky top-0 z-50">
        <SocialIcons></SocialIcons>
        <nav className="flex items-center bg-black py-4">
          <div className="pl-16">
            <img src={logo} alt=" " />
          </div>
          <div className="flex space-x-6 justify-center px-72">
            {/* Navigation links */}
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
                  (currentPage === "SERVICES" || currentPage.includes("SERVICES: ")) ? "text-[#F48029]" : "text-white"
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
                      to="/ecommerce"
                      className={`block text-black ${
                        currentPage === "SERVICES: E-COMMERCE" ? "text-[#F48029]" : "hover:text-[#F48029]"
                      }`}
                      onClick={() => handleMenuItemClick("SERVICES: E-COMMERCE")}
                    >
                      E-COMMERCE
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/graphicdesign"
                      className={`pt-4 block text-black ${
                        currentPage === "SERVICES: GRAPHIC DESIGN" ? "text-[#F48029]" : "hover:text-[#F48029]"
                      }`}
                      onClick={() => handleMenuItemClick("SERVICES: GRAPHIC DESIGN")}
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
        </nav>
      </div>
    );
  }
  
   

  export default MenuBar;
  