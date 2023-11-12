import { classNames } from "@renderer/shared/lib/helpers";
import { Heading } from "@renderer/shared/ui";
import { BackupSection } from "@renderer/widgets";

import css from "./Backup.module.scss";
import { BackupProps } from "./Backup.type";

const Backup = ({ className, game }: BackupProps) => (
  <div className={classNames(css.Backup, className)} data-testid="Backup">
    <Heading variant="h1">Backups</Heading>
    <BackupSection game={game} />
  </div>
);

export { Backup };
