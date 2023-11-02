import { ModInfo } from "@main/entities/mod";

export type InstalledMod = ModInfo & {
  isActive: boolean;
};
