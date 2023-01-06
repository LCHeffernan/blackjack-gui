import React from "react";
import Player from "./Player";
import NewGame from "./NewGame";
import data from "../data/data.json";
import "../styles/app.css";

const App = () => {
  const [playerHand, setPlayerHand] = React.useState({
    isHandValid: true,
    isGameOver: true,
  });

  const handleNewGame = () => {
    setPlayerHand({
      playerHand: data.playerHand.playerHand,
      playerScore: data.playerHand.playerScore,
      isHandValid: data.playerHand.isHandValid,
      isGameOver: data.playerHand.isGameOver,
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
        </div>
      </div>
    </div>
  );
};

export default App;
