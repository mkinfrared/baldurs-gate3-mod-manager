import { RouterOutputs } from "main/shared/types";

export type InstalledModsListProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
};

export type InstalledMod =
  RouterOutputs["mod"]["getInstalledMods"]["installedMods"][number];
