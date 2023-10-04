import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { App } from "./App";

describe("App", () => {
  it("should render", () => {
    expect(render(<App />)).toBeTruthy();
  });

  it("should match the snapshot", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
