import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Message = ({ playerHand }) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    if (!playerHand.isHandValid) {
      setMessage("BUST - GAME OVER!");
    } else {
      setMessage("Enjoy your game");
    }
  }, [playerHand]);

  return <div className="message">{message}</div>;
};

Message.defaultProps = {
  playerHand: {},
};

Message.propTypes = {
  playerHand: PropTypes.shape({
    playerHand: PropTypes.arrayOf(
      PropTypes.shape({
        cardRank: PropTypes.string,
        cardSuit: PropTypes.string,
        cardValue: PropTypes.number,
      })
    ),
    playerScore: PropTypes.number,
    isHandValid: PropTypes.bool,
    isGameOver: PropTypes.bool,
  }),
};

export default Message;
