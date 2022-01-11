import React from "react";
import Banner from "../layout/Banner/Banner";
import Container from "../layout/Container/Container";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoriesShelfs from "../components/CategoriesShelfs/CategoriesShelfs";

function Home() {
  return (
    <>
      <Banner
        urlImage="https://picsum.photos/id/817/1500/500/"
        position="left"
        title="LLEGÓ Blackfriday"
        content="Aprovecha hasta 50% de descuento en el catálogo seleccionado y 10% adicional solo para miembros por compras mayores a $59,990."
      />
      <Container>
        <CategoriesShelfs />
        <ItemListContainer />
      </Container>
    </>
  );
}

export default Home;
