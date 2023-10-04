import { render } from "@testing-library/react";

import { InstalledModsSection } from "./InstalledModsSection";

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
