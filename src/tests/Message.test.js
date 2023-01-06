import React, { render } from "@testing-library/react";
import Message from "../components/Message";

describe("Message", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Message />);
    expect(asFragment()).toMatchSnapshot();
  });
});
