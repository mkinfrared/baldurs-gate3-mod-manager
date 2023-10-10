import { appState } from "@main/entities/appData";
import { deactivateMod } from "@main/entities/mod";

import { removeModFromSettings, removePakFiles } from "./lib/helpers";

const deleteModsHandler = async (uuidsOrNames: string[]) => {
  const gameData = appState.getSection("bg3");

  for (const mod of uuidsOrNames) {
    if (gameData[mod]) {
      const { pakFiles } = gameData[mod];

      await removePakFiles(pakFiles);

      delete gameData[mod];
    } else {
      const modKeys = Object.keys(gameData);

      await Promise.all(
        modKeys.map(async (modKey) => {
          const { pakFiles } = gameData[modKey];
          const relevantFiles = pakFiles.filter((pakFile) => pakFile === mod);

          if (relevantFiles.length) {
            await removePakFiles(relevantFiles);

            delete gameData[modKey];
          }
        }),
      );
    }
  }

  await appState.saveData();

  await Promise.all(uuidsOrNames.map(deactivateMod));

  await Promise.all(uuidsOrNames.map(removeModFromSettings));
};

export { deleteModsHandler };
