import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Welcome to Genealogy</h2>
      <h3>Subtitle</h3>
      <Link className="btn" to="/products">
        View All Products
      </Link>
    </section>
  );
};

export default Hero;
