import { Game } from "@renderer/shared/types";

export type RestoreDefaultSettingsProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  game: Game;
};
