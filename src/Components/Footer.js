import React from "react";
import logo from "../img/logo.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <div className="flex gap-x-2 justify-center pt-4 pb-2">
      <div className="bg-blue-900 w-10 h-10 box rounded flex items-center justify-center hover:bg-gray-900">
        <a
          href="https://www.facebook.com/NaqsTechDigital"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="px-1 w-7 h-7 text-white rounded "
          />
        </a>
      </div>

      <div className="bg-blue-800 w-10 h-10 box rounded flex items-center justify-center hover:bg-gray-900">
        <a
          href="https://www.linkedin.com/company/naqstechdigital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="px-1 w-7 h-7 text-white rounded "
          />
        </a>
      </div>

      <div className="bg-[#ef00aa] w-10 h-10 box rounded flex items-center justify-center hover:bg-gray-900">
        <a
          /*linear-gradient(378deg, #FEC451, #ef00aa) */
          href="https://www.instagram.com/naqstechdigital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="px-1 w-7 h-7 text-white rounded "
          />
        </a>
      </div>

      <div className="bg-[#bd081c] w-10 h-10 box rounded flex items-center justify-center hover:bg-gray-900">
        <a
          href="https://www.pinterest.com/NaqsTechDigital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faPinterest}
            className="px-1 w-7 h-7 text-white rounded "
          />
        </a>
      </div>

      <div className="bg-blue-500 w-10 h-10 box rounded flex items-center justify-center hover:bg-gray-900">
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2FNaqsTechDigital"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className="px-1 w-7 h-7 text-white rounded "
          />
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#333]">
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:mx-28 md:mx-7 xs:mx-5 py-16 text-white">
        {/*cOLUMN 1 */}
        <div>
          <img src={logo}></img>
          <div className="text-lg py-5 ">
              Being one of the best digital marketing agencies in New York, we’ll
              understand your business and deliver result-driven digital marketing
              services.
          </div>
          <div>
            <SocialIcons></SocialIcons>
          </div>
          <div className="text-lg py-5">
            Let’s build the next big thing together
          </div>
        </div>
        {/*cOLUMN 2 */}
        <div className="lg:pl-16 xs:pl-0 lg:pt-16 xs:pt-0">
          <div className="flex text-2xl pb-5 pt-2 font-bold">
            <div className="relative">
              <div className=" absolute top-1 left-0 w-12 h-[2px] bg-white"></div>
            </div>
            <div className="pl-16 -mt-3 text-lg font-poppins">Services</div>
          </div>

          <div className="pt-5 font-semibold pl-5">
            {/* Adding links */}
            <div className="pt-3 font-poppins font-normal">
              <a href="/seo" className="text-white hover:underline">
                SEO
              </a>
            </div>
            <div className="pt-3 font-poppins font-normal">
              <a href="/webdevelopment" className="text-white hover:underline">
                Web Development
              </a>
            </div>
            <div className="pt-3 font-poppins font-normal">
              <a href="/graphicdesign" className="text-white hover:underline">
                Graphic Design
              </a>
            </div>
            <div className="pt-3 font-poppins font-normal">
              <a href="/ecommerce" className="text-white hover:underline">
                E-Commerce
              </a>
            </div>
          </div>
        </div>

        {/*cOLUMN 3 */}
        <div className="lg:pl-16 xs:pl-0">
          <div className="container flex pt-16 ">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="5" fill="#F48029" />
              <path d="M19.9996 27.0037C18.7366 25.9263 17.5658 24.7452 16.4996 23.4727C14.8996 21.5617 12.9996 18.7157 12.9996 16.0037C12.9982 13.1713 14.7039 10.6171 17.3207 9.53311C19.9375 8.44912 22.9497 9.04895 24.9516 11.0527C26.2681 12.3633 27.0055 14.1461 26.9997 16.0037C26.9997 18.7157 25.0996 21.5617 23.4996 23.4727C22.4334 24.7452 21.2627 25.9263 19.9996 27.0037ZM19.9996 13.0037C18.9278 13.0037 17.9375 13.5755 17.4016 14.5037C16.8657 15.4319 16.8657 16.5755 17.4016 17.5037C17.9375 18.4319 18.9278 19.0037 19.9996 19.0037C21.6565 19.0037 22.9996 17.6606 22.9996 16.0037C22.9996 14.3469 21.6565 13.0037 19.9996 13.0037Z" fill="white" />
            </svg>


            <p className="text-white pl-3 font-poppins self-center">
              160 Broadway New York, NY 10038</p>
          </div>
          <br></br>
          <div className="container">
            <div className="flex">
              <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="5" fill="#F48029" />
                <path d="M19.9996 27.0037C18.7366 25.9263 17.5658 24.7452 16.4996 23.4727C14.8996 21.5617 12.9996 18.7157 12.9996 16.0037C12.9982 13.1713 14.7039 10.6171 17.3207 9.53311C19.9375 8.44912 22.9497 9.04895 24.9516 11.0527C26.2681 12.3633 27.0055 14.1461 26.9997 16.0037C26.9997 18.7157 25.0996 21.5617 23.4996 23.4727C22.4334 24.7452 21.2627 25.9263 19.9996 27.0037ZM19.9996 13.0037C18.9278 13.0037 17.9375 13.5755 17.4016 14.5037C16.8657 15.4319 16.8657 16.5755 17.4016 17.5037C17.9375 18.4319 18.9278 19.0037 19.9996 19.0037C21.6565 19.0037 22.9996 17.6606 22.9996 16.0037C22.9996 14.3469 21.6565 13.0037 19.9996 13.0037Z" fill="white" />
              </svg>

              <p className="text-white pl-3 font-poppins self-center">34 Harrow Avenue Oldham Ol84hz Greater Manchester UK</p>
            </div>
          </div>
          <br></br>
          <div className="container">
            <div className="flex">
              <svg width="60" height="60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="5" fill="#F48029" />
                <path d="M19.9996 27.0037C18.7366 25.9263 17.5658 24.7452 16.4996 23.4727C14.8996 21.5617 12.9996 18.7157 12.9996 16.0037C12.9982 13.1713 14.7039 10.6171 17.3207 9.53311C19.9375 8.44912 22.9497 9.04895 24.9516 11.0527C26.2681 12.3633 27.0055 14.1461 26.9997 16.0037C26.9997 18.7157 25.0996 21.5617 23.4996 23.4727C22.4334 24.7452 21.2627 25.9263 19.9996 27.0037ZM19.9996 13.0037C18.9278 13.0037 17.9375 13.5755 17.4016 14.5037C16.8657 15.4319 16.8657 16.5755 17.4016 17.5037C17.9375 18.4319 18.9278 19.0037 19.9996 19.0037C21.6565 19.0037 22.9996 17.6606 22.9996 16.0037C22.9996 14.3469 21.6565 13.0037 19.9996 13.0037Z" fill="white" />
              </svg>

              <p className="text-white pl-3 font-poppins self-center">
                23 B Bankers Society Lahore Pakistan , Postal Code 54000</p>
            </div>
          </div>
          <br></br>
          <div className="container">
            <div className="flex">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="5" fill="#F48029" />
                <g clip-path="url(#clip0_303_396)">
                  <path d="M10.9996 15L18.9996 20L26.9996 15V18H28.9996V13C28.9996 11.9 28.0996 11 26.9996 11H10.9996C9.89963 11 9.00963 11.9 9.00963 13L8.99963 25C8.99963 26.1 9.89963 27 10.9996 27H20.9996V25H10.9996V15ZM26.9996 13L18.9996 18L10.9996 13H26.9996Z" fill="white" />
                  <path d="M28.9996 23V27C28.9996 28.1 28.0996 29 26.9996 29C25.8996 29 24.9996 28.1 24.9996 27V22.5C24.9996 22.22 25.2196 22 25.4996 22C25.7796 22 25.9996 22.22 25.9996 22.5V27H27.9996V22.5C27.9996 21.12 26.8796 20 25.4996 20C24.1196 20 22.9996 21.12 22.9996 22.5V27C22.9996 29.21 24.7896 31 26.9996 31C29.2096 31 30.9996 29.21 30.9996 27V23H28.9996Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_303_396">
                    <rect width="24" height="24" fill="white" transform="translate(7.99963 9)" />
                  </clipPath>
                </defs>
              </svg>


              <p className="text-white pl-3 font-poppins self-center">info@naqstechdigital.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white font-semibold pb-16">
        ©2023 NaqsTech Digital
      </div>
    </div>
  );
}

export default Footer;
