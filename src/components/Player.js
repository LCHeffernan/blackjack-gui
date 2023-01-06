import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";
import "../styles/player.css";

const Player = ({ playerHand, playerScore }) => (
  <div className="cards-container player" data-testid="player-cards">
    <div className="cards">
      <div className="score">{`Player score: ${playerScore}`}</div>
      <Cards cards={playerHand} />
    </div>
  </div>
);

Player.defaultProps = {
  playerHand: [],
  playerScore: 0,
};

Player.propTypes = {
  playerHand: PropTypes.arrayOf(
    PropTypes.shape({
      cardRank: PropTypes.string,
      cardSuit: PropTypes.string,
      cardValue: PropTypes.number,
    })
  ),
  playerScore: PropTypes.number,
};

export default Player;
