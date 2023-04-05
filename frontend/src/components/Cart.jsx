import React from "react";
import useCart from "./useCart";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - {item.quantity} x {item.product.price} € ={" "}
            {item.quantity * item.product.price} €
            <button type="button" onClick={() => removeFromCart(item)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
