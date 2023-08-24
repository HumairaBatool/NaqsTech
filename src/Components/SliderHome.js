import React, { useState } from "react";

import img20 from "../img/client-logos/20.png";
import img21 from "../img/client-logos/21.png";
import img22 from "../img/client-logos/22.png";
import img23 from "../img/client-logos/23.png";
import img24 from "../img/client-logos/24.png";
import img25 from "../img/client-logos/25.png";
import img26 from "../img/client-logos/26.png";
import img27 from "../img/client-logos/27.png";
import img28 from "../img/client-logos/28.png";
import img29 from "../img/client-logos/29.png";
import img30 from "../img/client-logos/30.png";
import img31 from "../img/client-logos/31.png";
import img32 from "../img/client-logos/32.png";
import img33 from "../img/client-logos/33.png";
import img34 from "../img/client-logos/34.png";
import img35 from "../img/client-logos/35.png";
import img36 from "../img/client-logos/36.png";
import img37 from "../img/client-logos/37.png";
import img38 from "../img/client-logos/38.png";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHome = () => {
    const [settings] = useState({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        pauseDuration: 5000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1023, // Add this breakpoint
                settings: {
                    slidesToShow: 3, // Change to 3 slides
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5, // Keep it as 5 slides
                }
            }
        ]
    });

    const logos = [
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
        img38

    ];
    return (
        <div className="md:px-14 lg:px-40 overflow-hidden display-block">
            <div className="md:py-20 xs:py-10 text-center lg:text-[35px] md:text-[40px] xs:text-[30px] md:font-[700] xs:font-[700] text-[#363636]">
                Our Satisfied Clients
            </div>
            <Slider {...settings}>
                {logos.map((logos, index) => (
                    <div key={index} className="container">
                        <img src={logos} alt='a' />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
export default SliderHome;