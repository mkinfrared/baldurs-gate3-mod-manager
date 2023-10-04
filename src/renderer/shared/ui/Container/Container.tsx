import { classNames } from "renderer/shared/lib/helpers";

import css from "./Container.module.scss";
import { ContainerProps } from "./Container.type";

const Container = ({ children, className }: ContainerProps) => (
  <div className={classNames(css.Container, className)} data-testid="Container">
    {children}
  </div>
);

export default Container;
