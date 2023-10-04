/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { httpBatchLink, loggerLink } from "@trpc/client";
import superjson from "superjson";

import { IpcRequest } from "renderer/shared/types";

import { trpc } from "./trpc";

/**
 * https://trpc.io/docs/v9/react
 * https://github.com/awohletz/electron-prisma-trpc-example/blob/main/src/client/renderer.ts
 */
const createTrpcClient = () =>
  trpc.createClient({
    links: [
      loggerLink(),
      httpBatchLink({
        url: "/trpc",

        // custom fetch implementation that sends the request over IPC to Main process
        fetch: async (input, init) => {
          const req: IpcRequest = {
            url:
              // eslint-disable-next-line no-nested-ternary
              input instanceof URL
                ? input.toString()
                : typeof input === "string"
                ? input
                : input.url,
            method: input instanceof Request ? input.method : init?.method!,
            headers: input instanceof Request ? input.headers : init?.headers!,
            body: input instanceof Request ? input.body : init?.body!,
          };

          /*
           * electron here is the name you defined in preload.ts
           * in contextBridge.exposeInMainWorld
           */
          const resp = await window.electron.trpc(req);

          return new Response(resp.body, {
            status: resp.status,
            headers: resp.headers,
          });
        },
      }),
    ],
    transformer: superjson,
  });

export { createTrpcClient };
