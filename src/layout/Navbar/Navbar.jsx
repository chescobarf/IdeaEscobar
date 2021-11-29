import React from "react";
import CartWidget from "../../components/CartWidget/CartWidget";
import { categories } from "../../constants/categories";

function Navbar() {
  return (
    <nav className="h-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full grid content-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold text-white">SneakerTime ®</h1>
        <div class="flex items-center w-max justify-center gap-20">
          {categories.map((category) => {
            return (
              <div key={category.id}>
                <a
                  href="/"
                  class="text-white font-semibold p-1 border-b-2 border-transparent hover:border-white"
                >
                  {category.name}
                </a>
              </div>
            );
          })}
          <div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
