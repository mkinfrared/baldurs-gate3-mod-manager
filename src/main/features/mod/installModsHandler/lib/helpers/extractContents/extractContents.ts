import { readFile } from "node:fs/promises";
import path from "path";

import { ArchiveReader, libarchiveWasm } from "libarchive-wasm";

import { GameKey } from "@main/shared/config";
import { isPak } from "@main/shared/lib/helpers/fileExtension";

import { copyPakFile } from "../copyPakFile";

const extractContents = async (filePath: string, key: GameKey) => {
  const data = await readFile(filePath);
  const mod = await libarchiveWasm();
  const reader = new ArchiveReader(mod, new Int8Array(data));
  const pakFiles: string[] = [];

  for (const entry of reader.entries()) {
    const pathname = entry.getPathname();
    const fileType = entry.getFiletype(); // File or Directory

    if (pathname.includes("MACOSX") || fileType === "Directory") {
      continue;
    }

    if (isPak(pathname)) {
      const entryData = entry.readData();
      const fileName = path.basename(pathname);

      if (entryData) {
        await copyPakFile(fileName, Buffer.from(entryData), key);
      }

      pakFiles.push(fileName);
    }
  }

  reader.free();

  return { pakFiles, filePath };
};

export { extractContents };
