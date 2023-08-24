import React from "react";
import rev1 from "../img/rev1.jpeg";
import rev2 from "../img/rev2.jpeg";
import star1 from "../img/5stars.webp";

function Reviews() {
  return (
    <div className="bg-[#FAFAFA] mt-8 pb-16 md:px-0 xs:px-7">
      {/* Reviews Section */}
      <div className="md:text-[35px] xs:text-[28px] text-[#363636] font-[700] lg:p-14 md:p-10  lg:ml-[80px] md:ml-0 md:py-0 xs:py-4 md:text-left xs:text-center">
        Reviews
      </div>
      <div className="grid gird-cols-1 gap-6 lg:mx-32 md:mx-7 ">
        {/* First Review */}
        <div className="bg-white md:text-[18px] xs:text-[14px] text-[#737373]  rounded-md hover:shadow-2xl xs: p-8 lg:p-8 md:p-4">
          {/* Review Text */}
          <p>
            I had a wonderful experience working with NaqsTech Digital. I was
            looking for the best digital marketing services in New York
            amazingly, one of my friends recommended NaqsTech Digital to me. He
            had already taken their services and was quite satisfied with the
            company. I wanted to make my website fully SEO-friendly, and they
            did the best job! Super happy with their services
          </p>
          <div className="flex justify-start mt-6">
            <div className="w-1/20">
              {/* Content for the left column */}
              <img className="mt-4" src={rev1} alt="Reviewer 1" />
            </div>
            <div className="w-1/16 mt-5 ml-5">
              {/* Content for the right column */}
              <h1 className="ml-1 text-[#15063F] font-[500] text-[20px]">
                Julia.U
              </h1>
              <img className="w-28" src={star1} alt="5 Stars" />
            </div>
          </div>
        </div>
        {/* 2nd Review */}
        <div className="bg-[#F48029] md:text-[22px] xs:text-[14px] rounded-md hover:shadow-2xl p-8 text-white">
          {/* Review Text */}
          <p>
            I highly recommend NaqsTech Digital as I was worried about my
            website's digital presence to grow my business. Thankfully, their
            team did an excellent job. I am super happy with the efforts they
            put into my project. I am going to work with them again..
          </p>
          <div className="flex justify-start mt-6">
            <div className="w-1/20">
              {/* Content for the left column */}
              <img className="mt-4" src={rev2} alt="Reviewer 2" />
            </div>
            <div className="w-1/16 mt-5 ml-5">
              {/* Content for the right column */}
              <h1 className="ml-1 text-white font-[500] text-[20px]">
                Kevin. M
              </h1>
              <img className="w-28" src={star1} alt="5 Stars" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Reviews;
