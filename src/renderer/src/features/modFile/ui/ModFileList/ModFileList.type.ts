import { EmptyListProps } from "../EmptyList";
import { ReadModResult } from "../ModFileForm/ModFileForm.type";

export type ModFileListProps = Pick<
  EmptyListProps,
  "acceptedFileTypes" | "onFilesSelect"
> & {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  error?: string;
  zipFiles: ReadModResult | null;
};
