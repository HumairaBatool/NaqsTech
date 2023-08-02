import React from 'react';
import img1 from '../img/One Page Ordering.png';
import img2 from '../img/Product Filtering.png';
import img3 from '../img/Multi-Channel E-commerce Marketing.png';
import img4 from '../img/search.png';
import img5 from '../img/Currency Dollar.png';
import img6 from '../img/E-Commerce Social Media Marketing.png';
import img7 from '../img/E-Commerce Content Writing.png';
import img8 from '../img/E-Commerce Display Advertising.png';

function Card({ image, title }) {
  return (
    <div className="bg-[#F48029] rounded-lg w-70 h-80 flex flex-col items-center justify-center">
      <img className="lg:px-14 py-5 " src={image} alt={title} />
      <p className="text-white font-semibold text-center pb-5">{title}</p>
    </div>
  );
}


function ECommerceCards() {
  const CardsData = [
    {
      title: 'One Page Ordering',
      image: img1,
    },
    {
      title: 'Product Filtering',
      image: img2,
    },
    {
      title: 'Multi-Channel E-commerce Marketing',
      image: img3,
    },
    {
      title: 'Optimization Automation',
      image: img4,
    },
    {
      title: 'Payment Integration',
      image: img5,
    },
    {
      title: 'E-Commerce Social Media Marketing',
      image: img6,
    },
    {
      title: 'E-Commerce Content Writing',
      image: img7,
    },
    {
      title: 'E-Commerce Display Advertising',
      image: img8,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-y-8 gap-x-4 lg:mx-80 sm:mx-20">
      {/* Map through the cardsData array to create individual cards */}
      {CardsData.map((card, index) => (
        <Card key={index} title={card.title} image={card.image} />
      ))}
    </div>
  );
}

export default ECommerceCards;
