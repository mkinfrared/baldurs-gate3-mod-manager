/* eslint-disable new-cap */
import StreamZip from "node-stream-zip";

import { ModData, isModData } from "main/entities/mod";
import { isJson, isPak } from "renderer/shared/lib/helpers/fileExtension";

import { copyPakFile } from "../copyPakFile";

const extractContents = async (zipFilePath: string) => {
  const zip = new StreamZip.async({ file: zipFilePath, storeEntries: true });
  const entries = await zip.entries();
  const pakFiles: string[] = [];

  let data: ModData | undefined;

  for (const entry of Object.values(entries)) {
    if (!entry.isFile) {
      continue;
    }

    if (isPak(entry.name)) {
      const entryData = await zip.entryData(entry.name);

      await copyPakFile(entry.name, entryData);

      pakFiles.push(entry.name);
    }

    if (isJson(entry.name)) {
      const entryData = await zip.entryData(entry.name);
      const contentData = JSON.parse(entryData.toString());

      if (isModData(contentData)) {
        data = contentData;
      }
    }
  }

  await zip.close(); // Close zip in case if there were no entries matching your criteria/condition.

  return {
    pakFiles,
    data,
  };
};

export { extractContents };
