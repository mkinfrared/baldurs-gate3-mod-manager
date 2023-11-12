import { delay } from "@common/lib";
import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Button } from "@renderer/shared/ui";

import css from "./RestoreDefaultSettings.module.scss";
import { RestoreDefaultSettingsProps } from "./RestoreDefaultSettings.type";

const RestoreDefaultSettings = ({
  className,
  game,
}: RestoreDefaultSettingsProps) => {
  const utils = trpc.useUtils();

  const { mutate, isLoading } = trpc.backup.restoreDefaultSettings.useMutation({
    onMutate: async (variables) => {
      await delay(850);

      return variables;
    },
    onSettled: () => {
      utils.invalidate();
    },
  });

  return (
    <Button
      color="error"
      className={classNames(css.RestoreDefaultSettings, className)}
      data-testid="RestoreDefaultSettings"
      loading={isLoading}
      disabled={isLoading}
      onClick={() => mutate(game)}
    >
      Restore Default Settings
    </Button>
  );
};

export { RestoreDefaultSettings };
