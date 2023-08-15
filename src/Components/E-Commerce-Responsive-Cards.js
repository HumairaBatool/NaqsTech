import React, { Component } from "react";
import InnerCard from "./InnerCard";

import img2 from "../img/icon5.webp";
import img3 from "../img/icon2.webp";
import img4 from "../img/icon3.webp";

  function ECommerceResponsiveCards() {
    const datials = [
        {
            image: img2,
            heading: 'SEO'
        },
        {
            image: img3,
            heading: 'Web Development'
        },
        {
            image: img4,
            heading: 'Graphic Design'
        },
    ];

    return(
        <div className="flex justify-center"> {/* Add this container */}
        <div className="xs:px-8 lg:px-20 relative w-full grid md:grid-cols-3 xs:grid-cols-2 lg:-mt-16 md:-mt-[68px] xs:-mt-[70px] md:pb-[20px] mx-auto"> {/* Center align and add mx-auto */}
            {datials.map(el => <InnerCard image={el.image} heading={el.heading} />)}
        </div>
    </div>
    );
}
export default ECommerceResponsiveCards;
