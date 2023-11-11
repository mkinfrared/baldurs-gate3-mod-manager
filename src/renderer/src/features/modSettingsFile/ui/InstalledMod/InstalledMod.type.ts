import { RouterOutputs } from "@main/shared/types";
import { Game } from "@renderer/shared/types";

export type InstalledModProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  game: Game;
  mod: RouterOutputs["mod"]["getInstalledMods"]["installedMods"][number];
  position: number;
};
