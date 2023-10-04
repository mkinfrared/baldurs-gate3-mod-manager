import { debounce } from "lodash-es";
import { ChangeEventHandler, useCallback, useState } from "react";

import { classNames } from "renderer/shared/lib/helpers";
import { Checkbox } from "renderer/shared/ui";

import { activateMod, deactivateMod } from "../../lib/helpers";

import css from "./ModFileToggle.module.scss";
import { ModFileToggleProps } from "./ModFileToggle.type";

const ModFileToggle = ({
  className,
  isActive,
  modName,
  modUUID,
}: ModFileToggleProps) => {
  const [isChecked, setIsChecked] = useState(isActive);

  const handleSettingsUpdate = useCallback(
    debounce(async (checked: boolean) => {
      if (checked) {
        await activateMod(modUUID, modName);
      } else {
        await deactivateMod(modUUID);
      }
    }, 500),
    [],
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.target;

    setIsChecked(checked);

    handleSettingsUpdate(checked);
  };

  return (
    <Checkbox
      className={classNames(css.ModFileToggler, className)}
      checked={isChecked}
      onChange={handleChange}
    />
  );
};

export { ModFileToggle };
