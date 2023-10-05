import fs from "fs/promises";
import path from "path";

import { BALDURS_GATE3 } from "main/shared/config";

const removePakFiles = async (pakFiles: string[]) => {
  await Promise.all(
    pakFiles.map(async (file) => {
      const filePath = path.join(BALDURS_GATE3.MODS_DIRECTORY, file);

      try {
        await fs.rm(filePath);
      } catch (e) {
        console.error(e);
      }
    }),
  );
};

export { removePakFiles };
