import React, { useState, useEffect } from "react";
import Player from "./Player";
import NewGame from "./NewGame";
import PlayButtons from "./PlayButtons";
import DealerPlayer from "./DealerPlayer";
import Deck from "../objects/Deck";
import Dealer from "../objects/Dealer";
import Hand from "../objects/Hand";
import "../styles/app.css";

const App = () => {
  const [playerHand, setPlayerHand] = useState({
    isHandValid: true,
    isGameOver: true,
  });
  const [dealerHand, setDealerHand] = useState({
    isHandValid: true,
  });
  const [handObject, setHandObject] = useState({});
  const [dealerHandObject, setDealerHandObject] = React.useState({});

  const handleNewGame = () => {
    const deck = new Deck();
    deck.initiateDeck();
    const dealer = new Dealer(deck);
    const hand = new Hand(dealer);
    const handDealer = new Hand(dealer);

    hand.hitMe();
    handDealer.hitMe();
    hand.hitMe();
    handDealer.hitMe();

    setHandObject(hand);
    setDealerHandObject(handDealer);
    setPlayerHand({
      playerHand: hand.playerHand,
      playerScore: hand.playerScore,
      isHandValid: hand.isHandValid,
      isGameOver: hand.isGameOver,
    });
    setDealerHand({
      dealerHand: handDealer.playerHand,
      dealerScore: handDealer.playerScore,
      isHandValid: handDealer.isHandValid,
      isGameOver: handDealer.isGameOver,
    });
  };

  const handleHitMe = () => {
    handObject.hitMe();
    setPlayerHand({
      playerHand: handObject.playerHand,
      playerScore: handObject.playerScore,
      isHandValid: handObject.isHandValid,
      isGameOver: handObject.isGameOver,
    });
  };

  const handleStand = () => {
    handObject.stand();
    setPlayerHand({
      ...playerHand,
      isGameOver: handObject.isGameOver,
    });
  };

  useEffect(() => {
    if (playerHand.isGameOver && playerHand.isHandValid) {
      if (dealerHand.dealerScore < 17) {
        dealerHandObject.hitMe();
        setDealerHand({
          dealerHand: dealerHandObject.playerHand,
          dealerScore: dealerHandObject.playerScore,
          isHandValid: dealerHandObject.isHandValid,
          isGameOver: dealerHandObject.isGameOver,
        });
      }
    }
  }, [
    playerHand.isHandValid,
    playerHand.isGameOver,
    dealerHand.dealerScore,
    dealerHandObject,
  ]);

  return (
    <div className="app">
      <div className="table">
        <div className="title" style={{ whiteSpace: "pre" }}>
          {`♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️
♠️ ♥️ BLACKJACK TABLE ♣️ ♦️
♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️`}
        </div>
        {playerHand && (
          <DealerPlayer
            className="dealer"
            dealerHand={dealerHand.dealerHand}
            dealerScore={dealerHand.dealerScore}
          />
        )}
        {playerHand && (
          <Player
            className="player"
            playerHand={playerHand.playerHand}
            playerScore={playerHand.playerScore}
          />
        )}
        <div className="buttons">
          <NewGame
            handleNewGame={handleNewGame}
            isGameOver={playerHand.isGameOver}
          />
          <PlayButtons
            handleHitMe={handleHitMe}
            handleStand={handleStand}
            isGameOver={playerHand.isGameOver}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
