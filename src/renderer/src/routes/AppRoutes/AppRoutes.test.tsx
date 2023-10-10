import { describe, expect, it, vi } from "vitest";

import { renderWithRouter } from "@renderer/shared/lib/helpers/testUtils";

import { AppRoutes } from "./AppRoutes";

vi.mock("@renderer/pages");

describe("<AppRoutes />", () => {
  const Component = <AppRoutes />;

  it("should be defined", () => {
    expect(AppRoutes).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = renderWithRouter(Component);

    expect(container).toMatchSnapshot();
  });
});
