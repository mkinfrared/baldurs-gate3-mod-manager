import { RouterOutputs } from "main/shared/types";

export type ModFileListProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
};

export type ReadModResult = RouterOutputs["mod"]["readMods"];
