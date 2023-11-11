import { render } from "@testing-library/react";

import LinkButton from "./LinkButton";

describe("<LinkButton />", () => {
  const Component = <LinkButton />;

  it("should be defined", () => {
    expect(LinkButton).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("LinkButton");

    expect(element).toBeDefined();
  });

  it("should render a contained button by default", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("LinkButton");

    expect(element).toBeDefined();

    expect(element).toHaveClass("contained");
  });

  it("should render an outlined button when variant prop is outlined", () => {
    const { getByTestId } = render(<LinkButton variant="outlined" />);
    const element = getByTestId("LinkButton");

    expect(element).toBeDefined();

    expect(element).toHaveClass("outlined");
  });
});
