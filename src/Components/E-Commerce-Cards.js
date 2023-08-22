import React from "react";
import img1 from "../img/One Page Ordering.png";
import img2 from "../img/Product Filtering.png";
import img3 from "../img/Multi-Channel E-commerce Marketing.png";
import img4 from "../img/search.png";
import img5 from "../img/Currency Dollar.png";
import img6 from "../img/E-Commerce Social Media Marketing.png";
import img7 from "../img/E-Commerce Content Writing.png";
import img8 from "../img/E-Commerce Display Advertising.png";

function Card({ image, title }) {
  return (
    <div className="bg-[#F48029] rounded-[5px] xs:py-[20px] md:py-[40px] xs:px-[10px] xl:px-[0px] xs:mx-[5px] md:mx-[7px] xs:mb-[5px] xs:flex flex-col items-center content-center">
    <img
      className="text-center xs:h-[50px] xs:w-[50px] md:mb-[15px]"
      src={image}
      alt={title}
    />
    <p className="text-white flex xs:font-400 text-center content-center md:text-[18px] md:leading-[25px] xs:text-[14px] xs:leading-[19px] xs:mt-[8px] xs:mb-[10px] ">
      {title}
    </p>
</div>


  );
}

function ECommerceCards() {
  const CardsData = [
    {
      title: "One Page Ordering",
      image: img1,
    },
    {
      title: "Product Filtering",
      image: img2,
    },
    {
      title: "Multi-Channel E-commerce Marketing",
      image: img3,
    },
    {
      title: "Optimization Automation",
      image: img4,
    },
    {
      title: "Payment Integration",
      image: img5,
    },
    {
      title: "E-Commerce Social Media Marketing",
      image: img6,
    },
    {
      title: "E-Commerce Content Writing",
      image: img7,
    },
    {
      title: "E-Commerce Display Advertising",
      image: img8,
    },
  ];

  return (
    <div className="flex justify-center items-center xs:mt-[30px] xs:mb-[50px] xs:px-[30px] lg:px-[100px] xl:px-[200px]">
      <div className="grid w-full xs:grid-cols-2 md:grid-cols-4 xs:gap-y-1 md:gap-y-6">
        {CardsData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
}

export default ECommerceCards;
