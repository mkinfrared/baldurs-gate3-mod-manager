import { ModFileButtonProps } from "../ModFileButton.type";

const ModFileButtonMock = (props: ModFileButtonProps) => (
  <div data-testid="ModFileButton">{JSON.stringify(props)}</div>
);

export default ModFileButtonMock;
