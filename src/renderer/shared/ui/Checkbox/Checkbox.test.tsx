import { render } from "@testing-library/react";

import { Checkbox } from "./Checkbox";

describe("<Checkbox />", () => {
  const Component = <Checkbox />;

  it("should be defined", () => {
    expect(Checkbox).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
