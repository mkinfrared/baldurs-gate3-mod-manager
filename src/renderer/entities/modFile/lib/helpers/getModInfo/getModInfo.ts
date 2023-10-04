import { ModData, ModInfo } from "../../types";

const getModInfo = (data: ModData) => {
  const { MD5: md5 } = data;
  const [mod] = data.Mods;

  if (!mod) {
    return;
  }

  const modInfo: ModInfo = {
    folder: mod.Folder,
    md5,
    name: mod.Name,
    uuid: mod.UUID,
    version: mod.Version,
  };

  return modInfo;
};

export { getModInfo };
