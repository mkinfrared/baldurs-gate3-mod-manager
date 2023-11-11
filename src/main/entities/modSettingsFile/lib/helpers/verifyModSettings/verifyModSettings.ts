import { GameKey } from "@main/shared/config";

import { getCurrentSettings } from "../getCurrentSettings";
import { removeDuplicates } from "../removeDuplicates";
import { saveModSettings } from "../saveModSettings";

const verifyModSettings = async (key: GameKey) => {
  const settings = await getCurrentSettings(key);
  const modOrder = settings("#ModOrder");
  const modList = settings("#Mods");

  if (!modOrder.find("children").length) {
    modOrder.append("<children></children>");
  }

  if (!modList.find("children").length) {
    modList.append("<children></children>");
  }

  await saveModSettings(settings.xml(), key);

  await removeDuplicates(key);
};

export { verifyModSettings };
