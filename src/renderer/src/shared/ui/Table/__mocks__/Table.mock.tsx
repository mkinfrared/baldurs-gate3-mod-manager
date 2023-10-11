import { TableProps } from "../Table.type";

const TableMock = (props: TableProps) => (
  <div data-testid="Table">{JSON.stringify(props)}</div>
);

export default TableMock;
