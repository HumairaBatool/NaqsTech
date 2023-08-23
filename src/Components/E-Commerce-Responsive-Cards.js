import React, { Component } from "react";

import img2 from "../img/icon5.webp";
import img3 from "../img/icon2.webp";
import img4 from "../img/icon3.webp";
import InnerCard from "./InnerCard";

function ECommerceResponsiveCards() {
  const datials = [
    {
      image: img2,
      heading: "SEO",
    },
    {
      image: img3,
      heading: "Web Development",
    },
    {
      image: img4,
      heading: "Graphic Design",
    },
  ];

  return (
    <div className=" xs:px-[10px] xs:py-[10px] xl:px-[150px]">
      <div className="xs:relative lg:relative-none  grid md:grid-cols-3 xs:grid-cols-2 lg:-mt-16 md:-mt-[68px] xs:-mt-[70px] ">
        {datials.map((el) => (
          <InnerCard image={el.image} heading={el.heading} />
        ))}
      </div>
    </div>
  );
}
export default ECommerceResponsiveCards;
