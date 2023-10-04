import { render } from "@testing-library/react";

import { ModFileToggle } from "./ModFileToggle";

describe("<ModFileToggle />", () => {
  const uuid = "foobar";
  const name = "marklar";
  const isActive = true;

  const Component = (
    <ModFileToggle isActive={isActive} modName={name} modUUID={uuid} />
  );

  it("should be defined", () => {
    expect(ModFileToggle).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
