import React from "react";
import img2 from "../img/Home-Banner.webp";


function Section1() {
  return (
    <div className="bg-[#F48029] max-auto pb-28">
      <div className="flex max-auto font-poppins text-white px-6 xs:px-7 grid lg:grid-cols-2 xs:grid-cols-1">
        <div className="pt-12 text-left lg:px-11 xs:px-0"  >
          <p className="text-xl xs:text-sm md:text-xl ">
            We are the Creative Best Digital Marketing Company
          </p>
          <p className="xs:pt-4 md:pt-8 lg:text-5xl md:text-4xl xss:text-3xl xs2:text-[30px] xs:text-lg font-bold lg:!leading-[55px] xss:!leading-[40px] xs2:!leading-[45px] xs:!leading-[30px]">
            Welcome to NaqsTech Digital Your Partner in Digital Growth
          </p>
          <br />
          <p className="text-xl xs:text-sm md:text-xl pt-2 leading-loose md:leading-[40px]">
            NaqsTech Digital is a leading digital marketing agency in California
            specializing in helping businesses achieve their goals. Our expert
            team delivers results-driven digital solutions to businesses of all
            sizes.
          </p>
          <div className="pt-12">
            <button className="py-3 px-5 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
              Get Free Consultation
            </button>
          </div>
        </div>

        <div className="lg:pr-12 xs:hidden xss:block ">
          <img className="py-12 xs:w-full" src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
