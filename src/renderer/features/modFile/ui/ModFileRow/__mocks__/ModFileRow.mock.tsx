import { ModFileRowProps } from "../ModFileRow.type";

const ModFileRowMock = (props: ModFileRowProps) => (
  <div data-testid="ModFileRow">{JSON.stringify(props)}</div>
);

export default ModFileRowMock;
