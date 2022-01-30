import React from "react";
import { IconContext } from "react-icons";
import { CgTrash } from "react-icons/cg";
import subTotal from "../../../helpers/subTotal";
function CartProducts({ clearItems, removeItem, cart, quantityCart }) {
  return (
    <div
      id="cart"
      className="cart md:col-start-1 md:col-end-4 py-6 px-6
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
        <tbody>
          {cart.map((e) => (
            <tr className="text-center border-b-2 border-gray-300" key={e.id}>
              <td className="pb-5">
                <img src={e.img} alt={e.id} className="w-32" />
              </td>
              <td className="pb-5 text-left">{e.name}</td>
              <td className="pb-5">{e.quantity}</td>
              <td className="pb-5">${e.newPrice}</td>
              <td className="pb-5">
                <IconContext.Provider value={{ color: "black", size: "2em" }}>
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
              <IconContext.Provider value={{ color: "black", size: "2em" }}>
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
  );
}

export default CartProducts;
