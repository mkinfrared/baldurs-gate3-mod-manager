import { render } from "@testing-library/react";

import Search from "./Search";

describe("<Search />", () => {
  const options = [42];
  const getActiveOption = () => false;
  const getOptionLabel = () => "marklar";
  const onChange = jest.fn();
  const onSearch = jest.fn();
  const searchValue = undefined;

  const Component = (
    <Search
      getActiveOption={getActiveOption}
      getOptionLabel={getOptionLabel}
      onChange={onChange}
      onSearch={onSearch}
      options={options}
      searchValue={searchValue}
    />
  );

  it("should be defined", () => {
    expect(Search).toBeDefined();
  });

  it("should match the snapshot", () => {
    const { container } = render(Component);

    expect(container).toMatchSnapshot();
  });

  it("should contain a data test id", () => {
    const { getByTestId } = render(Component);
    const element = getByTestId("Search");

    expect(element).toBeDefined();
  });
});
