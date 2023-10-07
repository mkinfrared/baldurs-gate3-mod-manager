import { createModNodeOrder } from "main/entities/mod";
import {
  getCurrentSettings,
  saveModSettings,
} from "main/entities/modSettingsFile";

const reorderActiveModsHandler = async (modsUUID: string[]) => {
  const settings = await getCurrentSettings();
  const children = settings("#ModOrder children");

  children.empty();

  modsUUID.forEach((uuid) => {
    const node = createModNodeOrder(uuid);

    children.append(node);
  });

  await saveModSettings(settings.xml());
};

export { reorderActiveModsHandler };
