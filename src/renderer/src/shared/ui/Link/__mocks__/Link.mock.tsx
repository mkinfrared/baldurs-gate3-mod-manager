import { LinkProps } from "../Link.type";

const LinkMock = (props: LinkProps) => (
  <div data-testid="Link">{JSON.stringify(props)}</div>
);

export default LinkMock;
