import React, { Component } from "react";
import WebCards from "./WebCards.js";
import OurClients from "./Home-Section2";
import Section5 from "./FaqsGetInTouch";
import LatestNews from "./Hamza-Latest-News";

import image from '../img/bannerweb.svg';
import image2 from '../img/icon5.webp';
import image3 from '../img/icon3.webp';
import image4 from '../img/icon4.webp';

import SEO7 from "../img/SEO7.webp";
import SEO8 from "../img/SEO8.webp";
import SEO9 from "../img/SEO9.webp";
import SEO10 from "../img/SEO10.webp";

import star1 from '../img/5stars.webp';
import rev1 from '../img/rev1.jpeg';
import rev2 from '../img/rev2.jpeg';
import rev3 from '../img/rev3.webp';
import Footer from "./Footer.js";


class Web extends Component {

    render() {

        const mystyle = {
            fontFamily: "Poppins, sans-serif",
            color: "#363636",
        };
        return (
            <div style={mystyle}>
                <div className="h-12 bg-[#F48029]"></div> 
                <div className="flex bg-[#F48029] h-[900px] pb-40 ">
                    {/* First Column */}
                    <div className=" w-1/2  h-400px  ml-20 text-white mt-24">
                        <h1 className="text-[40px] font-[600] leading-tight">Innovative Web Development Services in California</h1>
                        <h1 className="mt-7 text-[22px]">Website is the ultimate weapon in your technical <br></br> arsenal.</h1>
                    <button className="mt-8 bg-[#363636] w-[250px] text-[18px] rounded-md h-14 align-middle hover:bg-white hover:text-black">
                        Get Free Consultation
                    </button>
                    </div>
        
                    {/* Second Column */}
                    <div>
                        <img className="mr-52 ml-8 h-[550px] w-[600px] -mt-8" src={image} alt="Banner" />
                    </div>
                </div>
                
                {/* Card Section */} 
                <div className="grid grid-cols-3 gap-4 ml-48 mr-48 -mt-64">
                    {/* First column */}
                    <div className="bg-white p-4 rounded-md shadow-lg h-52 text-center text-[20px] shadow-[#F48029]">
                        <img src={image2} class="w-20 ml-[36%] mt-6" alt='' /> 
                        <h1 className="text-[18px] mt-5">SEO</h1>
                    </div>

                    {/* Second column */}
                    <div className="bg-white p-4 rounded-md shadow-lg h-52 text-center text-[20px] shadow-[#F48029]">
                        <img src={image3} class="w-20 ml-[36%] mt-6" alt='' />
                        <h1 className="text-[18px] mt-4">Graphic Design</h1>
                    </div>

                    {/* Third column */}
                    <div className="bg-white p-4 rounded-md shadow-lg h-52 text-center text-[20px] shadow-[#F48029]">
                        <img src={image4} class="w-20 ml-[36%] mt-6" alt='' />
                        <h1 className="text-[18px] mt-4">E-commerce Services</h1>
                    </div>
                </div>
                <h1 className="mt-28 text-[32px] font-[900] text-center	">
                    How to do our 
                </h1>
                <p className=" text-center text-[32px] -mt-1 font-[500]">
                    Web Design Services in California Work?
                </p>
                <p className="pt-8 text-[20px] ml-56 mr-56 leading-10">
                    As a California web design & development company, we collaborate with you beginning with a consultation phase in which we do a discovery call to understand your expectations, and the scope of the project, and then together develop a plan. We work together on the User Experience (UX) and User Interface (UI), color palettes, development, and designs, all the way up to the LIVE! We then give best practice training, as well as hosting and maintenance, at the end of the project.
                </p>
                <p className="pt-8 text-[20px] ml-56 mr-56 leading-10">
                    We build strategies to get your tales in front of the people you want to reach by creating appealing visuals that represent your message in a way that leaves a lasting impression. We learn about your markets through extensive research and analysis, and we position your company for success. Whatever your marketing design requirements are, NaqsTech has you covered.
                </p>

                {/* 3rd Section 4 Coloumns */}
                <WebCards/>

                {/* 4th Section */}
                <div className="grid grid-cols-2 mt-36 ml-20 mr-20 space-x-20 pb-20">
                    <h1 className="text-[45px] mt-4">
                        <span className="font-[700]">Why should you invest</span> in WordPress Development?
                    </h1>
                    <h2 className="text-[20px] ml-6 leading-9 ">
                        Investing in WordPress development can provide several advantages to your company. First and foremost, WordPress is a popular and extensively used platform for developing websites, and having a qualified developer on board helps ensure that your website is optimized for performance, functionality, and user experience.
                    </h2>
                </div>

                {/* 5th Section Our Clients */}
                <OurClients/>

                {/* 6th Section 5th as components */}
                <Section5 />

                {/* 7th Section */}
                <div className="bg-[#F48029] mt-28 h-[515px]">
                    <div className="grid grid-cols-7 text-left max-auto text-white">
                        <div className="col-span-4 text-left py-20 px-16 ml-8">
                            <p className=" pt-20 pb-6 text-[65px]">
                                Our <b> Portfolio </b>
                            </p>
                            <p className="text-[28px]">
                                Have a look at the beautiful sites we’ve built, because we take great pride in our work!
                            </p>
                            <button className="mt-2 bg-[#363636] w-36 rounded-md h-14 align-middle hover:bg-white hover:text-black">
                                Learn More
                            </button>
                        </div>
                        <div className="col-span-3">
                            <div className="w-full h-40 grid grid-cols-2 gap-4">
                                <div>
                                    <img
                                        src={SEO7} alt="" className=" relative top-[-45px] pb-6 object-cover w-full h-50%"
                                    />
                                    <img
                                        src={SEO8} alt="" className=" relative top-[-55px] object-cover w-full h-50%"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={SEO9} alt=""className=" pt-20 pr-20 object-cover w-full h-50%"
                                    />
                                    <img
                                        src={SEO10}alt=""className="pb-20 pr-20  pt-4 object-cover w-full h-50%"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8th Section Reviews */}
                <div style={mystyle} className="bg-[#FAFAFA] pb-16">
                    {/* Reviews Section */}
                    <div className="text-[35px] font-[700] p-14 ml-[80px]">
                        Reviews
                    </div>
                    <div className="grid grid-cols-2 gap-6 ml-28 mr-24 ">
                        {/* First Review */}
                        <div className="bg-white text-[18px] text-[#737373] rounded-md hover:shadow-2xl p-8 h-5/6">
                            {/* Review Text */}
                            <p>
                                I am quite pleased with NaqsTech Digital's web design and development services. They not only designed an aesthetically great website for my company, but they also made it responsive and user-friendly. I wholeheartedly endorse their services.
                            </p>
                            <div className="flex justify-start mt-6">
                                <div className="w-1/20">
                                    {/* Content for the left column */}
                                    <img className="mt-4" src={rev1} alt="Reviewer 1" />
                                </div>
                                <div className="w-1/16 mt-5 ml-5">
                                    {/* Content for the right column */}
                                    <h1 className="ml-1 text-[#15063F] font-[500] text-[20px]">Marina.T</h1>
                                    <img className="w-28" src={star1} alt="5 Stars" />
                                </div>
                            </div>
                        </div>
                        {/* 2nd Review */}
                        <div className="bg-white text-[18px] text-[#737373]  rounded-md hover:shadow-2xl p-8 h-6/6">
                            {/* Review Text */}
                            <p>
                                NaqsTech Digital provided exceptional web design and development services that transformed our online presence. Our site looks excellent on any device because the responsive design maximizes user interaction. We appreciate their professionalism and competence.
                            </p>
                            <div className="flex justify-start mt-6">
                                <div className="w-1/20">
                                    {/* Content for the left column */}
                                    <img className="mt-4" src={rev3} alt="Reviewer 1" />
                                </div>
                                <div className="w-1/16 mt-5 ml-5">
                                    {/* Content for the right column */}
                                    <h1 className="ml-1 text-[#15063F] font-[500] text-[20px]">Veronica. J</h1>
                                    <img className="w-28" src={star1} alt="5 Stars" />
                                </div>
                            </div>
                        </div>
                        {/* 3rd Review */}
                        <div className="bg-[#F48029] text-[18px] rounded-md hover:shadow-2xl p-8 text-white -mt-6">
                            {/* Review Text */}
                            <p>
                                NaqsTech Digital's web design and development services exceeded my expectations. Their WordPress skills and responsive design ensured a consistent user experience across all devices. I am overjoyed with the results.
                            </p>
                            <div className="flex justify-start mt-6">
                                <div className="w-1/20">
                                    {/* Content for the left column */}
                                    <img className="mt-4" src={rev2} alt="Reviewer 2" />
                                </div>
                                <div className="w-1/16 mt-5 ml-5">
                                    {/* Content for the right column */}
                                    <h1 className="ml-1 text-white font-[500] text-[20px]">William.M</h1>
                                    <img className="w-28" src={star1} alt="5 Stars" />
                                </div>
                            </div>
                        </div>
                        {/* 4th Review */}
                        <div className="bg-[#F48029] text-[18px] rounded-md hover:shadow-2xl p-8 text-white">
                            {/* Review Text */}
                            <p>
                                Working with NaqsTech Digital on our website design and development was a pleasure. They made helpful suggestions to improve our website's functioning and visual appeal.
                            </p>
                            <div className="flex justify-start mt-12">
                                <div className="w-1/20">
                                    {/* Content for the left column */}
                                    <img className="mt-4" src={rev2} alt="Reviewer 2" />
                                </div>
                                <div className="w-1/16 mt-5 ml-5">
                                    {/* Content for the right column */}
                                    <h1 className="ml-1 text-white font-[500] text-[20px]">Mellesia. U</h1>
                                    <img className="w-28" src={star1} alt="5 Stars" />
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>                
                {/* Latest News */}
                <LatestNews/>
                <Footer></Footer>
            </div>
        );
    }
}

export default Web;
