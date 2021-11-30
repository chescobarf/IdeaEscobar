import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      className="bg-pink-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
