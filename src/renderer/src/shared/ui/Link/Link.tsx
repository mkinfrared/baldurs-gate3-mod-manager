/* eslint-disable @typescript-eslint/no-explicit-any */
import { classNames } from "@renderer/shared/lib/helpers";

import { ButtonColors, ButtonVariants } from "../Button";

import css from "./Link.module.scss";
import {
  LinkOwnProps,
  LinkProps,
  LinkTypeMap,
  OverridableComponent,
} from "./Link.type";

const Link: OverridableComponent<LinkTypeMap> = (props: LinkProps) => {
  const { component = "a", ...ownProps } = props as any;

  const {
    as = "text",
    color = "primary",
    children,
    className,
    variant = "contained",
    ...rest
  } = ownProps as LinkOwnProps;

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

  const getButtonColor = (currentColor: ButtonColors) => colors[currentColor];

  const getButtonVariant = (currentVariant: ButtonVariants) =>
    variants[currentVariant];

  const classes = [
    css.Link,
    className,
    getButtonVariant(variant),
    getButtonColor(color),
  ];

  const Component = component;

  if (as === "text") {
    return (
      <Component
        {...rest}
        className={classNames(...classes)}
        data-testid="Link"
      >
        {children}
      </Component>
    );
  }

  if (as === "icon") {
    classes.push(css.icon);
  } else {
    classes.push(css.button);
  }

  return (
    <Component {...rest} className={classNames(...classes)} data-testid="Link">
      {children}
    </Component>
  );
};

export default Link;
