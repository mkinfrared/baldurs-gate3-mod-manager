import { GameNavLinkProps } from "../GameNavLink.type";

const GameNavLinkMock = (props: GameNavLinkProps) => (
  <div data-testid="GameNavLink">{JSON.stringify(props)}</div>
);

export { GameNavLinkMock };
