import React from "react";
import PropTypes from "prop-types"; 
import image1 from "../img/wp.webp";
import image2 from "../img/analysis.webp";
import image3 from "../img/digitals.webp";

import image4 from '../img/creative.webp';
import image5 from '../img/e-commerce.webp';
import image6 from '../img/digitalmarketing.webp';

function BlogItem({ imageSrc, title, content }) {
  return (
    <div className="shadow-lg overflow-hidden rounded bg-white pb-8">
    <div className="relative">
      <img src={imageSrc} alt="" class="hover:scale-110 w-full h-full transition duration-500 cursor-pointer object-cover"/>
      </div>
      <h3 className="md:p-8 xs:p-7 text-[20px] font-[700] leading-[30px] xl:h-36 lg:h-52 md:h-28 xs2:h-32 xs:h-48">{title}</h3>
      <p className="md:px-8 xs:px-7 md:pb-0 xs:pb-7 text-[16px] text-[#7A7A7A]">{content}</p>
    </div>
  );
}

BlogItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function BlogPosts() {
  const blogItems = [
    {
      imageSrc: image1,
      title:
        "5 Key Elements of Effective WordPress Web Development Services in California",
      content:
        "In the dynamic digital landscape of California, effective web development services in California are crucial for businesses to establish a solid online …",
    },
    {
      imageSrc: image2,
      title: "Why is Google Analytics Essential to SEO Services in California",
      content:
        "In the competitive online landscape, search engine optimization (SEO) plays a crucial role in driving organic traffic and improving the visibility of …",
    },
    {
      imageSrc: image3,
      title: "How a Digital Marketing Agency in California Can Help Your SEO Efforts",
      content:
        "In today's digital world, organizations must have a strong online presence in order to live and succeed. Search Engine Optimization (SEO) is …",
    },
    {
        imageSrc: image4,
        title: "How to Choose the Perfect Graphic Design Services in California for Your Brand?",
        content:
        'Graphic design plays a crucial role in shaping your brand’s visual identity. Whether creating a captivating logo, designing a stunning website, or …'      },
      {
        imageSrc: image5,
        title: "7 Ways Ecommerce Marketing Services in California Can Boost Your Online Sales",
        content:
           'Online sales are getting increasingly prevalent in today’s digital age. The rivalry is becoming more difficult as Ecommerce marketing services in California …'      },
      {
        imageSrc: image6,
        title: "How Can a Digital Marketing Agency in California Transform Your Business",
        content:
            'In today’s extremely competitive digital market, businesses that want to succeed and stay ahead of the curve must have a strong online …'      },


  ];

  return (
    <div>
      <div className="max-auto">
        <div className="relative">
        <div className="md:pt-20 xs:pt-8 md:pb-0 xs:pb-8 text-center md:text-[50px] xs:text-[28px] md:font-[700] xs:font-[700] text-[#363636">
        Our Blog posts
      </div>

          <div className=" xs:p-7 lg:px-28 md:px-8 gap-6 grid lg:grid-cols-3 xs:grid-cols-1 auto-rows-fr">
            {blogItems.map((item, index) => (
              <BlogItem
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;