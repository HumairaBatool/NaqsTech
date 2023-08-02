import React from "react";
import LatestNews from "./Latest-News";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faPinterest,
  faTwitter,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../img/Rectangle 110.png";
import img2 from "../img/Group 1000001863.png";

function SocialIcons() {
  return (
    <div className="flex pl-16  py-2 bg-[#F48029]">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className=" px-1 w-6 h-6 text-black"
        />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          className="px-1 w-6 h-6 text-black"
        />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="px-1 w-6 h-6 text-black"
        />
      </a>
      <a
        href="https://www.pinterest.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faPinterest}
          className=" px-1 w-6 h-6 text-black"
        />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="px-1 w-6 h-6 text-black" />
      </a>
    </div>
  );
}
function MenuBar() {
  return (
    <nav className="flex items-center justify-between bg-black p-6">
      <div className="bg-black max-auto px-12 flex max-auto ">
        <div className="px-5"></div>
      </div>
      <div className="flex space-x-5 ">
        {/* Navigation links */}
        <a
          href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
          className="font-sans text-xl text-white hover:text-[#F48029]"
        >
          HOME
        </a>
        <a
          href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
          className="font-sans text-xl text-white hover:text-[#F48029]"
        >
          ABOUT US
        </a>
        <a
          href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
          className="font-sans text-xl text-white hover:text-[#F48029]"
        >
          SERVICES
        </a>
        <a
          href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
          className="font-sans text-xl text-white hover:text-[#F48029]"
        >
          BLOGS
        </a>
        <a
          href="C:\Users\Admin\Desktop\React\naqs-tech\src\App.js"
          className=" font-sans text-xl text-white hover:text-[#F48029]"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
}
function AboutUs() {
  return (
    <div className=" max-auto">
      <div className="bg-[#F48029] pb-5">
        <SocialIcons></SocialIcons>
        <MenuBar></MenuBar>
        <div className="flex max-auto grid grid-cols-2 text-white px-20">
          <div className=" text-left pr-12">
            <p className="pt-20 text-4xl font-bold  leading-6">
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
              <button className="py-3 px-5 rounded bg-black p-1 hover:bg-white hover:text-black text-white">
                Get Free Consultation
              </button>
            </div>
          </div>
          <div>
            <img className="py-20" src={img2} alt="" />
          </div>
        </div>
      </div>

      <div className="flex max-auto grid grid-cols-3 px-20">
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
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center hover:bg-gray-900">
                <a
                  href="https://www.linkedin.com/in/zain-ul-abideen-19433b18a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="px-1 w-9 h-9 text-white rounded "
                  />
                </a>{" "}
              </div>

              {/* Upwork icon */}
              <div className="bg-black w-20 h-20 rounded-full flex items-center justify-center hover:bg-gray-900"></div>
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
                  class="w-100 mt-2 py-3 px-3 py-5 bg-gray-100 text-black py-5 rounded"
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
                  class="w-100 mt-2 py-3 px-3 py-5 bg-gray-100 text-black py-5 rounded"
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
                  class="w-100 mt-2 py-3 px-3 py-5 bg-gray-100 text-black  rounded"
                />
              </div>
              <div class="flex flex-col">
                <label for="name" class="hidden">
                  Select Service
                </label>
                <select
                  id="category"
                  className="w-100 mt-2 py-3 px-3 py-5 bg-gray-100 text-black rounded"
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
