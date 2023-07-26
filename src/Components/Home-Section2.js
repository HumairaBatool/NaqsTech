import React from "react";
import img1 from "../img/Group-1.png";
import img2 from "../img/Vector.png";
import img3 from "../img/Group.png";
import img4 from "../img/Group 15.png";

function Section2() {
  return (
    <div className="container flex bg-[#F48029] mx-auto p-12">
      <div className="grid grid-cols-5 py-12">
        <div className="col-span-2 mx-6 py-20">
          <div className="py-20">
            <div className="grid grid-cols-3">
              <div className="overflow-hidden my-5 mr-5">
                <img src={img1} alt=""></img>
              </div>
              <div className="w-0.5 h-full bg-white ml-12 overflow-hidden "></div>
              <div className="overflow-hidden">
                <img  src={img2} alt=""></img>
              </div>
            </div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="grid grid-cols-3">
              <div className="overflow-hidden my-5 mr-5">
                <img src={img3} alt=""></img>
              </div>
              <div className="w-0.5 h-full bg-white ml-12 overflow-hidden "></div>
              <div className="overflow-hidden my-5">
                <img src={img4} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 ml-6">
          <div className="grid grid-cols-6 ">
            <div className="w-70% h-0.5 bg-white my-4 ml-5 "></div>
            <div className="text-white font-simple text-2xl mx-8 col-span-5">
              Our Partners
            </div>
          </div>
          <div className="pt-5  ml-5 text-white  text-6xl font-bold">
            Enduring Partnerships,
          </div>
          <div className="font-extralight text-6xl text-white ml-5 pt-6 ">
            Building a legacy
            <div className="font-extralight text-6xl text-white pt-4 ">
              together
            </div>
          </div>
          <div className="ml-5  text-white text-3xl py-12">
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
