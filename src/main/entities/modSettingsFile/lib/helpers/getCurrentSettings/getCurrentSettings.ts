import fs from "fs/promises";

import { load } from "cheerio";

import { GameKey } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

const getCurrentSettings = async (key: GameKey) => {
  const { MOD_SETTINGS_PATH } = getGameSettings(key);
  const modSettingsFile = await fs.readFile(MOD_SETTINGS_PATH);
  const contents = modSettingsFile.toString();
  const cheerioAPI = load(contents, { xmlMode: true, decodeEntities: false });

  return cheerioAPI;
};

export { getCurrentSettings };
