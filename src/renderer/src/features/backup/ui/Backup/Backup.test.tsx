import { render } from "@testing-library/react";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { Backup } from "./Backup";

describe("<Backup />", () => {
  const game = "BG3";
  const name = "foobar";
  const filePath = "marklar";
  const Component = <Backup game={game} name={name} filePath={filePath} />;

  it("should be defined", () => {
    expect(Backup).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });
});
