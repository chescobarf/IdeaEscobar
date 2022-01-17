import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartConsumer = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);

  const addItem = (quantity, data) => {
    //Revisamos si existe el articulo en el carrito
    if (isInCart(data.id)) {
      let arr = cart.find((i) => i.id === data.id);
      arr.quantity = arr.quantity + quantity;
      setCart([...cart]);
      setQuantityCart(quantityCart + quantity);
    } else {
      let newObj = { ...data, quantity: quantity };
      console.log(newObj);
      setCart([...cart, newObj]);
      setQuantityCart(quantityCart + quantity);
    }
  };

  const removeItem = (itemID) => {
    //Filter de la data y quitarla de carrito
    const itemToDelete = cart.find((e) => e.id === itemID);
    const newArray = cart.filter((item) => item.id !== itemID);
    setCart(newArray);
    setQuantityCart(quantityCart - itemToDelete.quantity);
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
