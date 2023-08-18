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
    <div className="flex gap-x-2  pt-4 pb-2">
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
          <div className="text-lg py-5 text-justify tracking-tighter font-poppins">
            Being one of the best digital marketing agencies in New York, we’ll
            understand your business and deliver result-driven digital marketing
            services.
          </div>
          <div>
            <SocialIcons></SocialIcons>
          </div>
          <div className="text-lg py-5 text-justifytracking-tighter font-poppins">
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
            <div className="pt-3 font-poppins font-normal">SEO</div>
            <div className="pt-3 font-poppins font-normal">Web Development</div>
            <div className="pt-3 font-poppins font-normal">Graphic Design</div>
            <div className="pt-3 font-poppins font-normal">E-Commerce</div>
          </div>
        </div>

        {/*cOLUMN 3 */}
        <div className="lg:pl-16 xs:pl-0">
          <div className="container flex pt-16 ">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="5" fill="#F48029" />
              <path d="M19.9996 27.0037C18.7366 25.9263 17.5658 24.7452 16.4996 23.4727C14.8996 21.5617 12.9996 18.7157 12.9996 16.0037C12.9982 13.1713 14.7039 10.6171 17.3207 9.53311C19.9375 8.44912 22.9497 9.04895 24.9516 11.0527C26.2681 12.3633 27.0055 14.1461 26.9997 16.0037C26.9997 18.7157 25.0996 21.5617 23.4996 23.4727C22.4334 24.7452 21.2627 25.9263 19.9996 27.0037ZM19.9996 13.0037C18.9278 13.0037 17.9375 13.5755 17.4016 14.5037C16.8657 15.4319 16.8657 16.5755 17.4016 17.5037C17.9375 18.4319 18.9278 19.0037 19.9996 19.0037C21.6565 19.0037 22.9996 17.6606 22.9996 16.0037C22.9996 14.3469 21.6565 13.0037 19.9996 13.0037Z" fill="white" />
            </svg>


            <p className="text-white pl-3 font-poppins self-center">info@naqstechdigital.com </p>
          </div>
          <br></br>
          <div className="container">
            <div className="flex">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="5" fill="#F48029" />
                <path d="M19.9996 27.0037C18.7366 25.9263 17.5658 24.7452 16.4996 23.4727C14.8996 21.5617 12.9996 18.7157 12.9996 16.0037C12.9982 13.1713 14.7039 10.6171 17.3207 9.53311C19.9375 8.44912 22.9497 9.04895 24.9516 11.0527C26.2681 12.3633 27.0055 14.1461 26.9997 16.0037C26.9997 18.7157 25.0996 21.5617 23.4996 23.4727C22.4334 24.7452 21.2627 25.9263 19.9996 27.0037ZM19.9996 13.0037C18.9278 13.0037 17.9375 13.5755 17.4016 14.5037C16.8657 15.4319 16.8657 16.5755 17.4016 17.5037C17.9375 18.4319 18.9278 19.0037 19.9996 19.0037C21.6565 19.0037 22.9996 17.6606 22.9996 16.0037C22.9996 14.3469 21.6565 13.0037 19.9996 13.0037Z" fill="white" />
              </svg>

              <p className="text-white pl-3 font-poppins self-center">160 Broadway New York, NY 10038</p>
            </div>
          </div>
          <br></br>
          <div className="container">
            <div className="flex">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="5" fill="#F48029" />
                <path d="M19.9996 27.0037C18.7366 25.9263 17.5658 24.7452 16.4996 23.4727C14.8996 21.5617 12.9996 18.7157 12.9996 16.0037C12.9982 13.1713 14.7039 10.6171 17.3207 9.53311C19.9375 8.44912 22.9497 9.04895 24.9516 11.0527C26.2681 12.3633 27.0055 14.1461 26.9997 16.0037C26.9997 18.7157 25.0996 21.5617 23.4996 23.4727C22.4334 24.7452 21.2627 25.9263 19.9996 27.0037ZM19.9996 13.0037C18.9278 13.0037 17.9375 13.5755 17.4016 14.5037C16.8657 15.4319 16.8657 16.5755 17.4016 17.5037C17.9375 18.4319 18.9278 19.0037 19.9996 19.0037C21.6565 19.0037 22.9996 17.6606 22.9996 16.0037C22.9996 14.3469 21.6565 13.0037 19.9996 13.0037Z" fill="white" />
              </svg>

              <p className="text-white pl-3 font-poppins self-center">160 Broadway New York, NY 10038</p>
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
