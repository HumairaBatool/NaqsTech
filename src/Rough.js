import React, { useState, useEffect } from "react";

import img1 from "../Slider/01.svg";
import img2 from "../Slider/02.svg";
import img3 from "../Slider/04.svg";
import img4 from "../Slider/05.svg";
import img5 from "../Slider/06.svg";
import img6 from "../Slider/07.svg";
import img7 from "../Slider/08.svg";
import img8 from "../Slider/11.svg";
import img9 from "../Slider/12.svg";
import img10 from "../Slider/13.svg";
import img11 from "../Slider/16.svg";
import img12 from "../Slider/17.svg";
import img13 from "../Slider/18.svg";
import img14 from "../Slider/19.svg";
import img15 from "../Slider/21.svg";
import img16 from "../Slider/25.svg";
import img17 from "../Slider/27.svg";
import img18 from "../Slider/29.svg";
import img19 from "../Slider/30.webp";
import img20 from "../Slider/32.svg";
import img21 from "../Slider/33.webp";
import img22 from "../Slider/34.webp";
import img23 from "../Slider/37.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHome = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
    img19,
    img20,
    img21,
    img22,
    img23,
    // Add more logos here
  ];
  return (
    <div className="px-20">
      <Slider {...settings}>
        {logos.map((logos, index) => (
          <div key={index} className="container">
            <img src={logos} alt="a" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderHome;
