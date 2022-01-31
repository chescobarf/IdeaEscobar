import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Stock from "../Stock/Stock";

function ItemDetail({ data }) {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:mt-0 mt-14">
        <div className="content__left w-full md:h-screen relative mb-2 md:mb-0">
          <img
            src={data.img}
            alt={data.name}
            className="w-full h-3/4 object-bottom object-cover mb-5 md:object-cover md:object-center"
            key={data.id}
          />
          <div className="text-left pl-2 md:pl-4 pr-2 md:pr-0">
            <h2 className="text-2xl mb-3">Descripcion</h2>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et
              quidem voluptatum. Cupiditate fugit amet expedita id illum in
              aperiam reiciendis excepturi laboriosam! Sequi sunt cum est,
              expedita debitis rem?
            </p>
          </div>
        </div>
        <div className="content__right w-full md:w-5/12 p-4 md:p-12 font-bold font-mono flex flex-col justify-start gap-7 border-2 text-left">
          <div className="font-light flex gap-1">
            <p>{data.genre}</p>
            <p>~</p>
            <p>{data.brand}</p>
          </div>
          <h1 className="text-2xl md:text-4xl">{data.name}</h1>
          <div className="flex gap-1 items-center">
            <h3 className="text-lg md:text-2xl line-through text-gray-800 text-opacity-95">
              ${data.oldPrice}
            </h3>
            <h3 className="text-xl md:text-3xl text-indigo-700">
              ${data.newPrice}
            </h3>
          </div>
          <ItemCount stock={data.stock} initial={0} data={data} />
          <Stock data={data.stock} extraStyle="font-extrabold" />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
