import { classNames, trpc } from "@renderer/shared/lib/helpers";

import { Backup } from "../Backup";

import css from "./BackupList.module.scss";
import { BackupListProps } from "./BackupList.type";

const BackupList = ({ className, game }: BackupListProps) => {
  const { data } = trpc.backup.getBackups.useQuery(game);

  return (
    <div
      className={classNames(css.BackupList, className)}
      data-testid="BackupList"
    >
      {data?.map(({ filePath, name }) => (
        <Backup key={filePath} name={name} filePath={filePath} game={game} />
      ))}
    </div>
  );
};

export { BackupList };
