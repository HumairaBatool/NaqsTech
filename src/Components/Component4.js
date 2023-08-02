import React from 'react';
import img1 from "../img/Rectangle 66.png";
import img2 from "../img/Rectangle 67.png";
import img3 from "../img/Rectangle 68.png";
import img4 from "../img/Rectangle 56.png";

function Component4 (){
    return(
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
                  className=" relative top-[-50px] object-cover w-full h-50%"
                />
              </div>
              <div >
                <img
                  src={img2}
                  alt=""
                  className=" relative top-[-70px] pt-20 pr-20 object-cover w-full h-50%"
                />

                <img
                  src={img4}
                  alt=""
                  className="relative top-[-70px] pb-20 pr-20  pt-4 object-cover w-full h-50%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Component4;