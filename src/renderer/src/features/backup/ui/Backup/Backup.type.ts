import { Game } from "@renderer/shared/types";

export type BackupProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  name: string;
  filePath: string;
  game: Game;
};
