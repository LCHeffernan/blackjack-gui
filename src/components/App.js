import React from "react";
import Player from "./Player";
import NewGame from "./NewGame";
import data from "../data/data.json";
import "../styles/app.css";

const App = () => {
  return (
    <div className="app">
      <div className="table">
        <div className="title" style={{ whiteSpace: "pre" }}>
          {`♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️
♠️ ♥️ BLACKJACK TABLE ♣️ ♦️
♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️`}
        </div>
        {data.playerHand && (
          <Player
            className="player"
            playerHand={data.playerHand.playerHand}
            playerScore={data.playerHand.playerScore}
          />
        )}
        <div className="buttons">
          <NewGame />
        </div>
      </div>
    </div>
  );
};

export default App;
