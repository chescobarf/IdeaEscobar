import React from "react";
import Container from "../layout/Container/Container";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import CategoriesShelfs from "../components/CategoriesShelfs/CategoriesShelfs";
import BannerVideo from "../layout/Banner/BannerVideo";
import BannerImage from "../layout/Banner/BannerImage";

function Home() {
  return (
    <>
      <BannerVideo
        urlContent="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/global%20brand%20publishing/Horizontal/Holidays/chapter%204/holiday-fw21-ss22-ch4-digital-hp-masthead-large-sport-video-dual-3d-d.mp4"
        position="left"
        title="EL DEPORTE NOS MUEVE"
        content="Empieza el año de la mejor forma. Cada paso que das te acercas a tu objetivo."
      />
      <BannerImage
        urlContent="https://www.riskified.com/blog/app/uploads/2017/01/BlogBanner_89_sneakers-info-01-1.png"
        objectFit="object-cover"
        position="center"
        title="APROVECHA LOS DESCUENTOS"
        content="Renueva tu outfit con hasta 40% de descuento en el catálogo seleccionado. ¿Qué esperas?"
        contentStyle="text-black"
        hasButton
        buttonText="Ir a comprar"
      />
      <Container>
        <CategoriesShelfs />
        <ItemListContainer />
      </Container>
    </>
  );
}

export default Home;
