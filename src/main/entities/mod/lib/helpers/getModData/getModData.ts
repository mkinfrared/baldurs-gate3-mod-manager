/* eslint-disable new-cap */
import StreamZip from "node-stream-zip";

import { isJson, isPak } from "renderer/shared/lib/helpers/fileExtension";
import { memoizeTtl } from "renderer/shared/lib/helpers/memoizeTtl";

import { ModData, isModData } from "./getModData.type";

const getModDataFromZip = async (zipFilePath: string) => {
  const zip = new StreamZip.async({ file: zipFilePath, storeEntries: true });
  const entries = await zip.entries();

  let modData: ModData | undefined;

  const pakFiles: string[] = [];

  for (const entry of Object.values(entries)) {
    if (!entry.isFile) {
      continue;
    }

    if (isJson(entry.name)) {
      const entryData = await zip.entryData(entry.name);
      const contents = entryData.toString();
      const data = JSON.parse(contents);

      if (isModData(data)) {
        modData = data;
      }
    }

    if (isPak(entry.name)) {
      pakFiles.push(entry.name);
    }
  }

  await zip.close();

  return { modData, pakFiles };
};

const getModData = async (filePath: string) => {
  const { modData, pakFiles } = await getModDataFromZip(filePath);

  return { modData, filePath, pakFiles };
};

const getModDataMemoized = memoizeTtl(getModData);

export { getModDataMemoized as getModData };
