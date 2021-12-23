import React from "react";
import Banner from "../layout/Banner/Banner";
import Container from "../layout/Container/Container";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { categories } from "../constants/categories";

function CategoryPage() {
  const { categoryName } = useParams();

  const category = categories.find(function (element) {
    return element.name === categoryName;
  });

  return (
    <>
      <Banner
        urlImage={category.image}
        position="left"
        title={category.name}
        content={category.description}
      />
      <Container>
        <ItemListContainer categoryName={category.name} />
      </Container>
    </>
  );
}

export default CategoryPage;
