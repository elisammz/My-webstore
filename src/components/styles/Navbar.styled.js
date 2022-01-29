import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarListed = styled.ul`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
const linkStyle = {
  color: "grey",
};

function NavBar() {
  return (
    <NavbarListed>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <Link to="/home" style={linkStyle}>
            Genealogy
          </Link>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/home" style={linkStyle}>
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/products" style={linkStyle}>
                  Products
                </Link>
              </li>

              <li class="nav-item">
                <Link to="/cart" style={linkStyle}>
                  Cart
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/checkout" style={linkStyle}>
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavbarListed>
  );
}
export default NavBar;
