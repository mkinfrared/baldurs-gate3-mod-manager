import { getModData, getModInfo } from "./lib/helpers";
import { ReadModResult } from "./readModsHandler.type";

const readModsHandler = async (filePaths: string[]) => {
  try {
    const modsData = await Promise.all(filePaths.map(getModData));

    const modsInfo = modsData.map((modData) => {
      const result: ReadModResult = {
        filePath: modData.filePath,
        info: null,
      };

      if (modData.data) {
        result.info = getModInfo(modData.data) ?? null;
      }

      return result;
    });

    return modsInfo;
  } catch (e) {
    console.error(e);
  }
};

export { readModsHandler };
