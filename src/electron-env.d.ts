/// <reference types="electron-vite/node" />

import type { ElectronHandler } from "./preload";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
  }
}
