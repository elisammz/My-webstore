import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { ProductContext } from "../context/products";

const Products = () => {
  const { products } = useContext(ProductContext);

  if (!products.length) {
    return <h3>No Products Available</h3>;
  }

  return (
    <section className="products">
      <h3>Products are Now Available</h3>;
    </section>
  );
};

export default Products;
