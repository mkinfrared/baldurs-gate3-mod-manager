import { classNames } from "renderer/shared/lib/helpers";
import { Button, Card } from "renderer/shared/ui";

import css from "./InstalledMod.module.scss";
import { InstalledModProps } from "./InstalledMod.type";

const InstalledMod = ({ className }: InstalledModProps) => (
  <Card
    className={classNames(css.InstalledMod, className)}
    data-testid="InstalledMod"
  >
    <span>modName || modFilePath</span>
    <span>modVersion</span>
    <Button>Activate</Button>
    <Button>Delete</Button>
  </Card>
);

export { InstalledMod };
