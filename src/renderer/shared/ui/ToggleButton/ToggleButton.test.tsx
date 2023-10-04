import { render } from "@testing-library/react";

import ToggleButton from "./ToggleButton";

describe("<ToggleButton />", () => {
  const Component = <ToggleButton />;

  it("should be defined", () => {
    expect(ToggleButton).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("ToggleButton");

    expect(element).toBeDefined();
  });
});
