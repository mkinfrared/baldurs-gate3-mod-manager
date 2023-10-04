import { expose } from "comlink";

import { extractPakFile, readZipInfo } from "../../helpers";
import { ZipInfoResult } from "../../types";

const extractZipFile = (file: File) => extractPakFile(file);
const readZipFile = (file: File) => readZipInfo(file);

const readZipFiles = async (files: File[]) => {
  const result: ZipInfoResult[] = [];

  for (const zipFile of files) {
    const info = await readZipFile(zipFile);

    if (info) {
      result.push({ file: zipFile, info });
    }
  }

  return result;
};

expose({ readZipFiles, readZipFile, extractZipFile });

export { readZipFiles, readZipFile, extractZipFile };
