import React from "react";
import image from "../img/1seo.svg";
import Fifth from "./seoFAQS";
import LatestNews from "./Latest-News";
import Reviews from "./Reviews";
import HomeCards from "./seoCards";

// import image2 from "../img/icon2.webp";
// import image3 from "../img/icon3.webp";
// import image4 from "../img/icon4.webp";

import SEO1 from "../img/SEO1.svg";
import SEO2 from "../img/SEO2.svg";
import SEO3 from "../img/SEO3.svg";
import SEO4 from "../img/SEO4.svg";
import SEO5 from "../img/SEO5.svg";
import SEO6 from "../img/SEO6.svg";

// import SEO7 from "../img/SEO7.webp";
// import SEO8 from "../img/SEO8.webp";
// import SEO9 from "../img/SEO9.webp";
// import SEO10 from "../img/SEO10.webp";
import portfolio from "../img/Our-Portfolio-1-736x1024.webp";

// import star1 from "../img/5stars.webp";
// import rev1 from "../img/rev1.jpeg";
// import rev2 from "../img/rev2.jpeg";
// import rev3 from "../img/rev3.webp";

function SEO() {
  const mystyle = {
    fontFamily: "Poppins, sans-serif",
    color: "#363636",
  };
  return (
    <div style={mystyle}>
      <div className="md:h-12 xs:h-2 bg-[#F48029]"></div>
      <div className=" bg-[#F48029] max-w-full container lg:pb-0 xs:pb-[8rem]" >
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 lg:pl-14 lg:pr-28 ">
          {/* First Column */}
          <div className=" md:pb-20 lg:pb-28 lg:mt-4  text-white xs:mx-7 md: ">
            <h1 className="xs:text-[25px] xs:font-[700] md:text-[50px] md:font-[600] lg:font-[700] md:leading-tight xs:leading-[1.4em]">
              Professional SEO Service In New York
            </h1>
            <h1 className="my-3 xs:font-[400] md:font-normal xs:text-[14px] md:text-[20px] md:leading-9 xs:leading-[25px]">
              Regardless of your company’s size, we provide professional SEO
              services in California to help you conquer the web and attract
              highly targeted organic traffic. We employ state-of-the-art
              tactics to boost your website’s performance and ensure its
              continued viability with the help of our team of seasoned SEO
              experts and a data-driven approach.
            </h1>
            <button className="my-3 bg-[#363636]  rounded-md px-[24px] py-[12px] align-middle hover:bg-white hover:text-black">
              Talk Now
            </button>
          </div>

          {/* Second Column */}
          <div className="lg:pr-12 overflow-hidden">
          <img className="lg:mb-12 xs:w-full" src={image} alt="" />
        </div>
        </div>
      </div>
      {/* Card Section */}
   <HomeCards></HomeCards>

      {/* 2nd Section */}
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 lg:gap-4 lg:ml-20  lg:mt-0 md:mt-8 xs:px-7">
        {/* First Column */}
        <div className="">
          <h1 className="xs:mt-10 md:mt-0 lg:text-[50px] md:text-[35px] xs:text-[16x] xs:font-[900] md:font-[700]">
            Dominate The Digital Landscape With Professional
          </h1>
          <h2 className=" xs:text-[21px] xs:font-[500]  md:text-[30px] lg:font-[600] md:font-[600] md:my-2 xs:my-4">
            SEO Agency in New York
          </h2>
        </div>

        {/* Second Column */}
        <div>
          <h1 className=" xs:text-[14px] xs:leading-[24px]  md:text-[20px] lg:leading-loose leading-10  lg:ml-12 lg:mr-16 md:mt-2">
            Our professional SEO agency in New York empowers you to dominate
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
      <div className="grid lg:grid-cols-3 gap-5 lg:mx-32 lg:mt-16 text-white xs:mx-7 xs:mt-10 text-center items-center justify-center ">
        {/* First Column */}
        <div className="bg-[#363636] rounded-md lg:h-[350px] py-14 md:h-[300px] flex flex-col items-center justify-center">
          <img src={SEO1} className="w-20 " alt="" />
          <h1 className="text-[#F48029] px-5 text-[20px] font-[700] mt-6">
            On-Page SEO
          </h1>
          <p className="text-[14px] mx-6 mt-4">
            Our On-Page SEO service is designed to enhance your web pages'
            structure, content, and overall performance, driving organic traffic
            and boosting your online presence.
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-[#363636] py-14 rounded-md lg:h-[350px] md:h-[300px] flex flex-col items-center justify-center">
          <img src={SEO2} class="w-20  " alt="" />
          <h1 className="text-[#F48029]  px-5 text-[20px] font-[700]  mt-6">
            Off-Page SEO
          </h1>
          <p className="text-[14px]  mx-6 mt-4">
            Our Off-Page SEO service focuses on building high-quality backlinks,
            fostering brand awareness, and establishing your website as a
            trusted source within your industry.
          </p>
        </div>

        {/* Third Column */}
        <div className="bg-[#363636] py-14 rounded-md lg:h-[350px] md:h-[300px] flex flex-col items-center justify-center">
          <img src={SEO3} class="w-20 " alt="" />
          <h1 className="text-[#F48029]  px-5 text-[20px] font-[700]  mt-6">
            Content Optimization
          </h1>
          <p className="text-[14px]  mx-6 mt-4">
            Our Content Optimization SEO service focuses on refining your
            website's content to align with search engine algorithms and user
            expectations, resulting in enhanced visibility.
          </p>
        </div>
      </div>

      {/* 4rth Section */}
      <div className="grid lg:grid-cols-3 gap-5 lg:mx-32 lg:mt-12 xs:mt-5 lg:mb-10 xs:mx-7 text-white md:mt-5 text-center  ">
        {/* First Column */}
        <div className="bg-[#363636] py-14 rounded-md h-[350px] lg:h-[350px] flex flex-col items-center justify-center">
          <img src={SEO4} class="w-20 lg:mt-16" alt="" />
          <h1 className="text-[#F48029] px-5 text-[20px] font-[700]  mt-6">
            SEO Audit Services
          </h1>
          <p className="text-[14px]  mx-6 mt-4 md:mb-10">
            Our SEO Audit Service is designed to analyze and evaluate your
            website's performance, identify areas for improvement, and provide
            actionable recommendations to enhance your organic search
            visibility.
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-[#363636] py-14 rounded-md h-[350px]  flex flex-col items-center justify-center">
          <img src={SEO5} class="w-20" alt="" />
          <h1 className="text-[#F48029]  px-5 text-[20px] font-[700]  mt-6">
            Keyword Research
          </h1>
          <p className="text-[14px]  mx-6 mt-4">
            Our Keyword Research Service is designed to identify your industry's
            most relevant and high-value keywords, ensuring that your website
            ranks higher in google and attracts qualified organic traffic.
          </p>
        </div>

        {/* Third Column */}
        <div className="bg-[#363636] py-14 rounded-md h-[350px] flex flex-col items-center justify-center">
          <img src={SEO6} class="w-20 " alt="" />
          <h1 className="text-[#F48029] px-5 text-[20px] font-[700]  mt-6">
            Back Links & Link Building
          </h1>
          <p className="text-[14px]  mx-6 mt-4">
            Our Backlinks & Link Building Service focuses on acquiring
            authoritative and relevant backlinks that drive traffic to your
            website and display your brand as a trusted source in your industry.
          </p>
        </div>
      </div>

      {/* 5th Section */}
      <div className="bg-white  max-auto pt-20">
        <div className="bg-[#F48029] max-auto">
          <div className="grid lg:grid-cols-7 md:grid-cols-4 text-left max-auto text-white">
            <div className=" col-span-4 lg:py-20 md:py-4 lg:px-16 xs:px-7 md:pl-7 lg:ml-8">
              <p className="text-center pt-10 pb-6 md:text-[35px] xs:text-[20px] font-[700]">
                What Sets Us Apart From Others?
              </p>
              <p className="text-left lg:text-[25px] md:text-[20px] xs:text-[14px]  pt-1 ">
                We believe in the value of customized solutions. Therefore, we
                do not rely on hunches or assumptions. Unlike cookie-cutter
                techniques, we take the time to study your company, industry,
                and target audience to develop personalized SEO tactics that
                coincide with your specific goals and objectives.
              </p>
            </div>

            <div className="col-span-3 lg:-mb-36 xs:mb-0">
              <div className="w-full gap-4">
                <div>
                  <img
                    src={portfolio}
                    alt=""
                    className=" relative lg:top-[-45px] xs:top-0 lg:w-3/4 xs:w-full"
                  />
                </div>
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
