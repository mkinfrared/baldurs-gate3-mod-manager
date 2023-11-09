import { render } from "@testing-library/react";

import { IconButton } from "./IconButton";

describe("<IconButton />", () => {
  const Component = <IconButton />;

  it("should be defined", () => {
    expect(IconButton).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("IconButton");

    expect(element).toBeDefined();
  });

  it("should render a contained button by default", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("IconButton");

    expect(element).toBeDefined();

    expect(element).toHaveClass("contained");
  });

  it("should render an outlined button when variant prop is outlined", () => {
    const { getByTestId } = render(<IconButton variant="outlined" />);
    const element = getByTestId("IconButton");

    expect(element).toBeDefined();

    expect(element).toHaveClass("outlined");
  });

  it("should render a disabled button when disabled prop is true", () => {
    const { getByTestId } = render(<IconButton disabled />);
    const element = getByTestId("IconButton");

    expect(element).toBeDefined();

    expect(element).toBeDisabled();
  });

  it("should add class name passed in props", () => {
    const classname = "marklar";
    const { getByTestId } = render(<IconButton className={classname} />);
    const element = getByTestId("IconButton");

    expect(element).toBeDefined();

    expect(element).toHaveClass(classname);
  });

  it("should add 'loading' class name to button", () => {
    const classname = "loading";

    const { getByTestId } = render(
      <IconButton className={classname} loading />,
    );

    const element = getByTestId("IconButton");

    expect(element).toBeDefined();

    expect(element).toHaveClass(classname);
  });
});
