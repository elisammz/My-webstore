import React, { useContext } from "react";

import { ProductContext } from "../context/products";

// Components
import GlobalStyles from "../components/styles/Global";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default Home;
