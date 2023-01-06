import React from "react";
import PropTypes from "prop-types";

const PlayButtons = ({ handleHitMe, handleStand }) => (
  <div>
    <button className="play-button" type="button" onClick={handleHitMe}>
      Hit
    </button>
    <button className="play-button" type="button" onClick={handleStand}>
      Stand
    </button>
  </div>
);

PlayButtons.propTypes = {
  handleHitMe: PropTypes.func.isRequired,
  handleStand: PropTypes.func.isRequired,
};

export default PlayButtons;
