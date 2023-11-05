import "./App.css";
import { useSelector } from "react-redux";

//components
import DynamicContent from "./components/DynamicContent/";

function App() {
  const component = useSelector(
    (state) => state.dynamicComponent.nameDynamicComponent
  );
  return (
    <div className="App">
      <DynamicContent nameDynamicComponent={component} />
    </div>
  );
}

export default App;
