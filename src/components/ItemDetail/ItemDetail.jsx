import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ data }) {
  return (
    <>
      <div className="flex">
        <div className="content__left w-full h-screen relative">
          <img
            src={data.img}
            alt={data.name}
            className="w-full h-3/4 object-bottom object-cover mb-5"
            key={data.id}
          />
          <div className="text-left pl-4">
            <h2 className="text-2xl mb-3">Descripcion</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et
              quidem voluptatum. Cupiditate fugit amet expedita id illum in
              aperiam reiciendis excepturi laboriosam! Sequi sunt cum est,
              expedita debitis rem?
            </p>
          </div>
        </div>
        <div className="content__right w-5/12 p-12 font-bold font-mono flex flex-col justify-start gap-7 border-2 text-left">
          <div className="font-light flex gap-1">
            <p>{data.genre}</p>
            <p>~</p>
            <p>{data.brand}</p>
          </div>
          <h1 className="text-4xl">{data.name}</h1>
          <div className="flex gap-1 items-center">
            <h3 className="text-2xl line-through text-gray-800 text-opacity-95">
              ${data.oldPrice}
            </h3>
            <h3 className="text-3xl text-indigo-700">${data.newPrice}</h3>
          </div>
          <ItemCount stock={100} initial={0} data={data} />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
