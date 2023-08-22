import React, { Component } from "react";

import img2 from "../img/icon5.webp";
import img3 from "../img/icon2.webp";
import img4 from "../img/icon3.webp";

class InnerCard extends Component {
  render() {
    return (
      <div className="xs:mx-[10px] xs:mb-[10px] rounded-md bg-white shadow-lg  text-center flex content-center items-center justify-center shadow-orange-300 ">
        <div className="xs:px-[15px] xs:py-[22px] md:py-[50px]">
          <span className="flex items-center justify-center content-center xs:mb-[15px] ">
            <img src={this.props.image} alt="icon" />
          </span>
          <h3 className="xs:mt-[8px] xs:text-[14px] md:text-[18px] text-[#363636] ">{this.props.heading}</h3>
        </div>
      </div>
    );
  }
}

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
