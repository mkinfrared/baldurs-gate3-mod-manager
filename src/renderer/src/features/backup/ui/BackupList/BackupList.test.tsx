import { render } from "@testing-library/react";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { BackupList } from "./BackupList";

describe("<BackupList />", () => {
  const game = "BG3";
  const Component = <BackupList game={game} />;

  it("should be defined", () => {
    expect(BackupList).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(withQueryProvider(Component));
    const element = getByTestId("BackupList");

    expect(element).toBeDefined();
  });
});
