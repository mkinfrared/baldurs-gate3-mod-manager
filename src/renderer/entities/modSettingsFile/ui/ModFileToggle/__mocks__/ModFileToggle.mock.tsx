import { ModFileToggleProps } from "../ModFileToggle.type";

const ModFileToggleMock = (props: ModFileToggleProps) => (
  <div data-testid="ModFileToggle">{JSON.stringify(props)}</div>
);

export default ModFileToggleMock;
