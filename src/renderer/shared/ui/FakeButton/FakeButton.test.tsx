import { render } from "@testing-library/react";

import FakeButton from "./FakeButton";

describe("<FakeButton />", () => {
  const Component = <FakeButton />;

  it("should be defined", () => {
    expect(FakeButton).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("FakeButton");

    expect(element).toBeDefined();
  });
});
