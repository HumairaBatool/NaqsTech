import React from "react";
import Section1 from "./Home-Section1";
import HomeCards from "./Home-Cards";
import HamzaSection1 from './Hamza-Section1';
import Section2 from "./Home-Section2";
import HamzaSection2 from './Hamza-Section2';
import HomeReviews from './Home-Reviews';
import FaqsGetInTouch from './FaqsGetInTouch';
import Slider from './Slider';
import Section3 from "./Home-Section3";
import HamzaLatestNews from './Hamza-Latest-News';
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Section1></Section1>
      <HomeCards></HomeCards>
      <HamzaSection1></HamzaSection1>
      <Section2></Section2>
      <HamzaSection2></HamzaSection2>
      <HomeReviews></HomeReviews>
      <FaqsGetInTouch></FaqsGetInTouch>
      {/*Slider Code */}
      <Section3></Section3>
      <HamzaLatestNews></HamzaLatestNews>
      <Footer></Footer>
    </div>
  );
}
export default Home;
