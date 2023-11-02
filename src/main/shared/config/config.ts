import fs from "fs";
import os from "os";
import path from "path";

import electron from "electron";

/**
 *  'home', 'appData', 'userData', 'temp',
 *  'exe', 'module', 'desktop', 'downloads',
 *  'music', 'pictures', 'videos', etc.
 */
const app = electron.app || (electron as any).remote.app;
const documentsPath = app.getPath("documents");
const PROJECT_ROOT = path.resolve(__dirname, "../../");

const APP_DATA_PATH = path.join(
  documentsPath,
  "Larian Studios/Baldur's Gate 3/PlayerProfiles/Public/installedMods.json",
);

if (!fs.existsSync(APP_DATA_PATH)) {
  fs.writeFileSync(APP_DATA_PATH, JSON.stringify({}));
}

const PAK_READER_PATH = path.resolve(
  PROJECT_ROOT,
  `PakReader/out/${os.arch()}/PakReader`,
);

const BALDURS_GATE3 = {
  MODS_DIRECTORY: path.join(
    documentsPath,
    "Larian Studios/Baldur's Gate 3/Mods",
  ),
  MOD_SETTINGS_PATH: path.join(
    documentsPath,
    "Larian Studios/Baldur's Gate 3/PlayerProfiles/Public/modsettings.lsx",
  ),
};

export { APP_DATA_PATH, BALDURS_GATE3, PAK_READER_PATH };
