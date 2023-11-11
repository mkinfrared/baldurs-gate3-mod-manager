import { render } from "@testing-library/react";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { ToggleActiveModButton } from "./ToggleActiveModButton";

describe("<ToggleActiveModButton />", () => {
  const fileName = "foobar";
  const game = "BG3";
  const isActive = true;
  const uuid = "modUUID";

  const Component = (
    <ToggleActiveModButton
      fileName={fileName}
      game={game}
      isActive={isActive}
      uuid={uuid}
    />
  );

  it("should be defined", () => {
    expect(ToggleActiveModButton).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });
});
