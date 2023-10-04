import { render } from "@testing-library/react";

import TextField from "./TextField";

describe("<TextField />", () => {
  const Component = <TextField />;

  it("should be defined", () => {
    expect(TextField).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TextField");

    expect(element).toBeDefined();
  });
});
