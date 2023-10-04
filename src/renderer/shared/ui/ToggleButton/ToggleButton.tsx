// import Button from "renderer/shared/ui/Button";
import { classNames } from "renderer/shared/lib/helpers";

import css from "./ToggleButton.module.scss";
import { ToggleButtonProps } from "./ToggleButton.type";

const ToggleButton = ({
  active,
  className,
  children,
  disabled,
  onClick,
}: ToggleButtonProps) => (
  <button
    className={classNames(
      css.ToggleButton,
      css.contained,
      css.secondary,
      active && css.active,
      className,
    )}
    data-testid="ToggleButton"
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    <span className={css.content}>{children}</span>
  </button>
);

export default ToggleButton;
