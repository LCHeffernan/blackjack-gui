import React, { render } from "@testing-library/react";
import PlayButtons from "../components/PlayButtons";

describe("PlayButtons", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<PlayButtons />);
    expect(asFragment()).toMatchSnapshot();
  });
});
