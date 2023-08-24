import React from "react";
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
    <div>
      <a
        href="https://www.facebook.com/NaqsTechDigital"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="pr-2 w-6 h-6 text-black"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/naqstechdigital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="pr-2 w-6 h-6 text-black"
        />
      </a>
      <a
        href="https://www.instagram.com/naqstechdigital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="pr-2  w-6 h-6 text-black"
        />
      </a>
      <a
        href="https://www.pinterest.com/NaqsTechDigital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faPinterest}
          className="pr-2  w-6 h-6 text-black"
        />
      </a>
      <a
        href="https://twitter.com/i/flow/login?redirect_after_login=%2FNaqsTechDigital"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="pr-1  w-6 h-6 text-black"
        />
      </a>
    </div>
  );
}
function TopHeader() {
  return (
    <div className="bg-[#F48029] xs:px-[30px] xl:px-[80px]">
      <div className="grid md:grid-cols-3 xs:grid-cols-1">
        <div className="xs:py-[10px] xs:text-center md:text-left">
          <SocialIcons></SocialIcons>
        </div>
        <div className="grid col-span-2 ">
          <div className="grid xs:grid-cols-1 xs5:grid-cols-2 md:flex-hidden ">
            <div className="md:pt-[10px] flex md:justify-end">
              <div className="container flex md:justify-end xs:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="flex-shrink-0"
                  fill="none"
                >
                  <path
                    d="M17.7017 0.305908H0.700195V13.9071H17.7017V0.305908ZM16.0015 3.70621L9.20094 7.95658L2.40035 3.70621V2.00606L9.20094 6.25643L16.0015 2.00606V3.70621Z"
                    fill="black"
                  />
                </svg>
                <p className="text-[#363636] xs:pl-[5px] xs:leading-[20.8px]">
                  info@naqstechdigital.com{" "}
                </p>
              </div>
            </div>
            <div className="md:pt-[10px] flex md:justify-end xs5:pl-[10px]">
              <div className="container mx-auto">
                <div className="flex xs:justify-start md:justify-end xs:pb-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                      fill="black"
                    />
                  </svg>
                  <p className="text-[#363636] xs:leading-[20.8px]  xs:pl-[5px]">
                    160 Broadway New York, NY 10038
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
