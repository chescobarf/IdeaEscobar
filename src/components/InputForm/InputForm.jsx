import React from "react";

function InputForm({ number, text, name, type, handleChange, required }) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center mb-4">
        <span className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 h-9 w-9 grid place-content-center text-white rounded-full ">
          {number}
        </span>
        <label htmlFor={name} className="font-semibold">
          {text}
        </label>
      </div>
      {required ? (
        <div className="flex flex-col">
          <input
            onChange={handleChange}
            type={type}
            name={name}
            id={name}
            required
            className="mb-2 py-1 px-2"
          />
          <p className="text-red-600 text-xs">Este campo es obligatorio *</p>
        </div>
      ) : (
        <input
          onChange={handleChange}
          type={type}
          name={name}
          id={name}
          className="mb-2 py-1 px-2"
        />
      )}
    </div>
  );
}

export default InputForm;
