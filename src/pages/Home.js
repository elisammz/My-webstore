import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/products";

// Components
import GlobalStyles from "../components/styles/Global";
import Hero from "../components/Hero";
import Navbar from "../components/styles/Navbar.styled";

const Home = () => {
  const { featured } = useContext(ProductContext);
  console.log({ featured });

  if (!featured.length) {
    return (
      <>
        <GlobalStyles />
        <Navbar />
        <h2>No Featured Products 🚧</h2>
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <Hero />
      <>
        <section className="featured-list">
          {featured.map(({ id, image: image, title }) => (
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
    </>
  );
};

export default Home;
