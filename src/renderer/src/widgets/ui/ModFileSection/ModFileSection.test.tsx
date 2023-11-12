import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ModFileSection } from "./ModFileSection";

vi.mock("@renderer/features/modFile");

describe("<ModFileSection />", () => {
  const game = "BG3";
  const Component = <ModFileSection game={game} />;

  it("should be defined", () => {
    expect(ModFileSection).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("ModFileSection");

    expect(element).toBeDefined();
  });
});
