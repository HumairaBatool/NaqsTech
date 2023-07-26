import React from "react";
import img1 from "../img/Rectangle 66.png";
import img2 from "../img/Rectangle 67.png";
import img3 from "../img/Rectangle 68.png";
import img4 from "../img/Rectangle 56.png";
import img5 from "../img/Rectangle 56 (1).png";
import img6 from "../img/Rectangle 56 (2).png";

function Section3() {
  return (
    <div className="bg-white  max-auto pt-20">
      <div className="bg-[#F48029] max-auto">
        <div className="flex grid grid-cols-7 text-left max-auto text-white">
          <div className="col-span-4 text-left py-20 px-16">
            <p className="pt-20 pb-6 text-4xl font-bold">
              Explore the Mastery Of Our Portfolio
            </p>
            <p className="text-2xl pt-2 ">
              Trust our proven portfolio, we create impact and one investment at
              a time.
            </p>
            <div className="py-5">
              <button className="py-3 px-5 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
                Learn more
              </button>
            </div>
          </div>

          <div className="col-span-3">
            <div className="w-full h-40 grid grid-cols-2 gap-4">
              <div>
                <img
                  src={img1}
                  alt=""
                  className=" relative top-[-45px] pb-6 object-cover w-full h-50%"
                />
                <img
                  src={img3}
                  alt=""
                  className=" relative top-[-45px] object-cover w-full h-50%"
                />
              </div>
              <div>
                <img
                  src={img2}
                  alt=""
                  className=" pt-20 pr-20 object-cover w-full h-50%"
                />

                <img
                  src={img4}
                  alt=""
                  className="pb-20 pr-20  pt-4 object-cover w-full h-50%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-auto pt-20">
        <div className=" pt-20 text-center text-4xl font-extrabold weight-2">
          Latest News
        </div>
        <div className="p-20 gap-4 grid grid-cols-3">
          <div className="mx-auto shadow-lg  overflow-hidden rounded ">
            <img src={img4}></img>
            <h3 className="p-6 text-2xl font-extrabold">
              5 Key Elements of Effective WordPress Web Development Services in
              California
            </h3>
            <p className="px-6">
              In the dynamic digital landscape of California, effective web
              development services in California are crucial for businesses to
              establish a solid online …
            </p>
          </div>
          <div className="mx-auto shadow-lg  overflow-hidden rounded ">
            <img src={img5}></img>
            <h3 class="p-6 text-2xl font-extrabold">
              Why is Google Analytics Essential to SEO Services in California
            </h3>
            <p className="px-6">
              In the competitive online landscape, search engine optimization
              (SEO) plays a crucial role in driving organic traffic and
              improving the visibility of …
            </p>
          </div>
          <div className="mx-auto shadow-lg  overflow-hidden rounded ">
            <img src={img6}></img>
            <h3 className="p-6 text-2xl font-extrabold">
              How a Digital Marketing Agency in California Can Help Your SEO
              Efforts
            </h3>
            <p className="px-6">
              In today’s digital world, organizations must have a strong online
              presence in order to live and succeed. Search Engine Optimization
              (SEO) is …
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section3;
