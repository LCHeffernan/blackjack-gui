import React, { render } from "@testing-library/react";
import DealerPlayer from "../components/DealerPlayer";

describe("Dealer", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<DealerPlayer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
