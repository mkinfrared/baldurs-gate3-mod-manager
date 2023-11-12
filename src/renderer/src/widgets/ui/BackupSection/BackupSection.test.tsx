import { render } from "@testing-library/react";

import { BackupSection } from "./BackupSection";

vi.mock("@renderer/features/backup");

describe("<BackupSection />", () => {
  const game = "BG3";
  const Component = <BackupSection game={game} />;

  it("should be defined", () => {
    expect(BackupSection).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("BackupSection");

    expect(element).toBeDefined();
  });
});
