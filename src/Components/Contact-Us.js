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
    <div className="flex py-2 bg-[#F48029]">
      <a
        href="https://www.facebook.com/NaqsTechDigital"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="pr-2 w-6 h-6 text-white"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/naqstechdigital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="pr-2 w-6 h-6 text-white"
        />
      </a>
      <a
        href="https://www.instagram.com/naqstechdigital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="pr-2  w-6 h-6 text-white"
        />
      </a>
      <a
        href="https://www.pinterest.com/NaqsTechDigital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faPinterest}
          className="pr-2  w-6 h-6 text-white"
        />
      </a>
      <a
        href="https://twitter.com/i/flow/login?redirect_after_login=%2FNaqsTechDigital"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="pr-1  w-6 h-6 text-white"
        />
      </a>
    </div>
  );
}
function ContactUs() {
  return (
    <div className="bg-[#F48029] xs:px-[13px] xs2:px-[30px] lg:px-[122px] overflow-hidden xs:pb-[50px] lg:pb-[80px]">
      <div className="xs:mt-[30px] lg:mt-[50px] xs:bg-white rounded-lg xs:pr-[20px] md1:pr-[20px] xs7:pr-[20px]">
        <div className="container relative grid lg:grid-cols-3 xs:grid-cols-1">
          <div className=" lg:w-[120%] lg1:w-[110%] xs:my-[10px]  xs:ml-[10px] xs:mr-[10px] xs:px-[13px] xs2:px-[10px] md:px-[40px] xs:pt-[20px] md:pt-[40px] md:pb-[40px] xs:pb-[40px] xs2:pb-[20px]  bg-[#F48029] md:rounded-lg container relative">
            <div className=" xs:leading-[24px] ">
              <p className=" text-white xs:text-[20px] md:text-[28px] xs:font-[600] xs:leading-[42px] xs:mb-[20px] md:pb-[6px] md:mb-[20px] ">
                Contact Information
              </p>
              <p className="text-white xs:text-[13px] xs3:text-[26px] md:text-[32px] xs3:leading-[38px] xs:font-[500] xs:leading-[25px] xs:mb-[20px]">
                Say something to start a live chat!
              </p>
              <div className="container flex text-left xs:pb-[10px]  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
className="flex  items-center"
                  fill="none"
                >
                  <path
                    d="M17.7017 0.305908H0.700195V13.9071H17.7017V0.305908ZM16.0015 3.70621L9.20094 7.95658L2.40035 3.70621V2.00606L9.20094 6.25643L16.0015 2.00606V3.70621Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white  xs:pl-[10px] xs:leading-[20.8px]">
                  info@naqstechdigital.com{" "}
                </p>
              </div>
              <div className="container mx-auto xs:mt-[10px]  xs:pb-[10px]">
                <div className="flex items-center">
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
                      fill="white"
                    />
                  </svg>
                  <p className="text-white xs:leading-[20.8px]  xs:pl-[10px]">
                    160 Broadway New York, NY 10038
                  </p>
                </div>
              </div>
              <div className="container mx-auto xs:pb-[10px] xs:mb-20px] md:mb-[50px]">
                <div className="flex items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="none"
                  >
                    <path
                      d="M11.9996 21.0037C10.7366 19.9263 9.56582 18.7452 8.49963 17.4727C6.89964 15.5617 4.99963 12.7157 4.99963 10.0037C4.99822 7.17126 6.70388 4.6171 9.3207 3.53311C11.9375 2.44912 14.9497 3.04895 16.9516 5.05271C18.2681 6.36332 19.0055 8.1461 18.9997 
              10.0037C18.9997 12.7157 17.0996 15.5617 15.4996 17.4727C14.4334 18.7452 13.2627 19.9263 11.9996 21.0037ZM11.9996 7.00371C10.9278 7.00371 9.93746 7.57551 9.40156 8.50371C8.86566 9.43192 8.86566 10.5755 9.40156 11.5037C9.93746 12.4319 10.9278 13.0037 11.9996 13.0037C13.6565 13.0037 14.9996 11.6606 14.9996 10.0037C14.9996 8.34686 13.6565 7.00371 11.9996 7.00371Z"
                      fill="white"
                    />
                  </svg></div>
                  <p className="text-white xs:pl-[6px] ">
                    34 Harrow Avenue Oldham Olh4hz Greater Manchester UK
                  </p>
                </div>
              </div>
              <div className="flex justify-center xs:pb-[20px] md:pb-[0px]  md:justify-start">
                <SocialIcons></SocialIcons>
              </div>
            </div>
          </div>

          <div className="lg:ml-[100px] lg1:ml-[80px] lg1:w-[80%] lg:w-[70%] col-span-2  flex flex-col container relative md:mx-[10px] xs:px-[13px] xs2:px-[20px] xs:pt-[20px] xs2:pt-[25px] md:pt-[50px] xs:pb-[40px] xs2:pb-[30px] xs:text-[12px]">
            <form>
              <div className="grid md:grid-cols-2 lg1:grid-cols-2 lg:grid-cols-1 xs:grid-cols-1 md:mb-[30px]">
                <div className="flex flex-col mb-4 pr-4">
                  <label className=" text-[#8D8D8D]" htmlFor="username">
                    First Name
                  </label>
                  <input
                    className=" border-gray-500 border-b py-[10px] bg-transparent focus:outline-none"
                    type="text"
                    id="FirstName"
                    name="FirstName"
                  />
                </div>
                <div className="flex flex-col mb-4 pr-4">
                  <label className="text-[#8D8D8D]" htmlFor="username">
                    Last Name
                  </label>
                  <input
                    className="border-gray-500 border-b py-[10px] bg-transparent focus:outline-none"
                    type="text"
                    id="FirstName"
                    name="FirstName"
                  />
                </div>
              </div>
              <div className="grid  md:grid-cols-2 lg1:grid-cols-2  lg:grid-cols-1  xs:grid-cols-1 md:mb-[30px]">
                <div className="flex flex-col mb-4 pr-4">
                  <label className=" text-[#8D8D8D]" htmlFor="username">
                    Email
                  </label>
                  <input
                    className=" border-gray-500 border-b py-[10px] bg-transparent focus:outline-none"
                    type="text"
                    id="FirstName"
                    name="FirstName"
                  />
                </div>
                <div className="flex flex-col mb-4 pr-4">
                  <label className="text-[#8D8D8D]" htmlFor="username">
                    Phone Number
                  </label>
                  <input
                    className="border-gray-500 border-b py-[10px] bg-transparent focus:outline-none"
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    placeholder="+1 012 3456 789"
                  />
                </div>
              </div>
              <div className="font-bold md:mb-[30px]">
                <p>Select Subject?</p>
              </div>
              <div className="relative grid md:grid-cols-4 flex gap-[70px] xs:grid-cols-2 py-2 xs:text-[12px] md:mb-[30px]">
                <div className="flex items-center mb-4 px-2">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    className="xs:mr-2 "
                  />
                  <label htmlFor="checkbox1" className="text-[#8D8D8D]">
                    SEO
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    className="mr-2"
                  />
                  <label htmlFor="checkbox1" className="text-[#8D8D8D] ">
                    Web Development
                  </label>
                </div>
                <div className="flex items-center mb-4 px-2">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    className="mr-2"
                  />
                  <label htmlFor="checkbox1" className="text-[#8D8D8D]">
                    Graphic Design
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    className="mr-2"
                  />
                  <label htmlFor="checkbox1" className="text-[#8D8D8D]">
                    E-Commerce
                  </label>
                </div>
              </div>

              <div className="flex flex-col xs:pb-[26px] md:pb-[60px]">
                <label className=" text-[#8D8D8D]" htmlFor="username">
                  Message
                </label>
                <input
                  className="border-gray-500 text-black border-b p-1 bg-transparent focus:outline-none"
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  placeholder="Write your message here..."
                />
              </div>

              <div className="xs:flex xs:justify-center md:justify-end">
              <button className="bg-black md:text-[15px] text-white xs:w-full md:w-[212px] xs:py-[10px] md:py-[15px] rounded">
                Send Message
              </button>
            </div>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
