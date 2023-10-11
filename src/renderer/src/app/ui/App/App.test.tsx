import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { App } from "./App";

vi.mock("@renderer/routes");

describe("App", () => {
  it("should render", () => {
    expect(render(<App />)).toBeTruthy();
  });

  it("should match the snapshot", () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
