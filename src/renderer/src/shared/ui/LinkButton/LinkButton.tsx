import { classNames } from "@renderer/shared/lib/helpers";

import { ButtonColors, ButtonVariants } from "../Button";

import css from "./LinkButton.module.scss";
import { LinkButtonProps, LinkButtonType } from "./LinkButton.type";

const colors: Record<ButtonColors, string> = {
  primary: css.primary,
  secondary: css.secondary,
  success: css.success,
  error: css.error,
};

const variants: Record<ButtonVariants, string> = {
  contained: css.contained,
  outlined: css.outlined,
  transparent: css.transparent,
};

const types: Record<LinkButtonType, string> = {
  button: css.button,
  icon: css.icon,
};

const getButtonColor = (color: ButtonColors) => colors[color];
const getButtonVariant = (variant: ButtonVariants) => variants[variant];
const getButtonType = (type: LinkButtonType) => types[type];

const LinkButton = ({
  as = "button",
  className,
  color = "primary",
  children,
  variant = "contained",
  ...rest
}: LinkButtonProps) => {
  const classes = [
    css.LinkButton,
    className,
    getButtonType(as),
    getButtonVariant(variant),
    getButtonColor(color),
  ];

  return (
    <a className={classNames(...classes)} data-testid="LinkButton" {...rest}>
      {children}
    </a>
  );
};

export default LinkButton;
