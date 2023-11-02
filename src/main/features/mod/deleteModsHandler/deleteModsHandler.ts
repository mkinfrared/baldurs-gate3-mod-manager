import fs from "fs/promises";
import path from "path";

import { deactivateMod, getModInfoFromFile } from "@main/entities/mod";
import { BALDURS_GATE3 } from "@main/shared/config";

const deleteModsHandler = async (fileNames: string[]) => {
  await Promise.all(
    fileNames.map(async (file) => {
      const filePath = path.resolve(BALDURS_GATE3.MODS_DIRECTORY, file);
      const modInfo = await getModInfoFromFile(filePath);

      if (modInfo.uuid) {
        await deactivateMod(modInfo.uuid);
      }

      await fs.rm(filePath);
    }),
  );
};

export { deleteModsHandler };
