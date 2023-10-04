import { SelectProps } from "../Select.type";

const SelectMock = (props: SelectProps<any>) => (
  <div data-testid="Select">{JSON.stringify(props)}</div>
);

export default SelectMock;
