import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { App } from "./App";

vi.mock("@renderer/shared/lib/hooks");

describe("<App/>", () => {
  const Component = <App />;

  it("should be defined", () => {
    expect(App).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(withQueryProvider(Component));
    const element = getByTestId("App");

    expect(element).toBeDefined();
  });
});
