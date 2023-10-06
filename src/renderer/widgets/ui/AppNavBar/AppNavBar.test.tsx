import { renderWithRouter } from "renderer/shared/lib/helpers/testUtils";

import { AppNavBar } from "./AppNavBar";

describe("<AppNavBar />", () => {
  const Component = <AppNavBar />;

  it("should be defined", () => {
    expect(AppNavBar).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = renderWithRouter(<AppNavBar />);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = renderWithRouter(Component);
    const element = getByTestId("AppNavBar");

    expect(element).toBeDefined();
  });
});
