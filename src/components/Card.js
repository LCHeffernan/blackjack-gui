import React from "react";
import PropTypes from "prop-types";

const Card = ({ card }) => (
  <div className="card-container">
    <div className="top-left-rank">{card.cardRank}</div>
    <div className="suit">{card.cardSuit}</div>
    <div className="bottom-right-rank">{card.cardRank}</div>
  </div>
);

Card.propTypes = {
  card: PropTypes.shape({
    cardRank: PropTypes.string,
    cardSuit: PropTypes.string,
    cardValue: PropTypes.number,
  }).isRequired,
};

export default Card;
