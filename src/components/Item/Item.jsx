import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function Item({ data }) {
  return (
    <div className="cardProduct border-2 border-transparent hover:border-pink-400">
      <a href="/">
        <img className="w-full" src={data.img} alt="" />
        <div className="px-2">
          <p className="text-gray-600 my-2">
            {data.brand} | {data.genre}
          </p>
          <p className="text-black-600 font-medium">{data.name}</p>
          <div className="precios flex gap-2 items-center">
            <span className="text-black-400 text-sm line-through">
              ${data.oldPrice}
            </span>
            <span className="text-purple-800 font-medium">
              ${data.newPrice}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Item;
