import { CheerioAPI } from "cheerio";

import { ModInfo, createModNode, createModNodeOrder } from "@main/entities/mod";
import {
  getCurrentSettings,
  saveModSettings,
} from "@main/entities/modSettingsFile";

/**
 * Checks if a specific value exists in the current settings.
 *
 * @param {CheerioAPI} currentSettings - The current settings to search in.
 * @param {ModInfo} mod - The mod info object containing the value to search for.
 * @returns {boolean} True if the value exists, false otherwise.
 */
const exists = (currentSettings: CheerioAPI, mod: ModInfo) => {
  const selector = `[value="${mod.uuid}"]`;

  return !!currentSettings(selector).length;
};

const upsertModData = (currentSettings: CheerioAPI, modInfo?: ModInfo) => {
  if (!modInfo || !modInfo.uuid) {
    return;
  }

  if (!exists(currentSettings, modInfo)) {
    const node = createModNode(modInfo);
    const nodeOrder = createModNodeOrder(modInfo);

    currentSettings("#Mods children").append(node);

    currentSettings("#ModOrder children").append(nodeOrder);

    return;
  }

  currentSettings(`#Mods children [value="${modInfo.uuid}"]`).parent().remove();

  const node = createModNode(modInfo);

  currentSettings("#Mods children").append(node);
};

const addModsToSettings = async (modInfo: (ModInfo | undefined)[]) => {
  const currentSettings = await getCurrentSettings();

  for (const mod of modInfo) {
    try {
      upsertModData(currentSettings, mod);
    } catch (e) {
      console.error(e);
    }
  }

  await saveModSettings(currentSettings.xml());
};

export { addModsToSettings };
