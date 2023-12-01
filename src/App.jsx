import "./App.css";
import "./components/01/01";
import Header_Component from "./components/01/01";
import SectionFeed from "./components/02/02";
import Show_pizzaComponent from "./components/show-pizza/Show_pizzaComponent";

function App() {
  return (
    <>
      <Header_Component />
      <SectionFeed />
      <Show_pizzaComponent />
    </>
  );
}

export default App;
