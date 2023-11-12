import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Button } from "@renderer/shared/ui";

import css from "./ToggleActiveModButton.module.scss";
import { ToggleActiveModButtonProps } from "./ToggleActiveModButton.type";

const ToggleActiveModButton = ({
  className,
  fileName,
  game,
  isActive,
  uuid,
}: ToggleActiveModButtonProps) => {
  const utils = trpc.useContext();

  const { mutateAsync, isLoading } = trpc.mod.toggleActiveMod.useMutation({
    onSuccess: () => {
      utils.mod.getInstalledMods.invalidate();
    },
  });

  if (!uuid) {
    return <div />;
  }

  const handleClick = () => {
    mutateAsync({ file: fileName, gameKey: game });
  };

  return (
    <Button
      className={classNames(css.ToggleActiveModButton, className)}
      loading={isLoading}
      disabled={isLoading}
      onClick={handleClick}
      color={isActive ? "secondary" : "primary"}
    >
      {isActive ? "Disable" : "Enable"}
    </Button>
  );
};

export { ToggleActiveModButton };
