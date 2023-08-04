import React from "react";
import rev1 from '../img/rev1.jpeg';
import rev2 from '../img/rev2.jpeg';
import rev3 from '../img/rev3.webp';
import star1 from '../img/5stars.webp';
function Reviews() {
  return (
    <div className="bg-[#FAFAFA] mt-2 pb-16">
      {/* Reviews Section */}
      <div className="text-[35px] font-[700] p-14 ml-[80px]">Reviews</div>
      <div className="grid lg:grid-cols-2 sm:gird-cols-1 gap-6 ml-32 mr-32">
        {/* First Review */}
        <div className="bg-white text-[18px] text-[#737373]  rounded-md hover:shadow-2xl p-8">
          {/* Review Text */}
          <p>
            I am incredibly impressed with the SEO services provided by NaqsTech
            Digital. Their attention to detail and dedication to achieving
            results sets them apart from other agencies. It is highly
            recommended!
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
        <div className="bg-white text-[18px] text-[#737373]  rounded-md hover:shadow-2xl p-8">
          {/* Review Text */}
          <p>
            NaqsTech Digital's SEO portfolio speaks volumes about its expertise
            in the field. The before-and-after examples demonstrate their
            ability to optimize websites and drive targeted traffic. I would
            love to engage their services.
          </p>
          <div className="flex justify-start mt-6">
            <div className="w-1/20">
              {/* Content for the left column */}
              <img className="mt-4" src={rev3} alt="Reviewer 1" />
            </div>
            <div className="w-1/16 mt-5 ml-5">
              {/* Content for the right column */}
              <h1 className="ml-1 text-[#15063F] font-[500] text-[20px]">
                Roy. K
              </h1>
              <img className="w-28" src={star1} alt="5 Stars" />
            </div>
          </div>
        </div>
        {/* 3rd Review */}
        <div className="bg-[#F48029] text-[22px] rounded-md hover:shadow-2xl p-8 text-white">
          {/* Review Text */}
          <p>
            I recently engaged NaqsTech Digital for SEO services, and their
            professionalism reflects their outstanding work. I am thrilled with
            their expertise and highly recommend their services.
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
        {/* 4th Review */}
        <div className="bg-[#F48029] text-[22px] rounded-md hover:shadow-2xl p-8 text-white">
          {/* Review Text */}
          <p>
            Amazing SEO service Agency. Highly satisfied with their team. They
            made my website rank best among my competitors. Thank you for this
            effort.
          </p>
          <div className="flex justify-start mt-12">
            <div className="w-1/20">
              {/* Content for the left column */}
              <img className="mt-4" src={rev2} alt="Reviewer 2" />
            </div>
            <div className="w-1/16 mt-5 ml-5">
              {/* Content for the right column */}
              <h1 className="ml-1 text-white font-[500] text-[20px]">
                Thomas. L
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