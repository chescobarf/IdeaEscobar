import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import NoProducts from "../../views/NoProducts";
import Loading from "../Loading/Loading";
import { collection, getDocs } from "firebase/firestore";
import db from "../../service";

function ItemListContainer({ categoryName }) {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const itemListCollection = collection(db, "products");
    getDocs(itemListCollection).then((snapshot) => {
      setstate(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div>
      {state ? (
        state.length !== 0 ? (
          <div className="w-full text-center mt-4 mb-4">
            <ItemList items={state} />
          </div>
        ) : (
          <NoProducts />
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ItemListContainer;
