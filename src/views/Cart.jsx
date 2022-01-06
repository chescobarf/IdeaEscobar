import React from "react";
import Container from "../layout/Container/Container";
import { IconContext } from "react-icons";
import { RiBarcodeBoxLine, RiTruckLine } from "react-icons/ri";
import { CgTrash } from "react-icons/cg";
import { CartConsumer } from "../context/CartProvider";
import subTotal from "../helpers/subTotal";
import { NavLink } from "react-router-dom";

function Cart() {
  const { clearItems, removeItem, cart, quantityCart } = CartConsumer();
  return (
    <Container>
      {cart.length > 0 ? (
        <div className="grid w-full my-4 font-mono h-screen">
          <div
            id="cart"
            className="cart col-start-1 col-end-4 py-6 px-6
    bg-gradient-to-r from-gray-50 to-gray-200 text-gray-800 h-fit"
          >
            <table className="w-full m-0">
              <thead className="border-b-2 border-gray-400">
                <tr className="text-center">
                  <th colSpan="2" className="pb-3 text-left">
                    Producto
                  </th>
                  <th className="pb-3">Cantidad</th>
                  <th className="pb-3">Valor</th>
                </tr>
              </thead>
              <span className="opacity-0">.</span>
              <tbody>
                {cart.map((e) => (
                  <tr className="text-center border-b-2 border-gray-300">
                    <td className="pb-5">
                      <img src={e.img} alt={e.id} className="w-32" />
                    </td>
                    <td className="pb-5 text-left">{e.name}</td>
                    <td className="pb-5">{e.quantity}</td>
                    <td className="pb-5">${e.newPrice}</td>
                    <td className="pb-5">
                      <IconContext.Provider
                        value={{ color: "black", size: "2em" }}
                      >
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            removeItem(e.id);
                          }}
                        >
                          <CgTrash />
                        </span>
                      </IconContext.Provider>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="text-center font-semibold">
                  <td colSpan="2" className="pt-4 text-left">
                    Subtotal:
                  </td>
                  <td className="pt-4">{quantityCart}</td>
                  <td className="pt-4">${subTotal(cart)}</td>
                  <td className="pt-4">
                    <IconContext.Provider
                      value={{ color: "black", size: "2em" }}
                    >
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          clearItems();
                        }}
                      >
                        <CgTrash />
                      </span>
                    </IconContext.Provider>
                  </td>
                </tr>
              </tfoot>
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
        </div>
      ) : (
        <div className="grid w-full place-content-center h-96 text-center place-items-center">
          <h1 className="uppercase mb-5 font-semibold">
            Su carrito esta vacio
          </h1>
          <p className="mb-5">
            Para seguir comprando, navegar por las categorías en el sitio, o
            busque su producto.
          </p>
          <NavLink
            to="/"
            className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded w-max cursor-pointer"
          >
            Seguir Comprando
          </NavLink>
        </div>
      )}
    </Container>
  );
}

export default Cart;
