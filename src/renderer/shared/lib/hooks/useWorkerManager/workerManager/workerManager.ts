import { Remote, releaseProxy, wrap } from "comlink";

import { AppWorker, WorkerFactory } from "./workerManager.type";

class WorkerManager<T> {
  #currentWorkerIndex = 0;

  #workers: AppWorker<T>[] = [];

  #threadsAmount = 0;

  #factory: WorkerFactory;

  constructor(
    factory: WorkerFactory,
    threadsAmount = navigator.hardwareConcurrency,
  ) {
    this.#factory = factory;

    this.#threadsAmount = threadsAmount;
  }

  init = () => {
    const comlinks = Array(this.#threadsAmount ?? 2)
      .fill(undefined)
      .map(() => {
        const worker = this.#factory();

        return wrap<Remote<T>>(worker);
      });

    this.#workers = comlinks;
  };

  #getNextWorker = () => {
    const current = this.#currentWorkerIndex;
    const worker = this.#workers[this.#currentWorkerIndex];

    this.#currentWorkerIndex = (current + 1) % this.#workers.length;

    return worker;
  };

  get worker() {
    const worker = this.#getNextWorker();

    return worker;
  }

  destoy = () => {
    this.#workers.forEach((worker) => {
      worker[releaseProxy]();
    });

    this.#workers = [];
  };
}

export default WorkerManager;
