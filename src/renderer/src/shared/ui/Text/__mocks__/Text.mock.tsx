import { TextProps } from "../Text.type";

const TextMock = (props: TextProps) => (
  <div data-testid="Text">{JSON.stringify(props)}</div>
);

export default TextMock;
