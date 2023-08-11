import React from "react";
import img1 from "../img/ecommerce1.svg";
import img2 from "../img/ecommerce2.svg";
import img3 from "../img/ecommerce3.svg";
import img4 from "../img/ecommerce4.svg";
import img5 from "../img/ecommerce5.svg";
import img6 from "../img/ecommerce6.svg";
import img7 from "../img/ecommerce7.svg";
import ECommerceResponsiveCards from './E-Commerce-Responsive-Cards';
import ECommerceCards from "./E-Commerce-Cards";
import GetInTouch from "./HomeFaqsGetInTouch";
import Reviews from "./Reviews";
import LatestNews from "./Latest-News";
function ECommerce() {
  return (
    <div className=" max-auto">
      {/*First Section*/}
      <div className="bg-[#F48029] max-auto pb-20 ">
        <div className=" max-auto text-white pt-20 px-20 grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="text-left ">
            <p className=" text-5xl font-bold leading-tight">
              Leading E-Commerce Marketing Services in California
            </p>
            <br />
            <p className="text-2xl leading-loose pr-4">
              Skyrocket your sales and propel your online business to
              unparalleled success with our secret weapons of unrivaled
              expertise and innovative strategies. We offer complete e-commerce
              marketing services in California. From captivating campaigns to
              laser-focused targeting, we’ve got the magic touch to ignite
              explosive growth.
            </p>
            <div className="py-6">
              <button className="py-3 px-5 rounded bg-[#363636] p-1 hover:bg-white hover:text-black text-white">
                Let's Get Connected
              </button>
            </div>
          </div>
          <div className="pt-20">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      {/*Cards section*/}
      <div>
      <ECommerceResponsiveCards></ECommerceResponsiveCards>
      </div>
      {/*Section 2 */}
      <div className="my-20 lg:mx-14 bg-black rounded  text-white sm:mx-5">
        <div className="relative flex lg:px-20 sm:px-1">
          <div className="pt-14 lg:px-80 sm:px-2 ">
            Unlock your E-Commerce potential with our premier Ecommerce
            <a href="#" class="px-2 text-[#c36] hover:text-blue-800">
              digital marketing services in California
            </a>
          </div>
        </div>

        <div className="lg:px-60 sm:px-5 text-3xl py-10 ">
          Discover the missing piece to your E-commerce Puzzle
        </div>

        <div className="lg:mx-80 sm:mx-2 lg:px-60 sm:px-5 pb-10">
          <button className="bg-white hover:bg-[#F48029] text-black hover:text-white py-3 px-5 rounded">
            Let's Talk
          </button>
        </div>
      </div>

      {/*Section 3*/}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 p-20 gap-10">
        <div>
          <img src={img2} alt=""></img>
        </div>
        <div>
          <img src={img3} alt=""></img>
          <img className="pt-6" src={img4} alt=""></img>
        </div>
        <div>
          <img src={img5} alt=""></img>
        </div>
      </div>

      <div>
        <div className="px-60 lg:mx-80 sm:mx-5">
          <button className="  py-3 px-5 rounded bg-[#F48029] p-1 hover:bg-[#363636]  text-white">
            Let's Get Connected
          </button>
        </div>
      </div>

      {/*Section 4 */}
      <div className="mx-14 my-20 grid sm:grid-cols-1 lg:grid-cols-3 bg-gray-100">
        <div className="col-span-2">
          <p className=" text-5xl font-extrabold leading-tight">
            We Specialized in High Revenue Generation
          </p>
          <br />
          <p className="text-2xl leading-normal pr-4">
            Our expertise in e-commerce has propelled our clients to new
            heights, enabling them to experience substantial revenue growth and
            cultivate dedicated followings. We achieve these remarkable results
            through our highly targeted, memorable, and validated digital
            advertising strategies.{" "}
          </p>
          <p className="text-2xl leading-normal pr-4 pt-4">
            As your trusted e-commerce marketing company, we provide end-to-end
            solutions to optimize your online store’s performance. We’ve covered
            you, from search engine optimization (SEO) and pay-per-click (PPC)
            advertising to social media marketing and email campaigns. Our
            expertise in online marketing for e-commerce ensures that you stay
            ahead of the competition and reach your full potential.
          </p>
        </div>
        <div>
          <img src={img6} alt=""></img>
          <img className="pt-6" src={img7} alt=""></img>
        </div>
      </div>
      {/*Section 5 */}

      <div>
        <ECommerceCards></ECommerceCards>

        <p className="pt-20 text-4xl font-extrabold lg:mx-60 sm:mx-2 text-center leading-normal">
          Why Choose Us as your E-commerce Marketing Agency in California?
        </p>
        <p className="py-12 text-3xl text-center lg:mx-40 sm:mx-2">
          We believe that every e-commerce business is unique. We are dedicated
          to delivering tangible results that impact your bottom line. We
          possess the knowledge and expertise to drive your online business
          toward success. Our team of seasoned professionals understands the
          intricacies of e-commerce marketing and stays updated with the latest
          trends and strategies.
        </p>
      </div>

      {/*Remaining Sections*/}
      <GetInTouch></GetInTouch>
      <Reviews></Reviews>
      <LatestNews></LatestNews>
    </div>
  );
}
export default ECommerce;
