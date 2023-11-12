import { Game } from "@renderer/shared/types";

export type ToggleActiveModButtonProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  fileName: string;
  game: Game;
  isActive: boolean;
  uuid: string | undefined;
};
