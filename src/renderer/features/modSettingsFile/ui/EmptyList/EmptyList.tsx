import { classNames } from "renderer/shared/lib/helpers";
import { Card } from "renderer/shared/ui";

import css from "./EmptyList.module.scss";
import { EmptyListProps } from "./EmptyList.type";

const EmptyList = ({ className, children }: EmptyListProps) => (
  <Card
    className={classNames(css.EmptyList, className)}
    data-testid="EmptyList"
  >
    {children}
  </Card>
);

export { EmptyList };
