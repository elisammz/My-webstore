import React, { useState, useEffect, createContext } from "react";
import { API } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listProducts } from "../api/queries";
import { processOrder } from "../api/mutations";

export const ProductContext = createContext({ products: [], featured: [] });

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails,
    };
    try {
      await API.graphql({ query: processOrder, variables: { input: payload } });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await API.graphql({
        query: listProducts,
        authMode: "API_KEY",
      });
      const products = data.listProducts.items;
      const featured = products.filter((product) => {
        return !!products.featured;
      });
      setProducts(products);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider value={{ products, featured, loading, checkout }}>
      {children}
    </ProductContext.Provider>
  );
};
