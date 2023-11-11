import { render } from "@testing-library/react";

import { GameNavBar } from "./GameNavBar";

vi.mock("./ui");

describe("<GameNavBar />", () => {
  const Component = <GameNavBar />;

  it("should be defined", () => {
    expect(GameNavBar).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("GameNavBar");

    expect(element).toBeDefined();
  });
});
