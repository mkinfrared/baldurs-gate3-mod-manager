import { ToggleButtonProps } from "../ToggleButton.type";

const ToggleButtonMock = (props: ToggleButtonProps) => (
  <div data-testid="ToggleButton">{JSON.stringify(props)}</div>
);

export default ToggleButtonMock;
