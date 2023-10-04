import { render } from "@testing-library/react";

import Link from "./Link";

describe("<Link />", () => {
  const href = "http://localhost/marklar";
  const Component = <Link href={href} rel="noopener" />;

  it("should be defined", () => {
    expect(Link).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Link");

    expect(element).toBeDefined();
  });
});
