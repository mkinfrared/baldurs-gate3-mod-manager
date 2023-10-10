import { classNames } from "@renderer/shared/lib/helpers";

import css from "./Card.module.scss";
import { CardProps } from "./Card.type";

const Card = ({ className, children }: CardProps) => (
  <div className={classNames(css.Card, className)} data-testid="Card">
    {children}
  </div>
);

export default Card;
