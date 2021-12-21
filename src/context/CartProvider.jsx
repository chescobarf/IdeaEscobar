import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartConsumer = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleCart = (item) => {
    console.log(item);
  };

  return (
    <CartContext.Provider value={{ handleCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
