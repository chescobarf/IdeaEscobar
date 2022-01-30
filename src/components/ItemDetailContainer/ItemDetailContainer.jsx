import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { getDoc, doc } from "firebase/firestore";
import db from "../../service";

function ItemDetailContainer({ id }) {
  const [state, setstate] = useState(null);

  useEffect(() => {
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setstate({ ...snapshot.data() });
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {state ? (
        <div className="w-full text-center mt-14 lg:mt-0 mb-0">
          <ItemDetail data={state} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ItemDetailContainer;
