import { memo } from "react";

import { classNames } from "@renderer/shared/lib/helpers";

import css from "./Heading.module.scss";
import { HeadingProps } from "./Heading.type";

const Heading = ({ className, children, variant = "h3" }: HeadingProps) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={classNames(css.Heading, className)}
          data-testid="Heading"
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={classNames(css.Heading, className)}
          data-testid="Heading"
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={classNames(css.Heading, className)}
          data-testid="Heading"
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={classNames(css.Heading, className)}
          data-testid="Heading"
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={classNames(css.Heading, className)}
          data-testid="Heading"
        >
          {children}
        </h5>
      );
    default:
      return (
        <h6
          className={classNames(css.Heading, className)}
          data-testid="Heading"
        >
          {children}
        </h6>
      );
  }
};

export { Heading };

export default memo(Heading);
