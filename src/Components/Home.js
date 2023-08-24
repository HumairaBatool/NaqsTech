import React from "react";
import Section1 from "./Home-Section1";
import HomeCards from "./Home-Cards";
import HamzaSection1 from './Hamza-Section1';
import Section2 from "./Home-Section2";
import HamzaSection2 from './Hamza-Section2';
import FaqsGetInTouch from './HomeFaqsGetInTouch';
import Section3 from "./Home-Section3";
import LatestNews from './Latest-News';
import SliderHome from "./SliderHome";
import SliderHomeTwo from "./SliderHomeTwo"

function Home() {
  return (
    <div>
      <Section1></Section1>
      <HomeCards></HomeCards>
      <HamzaSection1></HamzaSection1>
      <Section2></Section2>
      <HamzaSection2></HamzaSection2>
      <GDReviews></GDReviews>
      <FaqsGetInTouch></FaqsGetInTouch>
      <SliderHome></SliderHome>
      <SliderHomeTwo></SliderHomeTwo>
      <Section3></Section3>
      <LatestNews></LatestNews>
    </div>
  );
}
export default Home;
