import React from "react";
import Button from "../components/Button/Button";
import { collection, addDoc } from "firebase/firestore";
import db from "../service";

function Dashboard() {
  const addItem = (data) => {
    addDoc(collection(db, "products"), data);
  };

  const handleFormProduct = () => {
    const data = {};
    data.brand = document.querySelector("#brand").value;
    data.genre = document.querySelector("#genre").value;
    data.img = document.querySelector("#img").value;
    data.name = document.querySelector("#name").value;
    data.newPrice = document.querySelector("#newPrice").value;
    data.oldPrice = document.querySelector("#oldPrice").value;
    data.stock = document.querySelector("#stock").value;
    // console.log(data);
    addItem(data);
    cleanForm();
  };

  const cleanForm = () => {
    document.querySelector("#brand").value = "";
    document.querySelector("#genre").value = "";
    document.querySelector("#img").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#newPrice").value = 0;
    document.querySelector("#oldPrice").value = 0;
    document.querySelector("#stock").value = 0;
  };

  return (
    <div className="container mx-auto my-0 h-screen">
      <h2 className="text-xl my-10 text-center">Crear Productos</h2>
      <div className="flex flex-col">
        <div className="flex justify-between mb-8">
          <label className="w-1/3" htmlFor="brand">
            Brand
          </label>
          <input
            className="border-2 border-gray-500 border-opacity-80 rounded-md px-4 py-2 w-full"
            type="text"
            name="brand"
            id="brand"
          />
        </div>
        <div className="flex justify-between mb-8">
          <label className="w-1/3" htmlFor="genre">
            Genre
          </label>
          <select
            name="genre"
            id="genre"
            className="border-2 border-gray-500 border-opacity-80 rounded-md px-4 py-2 w-full bg-transparent"
          >
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Niños">Niños</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>
        <div className="flex justify-between mb-8">
          <label className="w-1/3" htmlFor="img">
            Image URL
          </label>
          <input
            className="border-2 border-gray-500 border-opacity-80 rounded-md px-4 py-2 w-full"
            type="text"
            name="img"
            id="img"
          />
        </div>
        <div className="flex justify-between mb-8">
          <label className="w-1/3" htmlFor="name">
            Name
          </label>
          <input
            className="border-2 border-gray-500 border-opacity-80 rounded-md px-4 py-2 w-full"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex justify-between mb-8">
          <label className="w-1/3" htmlFor="newPrice">
            Promo Price
          </label>
          <input
            className="border-2 border-gray-500 border-opacity-80 rounded-md px-4 py-2 w-full"
            type="number"
            name="newPrice"
            id="newPrice"
          />
        </div>
        <div className="flex justify-between mb-8">
          <label className="w-1/3" htmlFor="oldPrice">
            Price
          </label>
          <input
            className="border-2 border-gray-500 border-opacity-80 rounded-md px-4 py-2 w-full"
            type="number"
            name="oldPrice"
            id="oldPrice"
          />
        </div>
        <div className="flex justify-between mb-8">
          <label className="w-1/3" htmlFor="stock">
            Stock
          </label>
          <input
            className="border-2 border-gray-500 border-opacity-80 rounded-md px-4 py-2 w-full"
            type="number"
            name="stock"
            id="stock"
          />
        </div>
        <Button text="Agregar" onClick={handleFormProduct} />
      </div>
    </div>
  );
}

export default Dashboard;
