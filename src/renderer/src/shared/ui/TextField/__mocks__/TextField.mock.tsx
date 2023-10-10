import { TextFieldProps } from "../TextField.type";

const TextFieldMock = (props: TextFieldProps) => (
  <div data-testid="TextField">{JSON.stringify(props)}</div>
);

export default TextFieldMock;
