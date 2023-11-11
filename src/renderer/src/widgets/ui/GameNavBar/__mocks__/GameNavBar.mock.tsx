import { GameNavBarProps } from "../GameNavBar.type";

const GameNavBarMock = (props: GameNavBarProps) => (
  <div data-testid="GameNavBar">{JSON.stringify(props)}</div>
);

export { GameNavBarMock };
