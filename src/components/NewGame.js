import React from "react";
import PropTypes from "prop-types";

const NewGame = ({ handleNewGame, isGameOver }) => (
  <div>
    <button
      className="new-game-button"
      type="button"
      onClick={handleNewGame}
      disabled={!isGameOver}
    >
      New Game
    </button>
  </div>
);

NewGame.propTypes = {
  handleNewGame: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default NewGame;
