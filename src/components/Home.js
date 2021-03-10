import React from "react";
import About from "./About";
import Header from "./Header";
import Shortener from "./Shortener";
import Showcase from "./Showcase";

const Home = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Shortener />
      <About />
    </>
  );
};

export default Home;
