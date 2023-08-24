import React, { useState } from "react";

import img1 from "../img/client-logos/01.png";
import img2 from "../img/client-logos/02.png";
import img3 from "../img/client-logos/03.png";
import img4 from "../img/client-logos/04.png";
import img5 from "../img/client-logos/05.png";
import img6 from "../img/client-logos/06.png";
import img7 from "../img/client-logos/07.png";
import img8 from "../img/client-logos/08.png";
import img9 from "../img/client-logos/09.png";
import img10 from "../img/client-logos/10.png";
import img11 from "../img/client-logos/11.png";
import img12 from "../img/client-logos/12.png";
import img13 from "../img/client-logos/13.png";
import img14 from "../img/client-logos/14.png";
import img15 from "../img/client-logos/15.png";
import img16 from "../img/client-logos/16.png";
import img17 from "../img/client-logos/17.png";
import img18 from "../img/client-logos/18.png";
import img19 from "../img/client-logos/19.png";

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
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19

      ];
    return (
        <div className="md:px-14 lg:px-40 overflow-hidden display-block">
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