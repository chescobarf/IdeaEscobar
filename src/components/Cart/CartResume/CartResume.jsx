import React from "react";
import { IconContext } from "react-icons";
import { RiBarcodeBoxLine, RiTruckLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import subTotal from "../../../helpers/subTotal";
function CartResume({ cart }) {
  return (
    <div className="resume md:ml-4 md:col-start-4 md:col-end-6 ">
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
          <p>${subTotal(cart)}</p>
        </div>
        <div className="total border-b-2 border-gray-200 py-3 flex justify-center ">
          <NavLink
            to="/checkout"
            className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded w-full cursor-pointer text-center"
          >
            Finalizar Compra
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CartResume;
