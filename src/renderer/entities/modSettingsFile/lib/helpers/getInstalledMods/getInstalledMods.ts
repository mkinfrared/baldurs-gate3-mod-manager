// import { readTextFile } from "@tauri-apps/api/fs";
//
// import { InstalledModInfo } from "../../types";
// import { getCurrentSettings } from "../getCurrentSettings";
// import { getModInfo } from "../getModInfo";
// import { getNodeValue } from "../getNodeValue";

const getInstalledMods = async () => {
  // TODO refactor to node js
  // const modSettingsFile = await getCurrentSettings();
  // const fileContents = await readTextFile(modSettingsFile.path);
  // const xml = new DOMParser().parseFromString(fileContents, "text/xml");
  // const mods = xml.querySelectorAll("#Mods children node");
  // const modOrder = xml.querySelectorAll("#ModOrder children node");
  // const installedMods: InstalledModInfo[] = [];
  // const activeIds = new Set<string>();
  //
  // modOrder.forEach((node) => {
  //   const uuidNode = node.querySelector("#UUID");
  //   const uuid = getNodeValue(uuidNode);
  //
  //   activeIds.add(uuid);
  // });
  //
  // mods.forEach((node) => {
  //   const modInfo = getModInfo(node);
  //   const isActive = activeIds.has(modInfo.uuid);
  //
  //   installedMods.push({ ...modInfo, isActive });
  // });
  //
  // return installedMods;
};

export { getInstalledMods };
