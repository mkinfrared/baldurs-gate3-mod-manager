import { ModInfo } from "renderer/entities/modFile";

export type InstalledModInfo = ModInfo & {
  isActive: boolean;
};
