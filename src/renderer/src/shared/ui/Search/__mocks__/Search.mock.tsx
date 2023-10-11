import { SearchProps } from "../Search.type";

const SearchMock = (props: SearchProps<any>) => (
  <div data-testid="Search">{JSON.stringify(props)}</div>
);

export default SearchMock;
