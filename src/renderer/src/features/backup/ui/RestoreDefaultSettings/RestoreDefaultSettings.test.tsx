import { render } from "@testing-library/react";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { RestoreDefaultSettings } from "./RestoreDefaultSettings";

describe("<RestoreDefaultSettings />", () => {
  const game = "BG3";
  const Component = <RestoreDefaultSettings game={game} />;

  it("should be defined", () => {
    expect(RestoreDefaultSettings).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(withQueryProvider(Component));
    const element = getByTestId("RestoreDefaultSettings");

    expect(element).toBeDefined();
  });
});
