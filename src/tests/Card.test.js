import React, { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card", () => {
  const validProps = {
    card: {
      cardRank: "A",
      cardSuit: "♣️",
      cardValue: 11,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<Card card={validProps.card} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct text", () => {
    render(<Card card={validProps.card} />);
    expect(screen.getByText("♣️")).toHaveClass("suit");
    expect(screen.getAllByText("A")).toHaveLength(2);
  });

  it("hides empty card object", () => {
    render(<Card card={{}} />);
    expect(screen.getByTestId("card")).toHaveClass("card-container hide");
  });
});
