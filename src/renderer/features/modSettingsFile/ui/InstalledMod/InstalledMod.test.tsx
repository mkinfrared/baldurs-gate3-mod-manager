import { render } from "@testing-library/react";

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
  };

  const Component = <InstalledMod mod={mod} />;

  it("should be defined", () => {
    expect(InstalledMod).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
