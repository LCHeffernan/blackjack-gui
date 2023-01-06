import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  const regexExp =
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/i;
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
    expect(screen.getAllByText(regexExp).length).toEqual(1);
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
