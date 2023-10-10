import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Card from "./Card";

describe("<Card />", () => {
  const Component = <Card />;

  it("should be defined", () => {
    expect(Card).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Card");

    expect(element).toBeDefined();
  });
});
