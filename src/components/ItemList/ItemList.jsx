import React from "react";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import { FilterConsumer } from "../../context/FilterProvider";

function ItemList({ items }) {
  const { handleSort } = FilterConsumer();

  if (items) {
    handleSort(items);
    return (
      <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 place-content-center">
        <Loading />
      </div>
    );
  }
}
// return (
//   <div>
//     {items ? (
//       <div className="grid w-full grid-cols-3 gap-4">
//         {items.map((item) => (
//           <Item key={item.id} data={item} />
//         ))}
//       </div>
//     ) : (
//       <div className="grid grid-cols-1 place-content-center">
//         <Loading />
//       </div>
//     )}
//   </div>
// );

export default ItemList;
