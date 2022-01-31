import React from "react";

function Stock({ data, extraStyle }) {
  return (
    <span className={`stock text-purple-800 font-medium ${extraStyle}`}>
      Stock {data}
    </span>
  );
}

export default Stock;
