import { render } from "@testing-library/react";

import { Settings } from "./Settings";

describe("<Settings />", () => {
  const game = "BG3";
  const Component = <Settings game={game} />;

  it("should be defined", () => {
    expect(Settings).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Settings");

    expect(element).toBeDefined();
  });
});
