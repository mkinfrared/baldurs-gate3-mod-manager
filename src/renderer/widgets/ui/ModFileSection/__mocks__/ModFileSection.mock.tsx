import { ModFileSectionProps } from "../ModFileSection.type";

const ModFileSectionMock = (props: ModFileSectionProps) => (
  <div data-testid="ModFileSection">{JSON.stringify(props)}</div>
);

export default ModFileSectionMock;
