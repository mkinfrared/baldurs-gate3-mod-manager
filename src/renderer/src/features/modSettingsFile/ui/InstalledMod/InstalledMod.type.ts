import { RouterOutputs } from "@main/shared/types";

export type InstalledModProps = {
  /**
   * a string that will be applied as a css class to parent element
   */
  className?: string;
  mod: RouterOutputs["mod"]["getInstalledMods"]["installedMods"][number];
};
