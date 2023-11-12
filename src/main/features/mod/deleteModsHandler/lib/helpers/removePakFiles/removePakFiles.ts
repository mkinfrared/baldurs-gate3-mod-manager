import fs from "fs/promises";
import path from "path";

import { GameKey } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

const removePakFiles = async (pakFiles: string[], key: GameKey) => {
  const { MODS_DIRECTORY } = getGameSettings(key);

  await Promise.all(
    pakFiles.map(async (file) => {
      const filePath = path.join(MODS_DIRECTORY, file);

      try {
        await fs.rm(filePath);
      } catch (e) {
        console.error(e);
      }
    }),
  );
};

export { removePakFiles };
