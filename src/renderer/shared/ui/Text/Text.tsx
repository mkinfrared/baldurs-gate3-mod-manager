import { classNames } from "renderer/shared/lib/helpers";

import css from "./Text.module.scss";
import { TextProps } from "./Text.type";

const Text = ({ children, className, id, size = "regular" }: TextProps) => {
  const classes = [css.Text, className];

  if (size === "small") {
    classes.push(css.small);
  }

  return (
    <p className={classNames(...classes)} id={id} data-testid="Text">
      {children}
    </p>
  );
};

export default Text;
