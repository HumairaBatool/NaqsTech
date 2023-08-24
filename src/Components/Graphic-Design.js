import React from "react";
import FaqsGetInTouch from "./HomeFaqsGetInTouch";
import Slider from "./Slider";
import LatestNews from "./Latest-News";
import HideShowText from "./Hidden-Text-GD";
import Cards from "./GraphicDesignCards";
import img1 from "../img/Rectangle 72.png";
import img2 from "../img/Group 1000001863.png";
import img7 from "../img/Rectangle 73.png";
import img8 from "../img/Rectangle 74.png";
//image for component4
import img9 from "../img/Our-Portfolio-1-736x1024.webp";
import GDReviews from "./GD-Reviews";

function Component4() {
  return (
    <div className="bg-white  max-auto pt-[20px] ">
      <div className="bg-[#F48029] max-auto xs:px-[30px] lg:px-[80px] ">
        <div className=" grid lg:grid-cols-7 text-left max-auto text-white">
          <div className="col-span-4 text-left lg:self-center xl:w-[90%]">
            <p className="xs:pb-[20px] xs:text-center  lg:text-left xs:text-[28px] xs:font-[700] xs:leading-[39.2px] md:text-[35px] md:leading-[49px] lg:text-[45px] lg:leading-[70px] text-5xl font-[800] leading-normal">
              Discover our Dynamic Portfolio
            </p>
            <p className="xs:pb-[20px]  xs:text-center md:text-left  xs:text-[14px] xs:leading-[25px] md:text-[20px] md:leading-[35px] lg:text-[25px] text-2xl ">
              Trust our proven portfolio, we create impact and one investment at
              a time.
            </p>
            <div className="xs:pb-[25px] relative flex justify-center md:justify-start">
              <button className="py-[12px] px-[24px]  text-[12px] rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
                Learn more
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 xs:col-span-4 lg:-mb-36 xs:mb-0 lg:px-0 xs:px-6">
            <div className="w-full gap-4 xs:pb-[40px]">
              <div>
                <img
                  src={img9}
                  alt=""
                  className=" relative lg:top-[-45px] xs:top-0 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GraphicDesign() {
  return (
    <div>
      {/*First Section*/}
      <div className="mx-auto ">
        <div className=" bg-[#F48029] max-w-full container xs:px-[30px] xl:px-[80px] xs:pb-[70px]  xs:pt-[10px] md:pt-[55px] xl:pt-[60px]">
          <div className=" grid lg:grid-cols-2 md:grid-cols-1 content-center items-center ">
            {/* First Column */}
            <div className="text-left text-white">
              <h1 className="xs:pb-[20px] xs:text-[17px] xs3:text-[28px] md:text-[35px]  lg:text-[40px] xs:font-[700] xs3:leading-[39.2px] xs3:font-[700] lg:leading-[44px] md:leading-[49px] sm:leading-[39.2px]  xs:leading-[28px]">
                Top-Rated Graphic Design Services in California
              </h1>
              <h1 className=" xs:pb-[10px] my-3 xs:font-[400]  xs:text-[14px] md:text-[20px] md:leading-[40px] xs:leading-[25px]">
                Tailored To Meet Your Specific Needs
              </h1>

              <button className=" my-3 bg-[#363636]  rounded-md px-[24px] py-[12px] align-left hover:bg-white hover:text-black">
                Let's Get Connected
              </button>
              <div className="xs:pb-[10px]"></div>
            </div>

            {/* Second Column */}
            <div className=" overflow-hidden md:py-[20px] lg:py-[0px] flex items-center content-center">
              <img
                className="hidden md:block lg:mb-12 xs:w-full"
                src={img2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/*Cards section*/}
      <div className="xs:pb-[50px]">
        <Cards />
      </div>
      {/*2nd Section */}
      <div className=" max-auto bg-[#FAFAFA] xs:px-[30px] xl:px-[50px] xs:pt-[50px] xl:pt-[10px] ">
        <div className=" grid lg:grid-cols-3 xs:grid-cols-1 tracking-tight md:grid-cols-1 ">
          <div className="xl:pr-[80px] col-span-2  text-black container relative  xs:leading-[24px] justify-center content-center">
            <div className="text-[#333] text-center relative container xs:text-[21px] xs:leading-[28px] xs3:text-[28px] xs3:leading-[39.2px] md:text-[32px] md:leading-[38px] text-4xl xs:font-[700]">
              Your Go-To Graphic Design Agency in California
            </div>
            <p className="text-[#333] xs:pb-[37px] xs:pt-[20px] text-2xl leading-10 xs:text-[14px] xs:leading-[21px] md:text-[20px] md:leading-[35px] ">
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

          <div className=" bg-[#FAFAFA] relative  flex justify-center content-center">
            <img
              src={img1}
              alt=""
              className="  lg:pl-[15px] xl:pl-[30px]  lg:absolute inset-0 m-auto xl:pb-[20px] xl:pt-[10px]"
              style={{ width: "100%", height: "", maxHeight: "100%" }}
            />
          </div>
        </div>
      </div>
      <Slider></Slider>
      {/*3rd Section */}
      <div className="text-center bg-[#F48029] xs:px-[30px] lg:pb-[60px] xs:py-[50px]">
        <p className=" xs:text-[19px] xs:font-[700] xs:leading-[28px] xs:mb-[20px] xs3:text-[28px] xs3:leading-[39.2px] md:text-[40px] md:leading-[56px]  font-[800]">
          Shape your Visual Story
        </p>
        <br />
        <div className=" container xl:max-w-[40%] lg:max-w-[45%]  md:max-w-[55%] mx-auto">
          <p className=" xs:text-[14px] md:text-[20px]  xs:leading-[25px]  xs:mb-[14.4px] md:leading-[35px]  font-[400]">
            Visualize your identity and captivate your target audience with
            compelling designs.
          </p>
        </div>
        <div className="xs:mt-[50px] lg:mt-[20px]">
          <button className="py-[12px] px-[24px] text-[14px] rounded bg-[#363636] hover:bg-white hover:text-black text-white">
            Let's Get Connected
          </button>
        </div>
      </div>
      {/*4th Section */}
      <div className="max-auto grid lg:grid-cols-3 xs:grid-cols-1 bg-white xs:px-[30px] lg:px-[60px] xs:pt-[50px]">
        <div className="col-span-2 items-center flex ">
          <div className="text-justify text-[#363636] ">
            <div className=" xs:pb-[20px] xs:text-[17px] xs:font-[600] xs:leading-[28px] xs3:text-[28px] xs3:font-[700] xs3:leading-[39.2px] md:text-[35px] md:leading-[49px] lg:text-[40px] lg:leading-[70px] lg:text-left xs:text-center text-4xl font-[800] leading-[1.4rem] ">
              Choose Professional Graphic Design Services for an Unforgettable
              Impact
            </div>
            <p className="xs:text-[14px] xs:leading-[21px] xs:pb-[37px] md:pb-[40px] md:text-[20px] md:leading-[35px]">
              Don’t settle for the ordinary and unlock the potential of your
              company. Choose us today and transform your brand into a visual
              masterpiece that leaves a lasting impression. With our keen eye
              for aesthetics, unrivaled creativity, and meticulous attention to
              detail, we craft designs that captivate and engage your audience.
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={img7}
            alt=""
            className="xs:w-full xs:px-[16px]  sm:px-[40px] lg:px-[20px] xs:mb-[20px]"
          />
          <img
            src={img8}
            alt=""
            className=" xs:w-full xs:px-[16px] sm:px-[40px] lg:px-[20px] xs:mt-[20px]"
          ></img>
        </div>
      </div>
      {/*5th Section */}
      <div className="xs:py-[50px] xs:px-[30px] xl:px-[120px] ">
        <div className="xl:px-[50px] xs:pb-[44.4px] xs:text-[17px] xs:font-[600] xs:leading-[28px] text-[#363636] xs3:text-[28px] xs3:font-[700] xs3:leading-[39.2px]  md:text-[35px] md:leading-[49px]  lg:text-[40px] lg:leading-[70px]  text-4xl font-extrabold leading-relaxed text-center ">
          Our Creative Process of Graphic Design Company California
        </div>

        <div className=" xs:pb-[20px] ">
          <div className="w-full h-px bg-[#F48029] my-4 "></div>
        </div>
        <HideShowText></HideShowText>
      </div>
      <FaqsGetInTouch />
      <GDReviews></GDReviews>{" "}
      <div>
        <Component4></Component4>
      </div>
      <LatestNews></LatestNews>
    </div>
  );
}

export default GraphicDesign;
