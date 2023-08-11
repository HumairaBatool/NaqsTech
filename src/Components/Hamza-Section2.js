import React, {Component} from "react";
import image from '../img/Sec2.webp';

class HamzaSection2 extends Component{
    render(){
        const mystyle = {
            fontFamily: "Poppins, sans-serif",
          };
        return(
            <div>
            <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-4 lg:!mx-14 xs:!mx-5">
                {/* First Column */}
                <div>
                    <div className="grid lg:grid-cols-6 xs:grid-cols-1 md:mt-24 xs:mt-10 ">
                        <div className="md:w-28 xs:w-16 h-[1px] my-4 lg:ml-5 lg:mr-12 bg-[#363636]"></div>
                        <div  style={mystyle} className="line-8 font-simple lg:text-2xl xss:text-lg xs:text-sm mx-8 xs:mx-0 lg:mx-8 col-span-5 mb-4 text-gray-800">
                        VALUE YOUR MONEY AND TIME
                        </div>
                    </div>
                    <div style={mystyle} className="lg:text-6xl md:text-4xl xss:text-3xl xs:text-lg font-bold text-[#363636] lg:!leading-[80px] md:!leading-[60px] xss:!leading-[40px] xs:!leading-[30px]">
                        Harnessing Compatibility
                    </div>
                    <div style={mystyle} className=" lg:text-6xl md:text-4xl xss:text-3xl xs:text-sm text-[#363636] lg:!leading-[80px] md:!leading-[60px] xss:!leading-[40px] xs:!leading-[30px]">
                        for Maximum  Advantage
                    </div>
                    <img className=" inline-block lg:mt-12 xs:mt-5 xs:w-full" src={image}/>
                </div>
                {/* Second Column */}  
                <div style={mystyle}>
                    <p className="lg:text-3xl md:text-2xl lg:mx-14 lg:mr-28 lg:mt-72 text-[#363636]">
                            NaqsTech Digital is the best digital marketing agency in California and New York. We are your trusted partner for all the best digital marketing services.
                        <p className="mt-6">
                            Our complete services, including SEO, PPC, copywriting, and web design, are tailored to your unique business goals. From eCommerce to B2B, we have the expertise to grow your business.
                        </p>
                        <p className="mt-6">
                            Choose NaqsTech Digital and experience the difference a true digital marketing partner can make.
                        </p>
                    </p>
                    <button style={mystyle} className="text-base lg:ml-14 xs:ml-0 lg:mb-16 xs:mb-10 mt-8 align-middle bg-[#363636] text-white pl-6 pr-6 pt-3 pb-3 inline rounded-md hover:bg-[#F48029]">Get an Instant Quote</button>
                </div>
            </div>
            <div style={mystyle} className="lg:px-20 xs:px-6">
                <p className=" text-center lg:mt-[90px] xs:mt-1 font-[700] lg:text-6xl md:text-4xl xss:text-3xl xs:text-lg text-[#363636]  ">
                Our Top Digital Marketing Services in New York                </p>
                <p className=" lg:mt-[50px] xs:mt-4 text-center lg:text-2xl xss:text-lg xs:text-lg text-[#363636]">
                    Planning your Success
                </p>
                <p className="lg:mt-[30px] xs:mt-4 text-center lg:text-2xl xss:text-lg xs:text-sm text-[#363636]">
                    Streamlined best digital marketing services for easy business integration
                </p>
            </div>
            </div>
        );
    }
}

export default HamzaSection2