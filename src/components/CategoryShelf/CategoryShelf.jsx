import React from "react";
import { NavLink } from "react-router-dom";

function CategoryShelf({ data }) {
  if (data) {
    return (
      <NavLink
        to={`category/${data.name}`}
        className="relative inline-block text-center hover:transform hover:scale-105"
      >
        <img src={data.image} alt={data.name} />
        <span className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-medium uppercase">
          {data.name}
        </span>
      </NavLink>
    );
  } else {
    return (
      <>
        <div className="bg-gray-300 w-full h-80 relative inline-block text-center animate-pulse"></div>
        <div className="bg-gray-300 w-full h-80 relative inline-block text-center animate-pulse"></div>
        <div className="bg-gray-300 w-full h-80 relative inline-block text-center animate-pulse"></div>
      </>
    );
  }
}

export default CategoryShelf;
