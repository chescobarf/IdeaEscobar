import React, { useState } from "react";
import CartWidget from "../../components/CartWidget/CartWidget";
import { categories } from "../../constants/categories";

function Navbar() {
  const [cart, setCart] = useState(0);

  return (
    <nav className="h-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full grid content-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">SneakerTime ®</h1>
        <div className="flex items-center w-max justify-center gap-20">
          {categories.map((category) => {
            return (
              <div key={category.id}>
                <a
                  href="/"
                  className="text-white font-semibold p-1 border-b-2 border-transparent hover:border-white"
                >
                  {category.name}
                </a>
              </div>
            );
          })}
          <div className="flex items-center">
            <CartWidget />
            <span className="text-lg font-semibold text-white">{cart}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
