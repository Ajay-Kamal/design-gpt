import React from "react";
import Card from "./Card";
import cardsInfo from "./carddata.js";
import "../CSS/CardBlock.css";

const CardBlock = () => {
  return (
    <div className="card-block">
      {cardsInfo.map((card) => {
        return (
          <div key={card.id} className="card">
            {/* Move key here */}
            <Card props={card} />
          </div>
        );
      })}
    </div>
  );
};

export default CardBlock;
