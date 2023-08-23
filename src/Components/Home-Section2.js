import React from "react";
import img1 from "../img/home1.webp";
import img2 from "../img/home2.webp";
import img3 from "../img/home3.webp";
import img4 from "../img/home4.webp";

function Section2() {
  return (
    <div className=" bg-[#F48029] lg:py-12 md:py-4 xs:py-0 xs2:px-7 xs:px-5">
      <div className="grid lg:grid-cols-5 xs:grid-cols-2  lg:py-12 xs:py-0">
        <div className=" col-span-2 lg:mx-6 lg:pl-20 lg:py-20">
          <div className="xs:py-10 lg:py-20">
            <div className="flex grid xs:grid-cols-3 ">
              <div className="overflow-hidden my-6 lg:ml-0 md:ml-28 xss:ml-16 lg:ml-0">
                <img src={img1} alt=""></img>
              </div>
              <div className="w-0.5 h-full bg-white xs:ml-9 xs2:ml-14 xss:ml-16 md:ml-28  xs8:ml-36 lg:ml-10 xl:ml-16 overflow-hidden "></div>
              <div className="overflow-hidden my-6 -ml-9 lg:ml-0 lg:my-4">
                <img  src={img2} alt=""></img>
              </div>
            </div>
            <div className="w-full h-0.5 bg-white"></div>
            <div className="flex grid xs:grid-cols-3">
              <div className="overflow-hidden my-6 lg:ml-0 md:ml-28 xss:ml-16 lg:ml-0">
                <img className="w-100" src={img3} alt=""></img>
              </div>
              <div className="w-0.5 h-full bg-white xs:ml-9  xs2:ml-14 xss:ml-16 md:ml-28 xs8:ml-36 lg:ml-10 xl:ml-16 overflow-hidden "></div>
              <div className="overflow-hidden my-4 -ml-9 lg:ml-0 lg:my-4">
                <img src={img4} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 sm:ml-6 xs:ml-0">
          <div className="grid grid-cols-6 xs:grid-cols-1">
            <div className="md-w-70% xs:w-14 h-0.5 bg-white my-4 ml-5 "></div>
            <div className="text-white font-simple text-2xl md:mx-8 col-span-5">
              Our Clients
            </div>
          </div>
          <div className="pt-5 text-white  lg:text-6xl md:text-4xl xs2:text-3xl xs:text-lg font-bold lg:!leading-[80px] md:!leading-[60px] xs2:!leading-[40px] xs:!leading-[30px]">
            Enduring Partnerships,
          </div>
          <div className="lg:font-medium  lg:mr-20 lg:text-6xl md:text-4xl xs2:text-3xl xs:text-sm text-white lg:pt-6 xs:pt-0 lg:!leading-[80px] md:!leading-[60px] xs2:!leading-[40px] xs:!leading-[30px]">
            Building a legacy together
          </div>
          <div className="text-white lg:text-3xl md:text-2xl lg:pb-0 md:py-8 xs:py-5 xs:pb-10">
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
