import React from "react";
import Container from "../layout/Container/Container";
import { CartConsumer } from "../context/CartProvider";
import CartLayout from "../layout/CartLayout/CartLayout";
import CartEmpty from "../components/Cart/CartEmpty/CartEmpty";
import CartProducts from "../components/Cart/CartProducts/CartProducts";
import CartResume from "../components/Cart/CartResume/CartResume";

function Cart() {
  const { clearItems, removeItem, cart, quantityCart } = CartConsumer();
  return (
    <Container extraStyle="mt-14">
      {cart.length > 0 ? (
        <CartLayout>
          <CartProducts
            clearItems={clearItems}
            removeItem={removeItem}
            cart={cart}
            quantityCart={quantityCart}
          />
          <CartResume cart={cart} />
        </CartLayout>
      ) : (
        <CartEmpty />
      )}
    </Container>
  );
}

export default Cart;
