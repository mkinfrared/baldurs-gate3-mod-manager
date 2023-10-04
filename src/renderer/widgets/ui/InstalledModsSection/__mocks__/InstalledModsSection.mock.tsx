import { InstalledModsSectionProps } from "../InstalledModsSection.type";

const InstalledModsSectionMock = (props: InstalledModsSectionProps) => (
  <div data-testid="InstalledModsSection">{JSON.stringify(props)}</div>
);

export default InstalledModsSectionMock;
