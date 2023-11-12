import { getModInfoFromBytes } from "@main/entities/mod";
import { GameKey } from "@main/shared/config";
import { WorkerManager } from "@main/shared/lib/helpers";

import { ReadModResult } from "./readModsHandler.type";
import { ReadDataWorker } from "./worker";
import createWorker from "./worker?nodeWorker";

const manager = new WorkerManager<ReadDataWorker>(createWorker, 1);

const readModsHandler = async (filePaths: string[], key: GameKey) => {
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
        key,
      );

      result.info = modInfo;

      return result;
    }),
  );

  return modsInfo;
};

export { readModsHandler };
