import CardPizzaComponent from "./CardPizzaComponent";
import Toggle_pizzaComponent from "./Toggle_pizzaComponent";
import "./show-pizza.css";
let data = [
  {
    name: "Peperoni",
    description:
      "Una variante de pizza donde el ingrdiente principal es el peperoni.",
  },
  {
    name: "Napolitana",
    description:
      "Esta es la variante mas simple de todas pero la mas popular, dice que esta forma de preparar la pizza probiene del mismisimo Napoles",
  },
  {
    name: "Pineaple",
    description:
      "Esta es una manera muy tropical de preparar la pizza y consiste en agregarle trozos de piña, aunque es una variante muy popular los italianos no la aprueban.",
  },
];
function Show_pizzaComponent() {
  return (
    <div className="spcontainer">
      <Toggle_pizzaComponent />
      {data.map((el) => {
        return (
          <CardPizzaComponent
            key={el.name}
            name={el.name}
            description={el.description}
          />
        );
      })}
    </div>
  );
}

export default Show_pizzaComponent;
