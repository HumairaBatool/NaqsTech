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
    <div className="bg-[#F48029] rounded-lg w-50 h-60 flex flex-col items-center justify-center">
      <img className=" sm:py-0 md:py-3 " src={image} alt={title} />
      <p className="text-white font-semibold text-center md:pb-5 xs:pb-0 text-[18px]">
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
    <div className="flex justify-center items-center">
      <div className="grid w-full xs:grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 xs:mx-10 lg:mx-60">
        {CardsData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
}

export default ECommerceCards;
