import { ModData, isModDataV1 } from "../getModData";

import { ModInfo } from "./getModInfo.type";

const getModInfo = (modData: ModData) => {
  if (isModDataV1(modData)) {
    const { MD5, Mods } = modData;
    const [mod] = Mods;

    if (!mod) {
      return;
    }

    const modInfo: ModInfo = {
      folder: mod.Folder,
      md5: MD5,
      name: mod.Name,
      uuid: mod.UUID,
      version: mod.Version,
    };

    return modInfo;
  }

  const { mods } = modData;
  const [mod] = mods;

  const modInfo: ModInfo = {
    folder: mod.folderName,
    md5: mod.MD5,
    name: mod.modName,
    uuid: mod.UUID,
    version: mod.version,
  };

  return modInfo;
};

export { getModInfo };
