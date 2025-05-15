import Card from "./Card";
import cardsInfo from "./carddata.js";
import { Link } from "react-router-dom";
import "../CSS/CardBlock.css";
import { useStatus } from "./StatusProvider.jsx";

const CardBlock = () => {
  const { setStatus } = useStatus();
  return (
    <div className="card-block">
      <div className="cards">
        {cardsInfo.map((card) => {
          return (
            <div
              key={card.id}
              className="card"
              onMouseEnter={() =>
                setStatus({ text: "Product: ", subText: card.subText })
              }
              onMouseLeave={() =>
                setStatus({ text: "Welcome Home", subText: "" })
              }
            >
              <Link to={card.link}>
                <Card props={card} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardBlock;
