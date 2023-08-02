import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import img1 from "../img/Group.png";
import img2 from "../img/Group 1000001863.png";
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
  return (
    <nav className="flex items-center justify-between bg-black p-4">
      <div className="bg-black max-auto px-12 flex max-auto ">
        <div className="px-5">
        </div>
      </div>
      <div className="flex space-x-5 ">
        {/* Navigation links */}
        <a
          href="/"
          className="font-sans text-xl text-white hover:text-[#F48029]"
        >
          HOME
        </a>
        <a
          href="/About-Us.js"
          className="font-sans text-xl text-white hover:text-[#F48029]"
        >
          ABOUT US
        </a>
        <a
          href="C:\Users\Admin\Desktop\React\naqs-tech\src\About-Us.js"
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
          href="C:\Users\Admin\Desktop\React\naqs-tech\src\Components\Contact-Us.js"
          className=" font-sans text-xl text-white hover:text-[#F48029]"
        >
          CONTACT US
        </a>
      </div>
    </nav>
  );
}
function Section1() {
  return (
    <div className="bg-[#F48029] max-auto pb-32">
    <SocialIcons></SocialIcons>
      <MenuBar></MenuBar>
      <div className="flex max-auto font-poppins text-white px-6">
        <div className="basis-[50%] text-left px-12">
          <p className="pt-12 text-xl ">
            We are the Creative Best Digital Marketing Company
          </p>
          <p className="pt-8 text-4xl font-bold leading-10">
            Welcome to NaqsTech Digital Your Partner in Digital Growth
          </p>
          <br />
          <p className="text-xl pt-2 leading-loose">
            NaqsTech Digital is a leading digital marketing agency in California
            specializing in helping businesses achieve their goals. Our expert
            team delivers results-driven digital solutions to businesses of all
            sizes.
          </p>
          <div className="py-12">
            <button className="py-3 px-5 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
              Get Free Consultation
            </button>
          </div>
        </div>

        <div className="basis-[50%]">
          <img className="py-12" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
