import { SuspenseErrorProps } from "../SuspenseError.type";

const SuspenseErrorMock = (props: SuspenseErrorProps) => (
  <div data-testid="SuspenseError">{JSON.stringify(props)}</div>
);

export default SuspenseErrorMock;
