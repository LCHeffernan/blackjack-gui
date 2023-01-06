import React, { useState } from "react";
import Player from "./Player";
import NewGame from "./NewGame";
import PlayButtons from "./PlayButtons";
import Deck from "../objects/Deck";
import Dealer from "../objects/Dealer";
import Hand from "../objects/Hand";
import "../styles/app.css";

const App = () => {
  const [playerHand, setPlayerHand] = useState({
    isHandValid: true,
    isGameOver: true,
  });
  const [handObject, setHandObject] = React.useState({});

  const handleNewGame = () => {
    const deck = new Deck();
    deck.initiateDeck();
    const dealer = new Dealer(deck);
    const hand = new Hand(dealer);
    hand.hitMe();
    hand.hitMe();

    setHandObject(hand);
    setPlayerHand({
      playerHand: hand.playerHand,
      playerScore: hand.playerScore,
      isHandValid: hand.isHandValid,
      isGameOver: hand.isGameOver,
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

  return (
    <div className="app">
      <div className="table">
        <div className="title" style={{ whiteSpace: "pre" }}>
          {`♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️
♠️ ♥️ BLACKJACK TABLE ♣️ ♦️
♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️`}
        </div>
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
          <PlayButtons handleHitMe={handleHitMe} />
        </div>
      </div>
    </div>
  );
};

export default App;
