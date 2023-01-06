import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct title and message", () => {
    render(<App />);

    expect(
      screen.getByText(
        "♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♠️ ♥️ BLACKJACK TABLE ♣️ ♦️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️ ♥️ ♣️ ♦️ ♠️"
      )
    ).toBeInTheDocument();
  });

  it("Stand button is clicked", () => {
    render(<App />);
    const newGameButton = screen.getByText("New Game");
    const standButton = screen.getByText("Stand");

    fireEvent.click(newGameButton);
    fireEvent.click(standButton);
    expect(screen.getByText(/Dealer score:/i)).toBeInTheDocument();
  });
});
