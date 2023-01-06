import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";

const DealerPlayer = ({ dealerHand, dealerScore }) => (
  <div className="cards-container dealer" data-testid="dealer-cards">
    {dealerHand && (
      <div className="cards">
        <div className="score">{`Dealer score: ${dealerScore}`}</div>
        <Cards cards={dealerHand} />
      </div>
    )}
  </div>
);

DealerPlayer.defaultProps = {
  dealerHand: [],
  dealerScore: 0,
};

DealerPlayer.propTypes = {
  dealerHand: PropTypes.arrayOf(
    PropTypes.shape({
      cardRank: PropTypes.string,
      cardSuit: PropTypes.string,
      cardValue: PropTypes.number,
    })
  ),
  dealerScore: PropTypes.number,
};

export default DealerPlayer;
