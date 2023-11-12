import { BackupListProps } from "../BackupList.type";

const BackupListMock = (props: BackupListProps) => (
  <div data-testid="BackupList">{JSON.stringify(props)}</div>
);

export { BackupListMock };
