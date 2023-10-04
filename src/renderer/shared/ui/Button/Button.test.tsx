import { render } from "@testing-library/react";

import Button from "./Button";

describe("<Button />", () => {
  const Component = <Button />;

  it("should be defined", () => {
    expect(Button).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Button");

    expect(element).toBeDefined();
  });
});
