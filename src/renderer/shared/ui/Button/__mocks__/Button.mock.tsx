import { ButtonProps } from "../Button.type";

const ButtonMock = (props: ButtonProps) => (
  <div data-testid="Button">{JSON.stringify(props)}</div>
);

export default ButtonMock;
