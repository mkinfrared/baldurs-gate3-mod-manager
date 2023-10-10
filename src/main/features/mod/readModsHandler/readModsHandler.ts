import path from "path";

import { getModInfo } from "@main/entities/mod";
import { WorkerManager } from "@main/shared/lib/helpers";

import { ReadModResult } from "./readModsHandler.type";
import { ReadDataWorker } from "./worker";
import createWorker from "./worker?nodeWorker";

const manager = new WorkerManager<ReadDataWorker>(createWorker, 1);

const readModsHandler = async (filePaths: string[]) => {
  try {
    const modsData = await Promise.all(
      filePaths.map(manager.worker.startGetModData),
    );

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
