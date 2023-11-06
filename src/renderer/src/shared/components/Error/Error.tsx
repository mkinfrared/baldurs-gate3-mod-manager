import ErrorIcon from "@renderer/shared/assets/icons/error.svg";
import { classNames } from "@renderer/shared/lib/helpers";
import { Heading } from "@renderer/shared/ui";

import css from "./Error.module.scss";
import { ErrorProps } from "./Error.type";

const Error = ({ className, error }: ErrorProps) => (
  <div className={classNames(css.Error, className)} data-testid="Error">
    <Heading className={css.header}>
      <ErrorIcon />
      Error:
    </Heading>
    <Heading variant="h4">{error}</Heading>
  </div>
);

export default Error;
