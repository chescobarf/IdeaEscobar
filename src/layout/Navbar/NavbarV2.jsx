import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuGridO, CgCloseO } from "react-icons/cg";
import { categories } from "../../constants/categories";
import CartWidget from "../../components/CartWidget/CartWidget";
import { CartConsumer } from "../../context/CartProvider";

export default function NavbarV2() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { quantityProducts } = CartConsumer();

  return (
    <>
      <nav className="fixed z-50 top-0 w-full lg:relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start items-center">
            <NavLink to="/">
              <h1 className="text-xl md:text-3xl font-bold text-white">
                SneakerTime ®
              </h1>
            </NavLink>
            <button
              className="text-white cursor-pointer text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <CgCloseO /> : <CgMenuGridO />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center">
              {categories.map((category) => {
                return (
                  <li className="nav-item" key={category.id}>
                    <NavLink
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 "
                      to={`category/${category.name}`}
                      onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                      <span className="lg:ml-2">{category.name}</span>
                    </NavLink>
                  </li>
                );
              })}
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/cart"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <div className="flex items-center">
                    <CartWidget />
                    <span className="text-lg font-semibold text-white">
                      {quantityProducts}
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
