import { render } from "@testing-library/react";

import { Heading } from "./Heading";

describe("<Heading />", () => {
  const testId = "Heading";
  const Component = <Heading />;

  it("should be defined", () => {
    expect(Heading).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should render an h3 tag by default when no variant prop is passed", () => {
    const { getByTestId } = render(Component);
    const heading = getByTestId(testId);

    expect(heading.tagName).toBe("H3");
  });

  it("should render an h1 tag when variant is h1", () => {
    const variant = "h1";
    const { getByTestId } = render(<Heading variant={variant} />);
    const heading = getByTestId(testId);

    expect(heading.tagName).toBe("H1");
  });

  it("should render an h2 tag when variant is h2", () => {
    const variant = "h2";
    const { getByTestId } = render(<Heading variant={variant} />);
    const heading = getByTestId(testId);

    expect(heading.tagName).toBe("H2");
  });

  it("should render an h3 tag when variant is h3", () => {
    const variant = "h3";
    const { getByTestId } = render(<Heading variant={variant} />);
    const heading = getByTestId(testId);

    expect(heading.tagName).toBe("H3");
  });

  it("should render an h4 tag when variant is h4", () => {
    const variant = "h4";
    const { getByTestId } = render(<Heading variant={variant} />);
    const heading = getByTestId(testId);

    expect(heading.tagName).toBe("H4");
  });

  it("should render an h5 tag when variant is h5", () => {
    const variant = "h5";
    const { getByTestId } = render(<Heading variant={variant} />);
    const heading = getByTestId(testId);

    expect(heading.tagName).toBe("H5");
  });

  it("should render an h6 tag when variant is h6", () => {
    const variant = "h6";
    const { getByTestId } = render(<Heading variant={variant} />);
    const heading = getByTestId(testId);

    expect(heading.tagName).toBe("H6");
  });
});
