import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

function CartWidget() {
  return (
    <IconContext.Provider value={{ color: "white", size: "2em" }}>
      <a href="/">
        <RiShoppingCart2Fill />
      </a>
    </IconContext.Provider>
  );
}

export default CartWidget;
