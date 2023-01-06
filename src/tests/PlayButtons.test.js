import React, { render, screen, fireEvent } from "@testing-library/react";
import PlayButtons from "../components/PlayButtons";

describe("PlayButtons", () => {
  const validProps = {
    handleHitMe: jest.fn(),
    handleStand: jest.fn(),
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PlayButtons
        handleHitMe={validProps.handleHitMe}
        handleStand={validProps.handleStand}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("click handler for hit me is called", () => {
    render(
      <PlayButtons
        handleHitMe={validProps.handleHitMe}
        handleStand={validProps.handleStand}
      />
    );
    const button = screen.getByText("Hit");
    expect(button).not.toBeDisabled();
    fireEvent.click(button);

    expect(validProps.handleHitMe).toHaveBeenCalled();
  });

  it("click handler for stand is called", () => {
    render(
      <PlayButtons
        handleHitMe={validProps.handleHitMe}
        handleStand={validProps.handleStand}
      />
    );
    const button = screen.getByText("Stand");
    expect(button).not.toBeDisabled();
    fireEvent.click(button);

    expect(validProps.handleStand).toHaveBeenCalled();
  });
});
