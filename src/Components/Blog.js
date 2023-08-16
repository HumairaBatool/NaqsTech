import React, { Component } from "react";
import image from "../img/bannerimg.webp";
import BlogPosts from "./BlogPosts";

class Blog extends Component {
  render() {
    const mystyle = {
      fontFamily: "Poppins, sans-serif",
      color: "#363636",
    };
    return (
      <div style={mystyle}>
        <div className="xs:h-0  md:h-12 bg-[#F48029]"></div>
        <div className="md:pb-28 xs:pb-20 flex-col relative  mx-auto bg-[#F48029] grid lg:grid-cols-2 xs:grid-cols-1">
          {/* First Column */}
          <div className=" mt-6 lg:ml-20 xs:ml-7 text-white">
            <h1 className="md:text-[22px] xs:text-[16px]">Our Latest News</h1>
            <h1 className="font-bold mt-6  lg:text-5xl md:text-4xl xss:text-3xl xs:text-lg lg:!leading-[55px] xss:!leading-[40px] xs:!leading-[30px]">
              Blogs
            </h1>
            <p className="md:text-[25px] xs:text-[16px] leading-10 mt-6">
              We deliver results-driven digital solutions to businesses of all
              sizes.
            </p>
            <button className="mt-8 bg-[#363636] text-[18px] p-2 w-60 rounded-md h-12 align-middle hover:bg-white hover:text-black">
              Get Free Consultation
            </button>
          </div>

          {/* Second Column */}
          <div>
            <img
              className="flex-col  mt-8 xs:px-10  flex justify-center xs:w-full  "
              src={image}
              alt="Banner"
            />
          </div>
        </div>

        {/* Section 2 */}
        <BlogPosts></BlogPosts>
      </div>
    );
  }
}

export default Blog;
