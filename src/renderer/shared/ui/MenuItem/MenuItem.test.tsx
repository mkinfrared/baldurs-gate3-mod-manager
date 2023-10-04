import { render } from "@testing-library/react";

import MenuItem from "./MenuItem";

describe("<MenuItem />", () => {
  const Component = <MenuItem value={42} />;

  it("should be defined", () => {
    expect(MenuItem).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("MenuItem");

    expect(element).toBeDefined();
  });
});
