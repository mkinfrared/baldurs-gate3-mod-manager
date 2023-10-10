/* eslint-disable no-console */
// import { parentPort } from "node:worker_threads";

import { parentPort } from "worker_threads";

import { expose } from "comlink";
import nodeEndpoint from "comlink/dist/umd/node-adapter";

export class HelperWorker {
  calc = (time: string, index: number) => {
    console.log(time);

    const label = `${index}. calc-${time}`;

    console.time(label);

    let n = 0;

    for (let i = 0; i <= 1000000000; i += 1) {
      n += Number(i);
    }

    console.timeEnd(label);

    return n;
  };
}

// parentPort?.on("message", ({ index, time }: any) => {
//   const result = calc(time, index);
//
//   parentPort?.postMessage(result);
// });

// const getModDataWorker = (someObject: object) => {
//     console.log("from worker");
//
//     return getModData(someObject as any);
// }
//
// export {
//     calc,
//     getModDataWorker
// };

expose(new HelperWorker(), nodeEndpoint(parentPort!));
