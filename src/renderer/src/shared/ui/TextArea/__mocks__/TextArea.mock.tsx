import { TextAreaProps } from "../TextArea.type";

const TextAreaMock = (props: TextAreaProps) => (
  <div data-testid="TextArea">{JSON.stringify(props)}</div>
);

export default TextAreaMock;
