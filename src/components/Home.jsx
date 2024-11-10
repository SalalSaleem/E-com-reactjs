import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Products from "./Products";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Testimonial />
      <Products />
    </div>
  );
}

export default Home;
