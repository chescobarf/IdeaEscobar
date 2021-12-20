import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import ProductDetailPage from "../views/ProductDetailPage";
import Error from "../views/Error";
import Cart from "../views/Cart";
import Checkout from "../views/Checkout";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import CategoryPage from "../views/CategoryPage";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
