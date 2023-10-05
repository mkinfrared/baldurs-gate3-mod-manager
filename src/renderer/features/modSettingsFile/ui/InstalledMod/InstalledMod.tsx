import { classNames, trpc } from "renderer/shared/lib/helpers";
import { Button, Card } from "renderer/shared/ui";

import css from "./InstalledMod.module.scss";
import { InstalledModProps } from "./InstalledMod.type";

const InstalledMod = ({ className, mod }: InstalledModProps) => {
  const { mutateAsync, isLoading, isSuccess } =
    trpc.mod.deleteMods.useMutation();

  const handleDelete = () => {
    mutateAsync([mod.uuid ?? mod.name ?? ""]);
  };

  const getDeleteButtonTitle = () => {
    if (mod.uuid) {
      return;
    }

    return "This mod can only be deleted. It is automatically activated on installation";
  };

  return (
    <Card
      className={classNames(css.InstalledMod, className)}
      data-testid="InstalledMod"
    >
      <span title="Marklar">{mod.name}</span>
      <span>{mod.version}</span>
      {mod.uuid ? (
        <Button title={getDeleteButtonTitle()}>
          {mod.isActive ? "Deactivate" : "Activate"}
        </Button>
      ) : (
        <div />
      )}
      <Button onClick={handleDelete} loading={isLoading} disabled={isSuccess}>
        Delete
      </Button>
    </Card>
  );
};

export { InstalledMod };
