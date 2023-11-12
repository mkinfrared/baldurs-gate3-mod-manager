import fs from "fs";
import { readdir } from "fs/promises";
import path from "path";

import { GameKey } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

const getBackupsHandler = async (gameKey: GameKey) => {
  const { BACKUP_DIR } = getGameSettings(gameKey);
  const files = await readdir(BACKUP_DIR);

  const result = files
    .filter((file) => {
      const filePath = path.resolve(BACKUP_DIR, file);

      if (fs.lstatSync(filePath).isDirectory()) {
        return false;
      }

      return file !== ".DS_Store";
    })
    .map((file) => ({
      name: file,
      filePath: path.resolve(BACKUP_DIR, file),
    }));

  return result;
};

export { getBackupsHandler };
