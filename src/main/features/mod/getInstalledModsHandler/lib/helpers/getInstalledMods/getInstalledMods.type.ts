import { ModInfo } from "main/entities/mod";

export type ModData = {
  folder: string;
  md5: string;
  name: string;
  uuid: string;
  version64: string;
};

export type InstalledMod = ModInfo & {
  isActive: boolean;
};
