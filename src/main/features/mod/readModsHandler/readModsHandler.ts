import path from "path";

import { getModData, getModInfo } from "main/entities/mod";

import { ReadModResult } from "./readModsHandler.type";

const readModsHandler = async (filePaths: string[]) => {
  try {
    const modsData = await Promise.all(filePaths.map(getModData));

    const modsInfo = modsData.map(({ filePath, modData, pakFiles }) => {
      const defaultInfo = {
        folder: null,
        md5: null,
        name: path.basename(filePath),
        uuid: null,
        version: null,
      };

      const result: ReadModResult = {
        filePath,
        info: defaultInfo,
        pakFiles,
      };

      if (modData) {
        result.info = getModInfo(modData) ?? defaultInfo;
      }

      return result;
    });

    return modsInfo;
  } catch (e) {
    console.error(e);
  }
};

export { readModsHandler };
