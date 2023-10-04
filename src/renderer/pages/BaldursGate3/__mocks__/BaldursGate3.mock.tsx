import { BaldursGate3Props } from "../BaldursGate3.type";

const BaldursGate3Mock = (props: BaldursGate3Props) => (
  <div data-testid="BaldursGate3">{JSON.stringify(props)}</div>
);

export { BaldursGate3Mock };
