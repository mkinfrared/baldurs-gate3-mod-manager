import { ChangeEventHandler } from "react";

export type EmptyListProps = {
  acceptedFileTypes: string[];
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  error?: string;
  onFilesSelect: ChangeEventHandler<HTMLInputElement>;
};
