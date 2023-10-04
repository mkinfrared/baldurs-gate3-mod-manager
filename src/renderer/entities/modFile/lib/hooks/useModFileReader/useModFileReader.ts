import { useWorkerManager } from "renderer/shared/lib/hooks";

import {
  ModFileReaderWorker,
  modFileReaderFactory,
} from "../../workers/modFileReader";

const useModFileReader = () => {
  const { manager } =
    useWorkerManager<ModFileReaderWorker>(modFileReaderFactory);

  return manager;
};

export { useModFileReader };
