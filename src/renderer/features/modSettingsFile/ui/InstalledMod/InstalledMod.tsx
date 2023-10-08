import { classNames, trpc } from "renderer/shared/lib/helpers";
import { Button, Card } from "renderer/shared/ui";

import css from "./InstalledMod.module.scss";
import { InstalledModProps } from "./InstalledMod.type";

const InstalledMod = ({ className, mod }: InstalledModProps) => {
  const utils = trpc.useContext();

  const { mutateAsync, isLoading, isSuccess } = trpc.mod.deleteMods.useMutation(
    {
      onSuccess: () => {
        utils.mod.getInstalledMods.invalidate();
      },
    },
  );

  const handleDelete = () => {
    mutateAsync([mod.uuid ?? mod.name ?? ""]);
  };

  return (
    <Card
      className={classNames(css.InstalledMod, className)}
      data-testid="InstalledMod"
    >
      <span title="Marklar">{mod.name}</span>
      <span>{mod.version}</span>
      <Button
        onClick={handleDelete}
        loading={isLoading}
        disabled={isSuccess}
        color="secondary"
      >
        Delete
      </Button>
    </Card>
  );
};

export { InstalledMod };
