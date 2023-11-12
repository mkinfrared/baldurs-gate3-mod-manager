import { Game } from "@renderer/shared/types";

import { InstalledMod } from "../InstalledModsList/InstalledModsList.type";

export type ModsOrderProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  game: Game;
  mods?: InstalledMod[];
};
