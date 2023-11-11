/* eslint-disable react/button-has-type */
import { classNames } from "@renderer/shared/lib/helpers";

import { ButtonColors, ButtonVariants } from "../Button";
import Spinner from "../Spinner";

import css from "./IconButton.module.scss";
import { IconButtonProps } from "./IconButton.type";

const colors: Record<ButtonColors, string> = {
  primary: css.primary,
  secondary: css.secondary,
  success: css.success,
  error: css.error,
};

const variants: Record<ButtonVariants, string> = {
  contained: css.contained,
  transparent: css.transparent,
  outlined: css.outlined,
};

const getButtonColor = (color: ButtonColors) => colors[color];
const getButtonVariant = (variant: ButtonVariants) => variants[variant];

const IconButton = ({
  children,
  className,
  color = "primary",
  disabled = false,
  loading = false,
  type = "button",
  variant = "contained",
  ...rest
}: IconButtonProps) => {
  const classes = [
    css.Button,
    className,
    getButtonVariant(variant),
    getButtonColor(color),
  ];

  if (loading) {
    classes.push(css.loading);
  }

  return (
    <button
      className={classNames(css.IconButton, ...classes)}
      disabled={disabled}
      data-testid="IconButton"
      type={type}
      {...rest}
    >
      <Spinner className={css.spinner} type="bars" />
      {children}
    </button>
  );
};

export { IconButton };
