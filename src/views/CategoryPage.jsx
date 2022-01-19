import React from "react";
import Container from "../layout/Container/Container";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { categories } from "../constants/categories";
import BannerImage from "../layout/Banner/BannerImage";

function CategoryPage() {
  const { categoryName } = useParams();

  const category = categories.find(function (element) {
    return element.name === categoryName;
  });

  return (
    <>
      <BannerImage
        urlImage={category.image}
        position="left"
        title={category.name}
        content={category.description}
      />
      <Container>
        <ItemListContainer categoryName={categoryName} />
      </Container>
    </>
  );
}

export default CategoryPage;
