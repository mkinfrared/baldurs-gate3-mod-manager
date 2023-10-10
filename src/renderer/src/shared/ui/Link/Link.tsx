/* eslint-disable @typescript-eslint/no-explicit-any */
import { classNames } from "@renderer/shared/lib/helpers";
import { ButtonColors, ButtonVariants } from "@renderer/shared/ui/Button";

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
    color = "primary",
    children,
    className,
    type = "text",
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

  if (type === "text") {
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

  classes.push(css.button);

  return (
    <Component {...rest} className={classNames(...classes)} data-testid="Link">
      <span className={css.content}>{children}</span>
    </Component>
  );
};

export default Link;
