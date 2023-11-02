import { readFile } from "node:fs/promises";
import path from "path";

import { ArchiveReader, libarchiveWasm } from "libarchive-wasm";

import { isPak } from "@main/shared/lib/helpers/fileExtension";

import { PakFileData } from "./getPakFileDataFromArchive.type";

const getPakFileDataFromArchive = async (filePath: string) => {
  const data = await readFile(filePath);
  const mod = await libarchiveWasm();
  const reader = new ArchiveReader(mod, new Int8Array(data));
  const pakFiles: PakFileData[] = [];

  for (const entry of reader.entries()) {
    const pathname = entry.getPathname();
    const fileType = entry.getFiletype(); // File or Directory

    if (pathname.includes("MACOSX") || fileType === "Directory") {
      continue;
    }

    if (isPak(pathname)) {
      const fileName = path.basename(pathname);

      pakFiles.push({ fileName, data: entry.readData() });
    }
  }

  reader.free();

  return pakFiles;
};

export { getPakFileDataFromArchive };
