import { classNames } from "renderer/shared/lib/helpers";
import { Button, Card } from "renderer/shared/ui";

import css from "./ModFileRow.module.scss";
import { ModFileRowProps } from "./ModFileRow.type";

const ModFileRow = ({
  className,
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
    <Button>Install</Button>
  </Card>
);

export { ModFileRow };
