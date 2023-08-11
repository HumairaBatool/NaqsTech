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
        <div className="flex grid lg:grid-cols-7 text-left max-auto text-white">
          <div className="col-span-4 text-left lg:self-center sm:px-10 xs:px-6">
            <p className="lg:text-5xl md:text-4xl xss:text-3xl xs:text-2xl font-bold lg:pt-20 pb-6 ">
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

          <div className="col-span-3 lg:-mb-36 xs:mb-0">
            <div className="w-full gap-4">
              <div>
                <img
                  src={img1}
                  alt=""
                  className=" relative lg:top-[-45px] xs:top-0 lg:w-3/4 xs:w-full"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section3;
