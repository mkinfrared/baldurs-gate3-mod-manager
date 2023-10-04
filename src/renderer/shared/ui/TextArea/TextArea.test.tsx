import { render } from "@testing-library/react";

import TextArea from "./TextArea";

describe("<TextArea />", () => {
  const Component = <TextArea />;

  it("should be defined", () => {
    expect(TextArea).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("TextArea");

    expect(element).toBeDefined();
  });
});
