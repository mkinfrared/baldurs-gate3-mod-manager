import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { InstalledModsSection } from "./InstalledModsSection";

vi.mock("@renderer/features/modSettingsFile");

describe("<InstalledModsSection />", () => {
  const Component = <InstalledModsSection />;

  it("should be defined", () => {
    expect(InstalledModsSection).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("InstalledModsSection");

    expect(element).toBeDefined();
  });
});
