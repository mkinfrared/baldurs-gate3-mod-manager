import { CheckboxProps } from "../Checkbox.type";

const CheckboxMock = (props: CheckboxProps) => (
  <div data-testid="Checkbox">{JSON.stringify(props)}</div>
);

export default CheckboxMock;
