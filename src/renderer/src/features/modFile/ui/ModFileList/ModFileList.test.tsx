import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { ModFileList } from "./ModFileList";

describe("<ModFileList />", () => {
  const Component = <ModFileList />;

  it("should be defined", () => {
    expect(ModFileList).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });
});
