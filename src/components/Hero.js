import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Navbar from "./styles/Navbar.styled";
import { StyledHeader } from "./styles/Header.styled";
import Button from "./styles/Button.styled";

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default function Hero() {
  return (
    <>
      <Navbar />
      <StyledHeader className=" flex-lg-row">
        <h1>Technology that saves lives</h1>
        <h2>Next generation of algorithms for accurate genotype prediction</h2>
        <Button>
          <Link to="/products" style={linkStyle}>
            View products
          </Link>
        </Button>
      </StyledHeader>
      <br />
      <p> Section with services...under construction 🚧👷🏽‍♂️ </p>
    </>
  );
}
