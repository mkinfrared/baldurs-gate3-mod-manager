import { v4 } from "uuid";

import {
  AppDataInstalledModInfo,
  AppDataInstalledMods,
  saveAppData,
} from "main/entities/appData";
import { getModInfo } from "main/entities/mod";

import { addModsToSettings, extractContents } from "./lib/helpers";

const installModsHandler = async (filePaths: string[]) => {
  // TODO before extract check which mods are already installed
  /**
   * the safest way will be removing the mods from settings,
   * deleting the pak files and updating the installation data
   * to make sure no redundant files keep piling up e.g
   * a new version of mod is using a different pak file name
   */
  const extractResults = await Promise.all(filePaths.map(extractContents));

  const modInfos = extractResults.map(({ data }) => {
    if (!data) {
      return;
    }

    return getModInfo(data);
  });

  await addModsToSettings(modInfos);

  const installResults = extractResults.map(({ data, pakFiles }) => {
    let id = v4();

    if (data) {
      const modInfo = getModInfo(data);

      id = modInfo?.uuid || id;
    }

    const installedMod: AppDataInstalledModInfo = {
      id,
      pakFiles,
    };

    return installedMod;
  });

  const saveData: AppDataInstalledMods = {};

  installResults.forEach(({ id, pakFiles }) => {
    saveData[id] = { id, pakFiles };
  });

  await saveAppData("bg3", saveData);
};

export { installModsHandler };
