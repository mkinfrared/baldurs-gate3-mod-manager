import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { BaldursGate3 } from "./BaldursGate3";

vi.mock("@renderer/widgets");

describe("<BaldursGate3 />", () => {
  const Component = <BaldursGate3 />;

  it("should be defined", () => {
    expect(BaldursGate3).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("BaldursGate3");

    expect(element).toBeDefined();
  });
});
