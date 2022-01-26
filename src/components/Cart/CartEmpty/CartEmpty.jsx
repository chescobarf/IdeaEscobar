import React from "react";
import { NavLink } from "react-router-dom";

function CartEmpty() {
  return (
    <div className="grid w-full place-content-center h-96 text-center place-items-center">
      <h1 className="uppercase mb-5 font-semibold">Su carrito esta vacio</h1>
      <p className="mb-5">
        Para seguir comprando, navegar por las categorías en el sitio, o busque
        su producto.
      </p>
      <NavLink
        to="/"
        className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded w-max cursor-pointer"
      >
        Seguir Comprando
      </NavLink>
    </div>
  );
}

export default CartEmpty;
