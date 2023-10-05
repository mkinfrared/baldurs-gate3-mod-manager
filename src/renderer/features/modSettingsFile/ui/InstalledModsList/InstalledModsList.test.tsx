import { render } from "@testing-library/react";

import { withQueryProvider } from "renderer/shared/lib/helpers/testUtils";

import { InstalledModsList } from "./InstalledModsList";

describe("<InstalledModsList />", () => {
  const Component = <InstalledModsList />;

  it("should be defined", () => {
    expect(InstalledModsList).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(withQueryProvider(Component));
    const element = getByTestId("InstalledModsList");

    expect(element).toBeDefined();
  });
});
