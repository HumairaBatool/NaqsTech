import React from "react";
import PropTypes from "prop-types"; 
import news1 from "../img/wp.webp";
import news2 from "../img/analysis.webp";
import news3 from "../img/digitals.webp";


function NewsItem({ imageSrc, title, content }) {
  return (
    <div className="shadow-lg overflow-hidden rounded bg-white">
      <img src={imageSrc} alt="" />
      <h3 className="p-8 text-[23px] font-[700]">{title}</h3>
      <p className="px-8 text-[20px]">{content}</p>
    </div>
  );
}

NewsItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function LatestNews() {
  const newsItems = [
    {
      imageSrc: news1,
      title:
        "5 Key Elements of Effective WordPress Web Development Services in California",
      content:
        "In the dynamic digital landscape of California, effective web development services in California are crucial for businesses to establish a solid online …",
    },
    {
      imageSrc: news2,
      title: "Why is Google Analytics Essential to SEO Services in California",
      content:
        "In the competitive online landscape, search engine optimization (SEO) plays a crucial role in driving organic traffic and improving the visibility of …",
    },
    {
      imageSrc: news3,
      title: "How a Digital Marketing Agency in California Can Help Your SEO Efforts",
      content:
        "In today's digital world, organizations must have a strong online presence in order to live and succeed. Search Engine Optimization (SEO) is …",
    },
  ];

  return (
    <div className="pt-10">
      <div className="max-auto">
        <div className="relative">
          <div className="pt-20 text-center text-[45px] font-[700]">
            Latest News
          </div>
          <div className="p-20 gap-6 grid lg:grid-cols-3 sm:grid-cols-1 auto-rows-fr">
            {newsItems.map((item, index) => (
              <NewsItem
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
        <div className="pb-28 pt-80 bg-[#F48029] text-center -mt-[418px]">
          <button className="py-3 mt-32 px-6 rounded bg-[#363636] h-14 w-60 p-1 hover:bg-white hover:text-black text-white">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;