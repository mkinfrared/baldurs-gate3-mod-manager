import { render } from "@testing-library/react";

import { NoImage } from "./NoImage";

describe("<NoImage />", () => {
  const Component = <NoImage />;

  it("should be defined", () => {
    expect(NoImage).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("NoImage");

    expect(element).toBeDefined();
  });
});
