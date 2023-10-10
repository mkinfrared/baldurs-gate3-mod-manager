import { EmptyListProps } from "../EmptyList.type";

const EmptyListMock = (props: EmptyListProps) => (
  <div data-testid="EmptyList">{JSON.stringify(props)}</div>
);

export default EmptyListMock;
