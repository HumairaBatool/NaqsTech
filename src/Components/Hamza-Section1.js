import React, { Component } from "react";

function HamzaSection1(){

    const mystyle = {
      fontFamily: "Poppins, sans-serif",
    };

    return (
      <div className="grid grid-cols-2 xs:grid-cols-1 lg:grid-cols-2 gap-4 -mt-10 mb-28 xs:-mt-20 xs:mb-10">
        {/* First Column */}
        <div className="lg:ml-14 xs:ml-6">
            <div className="grid lg:grid-cols-6 xs:grid-cols-2 ">
                <div className="md:w-28 xs:w-16 h-[1px] my-4 lg:ml-5 xs:ml-0 lg:mr-12 xs:mr-0 bg-[#363636]"></div>
                <div  style={mystyle} className="line-8 font-simple lg:text-2xl xss:text-lg xs:text-sm mx-8 xs:mx-0 lg:mx-8 col-span-5 mb-4 text-gray-800">
                INNOVATION & EVALUATION
                </div>
            </div>
            <div style={mystyle} className="lg:text-6xl md:text-4xl xss:text-3xl xs:text-lg font-bold text-gray-800 text-[#363636] lg:!leading-[80px] md:!leading-[60px] xss:!leading-[40px] xs:!leading-[30px]">
                Start your Product
            </div>
            <div style={mystyle} className="lg:text-6xl md:text-4xl xss:text-3xl xs:text-lg text-gray-800 md:!leading-[80px] md:!leading-[60px] xss:!leading-[40px] xs:!leading-[30px]">
                idea on the right foot
            </div>
        </div>

        {/* Second Column */}
        <div style={mystyle} className="lg:text-2xl xss:text-base xs:text-sm line-8 lg:ml-14 xs:ml-6 lg:mr-20 xs:mr-8 lg:mt-10 xs:mt-0 text-gray-800 leading-[1.5] !leading-[1.5] lg:!text-[25px]">
          We love unlocking business ambitions. We create magic around client
          goals. Embrace the force that drives results and work with our
          creative digital marketing agency.
        </div>
      </div>
    );
  }

export default HamzaSection1;