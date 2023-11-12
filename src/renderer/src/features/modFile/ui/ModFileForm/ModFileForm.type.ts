import { RouterOutputs } from "@main/shared/types";
import { Game } from "@renderer/shared/types";

export type ModFileFormProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  game: Game;
};

export type ReadModResult = RouterOutputs["mod"]["readMods"];
