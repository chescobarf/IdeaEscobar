import React from "react";

function Button({ text, onClick, isDisabled }) {
  return isDisabled ? (
    <button
      className="bg-gray-500 text-white font-bold py-2 px-4 rounded cursor-not-allowed"
      onClick={onClick}
      disabled
    >
      {text}
    </button>
  ) : (
    <button
      className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded "
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
