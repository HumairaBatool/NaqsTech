import React, { Component } from "react";


class WebCards extends Component {

    render() {
        const cardData = [
            { id: 'c1', bgColor: '#F48029', title: 'Custom Web Design', imageUrl:  require('../webImg/c1.svg').default, },
            { id: 'c2', bgColor: '#F48029', title: 'Responsive Web Development', imageUrl: require('../webImg/c2.svg').default, },
            { id: 'c3', bgColor: '#F48029', title: 'Conversion Optimization', imageUrl: require('../webImg/c3.svg').default, },
            { id: 'c4', bgColor: '#F48029', title: 'Search Engine Optimization', imageUrl: require('../webImg/c4.svg').default, },
        ];

        const cardData2 = [
            { id: 'c5', bgColor: '#F48029', title: 'Web Hosting & Maintaining', imageUrl: require('../webImg/c5.svg').default, },
            { id: 'c6', bgColor: '#F48029', title: 'Training', imageUrl: require('../webImg/c6.svg').default, },
            { id: 'c7', bgColor: '#F48029', title: 'E-Commerce', imageUrl: require('../webImg/c7.svg').default, },
            { id: 'c8', bgColor: '#F48029', title: 'Landing Pages', imageUrl: require('../webImg/c8.svg').default, },
        ];

      return (
            <div className=" flex flex-col justify-center items-center">
                 {/* 3rd Section 4 Coloumns */}
                <div className="grid grid-cols-2 md:grid-cols-4 xs:gap-2 xs3:w-auto gap-4 md:gap-3 text-center mt-10 xs:mb-2  xl:mt-20">
                    {cardData.map((card) => (
                    <div key={card.id} className={`w-auto xs:h-44 xs:w-[7.5em] md:h-[13.2em] md:w-[10.3em] lg:h-[13em] lg:w-[12.5em] xl:w-[11.5em] xs3:w-[11em] bg-${card.bgColor} bg-[#F48029] rounded-md flex flex-col justify-center items-center `}>
                        <img className="xs:mt-6 xs:w-[50px]" src={card.imageUrl} alt={` ${card.title}`} />
                        <h1 className="text-white xs3:p-2 xs:text-[14px] md:text-lg md:leading-[25px] text-[20px] mt-2">{card.title}</h1>
                    </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 xs:gap-2 xs3:w-auto md:gap-3 gap-4 text-center">
                    {cardData2.map((card) => (
                    <div key={card.id} className={`w-auto xs:h-44 xs:w-[7.5em] xs3:w-[11em] md:h-[13.2em] lg:h-[13em] lg:w-[12.5em] xl:w-[11.5em] md:w-[10.3em] md:mt-6 bg-${card.bgColor} bg-[#F48029] rounded-md flex flex-col justify-center items-center `}>
                    <img  className="xs:mt-6 xs:w-[50px]" src={card.imageUrl} alt={` ${card.title}`} />
                        <h1 className="text-[20px] xs3:p-2 xs:text-[14px] md:text-lg md:leading-[25px] text-white mt-6">{card.title}</h1>
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default WebCards;
