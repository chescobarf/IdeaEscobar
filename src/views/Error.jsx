import React from "react";
import Container from "../layout/Container/Container";

function Error() {
  return (
    <Container>
      <div className="grid place-items-center h-screen">
        <div className="text-center text-7xl text-pink-500 font-bold font-sans uppercase">
          <h1 className="">404</h1>
          <p className="">Not Found</p>
          <img
            src="https://c.tenor.com/ELqBBio6uboAAAAC/thinking-face-joypixels.gif"
            alt="think"
          />
        </div>
      </div>
    </Container>
  );
}

export default Error;
