import React, { useState, useEffect } from "react";
import Player from "./Player";
import NewGame from "./NewGame";
import PlayButtons from "./PlayButtons";
import DealerPlayer from "./DealerPlayer";
import Message from "./Message";
import Deck from "../objects/Deck";
import Dealer from "../objects/Dealer";
import Hand from "../objects/Hand";
import "../styles/app.css";

const App = () => {
  // const numberOfPlayers = 2;
  const [playerHand1, setPlayerHand1] = useState({
    isHandValid: true,
    isGameOver: true,
  });
  const [playerHand2, setPlayerHand2] = useState({
    isHandValid: true,
    isGameOver: true,
  });
  const [dealerHand, setDealerHand] = useState({
    isHandValid: true,
  });
  const [handObject, setHandObject] = useState({});
  const [handObject2, setHandObject2] = useState({});
  const [dealerHandObject, setDealerHandObject] = useState({});

  const handleNewGame = () => {
    const deck = new Deck();
    deck.initiateDeck();
    const dealer = new Dealer(deck);
    const hand = new Hand(dealer);
    const hand2 = new Hand(dealer);
    const handDealer = new Hand(dealer);

    hand.hitMe();
    hand2.hitMe();
    handDealer.hitMe();
    hand.hitMe();
    hand2.hitMe();
    handDealer.hitMe();

    setHandObject(hand);
    setHandObject2(hand2);
    setDealerHandObject(handDealer);

    setPlayerHand1({
      playerHand: hand.playerHand,
      playerScore: hand.playerScore,
      isHandValid: hand.isHandValid,
      isGameOver: hand.isGameOver,
    });
    setPlayerHand2({
      playerHand: hand2.playerHand,
      playerScore: hand2.playerScore,
      isHandValid: hand2.isHandValid,
      isGameOver: hand2.isGameOver,
    });
    setDealerHand({
      dealerHand: [handDealer.playerHand[0], {}],
      dealerScore: handDealer.playerScore,
      isHandValid: handDealer.isHandValid,
      isGameOver: handDealer.isGameOver,
    });
  };

  const handleHitMe = () => {
    handObject.hitMe();
    setPlayerHand1({
      playerHand: handObject.playerHand,
      playerScore: handObject.playerScore,
      isHandValid: handObject.isHandValid,
      isGameOver: handObject.isGameOver,
    });
  };

  const handleStand = () => {
    handObject.stand();
    setPlayerHand1({
      ...playerHand1,
      isGameOver: handObject.isGameOver,
    });
  };

  useEffect(() => {
    if (playerHand1.isGameOver) {
      setDealerHand({
        ...dealerHand,
        dealerHand: dealerHandObject.playerHand,
      });
    }
    if (
      playerHand1.isGameOver &&
      playerHand1.playerScore < 21 &&
      dealerHand.dealerScore < 17
    ) {
      dealerHandObject.hitMe();
      setDealerHand({
        dealerHand: dealerHandObject.playerHand,
        dealerScore: dealerHandObject.playerScore,
        isHandValid: dealerHandObject.isHandValid,
        isGameOver: dealerHandObject.isGameOver,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    playerHand1.isHandValid,
    playerHand1.isGameOver,
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
        {playerHand1.playerHand && (
          <DealerPlayer
            className="dealer"
            dealerHand={dealerHand.dealerHand}
            dealerScore={dealerHand.dealerScore}
            isPlayerGameOver={playerHand1.isGameOver}
          />
        )}
        <div className="playerWrapper">
          {playerHand1.playerHand && (
            <Player
              className="player1"
              playerHand={playerHand1.playerHand}
              playerScore={playerHand1.playerScore}
            />
          )}
          {playerHand2.playerHand && (
            <Player
              className="player2"
              playerHand={playerHand2.playerHand}
              playerScore={playerHand2.playerScore}
            />
          )}
        </div>
        <div className="message">
          <Message
            className="message-text"
            playerHand={playerHand1}
            dealerHand={dealerHand}
          />
        </div>
        <div className="buttons">
          <NewGame
            handleNewGame={handleNewGame}
            isGameOver={playerHand1.isGameOver}
          />
          <PlayButtons
            handleHitMe={handleHitMe}
            handleStand={handleStand}
            isGameOver={playerHand1.isGameOver}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
