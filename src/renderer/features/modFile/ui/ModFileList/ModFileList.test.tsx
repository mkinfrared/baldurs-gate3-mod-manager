import { render } from "@testing-library/react";

import { ModFileList } from "./ModFileList";

describe("<ModFileList />", () => {
  const Component = <ModFileList />;

  it("should be defined", () => {
    expect(ModFileList).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("ModFileList");

    expect(element).toBeDefined();
  });
});
