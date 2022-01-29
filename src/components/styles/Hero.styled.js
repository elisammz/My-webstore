import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { render } from "@testing-library/react";

const HeroSection = styled.section`
  margin: 0 auto;
  text-align: center;
  margin-top: 120px;
`;

const linkStyle = {
  color: "red",
};

function Hero() {
  return (
    <HeroSection>
      <h2>Welcome to Genealogy</h2>
      <h3>Subtitle</h3>
      <Link to="/products" style={linkStyle}>
        View All Products
      </Link>
    </HeroSection>
  );
}

export default Hero;
