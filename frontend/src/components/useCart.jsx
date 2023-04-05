import { useState, useEffect } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const itemIndex = cart.findIndex((item) => item.product.id === product.id);
    if (itemIndex === -1) {
      setCart([...cart, { product, quantity }]);
    } else {
      const newCart = [...cart];
      newCart[itemIndex].quantity += quantity;
      setCart(newCart);
    }
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((cartItem) => cartItem !== item);
    setCart(newCart);
  };

  return { cart, addToCart, removeFromCart };
};

export default useCart;
