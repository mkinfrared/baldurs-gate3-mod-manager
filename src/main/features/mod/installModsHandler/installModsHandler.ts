import { v4 } from "uuid";

import { AppDataInstalledModInfo, appState } from "main/entities/appData";
import { getModInfo } from "main/entities/mod";

import { deleteModsHandler } from "../deleteModsHandler";
import { readModsHandler } from "../readModsHandler";

import { addModsToSettings, extractContents } from "./lib/helpers";

const installModsHandler = async (filePaths: string[]) => {
  /**
   * the safest way will be removing the mods from settings,
   * deleting the pak files and updating the installation data
   * to make sure no redundant files keep piling up e.g
   * a new version of mod is using a different pak file name
   */
  const readResults = await readModsHandler(filePaths);

  const uuidsOrNames = readResults?.flatMap(
    ({ info, pakFiles }) => info.uuid ?? pakFiles,
  );

  await deleteModsHandler(uuidsOrNames ?? []);

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

  const gameData = appState.getSection("bg3");

  installResults.forEach(({ id, pakFiles }) => {
    gameData[id] = { id, pakFiles };
  });

  await appState.saveData();
};

export { installModsHandler };
