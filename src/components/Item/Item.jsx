import React, { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Item({ data }) {
  useEffect(() => {
    const cardID = document.getElementById(`id-${data.id}`);
    const contentCard = document.querySelector(
      `#id-${data.id} .contentProduct`
    );
    const addToCartDiv = document.querySelector(`#id-${data.id} .addToCartDiv`);

    const mouseEnterEvents = () => {
      contentCard.classList.remove("block");
      contentCard.classList.add("hidden");
      addToCartDiv.classList.remove("opacity-0");
      addToCartDiv.classList.add("opacity-100");
    };
    const mouseLeaveEvents = () => {
      contentCard.classList.remove("hidden");
      contentCard.classList.add("block");
      addToCartDiv.classList.remove("opacity-100");
      addToCartDiv.classList.add("opacity-0");
    };

    cardID.addEventListener("mouseenter", mouseEnterEvents);
    cardID.addEventListener("mouseleave", mouseLeaveEvents);

    return () => {
      cardID.removeEventListener("mouseenter", mouseEnterEvents);
      cardID.removeEventListener("mouseleave", mouseLeaveEvents);
    };
  }, [data]);

  return (
    <div
      id={`id-${data.id}`}
      className="
    cardProduct 
    border-2 
    border-transparent 
    relative
    hover:border-pink-400"
    >
      <div
        className="
        addToCartDiv
        flex
        absolute 
        flex-col
        justify-end
        top-0
        left-0
        w-full
        h-full
        bg-black
        bg-opacity-30
        gap-2
        opacity-0
        transition-opacity
        "
      >
        <ItemCount
          stock={100}
          initial={0}
          data={data}
          styleExtra={"text-white"}
        />
        <Link to={`/product/${data.id}`}>
          <button className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded w-full">
            Ir a detalle
          </button>
        </Link>
      </div>
      <img className="image__product w-full" src={data.img} alt="" />
      <div className="contentProduct px-2">
        <p className="text-gray-600 my-2">
          {data.brand} | {data.genre}
        </p>
        <p className="text-black-600 font-medium">{data.name}</p>
        <div className="precios flex gap-2 items-center">
          <span className="text-black-400 text-sm line-through">
            ${data.oldPrice}
          </span>
          <span className="text-purple-800 font-medium">${data.newPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
