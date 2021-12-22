import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartConsumer = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleCart = (quantity, data) => {
    console.log(quantity);

    setCart([...cart, data]);
  };

  console.log(cart.length);

  return (
    <CartContext.Provider value={{ handleCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
