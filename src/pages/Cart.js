import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const history = useNavigate();
  const { cart, total, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  if (!cart.length) {
    return <h3>Empty Cart</h3>;
  } else {
    return (
      <section className="cart">
        <header>
          <h2>My Cart</h2>
        </header>
      </section>
    );
  }
};

export default Cart;
