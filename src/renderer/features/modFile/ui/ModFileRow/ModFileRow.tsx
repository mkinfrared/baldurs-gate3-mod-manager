import { ModFileButton } from "renderer/features/modFile/ui/ModFileButton";
import { classNames } from "renderer/shared/lib/helpers";
import { Card } from "renderer/shared/ui";

import css from "./ModFileRow.module.scss";
import { ModFileRowProps } from "./ModFileRow.type";

const ModFileRow = ({
  className,
  currentModVersion,
  modName,
  modVersion,
  modFilePath,
}: ModFileRowProps) => (
  <Card
    className={classNames(css.ModFileRow, className)}
    data-testid="ModFileRow"
  >
    <span>{modName || modFilePath}</span>
    <span>{modVersion}</span>
    <ModFileButton
      modPath={modFilePath}
      currentModVersion={currentModVersion}
      modVersion={modVersion}
    />
  </Card>
);

export { ModFileRow };
