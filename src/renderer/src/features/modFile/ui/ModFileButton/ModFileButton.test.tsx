import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { ModFileButton } from "./ModFileButton";

describe("<ModFileButton />", () => {
  const currentModVersion = "v3.4.0";
  const modVersion = "v4.0.0";
  const modPath = "/foo/bar";

  const Component = (
    <ModFileButton
      modPath={modPath}
      currentModVersion={currentModVersion}
      modVersion={modVersion}
    />
  );

  it("should be defined", () => {
    expect(ModFileButton).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });
});
