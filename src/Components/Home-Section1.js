import React from "react";
import img2 from "../img/Group 1000001863.png";


function Section1() {
  return (
    <div className="bg-[#F48029] max-auto pb-32">
      <div className="flex max-auto font-poppins text-white px-6">
        <div className="basis-[50%] text-left px-12">
          <p className="pt-12 text-xl ">
            We are the Creative Best Digital Marketing Company
          </p>
          <p className="pt-8 text-4xl font-bold leading-10">
            Welcome to NaqsTech Digital Your Partner in Digital Growth
          </p>
          <br />
          <p className="text-xl pt-2 leading-loose">
            NaqsTech Digital is a leading digital marketing agency in California
            specializing in helping businesses achieve their goals. Our expert
            team delivers results-driven digital solutions to businesses of all
            sizes.
          </p>
          <div className="py-12">
            <button className="py-3 px-5 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
              Get Free Consultation
            </button>
          </div>
        </div>

        <div className="basis-[50%]">
          <img className="py-12" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
