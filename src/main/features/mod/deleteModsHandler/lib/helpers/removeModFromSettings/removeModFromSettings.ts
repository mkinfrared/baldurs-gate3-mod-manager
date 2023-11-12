import {
  getCurrentSettings,
  saveModSettings,
} from "@main/entities/modSettingsFile";
import { GameKey } from "@main/shared/config";

const removeModFromSettings = async (modUUID: string, key: GameKey) => {
  const settings = await getCurrentSettings(key);
  const attribute = settings(`#Mods children [value="${modUUID}"]`);

  attribute.parent().remove();

  await saveModSettings(settings.xml(), key);
};

export { removeModFromSettings };
