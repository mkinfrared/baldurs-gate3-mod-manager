import JSZip from "jszip";

import { getModInfo } from "renderer/entities/modFile/lib/helpers/getModInfo";
import { ModInfo, isModData } from "renderer/entities/modFile/lib/types";

const readZipInfo = async (zipFile: File) => {
  const defaultValue = "N/A";
  const regex = /^info\.json$/;
  const zip = new JSZip();
  const zipData = await zip.loadAsync(zipFile);
  const [infoFile] = zipData.filter((_, file) => regex.test(file.name));

  const result: ModInfo = {
    folder: defaultValue,
    md5: defaultValue,
    name: defaultValue,
    uuid: defaultValue,
    version: defaultValue,
  };

  if (!infoFile) {
    return result;
  }

  const content = await infoFile.async("text");
  const data = JSON.parse(content);

  if (!isModData(data)) {
    return result;
  }

  return getModInfo(data);
};

export { readZipInfo };
