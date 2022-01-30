import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import ProductDetailPage from "../views/ProductDetailPage";
import Error from "../views/Error";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import Footer from "../layout/Footer/Footer";
import CategoryPage from "../views/CategoryPage";
import CartProvider from "../context/CartProvider";
import Dashboard from "../views/Dashboard";
import { Toaster } from "react-hot-toast";
import FilterProvider from "../context/FilterProvider";
import NavbarV2 from "../layout/Navbar/NavbarV2";
import GoToTop from "../components/GoToTop/GoToTop";
function Router() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarV2 />
        <Toaster />
        <FilterProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<Error />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </FilterProvider>
        <GoToTop />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default Router;
