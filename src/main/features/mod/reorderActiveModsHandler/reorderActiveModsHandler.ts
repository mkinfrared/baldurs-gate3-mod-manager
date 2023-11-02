import { ModInfo, createModNodeOrder } from "@main/entities/mod";
import {
  getCurrentSettings,
  saveModSettings,
} from "@main/entities/modSettingsFile";

const reorderActiveModsHandler = async (mods: ModInfo[]) => {
  const settings = await getCurrentSettings();
  const children = settings("#ModOrder children");

  children.empty();

  mods.forEach((mod) => {
    const node = createModNodeOrder(mod);

    children.append(node);
  });

  await saveModSettings(settings.xml());
};

export { reorderActiveModsHandler };
