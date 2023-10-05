import {
  getCurrentSettings,
  saveModSettings,
} from "main/entities/modSettingsFile";

import { createModNodeOrder } from "../createModNodeOrder";

const activateMod = async (modUUID: string) => {
  const settings = await getCurrentSettings();
  const node = createModNodeOrder(modUUID);
  const children = settings("#ModOrder children");

  children.append(node);

  await saveModSettings(settings.xml());
};

export { activateMod };
