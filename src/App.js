import React from "react";
import { Routes, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import ProductContextProvider from "./context/products";

// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";

// Components

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
