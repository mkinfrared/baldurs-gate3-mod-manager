import { ChangeEventHandler } from "react";

export type EmptyListProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  onFilesSelect: ChangeEventHandler<HTMLInputElement>;
};
