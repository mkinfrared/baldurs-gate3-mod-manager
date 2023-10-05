import { getCurrentSettings } from "main/entities/modSettingsFile";

import { InstalledMod, ModData } from "./getInstalledMods.type";

const modInfoMapper = (data: ModData) => {
  const modInfo: InstalledMod = {
    isActive: false,
    folder: data.folder,
    md5: data.md5,
    name: data.name,
    uuid: data.uuid,
    version: data.version64,
  };

  return modInfo;
};

const getInstalledMods = async () => {
  // TODO get installed mods from app data

  const settings = await getCurrentSettings();
  const activeNodeUUID = new Set<string>();
  const modData: ModData[] = [];

  settings("#ModOrder children node").each((_, element) => {
    const node = settings(element);

    node.children().each((__, child) => {
      const attribute = settings(child);
      const value = attribute.attr("value");

      if (value) {
        activeNodeUUID.add(value);
      }
    });
  });

  settings("#Mods children node").each((_, element) => {
    const node = settings(element);
    const data: Partial<ModData> = {};

    node.children().each((__, child) => {
      const attribute = settings(child);
      const key = attribute.attr("id")?.toLowerCase();
      const value = attribute.attr("value");

      if (key) {
        data[key as keyof ModData] = value;
      }
    });

    modData.push(data as ModData);
  });

  const installedMods = modData.map((data) => {
    const info = modInfoMapper(data);

    if (!info.uuid) {
      return info;
    }

    if (activeNodeUUID.has(info.uuid)) {
      info.isActive = true;
    }

    return info;
  });

  return installedMods.filter(({ name }) => !name?.includes("Gustav"));
};

export { getInstalledMods };
