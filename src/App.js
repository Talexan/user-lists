import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/modules/users/store";

//components
import Filter from "./components/Filter";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Filter />
        <List />
      </Provider>
    </div>
  );
}

export default App;
