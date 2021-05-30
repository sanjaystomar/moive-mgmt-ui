import "./App.css";
// import Counter from "./components/Counter";
import DataObject from "./components/DataObject";
// import Employee from "./components/Employee";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />

      {/* <Employee firstName="Jack" lastName="Scott" /> */}

      {/* <Counter /> */}

      <DataObject />
    </div>
  );
};

export default App;
