import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Message = ({ playerHand, dealerHand }) => {
  const [message, setMessage] = useState();

  useEffect(() => {
    if (!playerHand.isHandValid) {
      setMessage("BUST - GAME OVER!");
    } else if (
      playerHand.playerScore === 21 &&
      playerHand.playerHand.length === 2
    ) {
      if (dealerHand.dealerScore === 21 && dealerHand.dealerHand.length === 2) {
        setMessage("DRAW - You both have blackjack");
      } else {
        setMessage("♥️ ♣️ BLACKJACK ♦️ ♠️");
      }
    } else {
      setMessage("Enjoy your game");
    }
  }, [playerHand, dealerHand]);

  return <div className="message">{message}</div>;
};

Message.defaultProps = {
  playerHand: {},
  dealerHand: {},
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
  dealerHand: PropTypes.shape({
    dealerHand: PropTypes.arrayOf(
      PropTypes.shape({
        cardRank: PropTypes.string,
        cardSuit: PropTypes.string,
        cardValue: PropTypes.number,
      })
    ),
    dealerScore: PropTypes.number,
    isHandValid: PropTypes.bool,
    isGameOver: PropTypes.bool,
  }),
};

export default Message;
