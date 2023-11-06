import { ModFileFormProps } from "../ModFileForm.type";

const ModFileFormMock = (props: ModFileFormProps) => (
  <div data-testid="ModFileForm">{JSON.stringify(props)}</div>
);

export default ModFileFormMock;
