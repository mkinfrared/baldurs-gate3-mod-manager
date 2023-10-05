import { CardProps } from "../Card.type";

const CardMock = (props: CardProps) => (
  <div data-testid="Card">{JSON.stringify(props)}</div>
);

export default CardMock;
