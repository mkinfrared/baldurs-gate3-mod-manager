import { classNames, trpc } from "renderer/shared/lib/helpers";
import { Button } from "renderer/shared/ui";

import css from "./ToggleActiveModButton.module.scss";
import { ToggleActiveModButtonProps } from "./ToggleActiveModButton.type";

/**
 *
 *       {mod.uuid ? (
 *         <Button title={getDeleteButtonTitle()}>
 *           {mod.isActive ? "Deactivate" : "Activate"}
 *         </Button>
 *       ) : (
 *         <div />
 *       )}
 * @param className
 * @param isActive
 * @param modUUID
 * @constructor
 */

const ToggleActiveModButton = ({
  className,
  isActive,
  modUUID,
}: ToggleActiveModButtonProps) => {
  const { mutateAsync, isLoading } = trpc.mod.toggleActiveMod.useMutation();

  if (!modUUID) {
    return <div />;
  }

  const handleClick = () => {
    mutateAsync(modUUID);
  };

  return (
    <Button
      className={classNames(css.ToggleActiveModButton, className)}
      loading={isLoading}
      disabled={isLoading}
      onClick={handleClick}
    >
      {isActive ? "Deactivate" : "Activate"}
    </Button>
  );
};

export { ToggleActiveModButton };
