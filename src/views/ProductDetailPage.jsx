import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

function ProductDetailPage() {
  const { id } = useParams();
  return <ItemDetailContainer id={id} />;
}

export default ProductDetailPage;
