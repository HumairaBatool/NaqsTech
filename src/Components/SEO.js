import React from "react";
import image from "../img/1seo.svg";
import Fifth from "./FaqsGetInTouch";
import LatestNews from "./Latest-News";

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
      <div className=" bg-[#F48029]">
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
      <div className="grid grid-cols-3 gap-4 lg:mx-48 md:px-7 lg:-mt-20">
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
      <div className="grid grid-cols-2 gap-4 ml-20 mr-40 mt-16">
        {/* First Column */}
        <div className="">
          <h1 className="text-[50px] font-[700]">
            Dominate The Digital Landscape With Professional
          </h1>
          <h2 className="text-[30px] font-[600] mt-2">
            SEO Agency in California
          </h2>
        </div>

        {/* Second Column */}
        <div>
          <h1 className="text-[20px] leading-10 ml-20">
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
      <div className="grid grid-cols-3 gap-5 ml-32 mr-32 mt-16 text-white">
        {/* First Column */}
        <div className="bg-[#363636] rounded-md h-[350px]">
          <img src={SEO1} class="w-20 ml-[39%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] ml-[31%] mt-6">
            On-Page SEO
          </h1>
          <p className="text-[14px] text-center mr-6 ml-6 mt-4">
            Our On-Page SEO service is designed to enhance your web pages'
            structure, content, and overall performance, driving organic traffic
            and boosting your online presence.
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-[#363636] rounded-md h-[350px]">
          <img src={SEO2} class="w-20 ml-[39%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] ml-[31%] mt-6">
            Off-Page SEO
          </h1>
          <p className="text-[14px] text-center mr-6 ml-6 mt-4">
            Our Off-Page SEO service focuses on building high-quality backlinks,
            fostering brand awareness, and establishing your website as a
            trusted source within your industry.
          </p>
        </div>

        {/* Third Column */}
        <div className="bg-[#363636] rounded-md h-[350px]">
          <img src={SEO3} class="w-20 ml-[39%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] ml-[21%] mt-6">
            Content Optimization
          </h1>
          <p className="text-[14px] text-center mr-6 ml-6 mt-4">
            Our Content Optimization SEO service focuses on refining your
            website's content to align with search engine algorithms and user
            expectations, resulting in enhanced visibility.
          </p>
        </div>
      </div>

      {/* 4rth Section */}
      <div className="grid grid-cols-3 gap-5 ml-32 mr-32 mt-12 mb-10 text-white">
        {/* First Column */}
        <div className="bg-[#363636] rounded-md h-[350px]">
          <img src={SEO4} class="w-20 ml-[39%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] ml-[24%] mt-6">
            SEO Audit Services
          </h1>
          <p className="text-[14px] text-center mr-6 ml-6 mt-4">
            Our SEO Audit Service is designed to analyze and evaluate your
            website's performance, identify areas for improvement, and provide
            actionable recommendations to enhance your organic search
            visibility.
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-[#363636] rounded-md h-[350px]">
          <img src={SEO5} class="w-20 ml-[39%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] ml-[25%] mt-6">
            Keyword Research
          </h1>
          <p className="text-[14px] text-center mr-6 ml-6 mt-4">
            Our Keyword Research Service is designed to identify your industry's
            most relevant and high-value keywords, ensuring that your website
            ranks higher in google and attracts qualified organic traffic.
          </p>
        </div>

        {/* Third Column */}
        <div className="bg-[#363636] rounded-md h-[350px]">
          <img src={SEO6} class="w-20 ml-[39%] mt-14" alt="" />
          <h1 className="text-[#F48029] text-[20px] font-[700] ml-[16%] mt-6">
            Back Links & Link Building
          </h1>
          <p className="text-[14px] text-center mr-6 ml-6 mt-4">
            Our Backlinks & Link Building Service focuses on acquiring
            authoritative and relevant backlinks that drive traffic to your
            website and display your brand as a trusted source in your industry.
          </p>
        </div>
      </div>

      {/* 5th Section */}

      <div className="bg-[#F48029] mt-28">
        <div className="grid grid-cols-7 text-left max-auto text-white">
          <div className="col-span-4 text-left py-20 px-16 ml-8">
            <p className=" pt-10 pb-6 text-[35px] font-[700]">
              What Sets Us Apart From Others?
            </p>
            <p className="text-[25px] pt-1 ">
              We believe in the value of customized solutions. Therefore, we do
              not rely on hunches or assumptions. Unlike cookie-cutter
              techniques, we take the time to study your company, industry, and
              target audience to develop personalized SEO tactics that coincide
              with your specific goals and objectives.
            </p>
          </div>
          <div className="col-span-3">
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
      <div className="mt-16">
        <Fifth></Fifth>
      </div>

      {/* 7th Section Reviews */}
      <div style={mystyle} className="bg-[#FAFAFA] mt-2 pb-16">
        {/* Reviews Section */}
        <div className="text-[35px] font-[700] p-14 ml-[80px]">Reviews</div>
        <div className="grid grid-cols-2 gap-6 ml-32 mr-32 ">
          {/* First Review */}
          <div className="bg-white text-[18px] text-[#737373]  rounded-md hover:shadow-2xl p-5 h-5/6">
            {/* Review Text */}
            <p>
              I am incredibly impressed with the SEO services provided by
              NaqsTech Digital. Their attention to detail and dedication to
              achieving results sets them apart from other agencies. It is
              highly recommended!
            </p>
            <div className="flex justify-start">
              <div className="w-1/20">
                {/* Content for the left column */}
                <img className="mt-4" src={rev1} alt="Reviewer 1" />
              </div>
              <div className="w-1/16 mt-5 ml-5">
                {/* Content for the right column */}
                <h1 className="ml-1 text-[#15063F] font-[500] text-[20px]">
                  Julia.U
                </h1>
                <img className="w-28" src={star1} alt="5 Stars" />
              </div>
            </div>
          </div>
          {/* 2nd Review */}
          <div className="bg-white text-[18px] text-[#737373]  rounded-md hover:shadow-2xl p-5 h-6/6">
            {/* Review Text */}
            <p>
              NaqsTech Digital's SEO portfolio speaks volumes about its
              expertise in the field. The before-and-after examples demonstrate
              their ability to optimize websites and drive targeted traffic. I
              would love to engage their services.
            </p>
            <div className="flex justify-start mt-2">
              <div className="w-1/20">
                {/* Content for the left column */}
                <img className="mt-4" src={rev3} alt="Reviewer 1" />
              </div>
              <div className="w-1/16 mt-5 ml-5">
                {/* Content for the right column */}
                <h1 className="ml-1 text-[#15063F] font-[500] text-[20px]">
                  Roy. K
                </h1>
                <img className="w-28" src={star1} alt="5 Stars" />
              </div>
            </div>
          </div>
          {/* 3rd Review */}
          <div className="bg-[#F48029] text-[18px] rounded-md hover:shadow-2xl p-5 text-white -mt-6">
            {/* Review Text */}
            <p>
              I recently engaged NaqsTech Digital for SEO services, and their
              professionalism reflects their outstanding work. I am thrilled
              with their expertise and highly recommend their services.
            </p>
            <div className="flex justify-start mt-6">
              <div className="w-1/20">
                {/* Content for the left column */}
                <img className="mt-4" src={rev2} alt="Reviewer 2" />
              </div>
              <div className="w-1/16 mt-5 ml-5">
                {/* Content for the right column */}
                <h1 className="ml-1 text-white font-[500] text-[20px]">
                  Kevin. M
                </h1>
                <img className="w-28" src={star1} alt="5 Stars" />
              </div>
            </div>
          </div>
          {/* 4th Review */}
          <div className="bg-[#F48029] text-[18px] rounded-md hover:shadow-2xl p-5 text-white">
            {/* Review Text */}
            <p>
              Amazing SEO service Agency. Highly satisfied with their team. They
              made my website rank best among my competitors. Thank you for this
              effort.
            </p>
            <div className="flex justify-start mt-6">
              <div className="w-1/20">
                {/* Content for the left column */}
                <img className="mt-4" src={rev2} alt="Reviewer 2" />
              </div>
              <div className="w-1/16 mt-5 ml-5">
                {/* Content for the right column */}
                <h1 className="ml-1 text-white font-[500] text-[20px]">
                  Thomas. L
                </h1>
                <img className="w-28" src={star1} alt="5 Stars" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest News */}
      <LatestNews />
    </div>
  );
}

export default SEO;
