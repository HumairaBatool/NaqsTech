import React from "react";
import rev1 from "../img/rev1.jpeg";
import rev2 from "../img/rev2.jpeg";
import rev3 from "../img/rev3.webp";
import star1 from "../img/5stars.webp";

function GDReviews() {
  return (
    <div className="bg-[#FAFAFA] mt-8 pb-16 md:px-0 xs:px-7">
      {/* Reviews Section */}
      <div className="md:text-[35px] xs:text-[28px] text-[#363636] font-[700] lg:p-14 md:p-10  lg:ml-[80px] md:ml-0 md:py-0 xs:py-4 md:text-left xs:text-center">
        Reviews
      </div>
      <div className="grid gird-cols-1 gap-6 xl:mx-[130px] md:mx-7 ">
        {/* First Review */}
        <div className="bg-white xs:text-[15px] text-[#737373]  rounded-md hover:shadow-2xl xs:py-[30px] xs:px-[10px] lg:p-8 md:p-4">
          {/* Review Text */}
          <p>
            Working with NaqsTech Digital for my graphic design requirements was
            a fantastic experience. They delivered the finished designs on time
            and communicated well throughout the process.
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
        <div className="bg-[#F48029]  xs:text-[15px] rounded-md hover:shadow-2xl  xs:py-[30px] xs:px-[10px] text-white">
          {/* Review Text */}
          <p>
            The graphic design services offered by NaqsTech Digital have amazed
            me. They have a competent group of designers who carefully
            considered my requests before producing designs that surpassed my
            expectations.
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
        {/* 3rd Review */}
        <div className="bg-white  xs:text-[15px] text-[#737373]  rounded-md hover:shadow-2xl  xs:py-[30px] xs:px-[10px] lg:p-8 md:p-4">
          {/* Review Text */}
          <p>
            I have nothing but praise for the graphic design services provided
            by NaqsTech Digital. They showed high professionalism,
            inventiveness, and knowledge from the first consultation to the last
            delivery. I would not think twice about working with NaqsTech
            Digital again.
          </p>
          <div className="flex justify-start mt-6">
            <div className="w-1/20">
              {/* Content for the left column */}
              <img className="mt-4" src={rev3} alt="Reviewer 1" />
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
      </div>
    </div>
  );
}
export default GDReviews;
