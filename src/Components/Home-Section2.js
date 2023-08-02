import React from "react";
import img1 from "../img/home1.webp";
import img2 from "../img/home2.webp";
import img3 from "../img/home3.webp";
import img4 from "../img/home4.webp";

function Section2() {
  return (
    <div className=" bg-[#F48029] py-12">
      <div className="grid lg:grid-cols-5 sm:grid-cols-2  py-12">
        <div className=" col-span-2 mx-6 pl-20  lg:py-20 sm:py-0">
          <div className="py-20">
            <div className="flex grid sm:grid-cols-3 ">
              <div className="overflow-hidden my-4">
                <img src={img1} alt=""></img>
              </div>
              <div className="w-0.5 h-full bg-white ml-16 overflow-hidden "></div>
              <div className="overflow-hidden -ml-12">
                <img  src={img2} alt=""></img>
              </div>
            </div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="flex grid sm:grid-cols-3">
              <div className="overflow-hidden mt-2 ">
                <img src={img3} alt=""></img>
              </div>
              <div className="w-0.5 h-full bg-white ml-16 overflow-hidden "></div>
              <div className="overflow-hidden py-2 -pl-2">
                <img src={img4} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ml-6">
          <div className="grid grid-cols-6 ">
            <div className="w-70% h-0.5 bg-white my-4 ml-5 "></div>
            <div className="text-white font-simple text-2xl mx-8 col-span-5">
              Our Clients
            </div>
          </div>
          <div className="pt-5  ml-5 text-white  lg:text-6xl sm:text-4xl font-bold ">
            Enduring Partnerships,
          </div>
          <div className="lg:font-medium  lg:mr-20 lg:text-6xl sm:text-4xl text-white ml-5 pt-6 ">
            Building a legacy together
          </div>
          <div className="ml-5  text-white lg:text-3xl md:text-2xl py-12">
            Fortunate to collaborate with an extensive array of customers, Our
            professional digital marketing company has helped businesses across
            industries thrive online.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
