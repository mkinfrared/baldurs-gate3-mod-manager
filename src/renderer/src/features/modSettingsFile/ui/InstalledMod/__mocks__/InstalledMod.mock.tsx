import { InstalledModProps } from "../InstalledMod.type";

const InstalledModMock = (props: InstalledModProps) => (
  <div data-testid="InstalledMod">{JSON.stringify(props)}</div>
);

export default InstalledModMock;
