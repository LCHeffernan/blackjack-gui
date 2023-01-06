import React from "react";
import PropTypes from "prop-types";

const PlayButtons = ({ handleHitMe, handleStand, isGameOver }) => (
  <div>
    <button
      className="play-button"
      type="button"
      onClick={handleHitMe}
      disabled={isGameOver}
    >
      Hit
    </button>
    <button
      className="play-button"
      type="button"
      onClick={handleStand}
      disabled={isGameOver}
    >
      Stand
    </button>
  </div>
);

PlayButtons.propTypes = {
  handleHitMe: PropTypes.func.isRequired,
  handleStand: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};

export default PlayButtons;
