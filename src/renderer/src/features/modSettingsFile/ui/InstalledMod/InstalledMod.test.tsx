import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { InstalledMod } from "./InstalledMod";
import { InstalledModProps } from "./InstalledMod.type";

describe("<InstalledMod />", () => {
  const mod: InstalledModProps["mod"] = {
    folder: "Marklar",
    isActive: false,
    md5: "md5",
    name: "foobar",
    uuid: "uuid",
    version: "v3.4.7",
    fileName: "foobar",
  };

  const position = 42;
  const game = "BG3";
  const Component = <InstalledMod mod={mod} game={game} position={position} />;

  it("should be defined", () => {
    expect(InstalledMod).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });
});
