import { getCurrentSettings } from "../getCurrentSettings";
import { removeDuplicates } from "../removeDuplicates";
import { saveModSettings } from "../saveModSettings";

const verifyModSettings = async () => {
  const settings = await getCurrentSettings();
  const modOrder = settings("#ModOrder");
  const modList = settings("#Mods");

  if (!modOrder.find("children").length) {
    modOrder.append("<children></children>");
  }

  if (!modList.find("children").length) {
    modList.append("<children></children>");
  }

  await saveModSettings(settings.xml());

  await removeDuplicates();
};

export { verifyModSettings };
