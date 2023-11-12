import { delay } from "@common/lib";
import Delete from "@renderer/shared/assets/icons/delete-forever.svg";
import Restore from "@renderer/shared/assets/icons/restore.svg";
import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Card, IconButton, Text } from "@renderer/shared/ui";

import css from "./Backup.module.scss";
import { BackupProps } from "./Backup.type";

const Backup = ({ className, filePath, game, name }: BackupProps) => {
  const utils = trpc.useUtils();

  const { mutate: restore, isLoading: isRestoring } =
    trpc.backup.restoreFromFile.useMutation({
      onMutate: async (variables) => {
        await delay(850);

        return variables;
      },
      onSettled: () => {
        utils.mod.invalidate();
      },
    });

  const { mutate: deleteBackup, isLoading: isDeleting } =
    trpc.backup.deleteBackup.useMutation({
      onMutate: async (variables) => {
        await delay(850);

        return variables;
      },
      onSettled: () => {
        utils.backup.getBackups.invalidate();
      },
    });

  return (
    <Card className={classNames(css.Backup, className)} data-testid="Backup">
      <Text>{name}</Text>
      <IconButton
        className={css.restore}
        onClick={() => restore({ file: filePath, gameKey: game })}
        loading={isRestoring}
        disabled={isRestoring}
      >
        <Restore />
      </IconButton>
      <IconButton
        color="error"
        onClick={() => deleteBackup(filePath)}
        loading={isDeleting}
        disabled={isDeleting}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export { Backup };
