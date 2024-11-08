import CardGroup from "./components/CardGroup";
import Map from "./components/Map";
import items from "./assets/items.json";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Hero></Hero>
      <CardGroup props={items} />
      <Map></Map>
    </div>
  );
}

export default App;
