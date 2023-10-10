import { LazyImageProps } from "../LazyImage.type";

const LazyImageMock = (props: LazyImageProps) => (
  <div data-testid="LazyImage">{JSON.stringify(props)}</div>
);

export default LazyImageMock;
