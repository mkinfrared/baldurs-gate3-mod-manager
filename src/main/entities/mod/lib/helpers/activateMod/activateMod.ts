import {
  getCurrentSettings,
  saveModSettings,
} from "@main/entities/modSettingsFile";
import { GameKey } from "@main/shared/config";

import { createModNode } from "../createModNode";
import { createModNodeOrder } from "../createModNodeOrder";
import { ModInfo } from "../getModInfo";

const activateMod = async (mod: ModInfo, key: GameKey) => {
  const settings = await getCurrentSettings(key);
  const orderNode = createModNodeOrder(mod);
  const modNode = createModNode(mod);
  const modOrder = settings("#ModOrder children");
  const modList = settings("#Mods children");

  modOrder.append(orderNode);

  modList.append(modNode);

  await saveModSettings(settings.xml(), key);
};

export { activateMod };
