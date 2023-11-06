import { RouterOutputs } from "@main/shared/types";

export type ModFileFormProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
};

export type ReadModResult = RouterOutputs["mod"]["readMods"];
