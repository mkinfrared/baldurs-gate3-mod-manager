import { randomUUID } from "crypto";
import { rm, writeFile } from "fs/promises";
import path from "path";

import { load } from "cheerio";

import { GameKey } from "@main/shared/config";
import { getGameSettings, netConnection } from "@main/shared/lib/helpers";

import { ModInfo } from "./getModInfo.type";

const getModInfo = (fileName: string, base64?: string | null) => {
  const modInfo: ModInfo = {
    fileName,
  };

  if (!base64) {
    return modInfo;
  }

  const content = Buffer.from(base64, "base64").toString("utf-8");
  const cheerioAPI = load(content, { xmlMode: true, decodeEntities: false });
  const moduleInfo = cheerioAPI("#ModuleInfo");

  const version =
    moduleInfo.find("#Version").attr("value") ||
    moduleInfo.find("#Version64").attr("value");

  const versionType =
    moduleInfo.find("#Version").attr("type") ||
    moduleInfo.find("#Version64").attr("type");

  modInfo.author = moduleInfo.find("#Author").attr("value");

  modInfo.folder = moduleInfo.find("#Folder").attr("value");

  modInfo.md5 = moduleInfo.find("#MD5").attr("value");

  modInfo.name = moduleInfo.find("#Name").attr("value");

  modInfo.uuid = moduleInfo.find("#UUID").attr("value");

  modInfo.version = version;

  modInfo.versionType = versionType;

  return modInfo;
};

const getModInfoFromFile = async (filePath: string) => {
  const response = await netConnection.send("getPakInfoFromPath", filePath);
  const fileName = path.basename(filePath);

  return getModInfo(fileName, response);
};

const getModInfoFromBytes = async (
  fileData: Int8Array,
  fileName: string,
  key: GameKey,
) => {
  const { MODS_DIRECTORY } = getGameSettings(key);
  const tempFileName = path.resolve(MODS_DIRECTORY, `temp-${randomUUID()}.pak`);

  try {
    await writeFile(tempFileName, fileData);

    const result = await getModInfoFromFile(tempFileName);

    result.fileName = fileName;

    return result;
  } finally {
    rm(tempFileName);
  }
};

export { getModInfoFromBytes, getModInfoFromFile };
