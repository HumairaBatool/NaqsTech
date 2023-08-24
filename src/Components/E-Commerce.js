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
      <div className="  bg-[#F48029] xs:text-center md:text-left max-w-full container  xs:px-[30px] xl:px-[80px] lg:pt-[80px] xs:pb-[60px] md:pb-[30px] xs:pt-[10px] ">
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 md:pb-[60px] ">
          {/* First Column */}
          <div className=" text-white xl:self-center">
            <h1 className="xs:text-[20px] xs3:text-[28px] xs3:px- xs3:leading-[39.2px] xs:font-[700] md:text-[40px] md:font-[700] lg:font-[700] md:leading-[48px] xs:leading-[28px]">
              Leading E-Commerce Marketing Services in California
            </h1>
            <h1 className="my-3 xs:font-[400] md:font-normal xs:text-[14px] md:text-[18px] lg:text-[20px] md:leading-[40px] xs:leading-[25px]">
              Skyrocket your sales and propel your online business to
              unparalleled success with our secret weapons of unrivaled
              expertise and innovative strategies. We offer complete e-commerce
              marketing services in California. From captivating campaigns to
              laser-focused targeting, we’ve got the magic touch to ignite
              explosive growth.
            </h1>
            <div className="text-middle mb-[20px]">
            <button className="my-3 bg-[#363636]  rounded-md px-[24px] py-[12px] align-middle hover:bg-white hover:text-black">
              Get Free Consultation
            </button></div>
          </div>

          {/* Second Column */}
          <div className=" overflow-hidden  lg:px-0 xs:px-10 flex relative justify-center content-center items-center">
            <img className="hidden md:block lg:mb-12 w-full" src={img1} alt="" />
          </div>
        </div>
      </div>

      {/*Cards section*/}
      <div >
        <ECommerceResponsiveCards></ECommerceResponsiveCards>
      </div>
      {/*Section 2 */}
      <div className="xl:px-[60px] xs:px-[30px] xs:mt-[30px] xs:text-[14px] xs:leading-[24px] md:text-[16px]  ">
        <div className="text-center bg-black rounded  text-white xs:p-[30px] lg:px-[100px] xl:py-[50px]">
          <div className="flex justify-center relative items-center xs:mb-[14.4px] xl:pt-[10px]">
            <div className="text-center h-auto w-auto md:mx-[195.06px] relative">
              Unlock your E-Commerce potential with our premier Ecommerce
              <a href="#" class="px-2 text-[#c36] hover:text-blue-800">
                digital marketing services in California
              </a>
            </div>
          </div>

          <div className="relative xs:text-[15px] xs:font-[22px] md:text-[30px] md:leading-[45px] xl:pb-[10px]">
            Discover the missing piece to your E-commerce Puzzle
          </div>

          <div className="relative flex justify-center items-center xs:mt-[20px] ">
          <button className="bg-white hover:bg-[#F48029] text-black hover:text-white rounded xs:px-[24px] xs:py-[12px] ">
            Let's Talk
          </button>
        </div>
        
          
        </div>
      </div>
      {/*Section 3*/}
      <div className="xl:px-[70px] relative grid xs:grid-cols-1 md:grid-cols-3 xs:px-[30px] xs:pt-[50px] md:pt-[30px] md:px-[30px] lg:px-[10px]">
      <div className="flex justify-center xs:pb-[15px] md:p-[10px]">
        <img  src={img2} alt="" />
      </div>
      <div className="items-center ">
        <div className="flex md:px-[10px] md:pt-[10px] md:p-[10px] ">
        <img  src={img3} alt="" />
      </div>
      <div className="flex  md:pt-[10px]  md:px-[10px] md:p-[10px]">
      <img  src={img4} alt="" />
    </div>
      </div>
      <div className="flex justify-center md:p-[10px]">
        <img src={img5} alt="" />
      </div>
    </div>
    
      <div>
        <div className=" flex justify-center xs:px-[50px] xs:pt-[50px] xs:pb-[50px]  md:pt-[10px] lg:pt-[50px]">
          <button className="  w-[200px] h-[55px] rounded bg-[#F48029] p-1 hover:bg-[#363636]  text-white">
            Let's Get Connected
          </button>
        </div>
      </div>

      {/*Section 4 */}
      <div className="xl:px-[60px] xs:px-[30px] grid xs:grid-cols-1 lg:grid-cols-3 bg-gray-100 ">
        <div className="col-span-2 lg:pt-40 xs:pb-[20px] lg:pb-[0px] lg:px-[10px]  lg:items-center lg:justify-center">
          <p className="xs:pb-[43px] md:pb-[18px] lg:pb-[20.4px]  xs:text-[19px] xs3:text-[28px] xs3:leading-[39.2px] sm:text-[28px] md:text-[35px] lg:text-[45px] xs:leading-[28px] md:leading-[49px] lg:leading-[70px] font-[900] ">
            We Specialized in High Revenue Generation
          </p>
          <br />
          <p className="xs:mb-[14.4px] xs:text-[14px] sm:text-[18px] md:text-[18px] lg:text-[20px] xs:leading-[21px]  md:leading-[35px]">
            Our expertise in e-commerce has propelled our clients to new
            heights, enabling them to experience substantial revenue growth and
            cultivate dedicated followings. We achieve these remarkable results
            through our highly targeted, memorable, and validated digital
            advertising strategies.{" "}
          </p>
          <p className="xs:mb-[14.4px]lg:mb-[0px] xs:text-[14px] sm:text-[18px] md:text-[18px] lg:text-[20px] xs:leading-[21px]  md:leading-[35px]">
            As your trusted e-commerce marketing company, we provide end-to-end
            solutions to optimize your online store’s performance. We’ve covered
            you, from search engine optimization (SEO) and pay-per-click (PPC)
            advertising to social media marketing and email campaigns. Our
            expertise in online marketing for e-commerce ensures that you stay
            ahead of the competition and reach your full potential.
          </p>
        </div>
        <div className=" ">
          <img className="xs:w-full hidden md:block" src={img6} alt=""></img>
          <img className="xs:w-full md:pt-[20px] " src={img7} alt=""></img>
        </div>
      </div>
      {/*Section 5 */}

      
        <ECommerceCards></ECommerceCards>
        <div className="xs:px-[30px] xl:px-[200px]">
        <p className=" xs:mb-[14.4px] text-[#363636] xs:text-[20px] xs:leading-[28px] xs3:text-[28px] xs3:font-[700] xs3:leading-[39.2px] sm:text-[28px] md:text-[35px] font-[700] text-center">
          Why Choose Us as your E-commerce Marketing Agency in California?
        </p>

        <p className="xs:pt-[20px] xs:mb-[14.4px] text-[#363636] xs:text-[14px] md:text-[18px] lg:text-[25px] xs:leading-[25px]  md:leading-[35px] text-3xl text-center ">
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
