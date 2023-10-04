import { FakeButtonProps } from "../FakeButton.type";

const FakeButtonMock = (props: FakeButtonProps) => (
  <div data-testid="FakeButton">{JSON.stringify(props)}</div>
);

export default FakeButtonMock;
