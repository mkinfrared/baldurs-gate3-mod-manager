import { render } from "@testing-library/react";

import { Backup } from "./Backup";

vi.mock("@renderer/widgets");

describe("<Backup />", () => {
  const game = "BG3";
  const Component = <Backup game={game} />;

  it("should be defined", () => {
    expect(Backup).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Backup");

    expect(element).toBeDefined();
  });
});
