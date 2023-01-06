import React from "react";
import PropTypes from "prop-types";

const PlayButtons = ({ handleHitMe }) => (
  <div>
    <button className="play-button" type="button" onClick={handleHitMe}>
      Hit
    </button>
    <button className="play-button" type="button">
      Stand
    </button>
  </div>
);

PlayButtons.propTypes = {
  handleHitMe: PropTypes.func.isRequired,
};

export default PlayButtons;
