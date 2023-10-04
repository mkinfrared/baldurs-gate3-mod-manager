import { Remote } from "comlink";

export type AppWorker<T> = Remote<Remote<T>>;

export type WorkerFactory = () => Worker;
