import { render } from "@testing-library/react";

import Spinner from "./Spinner";

describe("<Spinner />", () => {
  const Component = <Spinner type="oval" />;

  it("should be defined", () => {
    expect(Spinner).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should return a bars loader", () => {
    const type = "bars";
    const { getByText } = render(<Spinner type={type} />);

    expect(getByText(/bars/)).toBeDefined();
  });

  it("should return an oval loader", () => {
    const type = "oval";
    const { getByText } = render(<Spinner type={type} />);

    expect(getByText(/oval/)).toBeDefined();
  });

  it("should return a puff loader", () => {
    const type = "puff";
    const { getByText } = render(<Spinner type={type} />);

    expect(getByText(/puff/)).toBeDefined();
  });

  it("should return a rings loader", () => {
    const type = "rings";
    const { getByText } = render(<Spinner type={type} />);

    expect(getByText(/rings/)).toBeDefined();
  });

  it("should return a ripple loader", () => {
    const type = "ripple";
    const { getByText } = render(<Spinner type={type} />);

    expect(getByText(/ripple/)).toBeDefined();
  });

  it("should return a tail-spin loader", () => {
    const type = "tail-spin";
    const { getByText } = render(<Spinner type={type} />);

    expect(getByText(/tail-spin/)).toBeDefined();
  });

  it("should return an oval loader by default", () => {
    const { getByText } = render(<Spinner />);

    expect(getByText(/oval/)).toBeDefined();
  });
});
