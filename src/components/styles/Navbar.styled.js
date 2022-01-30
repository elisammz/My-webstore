import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarListed = styled.ul`
  justify-content: center;
  text-decoration: none;
  background-color: white;
  padding: 20px 0;
  margin: 0;

  .styledLink {
    color: #9a9aa1;
    text-decoration: none;
    display: inline;
    list-style: none;
    line-height: 40px;
    margin-left: 15px;
  }

  .styledLink:hover {
    color: #546fff;
  }
`;

function NavBar() {
  return (
    <NavbarListed>
      <Navbar expand="lg">
        <Container>
          <Link to="/home" className="styledLink">
            Genealogy
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home" className="styledLink">
                Home
              </Link>
              <Link to="/products" className="styledLink">
                Products
              </Link>
              <Link to="/cart" className="styledLink">
                Cart
              </Link>
              <Link to="/checkout" className="styledLink">
                Checkout
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavbarListed>
  );
}
export default NavBar;
