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
    expect(screen.getByText("Do you want to play?")).toHaveClass("message-text");
  });

  it("renders 3 buttons with the correct text", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(3);
    expect(screen.getByText("New Game")).toHaveClass("new-game-button");
    expect(screen.getByText("Hit")).toHaveClass("play-button");
    expect(screen.getByText("Stand")).toHaveClass("play-button");
  });

  it("New game button is clicked", () => {
    render(<App />);
    const button = screen.getByText("New Game");
    fireEvent.click(button);

    expect(screen.getByText(/Player score:/i)).toBeInTheDocument();
  });
});
