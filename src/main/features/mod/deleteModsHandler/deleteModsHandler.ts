import fs from "fs/promises";
import path from "path";

import { deactivateMod, getModInfoFromFile } from "@main/entities/mod";
import { GameKey } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

const deleteModsHandler = async (fileNames: string[], key: GameKey) => {
  const { MODS_DIRECTORY } = getGameSettings(key);

  await Promise.all(
    fileNames.map(async (file) => {
      const filePath = path.resolve(MODS_DIRECTORY, file);
      const modInfo = await getModInfoFromFile(filePath);

      if (modInfo.uuid) {
        await deactivateMod(modInfo.uuid, key);
      }

      await fs.rm(filePath);
    }),
  );
};

export { deleteModsHandler };
