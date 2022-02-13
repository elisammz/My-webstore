import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/products";

// Components
import GlobalStyles from "../components/styles/Global";
import Navbar from "../components/styles/Navbar.styled";

const Products = () => {
  const { products } = useContext(ProductContext);

  if (!products.length) {
    return (
      <>
        <GlobalStyles />
        <Navbar />
        <h2>No Products Available 🛠</h2>
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <section className="products">
        {products.map(({ image: image, title, id }) => (
          <div key={id} className="featured-product">
            <div className="product-image">
              <img src={image} alt={title} />
            </div>
            <Link className="btn product-link" to={`products/${id}`}>
              Details
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;
