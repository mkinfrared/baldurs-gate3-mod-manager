import fs from "fs/promises";
import path from "path";

import { BALDURS_GATE3 } from "main/shared/config";

const copyPakFile = (fileName: string, content: Buffer) => {
  /*
   * some files from node-stream-zip package
   * might end up having slashes in file name
   * e.g SomeDirectoryName/some-file-name.pak
   * we need to trim down the directory part
   * and take only the file name
   */
  const safeFileName = fileName.split("/").at(-1);
  const pathResult = path.resolve(BALDURS_GATE3.MODS_DIRECTORY, safeFileName!);

  return fs.writeFile(pathResult, content);
};

export { copyPakFile };
