/* eslint-disable react/prop-types */
import "./cardpizza.css";
import cardpizza from "../../assets/cardpizza.svg";
function CardPizzaComponent(props) {
  return (
    <div className="cardpizza">
      <div className="cardpizza__img">
        <div className="img__cardpizza"></div>
        <div>
          <img className="img__vector" src={cardpizza} alt="" />
        </div>
      </div>
      <div className="cardpizza__descript">
        <h1 className="descrit__head">{props.name}</h1>
        <p className="descript__text">{props.description}</p>
      </div>
    </div>
  );
}

export default CardPizzaComponent;
