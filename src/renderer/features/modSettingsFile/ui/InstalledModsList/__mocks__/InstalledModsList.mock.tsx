import { InstalledModsListProps } from "../InstalledModsList.type";

const InstalledModsListMock = (props: InstalledModsListProps) => (
  <div data-testid="InstalledModsList">{JSON.stringify(props)}</div>
);

export default InstalledModsListMock;
