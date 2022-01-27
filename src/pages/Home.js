import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { ProductContext } from "../context/products";

// Components
import Header from "../components/Header";

function Home() {
  return <Hero />;
}

export default Home;
