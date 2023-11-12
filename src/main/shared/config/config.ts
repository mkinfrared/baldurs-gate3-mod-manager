import fs from "fs";
import os from "os";
import path from "path";

import electron from "electron";
import prettier from "prettier";

import { productName } from "../../../../electron-builder.json";

import { AppSettings } from "./config.type";
/**
 *  'home', 'appData', 'userData', 'temp',
 *  'exe', 'module', 'desktop', 'downloads',
 *  'music', 'pictures', 'videos', etc.
 */
const app = electron.app || (electron as any).remote.app;
const documentsPath = app.getPath("documents");
const appDataPath = path.resolve(app.getPath("appData"), productName);
const appSettingsPath = path.resolve(appDataPath, "settings.json");
const PROJECT_ROOT = path.resolve(__dirname, "../../");

const APP_DATA_PATH = path.join(
  documentsPath,
  "Larian Studios/Baldur's Gate 3/PlayerProfiles/Public/installedMods.json",
);

if (fs.existsSync(APP_DATA_PATH)) {
  fs.rmSync(APP_DATA_PATH);
}

if (!fs.existsSync(appDataPath)) {
  fs.mkdirSync(appDataPath);
}

if (!fs.existsSync(appSettingsPath)) {
  fs.writeFileSync(appSettingsPath, "{}");
}

const file = fs.readFileSync(appSettingsPath);
const data = file.toString("utf-8");
const fileSettings = JSON.parse(data) as Partial<AppSettings>;

const PAK_READER_PATH = path.resolve(
  PROJECT_ROOT,
  `PakReader/out/${os.arch()}/PakReader`,
);

const BALDURS_GATE3_DEFAULTS = {
  MODS_DIRECTORY: path.join(
    documentsPath,
    "Larian Studios/Baldur's Gate 3/Mods",
  ),
  MOD_SETTINGS_PATH: path.join(
    documentsPath,
    "Larian Studios/Baldur's Gate 3/PlayerProfiles/Public/modsettings.lsx",
  ),
  BACKUP_DIR: path.join(appDataPath, "Backups/BG3"),
};

const APP_SETTINGS: AppSettings = {
  BG3: {
    MODS_DIRECTORY:
      fileSettings.BG3?.MODS_DIRECTORY || BALDURS_GATE3_DEFAULTS.MODS_DIRECTORY,
    MOD_SETTINGS_PATH:
      fileSettings.BG3?.MOD_SETTINGS_PATH ||
      BALDURS_GATE3_DEFAULTS.MOD_SETTINGS_PATH,
    BACKUP_DIR:
      fileSettings.BG3?.BACKUP_DIR || BALDURS_GATE3_DEFAULTS.BACKUP_DIR,
  },
};

const saveSettings = async () => {
  const settingsData = JSON.stringify(APP_SETTINGS);

  const formattedContent = await prettier.format(settingsData, {
    printWidth: 80,
    parser: "json",
  });

  fs.writeFileSync(appSettingsPath, formattedContent);
};

const createBackupDir = () => {
  Object.keys(APP_SETTINGS).forEach((key) => {
    const backupPath = APP_SETTINGS[key as keyof AppSettings].BACKUP_DIR;

    fs.mkdirSync(backupPath, { recursive: true });
  });
};

export { createBackupDir, saveSettings, APP_SETTINGS, PAK_READER_PATH };
