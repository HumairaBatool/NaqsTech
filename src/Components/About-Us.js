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
      <div className="bg-[#F48029] pb-5">
        <div className=" max-auto grid lg:grid-cols-2 text-white sm:px-6 xl:px-20">
          <div className=" text-left pr-12 overflow-hidden">
            <p className="sm:pt-12 xl:pt-20 text-4xl font-bold  xl:leading-6 leading-10">
              We Help Business to Grow{" "}
            </p>
            <br />
            <p className="text-xl pt-2 leading-loose">
              NaqsTech is a full-service creative agency. We handle your design,
              engineering, and marketing from idea to launch. We are here to
              give you top-rated, up-to-date services with the latest trends,
              updated knowledge, and modern technologies.
            </p>
            <div className="py-12">
              <button className=" xl:py-3 px-5 rounded bg-black p-1 hover:bg-white hover:text-black text-white">
                Get Free Consultation
              </button>
            </div>
          </div>
          <div>
            <img className="xl:pt-20 sm:pt-12 xs:nw-full" src={img2} alt="" />
          </div>
        </div>
      </div>

      <div className=" max-auto grid grid-cols-3 px-20">
        <div>
          <div className="flex pt-20">
            <div className="text-4xl text-black font-bold pr-2">Our</div>
            <div className="text-4xl text-black font-semibold"> Vision</div>
          </div>
          <img className="py-10" src={img1} alt="" />
          <div className="text-4xl text-black font-semibold">
            Zain-ul Abideen | CEO
          </div>
          <div>
            <div className="flex items-center pt-6 gap-3">
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
        <div className="col-span-2 text-left  text-black pl-20">
          <p className="pt-20 text-2xl leading-10">
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
          <p className="text-3xl font-semibold pt-2 leading-10">
            “Our goal is to build a solution that give customer-facing teams at
            SMBs the ability to create fruitful and enduring relationships with
            customers.”
          </p>
        </div>
      </div>

      <div className="pt-20 px-20">
        <div className="flex items-center pt-5">
          <div className=" text-3xl font-extrabold pl-5 pr-2 ">
            GET IN TOUCH
          </div>
          <div className="w-20 h-0.5 bg-black my-5 "></div>
        </div>
        <div>
          <form className="py-1">
            <div className="grid grid-cols-2 pl-5">
              <div class="flex flex-col pr-4 py-5">
                <label for="name" class="hidden">
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-100 mt-2  px-3 py-3 bg-gray-100 text-black rounded"
                />
              </div>
              <div class="flex flex-col py-5">
                <label for="name" class="hidden">
                  Email
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Email"
                  class="w-100 mt-2 py-3 px-3  bg-gray-100 text-black  rounded"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 pl-5 py-5">
              <div class="flex flex-col pr-4">
                <label for="name" class="hidden">
                  Phone Number
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Phone Number"
                  class="w-100 mt-2 py-3 px-3  bg-gray-100 text-black  rounded"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="hidden">
                  Select Service
                </label>
                <select
                  id="category"
                  className="w-100 mt-2 py-3 px-3 bg-gray-100 text-black rounded"
                >
                  <option value="General Inquiry">Select Service</option>
                  <option value="Feedback">SEO</option>
                  <option value="Support">Web Development</option>
                  <option value="Feedback">Graphic Design</option>

                  <option value="Feedback">E-Commerce</option>
                </select>
              </div>{" "}
            </div>

            <div class="flex flex-col py-5 pl-5">
              <label for="name" class="hidden">
                Your Comment
              </label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Your Comment"
                class="w-100 mt-2 pt-5 px-3 pb-40 h bg-gray-100 text-black  rounded"
              />
            </div>
            <div className="pt-5 pl-5">
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
      <div>
        <LatestNews></LatestNews>
      </div>
    </div>
  );
}

export default AboutUs;
