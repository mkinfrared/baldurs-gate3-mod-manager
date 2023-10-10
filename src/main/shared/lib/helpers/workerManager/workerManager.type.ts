import { Worker } from "node:worker_threads";

import { Remote } from "comlink";

export type AppWorker<T> = Remote<T>;

export type WorkerFactory = (options: WorkerOptions) => Worker;
