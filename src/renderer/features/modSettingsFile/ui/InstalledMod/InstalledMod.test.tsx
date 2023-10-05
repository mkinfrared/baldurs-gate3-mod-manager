import { render } from "@testing-library/react";

import { InstalledMod } from "./InstalledMod";

describe("<InstalledMod />", () => {
  const Component = <InstalledMod />;

  it("should be defined", () => {
    expect(InstalledMod).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
