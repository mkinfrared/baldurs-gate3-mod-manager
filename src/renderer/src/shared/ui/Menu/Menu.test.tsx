import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Menu from "./Menu";

describe("<Menu />", () => {
  const comboboxRef = { current: null };
  const id = "marklar";
  const onClose = vi.fn();

  const Component = (
    <Menu comboboxRef={comboboxRef} id={id} onClose={onClose} />
  );

  it("should be defined", () => {
    expect(Menu).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Menu");

    expect(element).toBeDefined();
  });
});
