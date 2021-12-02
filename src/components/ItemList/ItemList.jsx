import React from "react";
import Item from "../Item/Item";
import Loading from "../Loading/Loading";

function ItemList({ items }) {
  return (
    <div>
      {items ? (
        <div className="grid w-full grid-cols-3 gap-4">
          {items.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 place-content-center">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default ItemList;
