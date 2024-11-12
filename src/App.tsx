import CardGroup from "./components/CardGroup";
import Map from "./components/Map";
import items from "./assets/items.json";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#fffeed", minHeight: "100vh" }}>
      <Hero></Hero>
      <CardGroup props={items} />
      <Map></Map>
      <Footer></Footer>
    </div>
  );
}

export default App;
