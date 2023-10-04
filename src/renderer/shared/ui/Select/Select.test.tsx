import { render } from "@testing-library/react";

import Select from "./Select";

describe("<Select />", () => {
  const options = [42];
  const getActiveOption = () => false;
  const getOptionLabel = () => "marklar";
  const onChange = jest.fn();

  const Component = (
    <Select
      getActiveOption={getActiveOption}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      options={options}
    />
  );

  it("should be defined", () => {
    expect(Select).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Select");

    expect(element).toBeDefined();
  });
});
