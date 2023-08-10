import React from "react";
import image from "../img/1seo.svg";
import Fifth from "./FaqsGetInTouch";
import LatestNews from "./Latest-News";
import Reviews from "./Reviews";
import image2 from "../img/icon2.webp";
import image3 from "../img/icon3.webp";
import image4 from "../img/icon4.webp";

import SEO1 from "../img/SEO1.svg";
import SEO2 from "../img/SEO2.svg";
import SEO3 from "../img/SEO3.svg";
import SEO4 from "../img/SEO4.svg";
import SEO5 from "../img/SEO5.svg";
import SEO6 from "../img/SEO6.svg";

import SEO7 from "../img/SEO7.webp";
import SEO8 from "../img/SEO8.webp";
import SEO9 from "../img/SEO9.webp";
import SEO10 from "../img/SEO10.webp";

import star1 from "../img/5stars.webp";
import rev1 from "../img/rev1.jpeg";
import rev2 from "../img/rev2.jpeg";
import rev3 from "../img/rev3.webp";

function SEO() {
  const mystyle = {
    fontFamily: "Poppins, sans-serif",
    color: "#363636",
  };
  return (
    <div style={mystyle}>
      <div className="h-12 bg-[#F48029]"></div>
      <div className=" bg-[#F48029] max-w-full container lg:pb-[0rem] md:pb-[20rem]">
        <div className="h-[620px] grid lg:grid-cols-2 md:grid-cols-1 lg:pl-14 lg:pr-28">
          {/* First Column */}
          <div className="lg:h-400px lg:mt-4  text-white md:mx-7">
            <h1 className="md:text-[50px] md:font-[600] lg:font-[700] lg:leading-tight">
              Professional SEO Service In California
            </h1>
            <h1 className="mt-3 text-[20px] leading-9">
              Regardless of your company’s size, we provide professional SEO
              services in California to help you conquer the web and attract
              highly targeted organic traffic. We employ state-of-the-art
              tactics to boost your website’s performance and ensure its
              continued viability with the help of our team of seasoned SEO
              experts and a data-driven approach.
            </h1>
            <button className="md:mt-8 bg-[#363636] w-28 rounded-md h-14 align-middle hover:bg-white hover:text-black">
              Talk Now
            </button>
          </div>

          {/* Second Column */}
          <div>
            <img
              className=" lg:mr-20 lg:pb-36 lg:-mt-36 lg:ml-8 lg:h-[900px] lg:px-0  md:px-40 md:pt-10 md:pb-32 "
              src={image}
              alt="Banner"
            />
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="grid grid-cols-3 gap-4 lg:mx-48 md:px-7 lg:-mt-20 md:-mt-20 ">
        {/* First column */}
        <div className="bg-white p-4 rounded-md shadow-lg h-52 text-center text-[20px] shadow-[#F48029]">
          <img src={image2} class="w-20 ml-[39%] mt-8" alt="" />
          <h1 className="text-xl mt-4">Web Development</h1>
        </div>

        {/* Second column */}
        <div className="bg-white p-4 rounded-md shadow-lg h-52 text-center text-[20px] shadow-[#F48029]">
          <img src={image3} class="w-20 ml-[39%] mt-8" alt="" />
          <h1 className="text-xl mt-4">Graphic Design</h1>
        </div>

        {/* Third column */}
        <div className="bg-white p-4 rounded-md shadow-lg h-52 text-center text-[20px] shadow-[#F48029]">
          <img src={image4} class="w-20 ml-[39%] mt-8" alt="" />
          <h1 className="text-xl mt-8">E-commerce Services</h1>
        </div>
      </div>

      {/* 2nd Section */}
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 lg:gap-4 lg:ml-20 lg:mr-40 lg:mt-16 md:mt-8 md:px-7">
        {/* First Column */}
        <div className="">
          <h1 className="lg:text-[50px] md:text-[35px] lg:font-[700] md:font-[700]">
            Dominate The Digital Landscape With Professional
          </h1>
          <h2 className="lg:text-[30px] md:text-[30px] lg:font-[600] md:font-[600] md:mt-2">
            SEO Agency in California
          </h2>
        </div>

        {/* Second Column */}
        <div>
          <h1 className="text-[20px] leading-10 lg:ml-20 md:mt-2">
            Our professional SEO agency in California empowers you to dominate
            online, leaving competitors in the dust. Rise above the noise,
            conquer search rankings, and reign supreme in the digital sphere
            with
            <a href="#" class="text-[#c36] hover:text-[#333366] ml-2">
              NaqsTech Digital.
            </a>
          </h1>
        </div>
      </div>

      {/* 3rd Section */}
      <div className="grid lg:grid-cols-3 gap-5 lg:mx-32 lg:mt-16 text-white md:mx-7 md:mt-10 ">
        {/* First Column */}
        <div className="bg-[#363636] rounded-md lg:h-[350px] md:h-[300px]">
          <img
            src={SEO1}
            class="w-20  md:ml-[45%] lg:ml-[39%] lg:mt-14 md:mt-10"
            alt=""
          />
          <h1 className="text-[#F48029] text-[20px] font-[700]  mt-6 text-center">
            On-Page SEO
          </h1>
          <p className="text-[14px] text-center mx-6 mt-4">
            Our On-Page SEO service is designed to enhance your web pages'
            structure, content, and overall performance, driving organic traffic
            and boosting your online presence.
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-[#363636] rounded-md lg:h-[350px] md:h-[300px]">
          <img src={SEO2} class="w-20  md:ml-[45%] lg:ml-[39%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] text-center mt-6">
            Off-Page SEO
          </h1>
          <p className="text-[14px] text-center mx-6 mt-4">
            Our Off-Page SEO service focuses on building high-quality backlinks,
            fostering brand awareness, and establishing your website as a
            trusted source within your industry.
          </p>
        </div>

        {/* Third Column */}
        <div className="bg-[#363636] rounded-md lg:h-[350px] md:h-[300px]">
          <img src={SEO3} class="w-20  md:ml-[45%] lg:ml-[39%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] text-center mt-6">
            Content Optimization
          </h1>
          <p className="text-[14px] text-center mx-6 mt-4">
            Our Content Optimization SEO service focuses on refining your
            website's content to align with search engine algorithms and user
            expectations, resulting in enhanced visibility.
          </p>
        </div>
      </div>

      {/* 4rth Section */}
      <div className="grid lg:grid-cols-3 gap-5 lg:mx-32 lg:mt-12 lg:mb-10 md:mx-7 text-white md:mt-5">
        {/* First Column */}
        <div className="bg-[#363636] rounded-md lg:h-[350px] ">
          <img src={SEO4} class="w-20 lg:ml-[39%] md:ml-[45%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] text-center mt-6">
            SEO Audit Services
          </h1>
          <p className="text-[14px] text-center mx-6 mt-4 md:mb-10">
            Our SEO Audit Service is designed to analyze and evaluate your
            website's performance, identify areas for improvement, and provide
            actionable recommendations to enhance your organic search
            visibility.
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-[#363636] rounded-md h-[350px]">
          <img src={SEO5} class="w-20 lg:ml-[39%] md:ml-[45%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] text-center mt-6">
            Keyword Research
          </h1>
          <p className="text-[14px] text-center mx-6 mt-4">
            Our Keyword Research Service is designed to identify your industry's
            most relevant and high-value keywords, ensuring that your website
            ranks higher in google and attracts qualified organic traffic.
          </p>
        </div>

        {/* Third Column */}
        <div className="bg-[#363636] rounded-md h-[350px]">
          <img src={SEO6} class="w-20 lg:ml-[39%] md:ml-[45%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] text-center mt-6">
            Back Links & Link Building
          </h1>
          <p className="text-[14px] text-center mx-6 mt-4">
            Our Backlinks & Link Building Service focuses on acquiring
            authoritative and relevant backlinks that drive traffic to your
            website and display your brand as a trusted source in your industry.
          </p>
        </div>
      </div>

      {/* 5th Section */}

      <div className="bg-[#F48029] container max-w-full lg:mt-28 md:mt-16 md:pb-[39rem] lg:pb-[0rem]">
        <div className="grid lg:grid-cols-7 md:grid-cols-4 text-left max-auto text-white">
          <div className="col-span-4 text-left lg:py-20 md:py-4 lg:px-16 md:pl-7 lg:ml-8">
            <p className=" pt-10 pb-6 text-[35px] font-[700]">
              What Sets Us Apart From Others?
            </p>
            <p className="lg:text-[25px] md:text-[20px] pt-1 ">
              We believe in the value of customized solutions. Therefore, we do
              not rely on hunches or assumptions. Unlike cookie-cutter
              techniques, we take the time to study your company, industry, and
              target audience to develop personalized SEO tactics that coincide
              with your specific goals and objectives.
            </p>
          </div>
          <div className="col-span-3 lg:mt-0 md:mt-20 lg:ml-0 md:ml-40 w-full">
            <div className="w-full h-40 grid grid-cols-2 gap-4">
              <div>
                <img
                  src={SEO7}
                  alt=""
                  className=" relative top-[-45px] pb-6 object-cover w-full h-50%"
                />
                <img
                  src={SEO8}
                  alt=""
                  className=" relative top-[-55px] object-cover w-full h-50%"
                />
              </div>
              <div>
                <img
                  src={SEO9}
                  alt=""
                  className=" pt-32 pr-20 object-cover w-full h-50%"
                />
                <img
                  src={SEO10}
                  alt=""
                  className="pb-20 pr-20  pt-4 object-cover w-full h-50%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6th Section... From component Section 5 */}
      <div className="mt-16 ">
        <Fifth></Fifth>
      </div>

      {/* 7th Section Reviews */}
      <Reviews />
      {/* Latest News */}
      <LatestNews />
    </div>
  );
}

export default SEO;
