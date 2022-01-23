import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";

// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";

// Components
import Header from "./components/Header";

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  return (
    <Router>
      <Header />

      <Admin />
    </Router>
  );
};

export default App;
