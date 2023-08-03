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
    <div className="flex gap-x-5  pt-4 pb-2">
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
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 mx-28 py-16 text-white">
        {/*cOLUMN 1 */}
        <div>
          <img src={logo}></img>
          <div className="text-2xl py-5 text-justify tracking-tighter">
            Being one of the best digital marketing agencies in New York, we’ll
            understand your business and deliver result-driven digital marketing
            services.
          </div>
          <div>
            <SocialIcons></SocialIcons>
          </div>
          <div className="text-2xl py-5 text-justifytracking-tighter">
            Let’s build the next big thing together
          </div>
        </div>
        {/*cOLUMN 2 */}
        <div className="pl-16 pt-16 ">
          <div className="flex text-2xl pb-5 pt-2 font-bold">
            <div className="relative">
              <div className=" absolute top-1 left-0 w-12 h-[2px] bg-white"></div>
            </div>
            <div className="pl-16 -mt-3 ">Services</div>
          </div>

          <div className="pt-5 font-semibold pl-5">
            <div>SEO</div>
            <div className="pt-3">Web Development</div>
            <div className="pt-3">Graphic Design</div>
            <div className="pt-3">E-Commerce</div>
          </div>
        </div>

        {/*cOLUMN 3 */}
        <div className="pl-16 ">
          <div className="container flex pt-16 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              viewBox="0 0 18 14"
              fill="none"
            >
              <path
                d="M17.7017 0.305908H0.700195V13.9071H17.7017V0.305908ZM16.0015 3.70621L9.20094 7.95658L2.40035 3.70621V2.00606L9.20094 6.25643L16.0015 2.00606V3.70621Z"
                fill="white"
              />
            </svg>
            <p className="text-white pl-3">info@naqstechdigital.com </p>
          </div>
          <br></br>
          <div className="container mx-auto">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9996 21.0037C10.7366 19.9263 9.56582 18.7452 8.49963 
              17.4727C6.89964 15.5617 4.99963 12.7157 4.99963 10.0037C4.99822 
              7.17126 6.70388 4.6171 9.3207 3.53311C11.9375 2.44912 14.9497 3.04895
              16.9516 5.05271C18.2681 6.36332 19.0055 8.1461 18.9997 
              10.0037C18.9997 12.7157 17.0996 15.5617 15.4996 17.4727C14.4334 
              18.7452 13.2627 19.9263 11.9996 21.0037ZM11.9996 7.00371C10.9278 7.00371 
              9.93746 7.57551 9.40156 8.50371C8.86566 9.43192 8.86566 10.5755 9.40156 
              11.5037C9.93746 12.4319 10.9278 13.0037 11.9996 13.0037C13.6565 13.0037 
              14.9996 11.6606 14.9996 10.0037C14.9996 8.34686 13.6565 7.00371 11.9996 7.00371Z"
                  fill="white"
                />
              </svg>
              <p className="text-white pl-3">160 Broadway New York, NY 10038</p>
            </div>
          </div>
          <br></br>
          <div className="container mx-auto">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9996 21.0037C10.7366 19.9263 9.56582 18.7452 8.49963 17.4727C6.89964 15.5617 4.99963 12.7157 4.99963 10.0037C4.99822 7.17126 6.70388 4.6171 9.3207 3.53311C11.9375 2.44912 14.9497 3.04895 16.9516 5.05271C18.2681 6.36332 19.0055 8.1461 18.9997 
    10.0037C18.9997 12.7157 17.0996 15.5617 15.4996 17.4727C14.4334 18.7452 13.2627 19.9263 11.9996 21.0037ZM11.9996 7.00371C10.9278 7.00371 9.93746 7.57551 9.40156 8.50371C8.86566 9.43192 8.86566 10.5755 9.40156 11.5037C9.93746 12.4319 10.9278 13.0037 11.9996 13.0037C13.6565 13.0037 14.9996 11.6606 14.9996 10.0037C14.9996 8.34686 13.6565 7.00371 11.9996 7.00371Z"
                  fill="white"
                />
              </svg>
              <p className="text-white pl-3">
                34 Harrow Avenue Oldham Olh4hz Greater Manchester UK
              </p>
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
