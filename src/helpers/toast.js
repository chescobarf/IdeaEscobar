import toast from "react-hot-toast";

export const toastAddToCart = () =>
  toast("Agregado al carrito", {
    duration: 3000,
    position: "top-center",
    className: "font-bold",
    // Styling
    style: {
      background: "#ef4444",
      color: "white",
      boxShadow: ` 0px 0px 10px 0px #ef4444, 0px 0px 20px 0px #c084fc`

    },
    icon: "✅"
  });
