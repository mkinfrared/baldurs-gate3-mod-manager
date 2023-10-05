export type InstalledModInfo = {
  id: string;
  pakFiles: string[];
};

export type InstalledMods = Record<string, InstalledModInfo>;

export type AppData = {
  bg3: InstalledMods;
};
