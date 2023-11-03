import "./App.css";

//components
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <List />
    </div>
  );
}

export default App;
