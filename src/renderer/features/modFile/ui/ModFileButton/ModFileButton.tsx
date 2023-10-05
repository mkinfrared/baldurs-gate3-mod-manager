import { classNames, trpc } from "renderer/shared/lib/helpers";
import { Button } from "renderer/shared/ui";

import css from "./ModFileButton.module.scss";
import { ModFileButtonProps } from "./ModFileButton.type";

const ModFileButton = ({
  className,
  currentModVersion,
  modPath,
  modVersion,
}: ModFileButtonProps) => {
  const { mutateAsync, isLoading } = trpc.mod.installMods.useMutation();

  const getText = () => {
    if (!currentModVersion || !modVersion) {
      return "Install";
    }

    const cv = currentModVersion.toString();
    const mv = modVersion.toString();
    const result = cv.localeCompare(mv);

    switch (result) {
      case 1:
        return "Downgrade";
      case 0:
        return "Installed";
      case -1:
        return "Upgrade";
      default:
        return "N/A";
    }
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
    >
      {getText()}
    </Button>
  );
};

export { ModFileButton };
