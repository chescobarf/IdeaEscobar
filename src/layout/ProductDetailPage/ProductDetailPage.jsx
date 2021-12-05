import React from "react";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";

function ProductDetailPage({ data }) {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex">
          <div className="content__left w-full h-screen relative"></div>
          <div className="content__right w-96 "></div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
