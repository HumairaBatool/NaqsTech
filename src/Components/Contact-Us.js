import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../Components/Footer";

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
          className="pr-1 w-6 h-6 text-white"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/naqstechdigital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="pr-1 w-6 h-6 text-white"
        />
      </a>
      <a
        href="https://www.instagram.com/naqstechdigital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="pr-1  w-6 h-6 text-white"
        />
      </a>
      <a
        href="https://www.pinterest.com/NaqsTechDigital/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faPinterest}
          className="pr-1  w-6 h-6 text-white"
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
    <div>
      <div className="bg-[#F48029] px-12 py-16 overflow-hidden">
        <div className="lg:mx-20 md:mx-7">
          <div className="py-3 bg-white rounded-lg grid lg:grid-cols-2 md:grid-cols-1">
            <div className="flex flex-col bg-[#F48029] mx-3 rounded-lg container w-[400px]">
              <div className=" pl-10 pr-12">
                <p className=" text-white text-3xl font-bold pt-10 pb-8 ">
                  Contact Information
                </p>
                <p className="text-white text-3xl font-bold ">
                  Say something to start a live chat!
                </p>
                <br></br>
                <div className="container flex">
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
                    <p className="text-white pl-3">
                      160 Broadway New York, NY 10038
                    </p>
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
                <div className="pt-40">
                  <div className="pt-40">
                    <SocialIcons></SocialIcons>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col -ml-[100px] py-3 bg-white p-12 container  ">
              <form className="w-[550px] ">
                <div className="grid grid-cols-2 py-10">
                  <div className="flex flex-col mb-4 pr-4">
                    <label className=" text-[#8D8D8D]" htmlFor="username">
                      First Name
                    </label>
                    <input
                      className=" border-gray-500 border-b p-1 bg-transparent focus:outline-none"
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
                      className="border-gray-500 border-b p-1 bg-transparent focus:outline-none"
                      type="text"
                      id="FirstName"
                      name="FirstName"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col mb-4 pr-4">
                    <label className=" text-[#8D8D8D]" htmlFor="username">
                      Email
                    </label>
                    <input
                      className=" border-gray-500 border-b p-1 bg-transparent focus:outline-none"
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
                      className="border-gray-500 border-b p-1 bg-transparent focus:outline-none"
                      type="text"
                      id="FirstName"
                      name="FirstName"
                      placeholder="+1 012 3456 789"
                    />
                  </div>
                </div>
                <div className="font-bold">
                  <p>Select Subject?</p>
                </div>
                <div className="flex py-2">
                  <div className="flex items-center mb-4 px-2">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      name="checkbox1"
                      className="mr-2"
                    />
                    <label
                      htmlFor="checkbox1"
                      className="text-[#8D8D8D] text-sm"
                    >
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
                    <label
                      htmlFor="checkbox1"
                      className="text-[#8D8D8D] text-sm"
                    >
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
                    <label
                      htmlFor="checkbox1"
                      className="text-[#8D8D8D] text-sm"
                    >
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
                    <label
                      htmlFor="checkbox1"
                      className="text-[#8D8D8D] text-sm"
                    >
                      E-Commerce
                    </label>
                  </div>
                </div>

                <div className="flex flex-col mb-4 pr-4 py-10">
                  <label className=" text-[#8D8D8D]" htmlFor="username">
                    Message
                  </label>
                  <input
                    className="border-gray-500 border-b p-1 bg-transparent focus:outline-none"
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Add more form fields as needed */}
                <div className="text-right">
                  <button className="bg-black text-white px-12 py-4 mt-4 rounded">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default ContactUs;
