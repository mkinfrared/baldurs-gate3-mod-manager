import { readFile } from "node:fs/promises";
import path from "path";

import { ArchiveReader, libarchiveWasm } from "libarchive-wasm";

import { isJson, isPak } from "renderer/shared/lib/helpers/fileExtension";

import { ModData, isModData } from "../../getModData.type";

const getModDataFromArchive = async (filePath: string) => {
  const data = await readFile(filePath);
  const mod = await libarchiveWasm();
  const reader = new ArchiveReader(mod, new Int8Array(data));
  const pakFiles: string[] = [];

  let modData: ModData | undefined;

  for (const entry of reader.entries()) {
    const pathname = entry.getPathname();
    const fileType = entry.getFiletype(); // File or Directory

    if (pathname.includes("MACOSX") || fileType === "Directory") {
      continue;
    }

    if (isPak(pathname)) {
      const fileName = path.basename(pathname);

      pakFiles.push(fileName);
    }

    if (isJson(pathname)) {
      const entryData = new TextDecoder().decode(entry.readData());
      const contentData = JSON.parse(entryData.toString());

      if (isModData(contentData)) {
        modData = contentData;
      }
    }
  }

  reader.free();

  return {
    pakFiles,
    modData,
  };
};

export { getModDataFromArchive };
