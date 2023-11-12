import { RouterOutputs } from "@main/shared/types";
import { Game } from "@renderer/shared/types";

export type InstalledModsListProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  game: Game;
};

export type InstalledMod =
  RouterOutputs["mod"]["getInstalledMods"]["installedMods"][number];
