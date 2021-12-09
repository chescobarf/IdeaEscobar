import { useEffect, useState } from "react";
import { products } from "../../constants/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

function ItemDetailContainer({ id }) {
  const [state, setstate] = useState(null);

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products[id - 1]);
    }, 500);
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

  useEffect(() => {
    getItem();
  });
  return (
    <div>
      {state ? (
        <div className="w-full text-center mt-0 mb-0">
          <ItemDetail data={state} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ItemDetailContainer;
