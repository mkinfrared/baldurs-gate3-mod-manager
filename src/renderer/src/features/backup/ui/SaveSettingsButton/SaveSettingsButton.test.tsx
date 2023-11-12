import { render } from "@testing-library/react";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { SaveSettingsButton } from "./SaveSettingsButton";

describe("<SaveSettingsButton />", () => {
  const game = "BG3";
  const Component = <SaveSettingsButton game={game} />;

  it("should be defined", () => {
    expect(SaveSettingsButton).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(withQueryProvider(Component));
    const element = getByTestId("SaveSettingsButton");

    expect(element).toBeDefined();
  });
});
