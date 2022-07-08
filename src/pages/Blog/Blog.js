import React from "react";
import About from "../Home/About";
import Footer from "../Shared/Footer";

const Blog = () => {
  return (
    <div>
      <h1 className="text-5xl text-center py-12 capitalize font-bold text-white bg-primary">
        blog list{" "}
      </h1>
      <About />
      <Footer/>
    </div>
  );
};

export default Blog;
