import CardGroup from "./components/CardGroup";
import items from "./assets/items.json";

function App() {
  return (
    <div>
      <CardGroup props={items} />
    </div>
  );
}

export default App;
