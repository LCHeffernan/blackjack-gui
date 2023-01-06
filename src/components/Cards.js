import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <div className="player-hand">
      {cards.map((card) => (
        <Card key={`${card.cardRank}${card.cardSuit}`} card={card} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardRank: PropTypes.string,
      cardSuit: PropTypes.string,
      cardValue: PropTypes.number,
    })
  ).isRequired,
};

export default Cards;
