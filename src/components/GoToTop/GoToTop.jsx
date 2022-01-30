import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

function GoToTop() {
  return (
    <HashLink smooth to={`#root`}>
      <div className="text-5xl text-pink-600 fixed z-50 bottom-20 animate-bounce md:animate-none md:bottom-2.5 right-2.5 transition-opacity opacity-20 md:opacity-10 hover:opacity-100 ">
        <FaArrowCircleUp />
      </div>
    </HashLink>
  );
}

export default GoToTop;
