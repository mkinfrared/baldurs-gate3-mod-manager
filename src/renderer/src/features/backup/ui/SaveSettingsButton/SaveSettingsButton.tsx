import { delay } from "@common/lib";
import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Button } from "@renderer/shared/ui";

import css from "./SaveSettingsButton.module.scss";
import { SaveSettingsButtonProps } from "./SaveSettingsButton.type";

const SaveSettingsButton = ({ className, game }: SaveSettingsButtonProps) => {
  const utils = trpc.useUtils();

  const { mutate, isLoading } = trpc.backup.createBackup.useMutation({
    onMutate: async (variables) => {
      await delay(850);

      return variables;
    },
    onSettled: () => {
      utils.backup.invalidate();
    },
  });

  return (
    <Button
      className={classNames(css.SaveSettingsButton, className)}
      data-testid="SaveSettingsButton"
      onClick={() => mutate(game)}
      loading={isLoading}
      disabled={isLoading}
    >
      Backup Current Settings
    </Button>
  );
};

export { SaveSettingsButton };
