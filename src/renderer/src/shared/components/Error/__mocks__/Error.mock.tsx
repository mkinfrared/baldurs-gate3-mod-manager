import { ErrorProps } from "../Error.type";

const ErrorMock = (props: ErrorProps) => (
  <div data-testid="Error">{JSON.stringify(props)}</div>
);

export default ErrorMock;
