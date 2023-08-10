import React from "react";
import InnerCard from './InnerCard';
import img1 from '../img/icon5.webp';
import img2 from '../img/icon2.webp';
import img3 from '../img/icon3.webp';
import img4 from '../img/icon4.webp';

function Card() {
        const datials = [
            {
                image: img1,
                heading: 'SEO'
            },
            {
                image: img2,
                heading: 'Web Development'
            },
            {
                image: img3,
                heading: 'Graphic Design'
            },
            {
                image: img4,
                heading: 'E-Commerce Services'
            },
        ];

        return(
            <div className=" space-x-5 flex justify-evenly align-middle grid-cols-4  px-48 -mt-16 mb-44">
                {datials.map(el=> <InnerCard image={el.image} heading={el.heading} />)}
            </div>
        );
    }

export default Card;