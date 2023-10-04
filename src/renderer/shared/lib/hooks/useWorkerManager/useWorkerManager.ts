import { useEffect, useState } from "react";

import WorkerManager, { WorkerFactory } from "./workerManager";

const useWorkerManager = <T>(workerFactory: WorkerFactory) => {
  const [manager] = useState(() => new WorkerManager<T>(workerFactory));

  useEffect(() => {
    manager.init();

    return () => {
      manager.destoy();
    };
  }, [manager]);

  return { manager };
};

export { useWorkerManager };
