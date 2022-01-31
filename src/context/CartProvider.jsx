import React, { createContext, useContext, useState } from "react";
import { toastAddToCart } from "../helpers/toast";
const CartContext = createContext();

export const CartConsumer = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const [quantityProducts, setQuantityProducts] = useState(0);
  const addItem = (quantity, data) => {
    if (isInCart(data.id)) {
      let arr = cart.find((i) => i.id === data.id);
      arr.quantity = arr.quantity + quantity;
      setCart([...cart]);
      setQuantityCart(quantityCart + quantity);
      setQuantityProducts(quantityProducts);
      toastAddToCart();
    } else {
      let newObj = { ...data, quantity: quantity };
      setCart([...cart, newObj]);
      setQuantityCart(quantityCart + quantity);
      setQuantityProducts(quantityProducts + 1);
      toastAddToCart();
    }
  };

  const removeItem = (itemID) => {
    const itemToDelete = cart.find((e) => e.id === itemID);
    const newArray = cart.filter((item) => item.id !== itemID);
    setCart(newArray);
    setQuantityCart(quantityCart - itemToDelete.quantity);
    setQuantityProducts(quantityProducts - 1);
  };

  const clearItems = () => {
    setCart([]);
    setQuantityCart(0);
    setQuantityProducts(0);
  };

  const isInCart = (itemID) => cart.some((product) => product.id === itemID);

  return (
    <CartContext.Provider
      value={{
        cart,
        quantityCart,
        quantityProducts,
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
