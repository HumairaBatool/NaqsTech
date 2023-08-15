import React, { Component } from "react";
import image from '../img/bannerimg.webp';

import image1 from '../img/wp.webp';
import image2 from '../img/analysis.webp';
import image3 from '../img/digitals.webp';

import image4 from '../img/creative.webp';
import image5 from '../img/e-commerce.webp';
import image6 from '../img/digitalmarketing.webp';

class Blog extends Component {
  render() {
    const mystyle = {
      fontFamily: "Poppins, sans-serif",
      color: "#363636",
    };
    return (
      <div style={mystyle}>
        <div className="h-12 bg-[#F48029]"></div>
  
        <div className="flex mx-auto bg-[#F48029] grid grid-cols-2">
          {/* First Column */}
          <div className=" mt-6 h-[700px] lg:ml-20 text-white">
            <h1 className="md:text-[22px] xs:text-[16px]">Our Latest News</h1>
            <h1 className="font-bold mt-6  lg:text-5xl md:text-4xl xss:text-3xl xs:text-lg lg:!leading-[55px] xss:!leading-[40px] xs:!leading-[30px]">Blogs</h1>
            <p className="md:text-[25px] xs:text-[16px] leading-10 mt-6">
              We deliver results-driven digital solutions to businesses of all sizes.
            </p>
            <button className="mt-8 bg-[#363636] text-[18px] p-2 w-60 rounded-md h-12 align-middle hover:bg-white hover:text-black">
              Get Free Consultation
            </button>
          </div>

          {/* Second Column */}
          <div>
            <img className="flex-grow  mt-8 w-[600px] h-[500px] pb-6" src={image} alt="Banner" />
          </div>
        </div>

        {/* Section 2 */}

        <h1 className="text-center mt-14 mb-28 text-[52px] text-[#363636] font-extrabold">Our Blog posts</h1>

        {/* Three-Column Layout */}
        <div className="flex justify-center ml-20 mr-20 -space-x-6">
          {/* First Column */}
          <div className="w-1/3 px-4">
                <div className="group relative">
                <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                    <div class="max-w-[400px] overflow-hidden rounded-md">
                        <div class="max-w-[800px] max-h-[400px] overflow-hidden">
                            <img src={image1} class="hover:scale-[120%] transition duration-500 cursor-pointer object-cover"/>
                            <h2 className="text-[22px] font-[700] mt-8 ml-8 mr-16 ">5 Key Elements of Effective WordPress Web Development Services in California</h2>
                        </div>
                    </div>
                </div>
            </div>
                <p className="mt-5 ml-8 mr-16 text-[20px] text-[#7A7A7A]">
                    In the dynamic digital landscape of California, effective web development services in California are crucial for businesses to establish a solid online …
                </p>
            </div>

            {/* Second Column */}
            <div className="w-1/3 px-4">
                    <div className="group relative">
                        <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                            <div class="max-w-[400px] overflow-hidden rounded-md">
                                <div class="max-w-[800px] max-h-[400px] overflow-hidden">
                                    <img src={image2} class="hover:scale-[120%] transition duration-500  cursor-pointer object-cover"/>
                                    <h2 className="text-[22px] font-[700] mt-8 ml-8 mr-16 ">Why is Google Analytics Essential to SEO Services in California</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 ml-8 mr-16 text-[20px] text-[#7A7A7A]">
                    In the competitive online landscape, search engine optimization (SEO) plays a crucial role in driving organic traffic and improving the visibility of …
                    </p>
            </div>

            {/* Third Column */}
            <div className="w-1/3 px-4">
                    <div className="group relative">
                        <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                            <div class="max-w-[400px] overflow-hidden rounded-md">
                                <div class="max-w-[800px] max-h-[400px] overflow-hidden">
                                    <img src={image3} class="hover:scale-[120%] transition duration-500 cursor-pointer object-cover"/>
                                    <h2 className="text-[22px] font-[700] mt-8 ml-8 mr-16 ">How a Digital Marketing Agency in California Can Help Your SEO Efforts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 ml-8 mr-16 text-[20px] text-[#7A7A7A]">
                        In today’s digital world, organizations must have a strong online presence in order to live and succeed. Search Engine Optimization (SEO) is …
                    </p>
            </div>
        </div>

        {/*2nd Three-Column Layout */}

        <div className="flex justify-center ml-20 mr-20 pb-20 -space-x-6 mt-12">
          {/* First Column */}
          <div className="w-1/3 px-4">
                <div className="group relative">
                <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                    <div class="max-w-[400px] overflow-hidden rounded-md">
                        <div class="max-w-[800px] max-h-[400px] overflow-hidden">
                            <img src={image4} class="hover:scale-[120%] transition duration-500 cursor-pointer object-cover"/>
                            <h2 className="text-[22px] font-[700] mt-8 ml-8 mr-16">How to Choose the Perfect Graphic Design Services in California for Your Brand?</h2>
                        </div>
                    </div>
                </div>
            </div>
                <p className="mt-5 ml-8 mr-16 text-[20px] text-[#7A7A7A]">
                    Graphic design plays a crucial role in shaping your brand’s visual identity. Whether creating a captivating logo, designing a stunning website, or …
                </p>
            </div>

            {/* Second Column */}
            <div className="w-1/3 px-4">
                    <div className="group relative">
                        <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                            <div class="max-w-[400px] overflow-hidden rounded-md">
                                <div class="max-w-[800px] max-h-[400px] overflow-hidden">
                                    <img src={image5} class="hover:scale-[120%] transition duration-500 cursor-pointer object-cover"/>
                                    <h2 className="text-[22px] font-[700] mt-8 ml-8 mr-16 ">7 Ways Ecommerce Marketing Services in California Can Boost Your Online Sales</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 ml-8 mr-16 text-[20px] text-[#7A7A7A]">
                        Online sales are getting increasingly prevalent in today’s digital age. The rivalry is becoming more difficult as Ecommerce marketing services in California …
                    </p>
            </div>

            {/* Third Column */}
            <div className="w-1/3 px-4">
                    <div className="group relative">
                        <div class="flex items-center space-y-2 flex-col justify-center mr-2">
                            <div class="max-w-[400px] overflow-hidden rounded-md">
                                <div class="max-w-[800px] max-h-[400px] overflow-hidden">
                                    <img src={image6} class="hover:scale-[120%] transition duration-500 cursor-pointer object-cover"/>
                                    <h2 className="text-[22px] font-[700] mt-8 ml-8 mr-16">How Can a Digital Marketing Agency in California Transform Your Business</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="mt-5 ml-8 mr-16 text-[20px] text-[#7A7A7A]">
                        In today’s extremely competitive digital market, businesses that want to succeed and stay ahead of the curve must have a strong online …
                    </p>
            </div>
        </div>
      </div>
    );
  }
}

export default Blog;
