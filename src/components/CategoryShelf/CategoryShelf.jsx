import React from "react";

function CategoryShelf({ data }) {
  if (data) {
    return (
      <div className="relative inline-block text-center">
        <img src={data.image} alt={data.name} />
        <span className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-medium uppercase">
          {data.name}
        </span>
      </div>
    );
  } else {
    return (
      <>
        <div className="bg-gray-300 w-full h-full relative inline-block text-center animate-pulse"></div>
        <div className="bg-gray-300 w-full h-full relative inline-block text-center animate-pulse"></div>
        <div className="bg-gray-300 w-full h-full relative inline-block text-center animate-pulse"></div>
      </>
    );
  }
}

export default CategoryShelf;
