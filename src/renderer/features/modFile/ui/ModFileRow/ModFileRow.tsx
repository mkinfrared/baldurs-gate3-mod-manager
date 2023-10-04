import { classNames } from "renderer/shared/lib/helpers";

import css from "./ModFileRow.module.scss";
import { ModFileRowProps } from "./ModFileRow.type";

const ModFileRow = ({
  className,
  modName,
  modVersion,
  modFilePath,
}: ModFileRowProps) => (
  <div
    className={classNames(css.ModFileRow, className)}
    data-testid="ModFileRow"
  >
    <p>
      {modName || modFilePath} {modVersion}
    </p>
  </div>
);

export { ModFileRow };
