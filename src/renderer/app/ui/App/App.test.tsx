import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { App } from "./App";

jest.mock("renderer/routes");

describe("App", () => {
  it("should render", () => {
    expect(render(<App />)).toBeTruthy();
  });

  it("should match the snapshot", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
