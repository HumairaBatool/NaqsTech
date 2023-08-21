import React from "react";
import LatestNews from "./Latest-News";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../img/Rectangle 110.png";
import img2 from "../img/Group 1000001863.png";

import upimg from '../img/upwork.png';

function AboutUs() {
  return (
    <div className=" max-auto">

          {/*1st Section */}
      <div className="bg-[#F48029] pb-5 lg:pb-0">
        <div className="relative xs:grid-cols-1 grid lg:grid-cols-2 text-white lg:pt-[30px]" >
          <div className="xs:text-center md:text-left relative text-left overflow-hidden xs:px-[30px] xs:pb-[6px] xl:px-20 xs:pt-[40px] sm:pt-[0px] ">
            <p className="xs:text-[31px] xs:leading-[28px] xs:font-[700] xs3:text-[32px] xs3:leading-[41.6px] md:text-[40px] md:leading-[40px] sm:pt-12">
              We Help Business to Grow
            </p>
            <br />
            <p className=" xs:text-[14px] xs:leading-[24px] md:text-[20px] md:leading-[40px] pt-2">
              NaqsTech is a full-service creative agency. We handle your design,
              engineering, and marketing from idea to launch. We are here to
              give you top-rated, up-to-date services with the latest trends,
              updated knowledge, and modern technologies.
            </p>
            <div className="xs:py-12  md:py-8">
              <button className="relative  xs:py-3 px-5 rounded bg-black p-1 hover:bg-white hover:text-black text-white">
                Get Free Consultation
              </button>
            </div>
          </div>
          <div className="align-middle md:px-[24px] relative lg:p-[20px] flex items-center justify-center">
            <img className="xs:pb-10  sm:pb-0 xs:w-full " src={img2} alt="" />
          </div>
        </div>
      </div>

       {/*2nd Section */}
      <div className="lg:px-20 max-auto grid md:grid-cols-3 xs:grid-cols-1 relative xs:px-[30px] xs:pt-[20px] md:pt-[40px] lg:pt-[50px] ">
        <div>
          <div className="flex xs:pt-2">
            <div className="text-[32px] leading-[38.4px] font-[500] text-black  pr-2">Our</div>
            <div className="text-[32px] leading-[38.4px] font-[500] text-black"> Vision</div>
          </div>
          <img className="xs:py-8 w-full" src={img1} alt="" />
          <div className="xs:text-[24px] md:text-[25px] lg:text-[30px] text-black xs:leading-[43px] md:leading-[45px]">
            Zain-ul Abideen | CEO
          </div>
          <div>
            <div className="flex items-center pt-[24px] gap-3">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center hover:bg-gray-900">
                <a
                  href="https://www.linkedin.com/in/zain-ul-abideen-19433b18a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="px-1 w-8 h-8 text-white rounded "
                  />
                </a>{" "}
              </div>

              {/* Upwork icon */}
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center hover:bg-gray-800">
                <a
                  href="https://www.upwork.com/freelancers/~01027f6a79a00fec8a"
                  target="_blank"
                >
                  <img className="w-8" src={upimg}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-left  text-black md:px-[30px]">
          <p className="xs:pt-20 md:pt-0 xs:text-[14px] xs:leading-[25px] md:text-[18px] md:leading-[35px] lg:text-[20px] lg:leading-[40px] ">
            Our vision is to empower businesses and organizations with the
            digital solutions they need to thrive in the ever-evolving online
            landscape. We envision a world where businesses of all sizes can
            leverage the power of digital marketing to achieve their goals and
            reach their full potential. Through our unwavering commitment to
            innovation, collaboration, growth, excellence, and impact, we aim to
            be the trusted digital partner that enables businesses to navigate
            the complexities of the digital landscape and achieve extraordinary
            success.
          </p>
          <br />
          <p className="xs:text-[17px] xs:leading-[32px] xs3:text-[20px] xs3:leading-[43px] md:text-[25px] md:leading-[45px] lg:text-[30px] xs:font-[500] leading-10">
            “Our goal is to build a solution that give customer-facing teams at
            SMBs the ability to create fruitful and enduring relationships with
            customers.”
          </p>
        </div>
      </div>


       {/*1rd Section */}
      <div className="lg:px-20 xs:pt-5 xs:px-[30px] relative">
        <div className="xs3:flex items-center">
          <div className="xs:text-[28px] xs:leading-[43px] xs:font-[700] md:text-[35px] md:leading-[70px] ">
            GET IN TOUCH
          </div>
          <div className="pl-5">
          <div className="w-14 h-0.5 bg-black md:my-5 "></div></div>
        </div>
        <div>
          <form className="py-1">
            <div className="grid xs3:grid-cols-2 xs:grid-cols-1 lg:grid-cols-1 xs3:gap-x-4">
              <div class="flex flex-col  xs3:pt-2">
                <label for="name" class="hidden">
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-100 mt-2  px-3 xs:py-[13px] md:py-[17px] bg-[#FAFAFA] text-black rounded"
                />
              </div>
              <div class="flex flex-col  xs:pt-2 lg:pt-0">
                <label for="name" class="hidden">
                  Email
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Email"
                  class="w-100 mt-2  xs:py-[13px] md:py-[17px] px-3  bg-[#FAFAFA] text-black  rounded"
                />
              </div>
            </div>
            <div className="grid xs3:grid-cols-2 xs:grid-cols-1 lg:grid-cols-1 xs3:gap-x-4">
              <div class="flex flex-col xs:pt-2 ">
                <label for="name" class="hidden">
                  Phone Number
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Phone Number"
                  class="w-100 mt-2  xs:py-[13px] md:py-[17px] px-3  bg-[#FAFAFA] text-black  rounded"
                />
              </div>
              <div class="flex flex-col xs:pt-2">
                <label for="name" class="hidden">
                  Select Service
                </label>
                <select
                  id="category"
                  className="w-100 mt-2  xs:py-[13px] md:py-[17px] px-3 bg-[#FAFAFA] text-black rounded"
                >
                  <option value="General Inquiry">Select Service</option>
                  <option value="Feedback">SEO</option>
                  <option value="Support">Web Development</option>
                  <option value="Feedback">Graphic Design</option>

                  <option value="Feedback">E-Commerce</option>
                </select>
              </div>{" "}
            </div>

            <div class="grid grid-cols-1 xs:py-4">
              <label for="name" class="hidden">
                Your Comment
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Your Comment"
                class="w-100 mt-2 pt-5 px-3 pb-[200px] h bg-[#FAFAFA] text-black  rounded"
              />
            </div>
            <div className="pt-5">
              <button
                type="submit"
                className="py-4 px-8 rounded bg-[#F48029] p-1 text-white"
              >
                Get a Qoute
              </button>
            </div>
          </form>
        </div>
      </div>

      {/*4th Section */}
      <div>
        <LatestNews></LatestNews>
      </div>
    </div>
  );
}

export default AboutUs;
