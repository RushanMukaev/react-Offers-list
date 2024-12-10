import "./App.css";
import Listing from "./Components/Listing";
import data from "./data/etsy.json";

const items = data;

function App() {
  return <Listing items={items} />;
}

export default App;
