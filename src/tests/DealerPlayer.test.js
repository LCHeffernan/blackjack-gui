import React, { render, screen } from "@testing-library/react";
import DealerPlayer from "../components/DealerPlayer";

describe("Dealer", () => {
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
    dealerScore: 21,
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <DealerPlayer
        dealerHand={validProps.dealerHand}
        dealerScore={validProps.dealerScore}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct score", () => {
    render(
      <DealerPlayer
        dealerHand={validProps.dealerHand}
        dealerScore={validProps.dealerScore}
      />
    );
    expect(screen.getByText("Dealer score: 21")).toHaveClass("score");
  });
});
