import { render } from "@testing-library/react";

import StickyBlock from "./StickyBlock";

describe("<StickyBlock />", () => {
  const Component = <StickyBlock />;

  it("should be defined", () => {
    expect(StickyBlock).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("StickyBlock");

    expect(element).toBeDefined();
  });
});
