import Navbar from "./layout/Navbar/Navbar";
import Container from "./layout/Container/Container";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Banner from "./layout/Banner/Banner";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner
        urlImage="https://picsum.photos/id/817/1500/500/"
        position="left"
        title="LLEGÓ Blackfriday"
        content="Aprovecha hasta 50% de descuento en el catálogo seleccionado y 10% adicional solo para miembros por compras mayores a $59,990."
      />
      <Container>
        <ItemListContainer />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
