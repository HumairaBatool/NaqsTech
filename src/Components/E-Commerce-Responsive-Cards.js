import React, { Component } from "react";
import InnerCard from "./InnerCard";

import image1 from "../img/icon5.webp";
import image2 from "../img/icon2.webp";
import image3 from "../img/icon3.webp";

function ECommerceResponsiveCards() {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 ml-48 mr-48 -mt-20">
       {/* First column */}
       <div className="bg-white p-4 rounded-md shadow-lg h-52 text-center text-[20px] shadow-[#F48029]">
       <img src={image1} class="w-20 ml-[39%] mt-8"/> 
       <h1 className="text-xl mt-4">SEO</h1>
   </div>

    {/* Second column */}
    <div className="bg-white p-4 rounded-md shadow-lg h-52 text-center text-[20px] shadow-[#F48029]">
        <img src={image2} class="w-20 ml-[39%] mt-8"/> 
        <h1 className="text-xl mt-4">Web Development</h1>
    </div>

    {/* Third column */}
    <div className="bg-white p-4 rounded-md shadow-lg h-52 text-center text-[20px] shadow-[#F48029]">
        <img src={image3} class="w-20 ml-[39%] mt-8"/>
        <h1 className="text-xl mt-4">Graphic Design</h1>
    </div>


</div>
  );
}
export default ECommerceResponsiveCards;
