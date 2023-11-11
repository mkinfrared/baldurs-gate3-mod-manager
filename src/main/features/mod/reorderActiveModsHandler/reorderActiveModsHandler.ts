import { ModInfo, createModNodeOrder } from "@main/entities/mod";
import {
  getCurrentSettings,
  saveModSettings,
} from "@main/entities/modSettingsFile";
import { GameKey } from "@main/shared/config";

const reorderActiveModsHandler = async (mods: ModInfo[], key: GameKey) => {
  const settings = await getCurrentSettings(key);
  const children = settings("#ModOrder children");

  children.empty();

  mods.forEach((mod) => {
    const node = createModNodeOrder(mod);

    children.append(node);
  });

  await saveModSettings(settings.xml(), key);
};

export { reorderActiveModsHandler };
