import { createColumnHelper } from "@tanstack/react-table";
// import { suspend } from "suspend-react";

import {
  InstalledModInfo,
  ModFileToggle,
  // getInstalledMods,
} from "renderer/entities/modSettingsFile";
import { DataTable } from "renderer/shared/components";
import { classNames } from "renderer/shared/lib/helpers";

import css from "./InstalledModsList.module.scss";
import { InstalledModsListProps } from "./InstalledModsList.type";

const columnHelper = createColumnHelper<InstalledModInfo>();

const columns = [
  columnHelper.accessor("isActive", {
    header: "Active",
    cell: ({ getValue, row }) => {
      const { uuid, name } = row.original;

      return (
        <ModFileToggle isActive={getValue()} modName={name} modUUID={uuid} />
      );
    },
  }),
  columnHelper.accessor("name", {
    header: "Name",
  }),
  columnHelper.accessor("version", {
    header: "Version",
    cell: (info) => info.getValue() || "N/A",
  }),
];

const InstalledModsList = ({ className }: InstalledModsListProps) => {
  // TODO fix when getInstalledMods is refactored
  // const installedMods = suspend(getInstalledMods);
  const installedMods: any[] = [];

  return (
    <div
      className={classNames(css.InstalledModsList, className)}
      data-testid="InstalledModsList"
    >
      <DataTable className={css.table} columns={columns} data={installedMods} />
    </div>
  );
};

export { InstalledModsList };
