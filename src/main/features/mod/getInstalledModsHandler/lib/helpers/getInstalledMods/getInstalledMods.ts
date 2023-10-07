import { getCurrentSettings } from "main/entities/modSettingsFile";

import { getSelfActivatedMods } from "../getSelfActivatedMods";

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

  const modsMap = new Map<string, InstalledMod>();

  modData.forEach((data) => {
    const info = modInfoMapper(data);

    if (!info.uuid) {
      return info;
    }

    if (activeNodeUUID.has(info.uuid)) {
      info.isActive = true;
    }

    modsMap.set(info.uuid, info);
  });

  const allMods = [...modsMap.values()];
  const selfActivatedMods = getSelfActivatedMods(allMods, "bg3");
  const activeMods: InstalledMod[] = [];

  for (const activeUUID of activeNodeUUID) {
    const node = modsMap.get(activeUUID);

    if (node) {
      activeMods.push(node);
    }
  }

  const installedMods = allMods
    .concat(selfActivatedMods)
    .filter(({ name }) => !name?.includes("Gustav"));

  return { installedMods, activeMods };
};

export { getInstalledMods };
