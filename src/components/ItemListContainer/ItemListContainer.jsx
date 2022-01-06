import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import NoProducts from "../../views/NoProducts";
import Loading from "../Loading/Loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../service";

function ItemListContainer({ categoryName }) {
  const [state, setstate] = useState([]);

  useEffect(() => {
    if (categoryName) {
      const q = query(
        collection(db, "products"),
        where("genre", "==", categoryName)
      );
      getDocs(q).then((snapshot) => {
        setstate(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      const itemListCollection = collection(db, "products");
      getDocs(itemListCollection).then((snapshot) => {
        setstate(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  });

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
