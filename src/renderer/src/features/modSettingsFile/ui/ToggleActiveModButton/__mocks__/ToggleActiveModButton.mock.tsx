import { ToggleActiveModButtonProps } from "../ToggleActiveModButton.type";

const ToggleActiveModButtonMock = (props: ToggleActiveModButtonProps) => (
  <div data-testid="ToggleActiveModButton">{JSON.stringify(props)}</div>
);

export { ToggleActiveModButtonMock };
