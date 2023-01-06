import React, { render } from "@testing-library/react";
import Player from "../components/Player";

describe("Player", () => {
  const validProps = {
    playerHand: [
      {
        cardRank: "A",
        cardSuit: "Mock",
        cardValue: 11,
      },
      {
        cardRank: "K",
        cardSuit: "Mock",
        cardValue: 10,
      },
    ],
    playerScore: 21,
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <Player
        playerHand={validProps.playerHand}
        playerScore={validProps.playerScore}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
