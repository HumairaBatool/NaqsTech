import React, { Component } from "react";
import WebCards from "./WebCards.js";
import OurClients from "./Home-Section2";
import Section5 from "./HomeFaqsGetInTouch";
import LatestNews from "./Latest-News.js";

import image from '../img/bannerweb.svg';
import image2 from '../img/icon5.webp';
import image3 from '../img/icon3.webp';
import image4 from '../img/icon4.webp';


// import SEO7 from "../img/SEO7.webp";
// import SEO8 from "../img/SEO8.webp";
// import SEO9 from "../img/SEO9.webp";
// import SEO10 from "../img/SEO10.webp";


import portfolio from "../img/Our-Portfolio-1-736x1024.webp";

import star1 from '../img/5stars.webp';
import rev1 from '../img/rev1.jpeg';
import rev2 from '../img/rev2.jpeg';
import rev3 from '../img/rev3.webp';


class Web extends Component {

    render() {
        return (
            <div className=" max-auto">
               <div className="flex bg-[#F48029] lg:h-[800px] xs:h-[700px] xss:h-[700px] md:h-[1150px] pb-10 xs:pb-40">
                    <div className="font-poppins bg-[#F48029] max-auto pb-10 xs:pb-28 lg:mr-auto">
                        <div className=" max-auto text-white xl:ml-28 xl:mr-32 xs:px-3 grid lg:grid-cols-2 lg:mr-10 xs:grid-cols-1">
                            <div className=" lg:ml-12 xs:pt-12 text-left xs:px-4">
                                <p className="lg:pt-8 xs:pt-0 md:text-[35px] md:leading-snug xss:pt-auto text-[24px] xs:text-[17px] lg:leading-tight xs:leading-7 xss:text-[28px] xss:leading-10 lg:text-[40px] font-[500] leading-tight">
                                    Innovative Web Development Services in New York
                                </p>
                                
                                <h2 className="xs:mt-6 text-[16px] lg:text-[20px] lg:leading-relaxed xs:text-[14px] md:text-[20px]  leading-loose pt-2">
                                    Website is the ultimate weapon in your technical arsenal.
                                </h2>
                                <div className="pt-3 xs:pt-7">
                                    <button className="py-4 xs:py-4 xs:text-[14px] xss:px-8 xss:py-4 px-4 xs:px-6 rounded text-center bg-[#363636] p-0.5 xs:p-1 hover:bg-white hover:text-black text-white">
                                        Get Free consultation
                                    </button>
                                </div>
                            </div>
                            <div className=" lg:-mr-16 xs:pr-12">
                                <img className="py-6 xs:py-12 lg:w-[100%] lg:h-auto md:w-[100%] md:h-auto md:ml-6 lg:-ml-3 md:mr-6 xs:w-full hidden md:block" src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                
                
               {/* Card Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:ml-60 md:justify-center lg:ml-40 lg:mr-40 xl:mr-60 gap-4 ml-4 mr-4 pb:-mt-14 lg:-mt-56 md:ml-6 md:mr-6 xs:mr-8 xs:ml-8 md:gap-3  xs:-mt-96 -mt-12 md:-mt-52">
                {/* First column */}
                    <div className="bg-white p-4 rounded-md md:h-48 xs:h-40 md:w-auto lg:w-auto lg:h-48 xs:w-full xss:h-32 xss:w-full shadow-lg  text-center  text-[20px] shadow-[#F48029]">
                        <img src={image2} class="md:w-[5em] md:h-[5em] xs:w-[3em] xs:h-[3em] xs:text-[14px] xs:mt-5 mx-auto  md:mt-8" alt='' />
                        <h1 className="lg:text-[18px] text-[18px] xs:text-[14px] md:text-[18px] mt-3 md:mt-5">SEO</h1>
                    </div>

                    {/* Second column */}
                    <div className="bg-white p-4 rounded-md xs:h-40 xs:w-full md:h-48 md:w-auto  lg:w-auto lg:h-48 shadow-lg text-center xss:h-32 xss:w-full text-[20px] shadow-[#F48029]">
                        <img src={image3} class=" md:w-[5em] md:h-[5em] xs:w-[3em] xs:h-[3em] xs:text-[14px] xs:mt-5 mx-auto md:mt-8" alt='' />
                        <h1 className="text-[18px] md:text-[18px] xs:text-[14px] mt-3 md:mt-4">Graphic Design</h1>
                    </div>

                    {/* Third column */}
                    <div className="bg-white p-4  rounded-md xs:h-40 xs:w-full md:h-48 md:w-auto lg:w-auto lg:justify-end lg:h-48 shadow-lg text-center xss:h-32 xss:w-full text-[20px] shadow-[#F48029]">
                        <img src={image4} class=" md:w-[5em] md:h-[5em] xs:w-[3em] xs:h-[3em] xs:text-[14px] mt-4 mx-auto md:mt-8" alt='' />
                        <h1 className="text-[18px] md:text-[18px] xs:text-[14px] mt-3  md:mt-4">E-commerce Services</h1>
                    </div>
                </div>
                {/* Section 2 */}
                <div className="text-[#363636]">
                    <h1 className="mt-28 text-[21px] font-[900] text-center xs:text-[21px] xs:mt-12 xss:mt-32 xss:text-[2rem]">
                        How to do our 
                    </h1>
                    <p className=" text-center text-[32px] xs:text-[21px] xs:ml-7 xs:mr-7 -mt-1 font-[500] xss:text-[2rem] xss:leading-tight ">
                        Web Design Services in New York Work?
                    </p>
                    <p className=" lg:font-[20px] md:text-[#363636] xl:mt-6 text-[20px] leading-10 xs:text-[14px] text-[#7A7A7A] xs:ml-8 xs:mr-8 xs:leading-7 xs:mt-6 xss:mt-6 xss:leading-7 md:text-[20px] md:leading-[35px] lg:text-[20px] xl:ml-80 xl:mr-72 xl:leading-9">
                        As a California web design & development company, we collaborate with you beginning with a consultation phase in which we do a discovery call to understand your expectations, and the scope of the project, and then together develop a plan. We work together on the User Experience (UX) and User Interface (UI), color palettes, development, and designs, all the way up to the LIVE! We then give best practice training, as well as hosting and maintenance, at the end of the project.
                    </p>
                    <p className="lg:font-[20px] md:text-[#363636] text-[20px] ml-56 mr-56 leading-10 text-[#7A7A7A] xs:text-[14px] xs:ml-8 xs:mr-8 xs:leading-7 xs:mt-3 xss:mt-4 xss:leading-7 md:text-[20px] md:leading-[35px] lg:text-[20px] xl:ml-80 xl:mr-72 xl:leading-9">
                        We build strategies to get your tales in front of the people you want to reach by creating appealing visuals that represent your message in a way that leaves a lasting impression. We learn about your markets through extensive research and analysis, and we position your company for success. Whatever your marketing design requirements are, NaqsTech has you covered.
                    </p> 
                </div>
               
                {/* 3rd Section 4 Coloumns */}
                <WebCards/>

                {/* 4th Section */}
                <div className="grid xs:grid-col-1 lg:grid-cols-2 xs:text-[#363636] xl:ml-20 xl:mr-12 lg:gap-auto md:mt-12 xs:mt-4 xs:pb-12 md:pb-16">
                    <h1 className="xs:text-[20px] md:mr-auto xs:text-center lg:mr-auto md:text-left md:ml-5 md:text-[35px] lg:text-[49px] xs3:mr-24">
                        <span className="font-[700]">Why should you invest</span> in WordPress Development?
                    </h1>
                    <h2 className="xs:mt-5 xs:ml-8 xs:mr-8 xs:text-[14px] xs:text-[#363636] xs:leading-[25px] xs3:ml-9 md:text-[20px] md:mt-3 md:ml-10 lg:mr-14 md:leading-9 ">
                        Investing in WordPress development can provide several advantages to your company. First and foremost, WordPress is a popular and extensively used platform for developing websites, and having a qualified developer on board helps ensure that your website is optimized for performance, functionality, and user experience.
                    </h2>
                </div>

                {/* 5th Section Our Clients */}
                <OurClients/>

                {/* 6th Section 5th as components */}
                <Section5 />

                {/* 7th Section */}
                <div className="bg-white  max-auto pt-10">
                    <div className="bg-[#F48029] max-auto lg:h-auto ">
                        <div className="grid lg:grid-cols-7 md:grid-cols-4 text-left max-auto text-white">
                            <div className=" col-span-4 lg:py-20 md:py-4 xs:px-7 md:pl-7 xl:p-20 ">
                                <p className=" pt-10 pb-6 md:text-[35px] lg:text-left lg:text-[56px] xs:text-[28px] ">
                                    Our <span className="lg:font-[700] xs:font-bold"> Portfolio </span> 
                                </p>
                                <p className="text-left lg:text-[25px] md:text-[20px] md:leading-9 xs:text-[14px] xs:leading-[25px] xs:pb-8 ">
                                    Have a look at the beautiful sites we’ve built, because we take great pride in our work!
                                </p>
                                <button className="py-4 xs:py-4 xs:text-[14px] xss:px-8 xss:py-4 px-4 xs:px-6 rounded text-center bg-[#363636] p-0.5 xs:p-1 hover:bg-white hover:text-black text-white">
                                        Learn More
                                </button>
                            </div>

                            <div className="lg:col-span-3 xs:col-span-4 xs:mt-8 lg:px-auto xs:px-6 xs:mb-12 lg:mb-auto">
                                <div className="w-full gap-4">
                                    <div>
                                        <img
                                        src={portfolio}
                                        alt=""
                                        className=" relative xs:top-0 lg:-mt-16 xl:-mb-16 lg:w-3/3 xs:w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 8th Section Reviews */}
                <div className="bg-[#FAFAFA] pb-16">
                    {/* Reviews Section */}
                    <div className="xs:text-center xs:p-8 xs:text-[28px] text-[#363636] md:text-[35px] md:text-left md:p-12 font-[700] lg:p-10">
                        Reviews
                    </div>
                    <div className=" md:ml-auto md:mr-auto xs:mt-6 lg:ml-8 lg:mr-8 ">
                        {/* First Review */}
                        <div className="xs:flex xs:flex-col lg:flex lg:flex-row lg:ml-8 lg:mr-8 lg:items-start xs:justify-center xs:items-center lg:space-x-5 ">
                            <div className="bg-white xs:text-[14px] xs:p-8 xs:h-auto lg:h-74  lg:text-[18px] xs:w-4/5 lg:w-auto  text-[#737373] rounded-lg hover:shadow-2xl lg:p-5">
                                {/* Review Text */}
                                <p>
                                    I am quite pleased with NaqsTech Digital's web design and development services. They not only designed an aesthetically great website for my company, but they also made it responsive and user-friendly. I wholeheartedly endorse their services.
                                </p>
                                <div className="flex justify-start xs:mt-3 mt-6">
                                    <div className=" w-1/20">
                                        {/* Content for the left column */}
                                        <img className="mt-4" src={rev1} alt="Reviewer 1" />
                                    </div>
                                    <div className="w-1/16 xs:ml-2 mt-5 lg:ml-5">
                                        {/* Content for the right column */}
                                        <h1 className="ml-1 xs:text-[14px] text-[#15063F] font-[500] lg:text-[20px]">Marina.T</h1>
                                        <img className="xs:w-24 lg:w-28" src={star1} alt="5 Stars" />
                                    </div>
                                </div>
                            </div>
                            {/* 2nd Review */}
                            <div className="bg-white xs:text-[14px] xs:p-8 lg:p-auto xs:h-auto xs:w-4/5 lg:h-80 lg:w-auto lg:text-[18px] text-[#737373] xs:mt-6 lg:mt-auto rounded-lg hover:shadow-2xl lg:p-5">
                                {/* Review Text */}
                                <p>
                                    NaqsTech Digital provided exceptional web design and development services that transformed our online presence. Our site looks excellent on any device because the responsive design maximizes user interaction. We appreciate their professionalism and competence.
                                </p>
                                <div className="flex justify-start xs:mt-3 mt-6">
                                    <div className="w-1/20">
                                        {/* Content for the left column */}
                                        <img className="mt-4" src={rev3} alt="Reviewer 1" />
                                    </div>
                                    <div className="w-1/16 xs:ml-2 mt-5 lg:ml-5">
                                        {/* Content for the right column */}
                                        <h1 className="ml-1 xs:text-[14px] text-[#15063F] font-[500] lg:text-[20px]">Veronica. J</h1>
                                        <img className="xs:w-24 lg:w-28" src={star1} alt="5 Stars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3rd Review */}
                        <div className="xs:flex xs:flex-col lg:flex lg:flex-row lg:items-start xs:justify-center xs:items-center lg:space-x-5 lg:ml-8 lg:mr-8">
                            <div className="bg-[#F48029] xs:text-[14px] xs:p-8 xs:h-auto lg:w-[730px] lg:-mt-4 xs:w-4/5 xs:mt-6 lg:text-[18px] rounded-lg hover:shadow-2xl p-8 text-white -mt-6">
                                {/* Review Text */}
                                <p>
                                    NaqsTech Digital's web design and development services exceeded my expectations. Their WordPress skills and responsive design ensured a consistent user experience across all devices. I am overjoyed with the results.
                                </p>
                                <div className="flex justify-start xs:mt-3 lg:mt-6">
                                    <div className="w-1/20 xs:ml-2 ">
                                        {/* Content for the left column */}
                                        <img className="mt-4" src={rev2} alt="Reviewer 2" />
                                    </div>
                                    <div className="w-1/16 xs:ml-2 mt-5 lg:ml-5">
                                        {/* Content for the right column */}
                                        <h1 className="ml-1 xs:text-[14px] text-white font-[500] lg:text-[20px]">William.M</h1>
                                        <img className="xs:w-24 lg:w-28" src={star1} alt="5 Stars" />
                                    </div>
                                </div>
                            </div>
                            {/* 4th Review */}
                            <div className="bg-[#F48029] xs:text-[14px] xs:p-8 xs:h-auto xs:w-4/5 lg:w-[800px] xs:mt-6 lg:text-[18px] rounded-md hover:shadow-2xl p-8 text-white">
                                {/* Review Text */}
                                <p>
                                    Working with NaqsTech Digital on our website design and development was a pleasure. They made helpful suggestions to improve our website's functioning and visual appeal.
                                </p>
                                <div className="flex justify-start xs:mt-3 mt-12">
                                    <div className="w-1/20  xs:ml-2 ">
                                        {/* Content for the left column */}
                                        <img className="mt-4" src={rev2} alt="Reviewer 2" />
                                    </div>
                                    <div className="w-1/16 xs:ml-2 mt-5 lg:ml-5">
                                        {/* Content for the right column */}
                                        <h1 className="ml-1 xs:text-[14px] text-white font-[500] text-[20px]">Mellesia. U</h1>
                                        <img className="xs:w-24 lg:w-28" src={star1} alt="5 Stars" />
                                    </div>
                                </div>
                            </div>  
                        </div>     
                    </div>
                </div>                
                {/* Latest News */}
                <LatestNews/>
            </div>
        );
    }
}

export default Web;
