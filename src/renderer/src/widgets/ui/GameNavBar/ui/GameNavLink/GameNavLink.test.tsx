import Bell from "@renderer/shared/assets/icons/bell.svg";
import { renderWithRouter } from "@renderer/shared/lib/helpers/testUtils";

import { GameNavLink } from "./GameNavLink";

describe("<GameNavLink />", () => {
  const to = "/foobar";

  const Component = (
    <GameNavLink to={to}>
      <Bell />
    </GameNavLink>
  );

  it("should be defined", () => {
    expect(GameNavLink).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = renderWithRouter(Component);

    expect(container).toMatchSnapshot();
  });
});
