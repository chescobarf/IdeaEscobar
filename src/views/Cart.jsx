import React from "react";
import Container from "../layout/Container/Container";
import { IconContext } from "react-icons";
import { RiBarcodeBoxLine, RiTruckLine } from "react-icons/ri";

function Cart() {
  return (
    <Container>
      <div className="grid w-full my-4 font-mono">
        <div
          className="cart col-start-1 col-end-4 py-6 px-6
        bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800"
        >
          <table className="w-full m-0">
            <thead className="border-b-2 border-gray-400">
              <tr className="text-center">
                <th colSpan="2" className="pb-3 text-left">
                  Producto
                </th>
                <th className="pb-3">Cantidad</th>
                <th className="pb-3">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {/* TR x cada ITEM */}
              {/* TD x cada dato */}
              <tr></tr>
            </tbody>
          </table>
        </div>
        <div className="resume ml-4 col-start-4 col-end-6 ">
          <div className="bg-gradient-to-r from-gray-200 to-gray-400 text-gray-800 py-6 px-6 font-semibold">
            <div className="title text-center border-b-2 border-gray-200 pb-3">
              <h1>Resumen de Compra</h1>
            </div>
            <div className="extraInfo grid place-content-center grid-cols-1 gap-2 border-b-2 border-gray-200 py-3">
              <div className="flex gap-1 items-center font-normal font-sans">
                <IconContext.Provider value={{ color: "black", size: "2em" }}>
                  <a href="/">
                    <RiBarcodeBoxLine />
                  </a>
                </IconContext.Provider>
                <span>Si tienes un codigo de descuento ingresalo aqui</span>
              </div>
              <div className="flex gap-1 items-center font-normal font-sans">
                <IconContext.Provider value={{ color: "black", size: "2em" }}>
                  <a href="/">
                    <RiTruckLine />
                  </a>
                </IconContext.Provider>
                <span>Envio Gratis a todo el pais</span>
              </div>
            </div>
            <div className="total border-b-2 border-gray-200 py-3 flex justify-between">
              <p>Total</p>
              <p>$20.000</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
