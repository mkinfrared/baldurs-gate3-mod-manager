import { LinkButtonProps } from "../LinkButton.type";

const LinkButtonMock = (props: LinkButtonProps) => (
  <div data-testid="LinkButton">{JSON.stringify(props)}</div>
);

export default LinkButtonMock;
