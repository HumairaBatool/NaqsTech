import React, { Component } from "react";
import InnerCard from "./InnerCard";

import image1 from "../img/icon5.webp";
import image2 from "../img/icon2.webp";
import image3 from "../img/icon3.webp";

  function GraphicDesignCards() {
    const datials = [
        {
            image: image1,
            heading: 'SEO'
        },
        {
            image: image2,
            heading: 'Web Development'
        },
        {
            image: image3,
            heading: 'E-Commerce'
        },
    ];

    return(
        <div className=" xs:px-[10px] xs:py-[10px] xl:px-[150px]">
        <div className="xs:relative lg:relative-none  grid md:grid-cols-3 xs:grid-cols-2 lg:-mt-16 md:-mt-[68px] xs:-mt-[70px] ">
          {datials.map((el) => (
            <InnerCard image={el.image} heading={el.heading} />
          ))}
        </div>
      </div>
    );
}

export default GraphicDesignCards;
