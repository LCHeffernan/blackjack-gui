import React, { render, screen } from "@testing-library/react";
import Message from "../components/Message";

describe("Message", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Message />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct message upon game started", () => {
    render(<Message />);

    expect(screen.getByText("Enjoy your game")).toHaveClass("message");
  });
});
