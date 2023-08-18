import React from "react";
import FaqsGetInTouch from "./HomeFaqsGetInTouch";
import Slider from "./Slider";
import LatestNews from "./Latest-News";
import HideShowText from "./Hidden-Text-GD";
import Cards from "./GraphicDesignCards";
import Reviews from "./Reviews";
import img1 from "../img/Rectangle 72.png";
import img2 from "../img/Group 1000001863.png";
import img7 from "../img/Rectangle 73.png";
import img8 from "../img/Rectangle 74.png";
//image for component4
import img9 from "../img/Our-Portfolio-1-736x1024.webp";

function Component4() {
  return (
    <div className="bg-[#F48029] max-auto ">
      <div className=" grid lg:grid-cols-3 xs:grid-cols-1 max-auto text-white">
        <div className="col-span-2 text-left lg:py-20 xs:py-2 lg:px-16 xs:px-[10px]">
          <p className="xs:pt-[30px] xs:text-center  lg:text-left xs:px-[10px] xs3:px-[30px] xs:text-[28px] xs:font-[700] xs:leading-[39.2px] md:text-[35px] md:leading-[49px] lg:text-[45px] lg:leading-[70px] lg:pr-20 lg:pt-20 lg:pb-6 text-5xl font-extrabold leading-normal">
            Discover our Dynamic Portfolio
          </p>
          <p className="xs:text-center  lg:text-left xs:px-[30px] xs:text-[14px] xs:leading-[25px] md:text-[20px] md:leading-[35px] lg:text-[25px] text-2xl pt-5 ">
            Trust our proven portfolio, we create impact and one investment at a
            time.
          </p>
          <div className="py-5 relative xs:justify-center xs:flex xs:content-center lg:flex-none">
            <button className="py-3 px-7 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
              Learn more
            </button>
          </div>
        </div>

        <div>
          <div>
            <img
              src={img9}
              alt=""
              className=" lg:px-0 xs:px-[20px] lg:pb-0 xs:pb-[40px] relative lg:top-[-70px]  object-cover lg:w-150% lg:h-125% xs:w-full xs:h-full content-center justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function GraphicDesign() {
  return (
    <div>
      <div className="mx-auto ">
        {/*First Section*/}
        <div className=" bg-[#F48029] max-w-full container lg:pb-[50px] xs:pb-[8rem] md:pt-[40px] xs:pt-2">
          <div className=" grid lg:grid-cols-2 md:grid-cols-1 lg:pl-14 lg:pr-28 ">
            {/* First Column */}
            <div className="text-left md:pb-20 lg:pb-28 lg:mt-4 text-white xs:mx-8 ">
              <h1 className="xs:text-[17px] xs3:text-[28px] md:text-[35px]  lg:text-[40px] xs:font-[700] lg:font-[700] lg:leading-[44px] md:leading-[49px] sm:leading-[39.2px]  xs:leading-[28px]">
                Top-Rated Graphic Design Services in California
              </h1>
              <h1 className="my-3 xs:font-[400]  xs:text-[14px] md:text-[20px] md:leading-[40px] xs:leading-[25px]">
                Tailored To Meet Your Specific Needs
              </h1>
              <button className="my-3 bg-[#363636]  rounded-md px-[24px] py-[12px] align-left hover:bg-white hover:text-black">
                Let's Get Connected
              </button>
            </div>

            {/* Second Column */}
            <div className=" overflow-hidden lg:pt-10 lg:px-0 xs:px-10">
              <img className="lg:mb-12 xs:w-full" src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/*Cards section*/}

      <div>
        <Cards />
      </div>

      {/*2nd Section */}

      <div className=" max-auto  bg-white pt-20 ">
        <div className="bg-[#EDEDED] grid lg:grid-cols-3 xs:grid-cols-1 tracking-tight md:grid-cols-1 lg:px-0 xs:px-4">

          <div className="col-span-2  text-black container relative lg:px-14  xs:leading-[24px] xs:pt-[50px] lg:pt-[0px] justify-center content-center">
            <div className=" text-center relative container lg:px-[50px] md:px-[50px] xs3:px-[30px] xs5:px-[30px] xs7:px-[100px] xs1:px-[10px] xs:px-[20px] xs:text-[21px] xs:leading-[28px] xs3:text-[28px] xs3:leading-[39.2px] md:text-[32px] md:leading-[38px] text-4xl text-black font-bold pr-2">
              Your Go-To Graphic Design Agency in California
            </div>
            <p className="lg:pr-28 text-left pt-5 text-2xl leading-10 xs:text-[14px] xs:leading-[21px] md:text-[20px] md:leading-[35px] ">
              We are specialized in crafting professionally designed visual
              assets that make a lasting impression. From eye-catching logos to
              engaging brochures, dynamic flyers, commanding billboards,
              polished stationery, portable standing retractable banners and a
              range of print designs, we offer a comprehensive solution for
              promoting your business. We provide professional graphic designing
              services in California in an affordable and hassle-free way to
              elevate your brand presence on popular social media platforms like
              Facebook and Instagram.
            </p>
          </div>

            <div className=" bg-[#EDEDED]  relative  flex justify-center content-center">
            <img
            src={img1}
            alt=""
            className="lg:py-0 xs:py-10  lg:pr-14 max-w-full max-h-full lg:absolute inset-0 m-auto"
            style={{ width: '100%', height: 'auto', maxHeight: '100%' }}
          />
            </div>
        </div>
      </div>

      <Slider></Slider>
      {/*3rd Section */}

      <div className="text-center bg-[#F48029] lg:px-40 sm:px-5">
        <p className="xs:pt-[50px] lg:px-[100px] xs:px-[8px] xs:text-[19px] xs:font-[700] xs:leading-[28px] xs3:text-[28px] xs3:leading-[39.2px] md:text-[40px] md:leading-[56px]  lg:pt-24 lg:pb-6 text-5xl font-extrabold">
          Shape your Visual Story
        </p>
        <br />
        <p className="xs:text-[14px] xs:leading-[25px]  text-2xl leading-relaxed md:px-[200px] xs:px-[45px] font-normal lg:px-60">
          Visualize your identity and captivate your target audience with
          compelling designs.
        </p>
        <div className="pt-5 pb-20">
          <button className="py-3 px-5 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
            Let's Get Connected
          </button>
        </div>
      </div>

      {/*4th Section */}
      <div className="max-auto grid lg:grid-cols-3 xs:grid-cols-1 bg-white md:pt-20 xs:pt-10">
        <div className="col-span-2">
          <div className="text-justify  text-black lg:pl-16 lg:pr-20 xs:px-4 lg:px-0">
            <div className="xs:text-[17px] xs:font-[600] xs:leading-[28px] xs3:text-[28px] xs3:font-[700] xs3:leading-[39.2px] md:text-[35px] md:leading-[49px] lg:text-[40px] lg:leading-[70px] lg:text-left xs:text-center text-4xl  text-black font-extrabold leading-relaxed space-x-0 pr-2">
              Choose Professional Graphic Design Services for an Unforgettable
              Impact
            </div>
            <p className="xs:text-[14px] xs:leading-[21px] xs:pb-[37px] md:text-[20px] md:leading-[35px] md:pb-[40px]  pt-5 text-2xl leading-10">
              Don’t settle for the ordinary and unlock the potential of your
              company. Choose us today and transform your brand into a visual
              masterpiece that leaves a lasting impression. With our keen eye
              for aesthetics, unrivaled creativity, and meticulous attention to
              detail, we craft designs that captivate and engage your audience.
            </p>
          </div>
        </div>
        <div className="relative lg:left-[-55px] ">
          <img src={img7} alt="" className="xs:w-full px-4" />
          <img src={img8} alt="" className="pt-5 xs:w-full px-4"></img>
        </div>
      </div>
      {/*5th Section */}

      <div className="xs:py-[50px] ">

        <div className="xs:text-[17px] xs:font-[600] xs:leading-[28px] text-black xs3:text-[28px] xs3:font-[700] xs3:leading-[39.2px]  md:text-[35px] md:leading-[49px]  lg:text-[40px] lg:leading-[70px]  text-4xl font-extrabold leading-relaxed lg:px-40 xs:px-[50px] text-center lg:pt-60 ">
          Our Creative Process of Graphic Design Company California
        </div>

        <div className="px-40">
          <div className="w-full h-px bg-[#F48029] my-4 "></div>
        </div>
        <HideShowText></HideShowText>
      </div>
      <FaqsGetInTouch />
      <Reviews></Reviews>
      <div className="pt-20">
        <Component4></Component4>
      </div>
      <LatestNews></LatestNews>
    </div>
  );
}

export default GraphicDesign;
