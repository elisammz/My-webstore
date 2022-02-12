import React, { useContext } from "react";

import { ProductContext } from "../context/products";

// Components
import GlobalStyles from "../components/styles/Global";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <GlobalStyles />
      <Hero />
    </div>
  );
}

export default Home;
