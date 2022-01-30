import React, { useEffect, useState } from "react";
import CategoryShelf from "../CategoryShelf/CategoryShelf";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import db from "../../service";

function CategoriesShelfs() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const categoriesList = collection(db, "categories");
    getDocs(categoriesList).then((snapshot) => {
      setCategories(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, []);

  if (categories) {
    return (
      <div className="w-full flex justify-center gap-4 my-4 flex-col md:flex-row">
        {categories.map((e) => {
          return <CategoryShelf data={e} key={e.id} />;
        })}
      </div>
      //   <div className="w-full flex justify-center gap-4 my-4 h-">
      //     <CategoryShelf />
      //   </div>
    );
  } else {
    return (
      <div className="w-full flex justify-center gap-4 my-4 flex-col md:flex-row">
        <CategoryShelf />
      </div>
    );
  }
}

export default CategoriesShelfs;
