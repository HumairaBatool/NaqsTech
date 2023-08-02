import React from "react";

import img1 from "../img/wp.webp";
import img2 from "../img/analysis.webp";
import img3 from "../img/digitals.webp";
function LatestNews() {
  return (
    <div className="max-auto pt-10">
      <div className=" relative top-[380px] pb-10">
        <div className=" relative top-[-300px] text-center text-4xl font-extrabold weight-2">
          Latest News
        </div>
        <div className=" relative top-[-300px] p-20 gap-4 grid lg:grid-cols-3 sm:grid-cols-1">
          <div className="mx-auto shadow-lg  overflow-hidden rounded bg-white">
            <img src={img1} alt=''></img>
            <h3 className="p-6 text-2xl font-extrabold">
              5 Key Elements of Effective WordPress Web Development Services in
              California
            </h3>
            <p className="px-6">
              In the dynamic digital landscape of California, effective web
              development services in California are crucial for businesses to
              establish a solid online …
            </p>
          </div>
          <div className="mx-auto shadow-lg  overflow-hidden rounded  bg-white">
            <img src={img2} alt=''></img>
            <h3 class="p-6 text-2xl font-extrabold">
              Why is Google Analytics Essential to SEO Services in California
            </h3>
            <p className="px-6">
              In the competitive online landscape, search engine optimization
              (SEO) plays a crucial role in driving organic traffic and
              improving the visibility of …
            </p>
          </div>
          <div className="mx-auto shadow-lg  overflow-hidden rounded  bg-white">
            <img src={img3} alt=''></img>
            <h3 className="p-6 text-2xl font-extrabold">
              How a Digital Marketing Agency in California Can Help Your SEO
              Efforts
            </h3>
            <p className="px-6">
              In today’s digital world, organizations must have a strong online
              presence in order to live and succeed. Search Engine Optimization
              (SEO) is …
            </p>
          </div>
        </div>
      </div>
      <div className=" pb-28 pt-80 bg-[#F48029] text-center -mt-[350px] mb-[100px]">
        <button className="py-3 px-6 rounded bg-black  p-1  hover:bg-white  hover:text-black  text-white">
          Get Free Consultation
        </button>
      </div>
    </div>
  );
}

export default LatestNews;
