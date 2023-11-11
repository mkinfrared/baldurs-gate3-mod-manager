import { classNames } from "@renderer/shared/lib/helpers";

import css from "./Settings.module.scss";
import { SettingsProps } from "./Settings.type";

const Settings = ({ className }: SettingsProps) => (
  <div className={classNames(css.Settings, className)} data-testid="Settings">
    Settings works!!
  </div>
);

export { Settings };
