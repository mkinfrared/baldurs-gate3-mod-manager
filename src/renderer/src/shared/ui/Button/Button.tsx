/* eslint-disable react/button-has-type */
import { forwardRef } from "react";

import { classNames } from "@renderer/shared/lib/helpers";

import Spinner from "../Spinner";

import css from "./Button.module.scss";
import { ButtonColors, ButtonProps, ButtonVariants } from "./Button.type";

/**
 * Button component
 *
 * This component renders a customizable button that can have different
 * colors and variants, such as 'contained', 'transparent', and 'outlined'.
 * It also allows for child elements to be placed inside the button.
 * This button can also show a loading state where a Spinner is shown.
 * @example
 * // Renders a primary contained button with "Click me" as the label
 * <Button color="primary" variant="contained">Click me</Button>
 *
 * // Renders a disabled secondary outlined button with a loading spinner
 * <Button color="secondary" variant="outlined" isDisabled loading />
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      color = "primary",
      disabled = false,
      loading = false,
      type = "button",
      variant = "contained",
      ...rest
    },
    ref,
  ) => {
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

    const getButtonColor = (key: ButtonColors) => colors[key];
    const getButtonVariant = (key: ButtonVariants) => variants[key];

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
        className={classNames(...classes)}
        disabled={disabled}
        data-testid="Button"
        ref={ref}
        type={type}
        {...rest}
      >
        <Spinner className={css.spinner} type="bars" />
        <span className={css.content}>{children}</span>
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
