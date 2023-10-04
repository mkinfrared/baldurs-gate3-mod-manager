import { NoImageProps } from "../NoImage.type";

const NoImageMock = (props: NoImageProps) => (
  <div data-testid="NoImage">{JSON.stringify(props)}</div>
);

export default NoImageMock;
