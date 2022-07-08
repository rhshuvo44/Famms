import React from "react";
import About from "./About";
import Arrival from "./Arrival";
import Slider from "./Slider";
import Subscribe from "./Subscribe";

const Home = () => {
  return (
    <div>
      <Slider />
      <About/>
      <Arrival/>
      <Subscribe/>
    </div>
  );
};

export default Home;
