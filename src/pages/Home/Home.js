import React from "react";
import About from "./About";
import Arrival from "./Arrival";
import HomeProducts from "./HomeProducts";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Slider />
      <About/>
      <Arrival/>
      <HomeProducts/>
      <Subscribe/>
      <Testimonial/>
    </div>
  );
};

export default Home;
