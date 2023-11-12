import fs from "fs/promises";
import path from "path";

import { GameKey } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

const copyPakFile = (fileName: string, content: Buffer, key: GameKey) => {
  const { MODS_DIRECTORY } = getGameSettings(key);
  /*
   * some files from node-stream-zip package
   * might end up having slashes in file name
   * e.g SomeDirectoryName/some-file-name.pak
   * we need to trim down the directory part
   * and take only the file name
   */
  const safeFileName = fileName.split("/").at(-1);
  const pathResult = path.resolve(MODS_DIRECTORY, safeFileName!);

  return fs.writeFile(pathResult, content);
};

export { copyPakFile };
