import { getModInfoFromBytes } from "@main/entities/mod";
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

    const modsInfo = await Promise.all(
      modsData.map(async ({ filePath, pakFileData }) => {
        const result: ReadModResult = {
          filePath,
        };

        // TODO assume one mod per archive
        const [pakFile] = pakFileData;

        if (!pakFile?.data) {
          return result;
        }

        const modInfo = await getModInfoFromBytes(
          pakFile.data,
          pakFile.fileName,
        );

        result.info = modInfo;

        return result;
      }),
    );

    return modsInfo;
  } catch (e) {
    console.error(e);
  }
};

export { readModsHandler };
