import { ModFileListProps } from "../ModFileList.type";

const ModFileListMock = (props: ModFileListProps) => (
  <div data-testid="ModFileList">{JSON.stringify(props)}</div>
);

export default ModFileListMock;
