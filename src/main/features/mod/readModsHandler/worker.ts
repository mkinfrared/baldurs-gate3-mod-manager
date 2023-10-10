import { parentPort } from "worker_threads";

import { expose } from "comlink";
import nodeEndpoint from "comlink/dist/umd/node-adapter";

import { getModData } from "@main/entities/mod/lib/helpers/getModData/getModData";

export class ReadDataWorker {
  startGetModData = async (path: string) => {
    const { modData, pakFiles, filePath } = await getModData(path);

    return { modData, pakFiles, filePath };
  };
}

expose(new ReadDataWorker(), nodeEndpoint(parentPort!));
