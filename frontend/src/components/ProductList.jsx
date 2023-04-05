import React from "react";
import useCart from "./useCart";

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} €
            <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
