import { render } from "@testing-library/react";

import ErrorComp from "./Error";

describe("<Error />", () => {
  const error = "foobar";
  const Component = <ErrorComp error={error} />;

  it("should be defined", () => {
    expect(Error).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Error");

    expect(element).toBeDefined();
  });
});
