import React, { useState } from "react";
import Button from "../Button/Button";
import { CartConsumer } from "../../context/CartProvider";

function ItemCount({ stock, initial, data }) {
  const [initalNumber, setInitialNumber] = useState(initial);

  const { handleCart } = CartConsumer();

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

      {initalNumber >= 1 ? (
        <Button
          text="Agregar al carrito"
          onClick={() => handleCart(initalNumber, data)}
        />
      ) : (
        <Button
          text="Agregar al carrito"
          onClick={() => handleCart(initalNumber, data)}
          isDisabled={true}
        />
      )}
    </div>
  );
}

export default ItemCount;
