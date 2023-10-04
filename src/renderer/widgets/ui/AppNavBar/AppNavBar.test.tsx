import { render } from "@testing-library/react";

import { AppNavBar } from "./AppNavBar";

describe("<AppNavBar />", () => {
  const Component = <AppNavBar />;

  it("should be defined", () => {
    expect(AppNavBar).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("AppNavBar");

    expect(element).toBeDefined();
  });
});
