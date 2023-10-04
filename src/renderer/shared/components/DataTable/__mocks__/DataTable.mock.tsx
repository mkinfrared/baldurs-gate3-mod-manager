import { DataTableProps } from "../DataTable.type";

const DataTableMock = <T,>(props: DataTableProps<T>) => (
  <div data-testid="DataTable">{JSON.stringify(props)}</div>
);

export default DataTableMock;
