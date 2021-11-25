import Navbar from "./components/Navbar/Navbar";
import Container from "./layout/Container/Container";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <ItemListContainer />
      </Container>
    </div>
  );
}

export default App;
