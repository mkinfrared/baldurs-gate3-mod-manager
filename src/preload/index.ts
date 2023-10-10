import { contextBridge, ipcRenderer } from "electron";

import { IpcRequest } from "@main/shared/types";

export type ElectronHandler = typeof electronHandler;

const electronHandler = {
  ipcRenderer: {},
  trpc: (req: IpcRequest) => ipcRenderer.invoke("trpc", req),
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
contextBridge.exposeInMainWorld("electron", electronHandler);
// if (process.contextIsolated) {
//   try {
//     // contextBridge.exposeInMainWorld('api', api)
//   } catch (error) {
//     console.error(error)
//   }
// } else {
//   window.electron = electronAPI
//   // @ts-ignore (define in dts)
//   // window.api = api
// }
