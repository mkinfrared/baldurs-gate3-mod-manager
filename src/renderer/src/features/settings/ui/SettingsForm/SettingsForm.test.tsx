import { render } from "@testing-library/react";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { SettingsForm } from "./SettingsForm";

describe("<SettingsForm />", () => {
  const game = "BG3";
  const Component = <SettingsForm game={game} />;

  it("should be defined", () => {
    expect(SettingsForm).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(withQueryProvider(Component));
    const element = getByTestId("SettingsForm");

    expect(element).toBeDefined();
  });
});
