import { render } from "@testing-library/react";

import { App } from "./App";

describe("<App/>", () => {
  const Component = <App />;

  it("should be defined", () => {
    expect(App).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("App");

    expect(element).toBeDefined();
  });
});
