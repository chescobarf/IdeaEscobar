import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../constants/products";

function ItemListContainer() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2500);
  });

  const resolverArray = async () => {
    try {
      const data = await promise;
      setstate(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Termine");
    }
  };

  const [state, setstate] = useState(null);

  useEffect(() => {
    resolverArray();
  });

  return (
    <div className="w-full text-center mt-4 mb-4">
      <h1>Aqui debe ir el catalogo </h1>
      <ItemList items={state} />
    </div>
  );
}

export default ItemListContainer;
