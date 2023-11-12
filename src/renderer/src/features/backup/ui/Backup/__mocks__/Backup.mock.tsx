import { BackupProps } from "../Backup.type";

const BackupMock = (props: BackupProps) => (
  <div data-testid="Backup">{JSON.stringify(props)}</div>
);

export { BackupMock };
