import { render } from "@testing-library/react";

import Loading from "./Loading";

describe("<Loading />", () => {
  const Component = <Loading />;

  it("should be defined", () => {
    expect(Loading).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });
});
