import { render } from "@testing-library/react";

import { InstalledModsList } from "./InstalledModsList";

describe("<InstalledModsList />", () => {
  const Component = <InstalledModsList />;

  it("should be defined", () => {
    expect(InstalledModsList).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("InstalledModsList");

    expect(element).toBeDefined();
  });
});
