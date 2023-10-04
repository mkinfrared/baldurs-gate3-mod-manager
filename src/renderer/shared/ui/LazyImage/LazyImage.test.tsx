import { act, render } from "@testing-library/react";
import * as reactUse from "react-use";

import { LazyImage } from "./LazyImage";

jest.mock("react-use");

describe("<LazyImage />", () => {
  const hooksMock = reactUse as jest.Mocked<typeof reactUse>;
  const src = "marklar";
  const children = <source data-testid="source" />;
  const Component = <LazyImage src={src}>{children}</LazyImage>;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should be defined", () => {
    expect(LazyImage).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("LazyImage");

    expect(element).toBeDefined();
  });

  it("should render an image without 'src' attribute and not render children", () => {
    const { container, queryByTestId } = render(Component);
    const image = container.querySelector("img") as HTMLImageElement;
    const source = queryByTestId("source");

    expect(image.src).toBe("");

    expect(source).toBe(null);
  });

  it("should render children when 'isIntersecting' is true", async () => {
    hooksMock.useIntersection.mockReturnValue({
      isIntersecting: true,
    } as any);

    const { findByTestId, rerender } = render(Component);

    rerender(Component);

    const source = await findByTestId("source");

    expect(source).toBeDefined();
  });

  it("should render <NoImage /> when image load fails", async () => {
    hooksMock.useIntersection.mockReturnValue({
      isIntersecting: true,
    } as any);

    const event = new Event("error", { bubbles: true });

    const { container, findByTestId, rerender } = render(
      <LazyImage src={src}>{children}</LazyImage>,
    );

    const image = container.querySelector("img");

    rerender(<LazyImage src={src}>{children}</LazyImage>);

    act(() => {
      image?.dispatchEvent(event);
    });

    const noImage = await findByTestId("NoImage");

    expect(noImage).toBeDefined();
  });
});
