import { useEffect, useState } from "react";
import { products } from "../../constants/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

function ItemDetailContainer({ id }) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products[id]);
    }, 2000);
  });

  const getItem = async () => {
    try {
      const data = await promise;
      setstate(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Termine");
    }
  };

  const [state, setstate] = useState([]);
  useEffect(() => {
    getItem();
  });
  return (
    <div>
      {state ? (
        <div className="w-full text-center mt-4 mb-4">
          <h1>Product Detail Page</h1>
          <ItemDetail data={state} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ItemDetailContainer;
