import { classNames } from "renderer/shared/lib/helpers";
import { Button, Card } from "renderer/shared/ui";

import css from "./InstalledMod.module.scss";
import { InstalledModProps } from "./InstalledMod.type";

const InstalledMod = ({ className, mod }: InstalledModProps) => (
  <Card
    className={classNames(css.InstalledMod, className)}
    data-testid="InstalledMod"
  >
    <span>{mod.name}</span>
    <span>{mod.version}</span>
    <Button>{mod.isActive ? "Deactivate" : "Activate"}</Button>
    <Button>Delete</Button>
  </Card>
);

export { InstalledMod };
