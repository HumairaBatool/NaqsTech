import React from "react";
import InnerCard from './InnerCard';
import img2 from '../img/icon2.webp';
import img3 from '../img/icon3.webp';
import img4 from '../img/icon4.webp';

function Card() {
        const datials = [
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
            <div className="flex justify-center"> {/* Add this container */}
            <div className="xs:w-full xs:max-w-full md:w-full md:max-w-full xs:ml-3 xs:mr-3 relative w-full grid md:grid-cols-3 xs:grid-cols-2 lg:-mt-16 md:-mt-[68px] xs:-mt-[100px] md:pb-[20px] mx-auto"> {/* Center align and add mx-auto */}
                {datials.map(el => <InnerCard image={el.image} heading={el.heading} />)}
            </div>
        </div>
        );
    }

export default Card;