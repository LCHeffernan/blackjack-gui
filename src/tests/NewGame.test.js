import React, { render, screen, fireEvent } from "@testing-library/react";
import NewGame from "../components/NewGame";

describe("NewGame", () => {
  const validProps = {
    handleNewGame: jest.fn(),
    isGameOver: true,
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <NewGame
        handleNewGame={validProps.handleNewGame}
        isGameOver={validProps.isGameOver}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
