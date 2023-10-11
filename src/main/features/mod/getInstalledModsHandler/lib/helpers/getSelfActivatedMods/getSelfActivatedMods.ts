import { AppData, appState } from "@main/entities/appData";

import { InstalledMod } from "../getInstalledMods/getInstalledMods.type";

const getSelfActivatedMods = (
  installedMods: InstalledMod[],
  appDataKey: keyof AppData,
) => {
  const modsUUID = new Set(installedMods.map(({ uuid }) => uuid));
  const gameData = appState.getSection(appDataKey);

  const selfActivatedKeys = Object.keys(gameData).filter(
    (key) => !modsUUID.has(key),
  );

  const selfActivatedMods = selfActivatedKeys.map((key) => {
    const { pakFiles } = gameData[key];

    const mod: InstalledMod = {
      folder: null,
      isActive: false,
      uuid: null,
      version: null,
      name: pakFiles.at(0) ?? null,
      md5: null,
    };

    return mod;
  });

  return selfActivatedMods;
};

export { getSelfActivatedMods };
