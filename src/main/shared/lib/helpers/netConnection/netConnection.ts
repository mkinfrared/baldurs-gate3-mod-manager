import { resolve } from "path";

import { app } from "electron";
import { ConnectionBuilder } from "electron-cgi";

import { PAK_READER_PATH } from "@main/shared/config";

let pakReaderPath = PAK_READER_PATH;

if (app.isPackaged) {
  pakReaderPath = resolve(process.resourcesPath, "./bin/PakReader");
}

const netConnection = new ConnectionBuilder().connectTo(pakReaderPath).build();

netConnection.onDisconnect = () => {
  // eslint-disable-next-line no-console
  console.log("Lost connection to the .Net process");
};

export { netConnection };
