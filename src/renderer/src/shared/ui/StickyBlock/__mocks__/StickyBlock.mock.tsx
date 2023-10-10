import { StickyBlockProps } from "../StickyBlock.type";

const StickyBlockMock = (props: StickyBlockProps) => (
  <div data-testid="StickyBlock">{JSON.stringify(props)}</div>
);

export default StickyBlockMock;
