import { ContainerProps } from "../Container.type";

const ContainerMock = (props: ContainerProps) => (
  <div data-testid="Container">{JSON.stringify(props)}</div>
);

export default ContainerMock;
