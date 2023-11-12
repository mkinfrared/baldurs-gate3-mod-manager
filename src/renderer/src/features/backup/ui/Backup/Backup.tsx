import { delay } from "@common/lib";
import Copy from "@renderer/shared/assets/icons/copy.svg";
import Delete from "@renderer/shared/assets/icons/delete-forever.svg";
import Restore from "@renderer/shared/assets/icons/restore.svg";
import Tick from "@renderer/shared/assets/icons/tick.svg";
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

  const {
    mutateAsync: copy,
    isLoading: isCopying,
    isSuccess: isCopied,
  } = trpc.backup.copyBackupContent.useMutation({
    onMutate: async (variables) => {
      await delay(850);

      return variables;
    },
    onSuccess: async (content) => {
      if (content) {
        await navigator.clipboard.writeText(content);
      }
    },
  });

  return (
    <Card className={classNames(css.Backup, className)} data-testid="Backup">
      <Text>{name}</Text>
      <IconButton
        className={css.copy}
        onClick={() => copy(filePath)}
        loading={isCopying}
        disabled={isCopying}
        title="Copy content to buffer"
      >
        {isCopied ? <Tick /> : <Copy />}
      </IconButton>
      <IconButton
        onClick={() => restore({ file: filePath, gameKey: game })}
        loading={isRestoring}
        disabled={isRestoring}
        title="Restore modsettings from this backup"
      >
        <Restore />
      </IconButton>
      <IconButton
        color="error"
        onClick={() => deleteBackup(filePath)}
        loading={isDeleting}
        disabled={isDeleting}
        title="Delete from file system"
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export { Backup };
