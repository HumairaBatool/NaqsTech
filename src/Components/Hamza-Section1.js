import React, { Component } from "react";

function HamzaSection1(){

    const mystyle = {
      fontFamily: "Poppins, sans-serif",
    };

    return (
      <div className="grid grid-cols-2 xs:grid-cols-1 lg:grid-cols-2 gap-4 -mt-10 mb-28">
        {/* First Column */}
        <div className="ml-14">
            <div className="grid lg:grid-cols-6 xs:grid-cols-2 ">
                <div className="w-24 h-0.5 my-4 lg:ml-5 xs:ml-0 lg:mr-12 xs:mr-0 bg-[#363636]"></div>
                <div  style={mystyle} className="line-8 font-simple text-2xl xs:text-1xl lg:text-2xl mx-8 xs:mx-0 lg:mx-8 col-span-5 mb-4 text-gray-800">
                INNOVATION & EVALUATION
                </div>
            </div>
            <div style={mystyle} className="lg:text-6xl xs:text-4xl font-bold text-gray-800 leading-[80px] !leading-[80px] leading-[60px] xs:!leading-[40px]">
                Start your Product
            </div>
            <div style={mystyle} className="lg:text-6xl xs:text-4xl text-gray-800 leading-[80px] !leading-[80px] leading-[60px] xs:!leading-[60px]">
                idea on the right foot
            </div>
        </div>

        {/* Second Column */}
        <div style={mystyle} className="text-2xl line-8 ml-14 mr-20 lg:mt-10 xs:mt-0 text-gray-800 leading-[1.5] !leading-[1.5] text-[25px] !text-[25px]">
          We love unlocking business ambitions. We create magic around client
          goals. Embrace the force that drives results and work with our
          creative digital marketing agency.
        </div>
      </div>
    );
  }

export default HamzaSection1;