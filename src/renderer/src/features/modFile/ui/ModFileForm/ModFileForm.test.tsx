import { render } from "@testing-library/react";

import { withQueryProvider } from "@renderer/shared/lib/helpers/testUtils";

import { ModFileForm } from "./ModFileForm";

describe("<ModFileForm />", () => {
  const Component = <ModFileForm />;

  it("should be defined", () => {
    expect(ModFileForm).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(withQueryProvider(Component));

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(withQueryProvider(Component));
    const element = getByTestId("ModFileForm");

    expect(element).toBeDefined();
  });
});
