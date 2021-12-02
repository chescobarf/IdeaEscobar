import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const arrayProductos = [
    {
      id: 1,
      name: "NombreZapatillas",
      oldPrice: 29990,
      newPrice: 25990,
      img: "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/37b348d49a864e2eaa36ab3b0117de5b_9366/zapatillas-nite-jogger.jpg",
    },
    {
      id: 2,
      name: "NombreZapatillas",
      oldPrice: 29990,
      newPrice: 25990,
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/calzado-air-force-1-07-6jXPDp.jpg",
    },
    {
      id: 3,
      name: "NombreZapatillas",
      oldPrice: 29990,
      newPrice: 25990,
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/373309/04/sv01/fnd/CHL/w/1000/h/1000/bg/255,255,255",
    },
  ];

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrayProductos);
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
    <div className="w-full text-center mt-4">
      <h1>Aqui debe ir el catalogo </h1>
      <ItemList items={state} />
    </div>
  );
}

export default ItemListContainer;
