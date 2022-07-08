import React from "react";
import About from "./About";
import Arrival from "./Arrival";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <About/>
      <Arrival/>
    </div>
  );
};

export default Home;
