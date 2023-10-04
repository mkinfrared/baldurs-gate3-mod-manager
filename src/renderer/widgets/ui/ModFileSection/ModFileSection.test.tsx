import { render } from "@testing-library/react";

import { ModFileSection } from "./ModFileSection";

describe("<ModFileSection />", () => {
  const Component = <ModFileSection />;

  it("should be defined", () => {
    expect(ModFileSection).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("ModFileSection");

    expect(element).toBeDefined();
  });
});
