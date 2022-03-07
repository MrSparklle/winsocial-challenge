import {
  Cta,
  Statistics,
  Footer,
  Navbar,
  Newsletter,
  Offers,
  Testyimony,
  VirtualVisit,
} from "components";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Cta />
      <VirtualVisit />
      <Statistics />
      <Offers />
      <Testyimony />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
