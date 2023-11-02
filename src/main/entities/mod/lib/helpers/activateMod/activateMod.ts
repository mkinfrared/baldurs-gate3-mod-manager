import {
  getCurrentSettings,
  saveModSettings,
} from "@main/entities/modSettingsFile";

import { createModNode } from "../createModNode";
import { createModNodeOrder } from "../createModNodeOrder";
import { ModInfo } from "../getModInfo";

const activateMod = async (mod: ModInfo) => {
  const settings = await getCurrentSettings();
  const orderNode = createModNodeOrder(mod);
  const modNode = createModNode(mod);
  const modOrder = settings("#ModOrder children");
  const modList = settings("#Mods children");

  modOrder.append(orderNode);

  modList.append(modNode);

  await saveModSettings(settings.xml());
};

export { activateMod };
