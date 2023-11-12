import { GameKey } from "@main/shared/config";

export type SettingsProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  game: GameKey;
};
