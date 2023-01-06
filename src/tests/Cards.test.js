import React, { render } from "@testing-library/react";
import Cards from "../components/Cards";

describe("Cards", () => {
  const validProps = {
    cards: [
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
  };
  it("renders correctly", () => {
    const { asFragment } = render(<Cards cards={validProps.cards} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
