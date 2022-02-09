import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { CartConsumer } from "../../context/CartProvider";

function ItemCount({ stock, initial, data, styleExtra }) {
  const [initalNumber, setInitialNumber] = useState(initial);
  const [disabled, setDisabled] = useState(true);
  const [disabledBtns, setDisabledBtns] = useState(false);

  const { addItem } = CartConsumer();

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

  const handleAddToCart = () => {
    addItem(initalNumber, data);
    if (initalNumber === stock) {
      setDisabled(true);
      setDisabledBtns(true);
    }
  };

  useEffect(() => {
    initalNumber >= 1 ? setDisabled(false) : setDisabled(true);
  }, [initalNumber]);

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-3 items-center justify-center w-full">
        {styleExtra ? (
          <div className={`font-semibold text-lg ${styleExtra}`}>
            {initalNumber}
          </div>
        ) : (
          <div className="font-semibold text-lg">{initalNumber}</div>
        )}

        <Button text="-" onClick={onReduce} isDisabled={disabledBtns} />
        <Button text="+" onClick={onAdd} isDisabled={disabledBtns} />
      </div>

      {/* {initalNumber >= 1 ? (
        <Button
          text="Agregar al carrito"
          onClick={() => addItem(initalNumber, data)}
        />
      ) : (
        <Button
          text="Agregar al carrito"
          onClick={() => addItem(initalNumber, data)}
          isDisabled={true}
        />
      )} */}
      <Button
        text="Agregar al carrito"
        onClick={() => {
          handleAddToCart();
        }}
        isDisabled={disabled}
      />
    </div>
  );
}

export default ItemCount;
