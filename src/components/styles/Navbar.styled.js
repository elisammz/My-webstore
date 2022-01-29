import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
render(
  <nav class="d-flex bg-light fixed-top ">
    <ul>
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <li>Checkout</li>
    </ul>
  </nav>
);
