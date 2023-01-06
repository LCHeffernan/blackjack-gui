import React, { render } from "@testing-library/react";
import Card from "../components/Card";

describe("Card", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});
