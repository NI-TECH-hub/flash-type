import React from "react";
import "./ChallangeDetailsCard.css";

const ChallangeDetailsCard = ({ CardName, cardValue}) => {
    return (
      <div className="details-card-container">
            <div className="card-name">{ CardName}</div>
            <div className="card-value">{ cardValue}</div>
      </div>
    );
}

export default ChallangeDetailsCard;