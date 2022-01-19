import React from "react";
import Container from "../layout/Container/Container";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoriesShelfs from "../components/CategoriesShelfs/CategoriesShelfs";
import BannerVideo from "../layout/Banner/BannerVideo";

function Home() {
  return (
    <>
      <BannerVideo
        urlContent="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Horizontal/Holidays/chapter%204/holiday-fw21-ss22-ch4-digital-hp-masthead-large-sport-video-dual-3d-d.mp4"
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
