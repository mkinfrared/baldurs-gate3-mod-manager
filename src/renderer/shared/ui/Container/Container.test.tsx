import { render } from "@testing-library/react";

import Container from "./Container";

describe("<Container />", () => {
  const Component = <Container />;

  it("should be defined", () => {
    expect(Container).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Container");

    expect(element).toBeDefined();
  });
});
