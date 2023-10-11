import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Button } from "@renderer/shared/ui";

import css from "./ModFileButton.module.scss";
import { ModFileButtonProps } from "./ModFileButton.type";

const ModFileButton = ({ className, modPath }: ModFileButtonProps) => {
  const utils = trpc.useContext();

  const { mutateAsync, isLoading, isSuccess } =
    trpc.mod.installMods.useMutation({
      onSuccess: () => {
        utils.mod.getInstalledMods.invalidate();
      },
    });

  const getText = () => {
    if (isSuccess) {
      return "Installed";
    }

    return "Install";
  };

  const handleClick = () => {
    mutateAsync([modPath]);
  };

  return (
    <Button
      className={classNames(css.ModFileButton, className)}
      data-testid="ModFileButton"
      loading={isLoading}
      onClick={handleClick}
      disabled={isSuccess || isLoading}
    >
      {getText()}
    </Button>
  );
};

export { ModFileButton };
