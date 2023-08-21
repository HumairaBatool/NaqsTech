import React from "react";
import img1 from "../img/ecommerce1.svg";
import img2 from "../img/ecommerce2.svg";
import img3 from "../img/ecommerce3.svg";
import img4 from "../img/ecommerce4.svg";
import img5 from "../img/ecommerce5.svg";
import img6 from "../img/ecommerce6.svg";
import img7 from "../img/ecommerce7.svg";
import ECommerceResponsiveCards from "./E-Commerce-Responsive-Cards";
import ECommerceCards from "./E-Commerce-Cards";
import GetInTouch from "./HomeFaqsGetInTouch";
import Reviews from "./Reviews";
import LatestNews from "./Latest-News";
function ECommerce() {
  return (
    <div className=" max-auto">
      {/*First Section*/}
      <div className=" bg-[#F48029] max-w-full container lg:pb-0 xs:pb-[8rem] md:pt-[40px] xs:pt-2">
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 lg:pl-14 lg:pr-28 ">
          {/* First Column */}
          <div className="md:text-left xs:text-center md:pb-20 lg:pb-28 lg:mt-4 text-white xs:mx-7 lg:mx-0">
            <h1 className="xs:text-[20px] xs3:text-[28px] xs3:px- xs3:leading-[39.2px] xs:font-[700] md:text-[40px] md:font-[700] lg:font-[700] md:leading-[48px] xs:leading-[28px]">
              Leading E-Commerce Marketing Services in California
            </h1>
            <h1 className="my-3 xs:font-[400] md:font-normal xs:text-[16px] md:text-[18px] lg:text-[20px] md:leading-[40px] xs:leading-[25px]">
              Skyrocket your sales and propel your online business to
              unparalleled success with our secret weapons of unrivaled
              expertise and innovative strategies. We offer complete e-commerce
              marketing services in California. From captivating campaigns to
              laser-focused targeting, we’ve got the magic touch to ignite
              explosive growth.
            </h1>
            <button className="my-3 bg-[#363636]  rounded-md px-[24px] py-[12px] align-middle hover:bg-white hover:text-black">
              Get Free Consultation
            </button>
          </div>

          {/* Second Column */}
          <div className=" overflow-hidden lg:pt-20 lg:px-0 xs:px-10">
            <img className="lg:mb-12 w-full" src={img1} alt="" />
          </div>
        </div>
      </div>

      {/*Cards section*/}
      <div>
        <ECommerceResponsiveCards></ECommerceResponsiveCards>
      </div>
      {/*Section 2 */}
      <div className="xs:px-12 lg:px-0">
        <div className="text-center lg:mx-14 bg-black rounded  text-white sm:mx-5">
          <div className="flex justify-center relative items-center h-full lg:px-[200px] md:px-52 xs:px-4">
            <div className="pt-14  text-center ">
              Unlock your E-Commerce potential with our premier Ecommerce
              <a href="#" class="px-2 text-[#c36] hover:text-blue-800">
                digital marketing services in California
              </a>
            </div>
          </div>

          <div className="relative xs:px-10 md:px-20 xs:text-[18px] md:text-3xl md:py-10 xs:py-5 ">
            Discover the missing piece to your E-commerce Puzzle
          </div>

          <div className="relative px-6 pb-10 flex justify-center items-center">
          <button className="bg-white hover:bg-[#F48029] text-black hover:text-white rounded w-[100px] h-[50px] ">
            Let's Talk
          </button>
        </div>
        
          
        </div>
      </div>
      {/*Section 3*/}
      <div className="grid xs:grid-cols-1 md:grid-cols-3 lg:pt-20 lg:px-20 md:pt-10 md:px-10 xs:pt-8 xs:px-8 md:gap-10 xs:gap-4">
      <div className="flex justify-center">
        <img className="xs:w-[400px] md:w-full" src={img2} alt="" />
      </div>
      <div>
        <div className="flex justify-center">
        <img className="xs:w-[400px]" src={img3} alt="" />
      </div>
      <div className="flex justify-center">
      <img className="pt-6 xs:w-[400px]" src={img4} alt="" />
    </div>
      </div>
      <div className="flex justify-center">
        <img className="xs:w-[400px] md:w-full" src={img5} alt="" />
      </div>
    </div>
    
      <div>
        <div className=" flex justify-center xs:pt-10 ">
          <button className="  w-[200px] h-[55px] rounded bg-[#F48029] p-1 hover:bg-[#363636]  text-white">
            Let's Get Connected
          </button>
        </div>
      </div>

      {/*Section 4 */}
      <div className=" xs:px-7 md:px-14 lg:my-20 xs:my-10 grid xs:grid-cols-1 lg:grid-cols-3 bg-gray-100">
        <div className="col-span-2 lg:pt-40 xs:pt-10">
          <p className=" xs:text-[19px] xs3:text-[28px] xs3:leading-[39.2px] sm:text-[28px] md:text-[35px] xs:leading-[28px] md:leading-[49px] font-[900]">
            We Specialized in High Revenue Generation
          </p>
          <br />
          <p className="xs:text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] xs:leading-[21px]  md:leading-[35px]  md:pr-4">
            Our expertise in e-commerce has propelled our clients to new
            heights, enabling them to experience substantial revenue growth and
            cultivate dedicated followings. We achieve these remarkable results
            through our highly targeted, memorable, and validated digital
            advertising strategies.{" "}
          </p>
          <p className="xs:text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] xs:leading-[21px]  md:leading-[35px] md:pr-4 pt-4">
            As your trusted e-commerce marketing company, we provide end-to-end
            solutions to optimize your online store’s performance. We’ve covered
            you, from search engine optimization (SEO) and pay-per-click (PPC)
            advertising to social media marketing and email campaigns. Our
            expertise in online marketing for e-commerce ensures that you stay
            ahead of the competition and reach your full potential.
          </p>
        </div>
        <div className="py-10">
          <img className="xs:w-full" src={img6} alt=""></img>
          <img className="pt-6 xs:w-full" src={img7} alt=""></img>
        </div>
      </div>
      {/*Section 5 */}

      <div>
        <ECommerceCards></ECommerceCards>

        <p className="lg:pt-20 md:pt-10 xs:pt-10 xs:text-[19px] xs:leading-[28px] xs3:text-[28px] xs3:font-[700] xs3:leading-[39.2px] sm:text-[28px] md:text-[35px] font-[700] lg:mx-60 xs:mx-10 text-center">
          Why Choose Us as your E-commerce Marketing Agency in California?
        </p>
        <p className="xs:pt-10 md:py-12 xs:text-[14px] md:text-[20px] lg:text-[25px] xs:leading-[25px]  md:leading-[35px] text-3xl text-center lg:mx-40 xs:mx-8">
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
