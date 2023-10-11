import { classNames } from "@renderer/shared/lib/helpers";
import { Button, Card, Heading } from "@renderer/shared/ui";

import css from "./EmptyList.module.scss";
import { EmptyListProps } from "./EmptyList.type";

const EmptyList = ({ className, onFilesSelect }: EmptyListProps) => {
  const acceptedFiles = ["zip"];

  return (
    <Card
      className={classNames(css.EmptyList, className)}
      data-testid="EmptyList"
    >
      <Heading variant="h4" className={css.header}>
        Drag and drop you zip files here or
      </Heading>
      <Button type="button">
        <label htmlFor="file">Click this button to select files</label>
      </Button>
      <input
        type="file"
        id="file"
        multiple
        accept={acceptedFiles.join(",")}
        onChange={onFilesSelect}
      />
    </Card>
  );
};

export { EmptyList };
