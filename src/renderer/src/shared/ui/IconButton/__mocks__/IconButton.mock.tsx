import { IconButtonProps } from "../IconButton.type";

const IconButtonMock = (props: IconButtonProps) => (
  <div data-testid="IconButton">{JSON.stringify(props)}</div>
);

export default IconButtonMock;
