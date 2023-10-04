import { ColumnDef } from "@tanstack/react-table";

export type DataTableProps<T> = {
  columns: ColumnDef<T, any>[];
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  data: Array<T>;
};
