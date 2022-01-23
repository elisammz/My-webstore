import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { ProductContext } from "../context/products";

const Home = () => {
  const { featured } = useContext(ProductContext);
  if (!featured.length) {
    return <h3>No Featured Products</h3>;
  } else {
    return (
      <>
        <Hero />
      </>
    );
  }
};

export default Home;
