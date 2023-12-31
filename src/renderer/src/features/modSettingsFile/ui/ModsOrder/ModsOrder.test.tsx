import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { ModsOrder } from "./ModsOrder";

describe("<ModsOrder />", () => {
  const game = "BG3";
  const Component = <ModsOrder game={game} />;

  it("should be defined", () => {
    expect(ModsOrder).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(withQueryProvider(Component));
    const element = getByTestId("ModsOrder");

    expect(element).toBeDefined();
  });
});
