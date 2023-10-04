import { ModData } from "../getModData";

import { ModInfo } from "./getModInfo.type";

const getModInfo = (modData: ModData) => {
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
};

export { getModInfo };
