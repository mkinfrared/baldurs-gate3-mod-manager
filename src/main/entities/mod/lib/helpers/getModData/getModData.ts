/* eslint-disable new-cap */
import StreamZip from "node-stream-zip";

import { isJson } from "renderer/shared/lib/helpers/fileExtension";

import { isModData } from "./getModData.type";

const getModDataFromZip = async (zipFilePath: string) => {
  const zip = new StreamZip.async({ file: zipFilePath, storeEntries: true });
  const entries = await zip.entries();

  for (const entry of Object.values(entries)) {
    if (!entry.isFile) {
      continue;
    }

    if (isJson(entry.name)) {
      const entryData = await zip.entryData(entry.name);
      const contents = entryData.toString();
      const data = JSON.parse(contents);

      if (isModData(data)) {
        await zip.close();

        return data;
      }
    }
  }

  await zip.close(); // Close zip in case if there were no entries matching your criteria/condition.
};

const getModData = async (filePath: string) => {
  const data = await getModDataFromZip(filePath);

  return { data, filePath };
};

export { getModData };
