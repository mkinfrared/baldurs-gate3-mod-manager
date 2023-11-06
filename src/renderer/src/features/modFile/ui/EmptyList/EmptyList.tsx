import { Error } from "@renderer/shared/components";
import { classNames } from "@renderer/shared/lib/helpers";
import { Button, Card, Heading } from "@renderer/shared/ui";

import css from "./EmptyList.module.scss";
import { EmptyListProps } from "./EmptyList.type";

const EmptyList = ({
  acceptedFileTypes,
  className,
  error,
  onFilesSelect,
}: EmptyListProps) => (
  <Card
    className={classNames(css.EmptyList, className)}
    data-testid="EmptyList"
  >
    {error && <Error className={css.error} error={error} />}
    <Heading variant="h4" className={css.header}>
      Drag and drop you {acceptedFileTypes.join(", ")} files here or
    </Heading>
    <Button className={css.button} type="button">
      <label htmlFor="file">Click this button to select files</label>
    </Button>
    <input
      type="file"
      id="file"
      multiple
      accept={acceptedFileTypes.join(",")}
      onChange={onFilesSelect}
    />
  </Card>
);

export { EmptyList };
