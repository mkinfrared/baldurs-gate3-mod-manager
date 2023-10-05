import { render } from "@testing-library/react";

import { withQueryProvider } from "renderer/shared/lib/helpers/testUtils";

import { ToggleActiveModButton } from "./ToggleActiveModButton";

describe("<ToggleActiveModButton />", () => {
  const isActive = true;
  const modUUID = "modUUID";

  const Component = (
    <ToggleActiveModButton isActive={isActive} modUUID={modUUID} />
  );

  it("should be defined", () => {
    expect(ToggleActiveModButton).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });
});
