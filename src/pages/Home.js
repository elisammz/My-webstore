import React, { useContext } from "react";

import { ProductContext } from "../context/products";

// Components
import { Navbar } from "../components/styles/Navbar.styled";
import Hero from "../components/styles/Hero.styled";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
