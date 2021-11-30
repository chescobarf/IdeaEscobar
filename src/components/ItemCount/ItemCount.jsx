import React, { useState } from "react";
import Button from "../Button/Button";

function ItemCount({ stock, initial }) {
  const [initalNumber, setInitialNumber] = useState(initial);

  const onAdd = () => {
    initalNumber === stock
      ? setInitialNumber(initalNumber)
      : setInitialNumber(initalNumber + 1);
  };
  const onReduce = () => {
    initalNumber > 0
      ? setInitialNumber(initalNumber - 1)
      : setInitialNumber(initalNumber);
  };

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-3 items-center justify-center w-full">
        <div className="font-semibold text-lg">{initalNumber}</div>
        <Button text="-" onClick={onReduce} />
        <Button text="+" onClick={onAdd} />
      </div>
      <Button text="Agregar al carrito" />
    </div>
  );
}

export default ItemCount;
