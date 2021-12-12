import React from "react";
import Container from "../layout/Container/Container";

function NoProducts() {
  return (
    <Container>
      <div className="grid place-items-center h-screen">
        <div className="text-center text-4xl text-pink-500 font-bold font-sans uppercase grid place-items-center">
          <h1 className="">Oops</h1>
          <p className="">Al parecer no tenemos productos aqui aun...</p>
          <img
            className="h-40"
            src="https://c.tenor.com/20fD7u6tVxMAAAAC/sad-cry.gif"
            alt="sad"
          />
        </div>
      </div>
    </Container>
  );
}

export default NoProducts;
