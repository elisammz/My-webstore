import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = product.find((product) => {
    return product.id === id;
  });
  if (product) {
    return <h3>Loading...</h3>;
  }
  const { image: url, title, description, price } = product;

  return (
    <section className="product-details">
      <div className="detail-image">
        <img src={url} alt="" />
      </div>
      <div className="detail-description">
        <h2>{title}</h2>
        <p>{description}</p>

        <h4>Price - $ {price}</h4>
        <button>Add to Cart</button>
      </div>
    </section>
  );
};

export default ProductDetails;
