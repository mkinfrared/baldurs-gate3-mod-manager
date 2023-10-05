import fs from "fs/promises";

import { load } from "cheerio";

import { BALDURS_GATE3 } from "main/shared/config";

const getCurrentSettings = async () => {
  const modSettingsFile = await fs.readFile(BALDURS_GATE3.MOD_SETTINGS_PATH);
  const contents = modSettingsFile.toString();
  const cheerioAPI = load(contents, { xmlMode: true, decodeEntities: false });

  return cheerioAPI;
};

export { getCurrentSettings };
