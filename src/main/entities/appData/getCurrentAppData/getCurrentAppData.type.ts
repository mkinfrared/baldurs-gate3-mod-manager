export type AppDataInstalledModInfo = {
  id: string;
  pakFiles: string[];
};

export type AppDataInstalledMods = Record<string, AppDataInstalledModInfo>;

export type AppData = {
  bg3: AppDataInstalledMods;
};
