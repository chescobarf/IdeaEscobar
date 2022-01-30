import React, { useState } from "react";
import Button from "../components/Button/Button";
import { collection, addDoc } from "firebase/firestore";
import db from "../service";

function Dashboard() {
  const [form, setForm] = useState({
    brand: "",
    genre: "default",
    img: "",
    name: "",
    newPrice: 0,
    oldPrice: 0,
    stock: 0,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addItem = (data) => {
    addDoc(collection(db, "products"), data);
  };

  const handleFormProduct = (e) => {
    e.preventDefault();
    addItem(form);
    cleanForm();
  };

  const cleanForm = () => {
    setForm({
      brand: "",
      genre: "default",
      img: "",
      name: "",
      newPrice: 0,
      oldPrice: 0,
      stock: 0,
    });
  };

  return (
    <div className="container mx-auto my-0 h-screen">
      <h2 className="text-xl my-10 text-center">Crear Productos</h2>
      <form className="flex flex-col" onSubmit={handleFormProduct}>
        <div className="flex justify-between mb-8">
          <label className="w-1/3" htmlFor="brand">
            Brand
          </label>
          <input
            className="border-2 border-gray-500 border-opacity-80 rounded-md px-4 py-2 w-full"
            type="text"
            name="brand"
            id="brand"
            onChange={handleChange}
            value={form.brand}
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
            onChange={handleChange}
            defaultValue={form.genre}
          >
            <option disabled="disabled" value="default">
              Seleccione el genero
            </option>
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
            onChange={handleChange}
            value={form.img}
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
            onChange={handleChange}
            value={form.name}
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
            onChange={handleChange}
            value={form.newPrice}
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
            onChange={handleChange}
            value={form.oldPrice}
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
            onChange={handleChange}
            value={form.stock}
          />
        </div>
        <Button text="Agregar" type="submit" />
      </form>
    </div>
  );
}

export default Dashboard;
