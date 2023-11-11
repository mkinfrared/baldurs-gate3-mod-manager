import {
  getCurrentSettings,
  saveModSettings,
} from "@main/entities/modSettingsFile";
import { GameKey } from "@main/shared/config";

const deactivateMod = async (modUUID: string, key: GameKey) => {
  const settings = await getCurrentSettings(key);
  const modOrderAttribute = settings(`#ModOrder children [value="${modUUID}"]`);
  const modListAttribute = settings(`#Mods children [value="${modUUID}"]`);

  modOrderAttribute.parent().remove();

  modListAttribute.parent().remove();

  await saveModSettings(settings.xml(), key);
};

export { deactivateMod };
