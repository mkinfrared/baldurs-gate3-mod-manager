import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Button, Card } from "@renderer/shared/ui";

import css from "./InstalledMod.module.scss";
import { InstalledModProps } from "./InstalledMod.type";

const InstalledMod = ({ className, mod, position }: InstalledModProps) => {
  const utils = trpc.useContext();

  const { mutate, isLoading, isSuccess } = trpc.mod.deleteMods.useMutation({
    onSuccess: () => {
      utils.mod.getInstalledMods.invalidate();
    },
  });

  const handleDelete = () => {
    mutate([mod.fileName]);
  };

  return (
    <Card
      className={classNames(css.InstalledMod, className)}
      data-testid="InstalledMod"
    >
      <span>{position && `${position}.`}</span>
      <span title="Marklar">{mod.name || mod.fileName}</span>
      <span>{mod.version}</span>
      <Button
        onClick={handleDelete}
        loading={isLoading}
        disabled={isSuccess}
        color="primary"
      >
        Delete
      </Button>
    </Card>
  );
};

export { InstalledMod };
