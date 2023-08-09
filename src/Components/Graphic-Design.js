import React from "react";
import FaqsGetInTouch from "./FaqsGetInTouch";
import Slider from "./Slider";
import LatestNews from "./Latest-News";
import HideShowText from "./Hidden-Text-GD";
import Cards from "./GraphicDesignCards";
import Reviews from './Reviews';
import img1 from "../img/Rectangle 72.png";
import img2 from "../img/Group 1000001863.png";
import img7 from "../img/Rectangle 73.png";
import img8 from "../img/Rectangle 74.png";
//impages for component4
import img9 from "../img/Our-Portfolio-1-736x1024.webp";

function Component4() {
  return (
    <div className="bg-[#F48029] max-auto ">
      <div className="flex grid grid-cols-7 text-left max-auto text-white">
        <div className="col-span-4 text-left py-20 px-16">
          <p className="pr-20 pt-20 pb-6 text-5xl font-extrabold leading-normal">
            Discover our Dynamic Portfolio
          </p>
          <p className="text-2xl pt-2 ">
            Trust our proven portfolio, we create impact and one investment at a
            time.
          </p>
          <div className="py-5">
            <button className="py-3 px-7 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
              Learn more
            </button>
          </div>
        </div>

        <div className="col-span-3 ">
          <div>
            <img
              src={img9}
              alt=""
              className="relative top-[-70px] object-cover w-150% h-125%"
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
      <div className="bg-[#F48029] max-auto pb-20 ">
        {/*First Section*/}
        <div className="flex max-auto text-white p-20 grid grid-cols-2">
          <div className="text-left ">
            <p className="pt-24 text-4xl font-extrabold leading-10">
              Top-Rated Graphic Design Services in California{" "}
            </p>
            <br />
            <p className="text-2xl leading-loose">
              Tailored To Meet Your Specific Needs
            </p>
            <div className="py-6">
              <button className="py-3 px-5 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
                Let's Get Connected
              </button>
            </div>
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      {/*Cards section*/}
      <div>
        <Cards />
      </div>
      <div className="flex max-auto grid grid-cols-3 bg-white pt-20 ">
        <div className="bg-[#EDEDED] col-span-2">
          <div className=" text-left  text-black pl-12 pr-20 ">
            <div className="text-4xl text-center text-black font-bold pr-2">
              Your Go-To Graphic Design Agency in California
            </div>
            <p className="pt-5 text-2xl leading-10">
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
        </div>
        <div className="pr-12 pt-4 bg-[#EDEDED]">
          <img src={img1} alt="" />
        </div>
      </div>


<Slider></Slider>

      <div className="text-center bg-[#F48029] lg:px-40 sm:px-5">
        <p className="pt-24 pb-6 text-5xl font-extrabold px-40">
          Shape your Visual Story
        </p>
        <br />
        <p className="text-2xl leading-relaxed px-60">
          Visualize your identity and captivate your target audience with
          compelling designs.
        </p>
        <div className="pt-5 pb-20">
          <button className="py-3 px-5 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
            Let's Get Connected
          </button>
        </div>
      </div>
      <div className="flex max-auto grid grid-cols-3 bg-white pt-20 ">
        <div className="col-span-2">
          <div className=" text-justify  text-black pl-16 pr-20 ">
            <div className="text-4xl  text-black font-extrabold leading-relaxed space-x-0 pr-2">
              Choose Professional Graphic Design Services for an Unforgettable
              Impact
            </div>
            <p className="pt-5 text-2xl leading-10">
              Don’t settle for the ordinary and unlock the potential of your
              company. Choose us today and transform your brand into a visual
              masterpiece that leaves a lasting impression. With our keen eye
              for aesthetics, unrivaled creativity, and meticulous attention to
              detail, we craft designs that captivate and engage your audience.
            </p>
          </div>
        </div>
        <div className="relative left-[-55px]">
          <img src={img7} alt="" />
          <img src={img8} alt="" className="pt-5"></img>
        </div>
      </div>
      <div>
        <div className="text-5xl text-black font-extrabold leading-relaxed pl-40 pr-40 text-center pt-60">
          Our Creative Process of Graphic Design Company California
        </div>

        <div className="px-40">
          <div className="w-full h-px bg-[#F48029] my-4 "></div>
        </div>
        <HideShowText></HideShowText>
      </div>
      <FaqsGetInTouch />
      <Reviews></Reviews>
      <div className="pt-20"> <Component4></Component4></div>
      <LatestNews></LatestNews>
      </div>
  );
}

export default GraphicDesign;
