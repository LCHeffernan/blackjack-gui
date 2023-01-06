import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";

const Player = ({ playerHand }) => (
  <div className="cards-container player" data-testid="player-cards">
    {playerHand && (
      <div className="cards">
        <Cards cards={playerHand} />
      </div>
    )}
  </div>
);

Player.defaultProps = {
  playerHand: [],
};

Player.propTypes = {
  playerHand: PropTypes.arrayOf(
    PropTypes.shape({
      cardRank: PropTypes.string,
      cardSuit: PropTypes.string,
      cardValue: PropTypes.number,
    })
  ),
};

export default Player;
