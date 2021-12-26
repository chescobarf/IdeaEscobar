import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartConsumer = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);

  const handleCart = (quantity, data) => {
    data.quantity = quantity;
    setCart([...cart, data]);
    setQuantityCart(quantityCart + quantity);
  };

  const addItem = (quantity, data) => {
    //Revisamos si existe el articulo en el carrito
    if (isInCart(data.id)) {
      let arr = cart.find((i) => i.id === data.id);
      arr.quantity = arr.quantity + quantity;
      setCart([...cart]);
    } else {
      let newObj = { ...data, quantity: quantity };
      console.log(newObj);
      setCart([...cart, newObj]);
    }
  };

  const removeItem = (itemID) => {
    //Filter de la data y quitarla de carrito
    const newArray = cart.filter((item) => item.id !== itemID);
    setCart(newArray);
  };

  const clearItems = () => {
    setCart([]);
    setQuantityCart(0);
  };

  const isInCart = (itemID) => cart.some((product) => product.id === itemID);

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityCart,
        handleCart,
        addItem,
        removeItem,
        clearItems,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
