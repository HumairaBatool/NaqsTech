import React, { useState } from "react";

import img1 from "../img/Group 1000001826.png";
import img2 from "../img/Group 1000001827.png";
import img3 from "../img/Group 1000001828.png";
import img4 from "../img/Group 1000001830.png";

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
});

    const logos = [
        img1,
        img2,
        img3,
        img4,
        img1,
        img2,
        img3,
        img4

      ];
    return (
        <div className="px-20 overflow-hidden display-block">
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