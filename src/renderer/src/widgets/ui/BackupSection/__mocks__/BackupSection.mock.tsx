import { BackupSectionProps } from "../BackupSection.type";

const BackupSectionMock = (props: BackupSectionProps) => (
  <div data-testid="BackupSection">{JSON.stringify(props)}</div>
);

export { BackupSectionMock };
