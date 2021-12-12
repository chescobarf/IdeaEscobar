import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../constants/products";

function ItemListContainer({ categoryName }) {
  let promise = new Promise((resolve, reject) => {
    categoryName
      ? setTimeout(() => {
          const response = products.filter((e) => e.genre == categoryName);
          resolve(response);
        }, 700)
      : setTimeout(() => {
          resolve(products);
        }, 700);
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
      <ItemList items={state} />
    </div>
  );
}

export default ItemListContainer;
