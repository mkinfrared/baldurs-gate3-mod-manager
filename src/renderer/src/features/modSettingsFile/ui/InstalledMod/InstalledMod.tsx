import Bin from "@renderer/shared/assets/icons/rubbish-bin.svg";
import { classNames, trpc } from "@renderer/shared/lib/helpers";
import { Card, IconButton } from "@renderer/shared/ui";

import { ToggleActiveModButton } from "../ToggleActiveModButton";

import css from "./InstalledMod.module.scss";
import { InstalledModProps } from "./InstalledMod.type";

const InstalledMod = ({
  className,
  game,
  mod,
  position,
}: InstalledModProps) => {
  const utils = trpc.useContext();

  const { mutate, isLoading, isSuccess } = trpc.mod.deleteMods.useMutation({
    onSuccess: () => {
      utils.mod.getInstalledMods.invalidate();
    },
  });

  const handleDelete = () => {
    const files = [mod.fileName];

    mutate({ files, gameKey: game });
  };

  return (
    <Card
      className={classNames(css.InstalledMod, className)}
      data-testid="InstalledMod"
    >
      <span>{position && `${position}.`}</span>
      <span title="Marklar">{mod.name || mod.fileName}</span>
      <span>{mod.version}</span>
      <ToggleActiveModButton
        fileName={mod.fileName}
        game={game}
        isActive={mod.isActive}
        uuid={mod.uuid}
      />
      <IconButton
        className={css.delete}
        color="error"
        disabled={isSuccess}
        loading={isLoading}
        onClick={handleDelete}
        variant="contained"
        title="Delete"
      >
        <Bin />
      </IconButton>
    </Card>
  );
};

export { InstalledMod };
