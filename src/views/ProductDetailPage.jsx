import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

function ProductDetailPage({ handleCart }) {
  const { id } = useParams();
  return <ItemDetailContainer id={id} handleCart={handleCart} />;
}

export default ProductDetailPage;
