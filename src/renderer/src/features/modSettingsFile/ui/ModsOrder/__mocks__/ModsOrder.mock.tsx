import { ModsOrderProps } from "../ModsOrder.type";

const ModsOrderMock = (props: ModsOrderProps) => (
  <div data-testid="ModsOrder">{JSON.stringify(props)}</div>
);

export default ModsOrderMock;
