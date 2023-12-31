import { saveSettings } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

import { GameSettingsUpdateDto } from "./updateGameSettingsHandler.type";

const updateGameSettingsHandler = async ({
  gameKey,
  backupDirectory,
  modsDirectory,
  modSettingsFile,
}: GameSettingsUpdateDto) => {
  const gameSettings = getGameSettings(gameKey);

  gameSettings.MODS_DIRECTORY = modsDirectory;

  gameSettings.MOD_SETTINGS_PATH = modSettingsFile;

  gameSettings.BACKUP_DIR = backupDirectory;

  await saveSettings();
};

export { updateGameSettingsHandler };
