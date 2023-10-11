import { classNames } from "@renderer/shared/lib/helpers";

import css from "./Table.module.scss";
import { TableProps } from "./Table.type";

const Table = ({ className, children }: TableProps) => (
  <table className={classNames(css.Table, className)} data-testid="Table">
    {children}
  </table>
);

export default Table;
