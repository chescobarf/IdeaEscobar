import { useEffect, useState } from "react";
import { products } from "../../constants/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { collection, getDoc, query, where, doc } from "firebase/firestore";
import db from "../../service";

function ItemDetailContainer({ id }) {
  const [state, setstate] = useState(null);

  // let promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(products[id - 1]);
  //   }, 500);
  // });

  // const getItem = async () => {
  //   try {
  //     const data = await promise;
  //     setstate(data);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log("Termine");
  //   }
  // };

  useEffect(() => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setstate({ ...snapshot.data() });
      }
    });
  }, []);
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
