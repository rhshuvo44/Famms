import About from "./About";
import Arrival from "./Arrival";
import HomeFooter from "./HomeFooter";
import HomeProducts from "./HomeProducts";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Slider />
      <About />
      <Arrival />
      <HomeProducts />
      <Subscribe />
      <Testimonial />
      <HomeFooter/>
    </div>
  );
};

export default Home;
