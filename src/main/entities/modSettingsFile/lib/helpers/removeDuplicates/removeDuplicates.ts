import { GameKey } from "@main/shared/config";

import { getCurrentSettings } from "../getCurrentSettings";
import { saveModSettings } from "../saveModSettings";

const removeDuplicates = async (key: GameKey) => {
  const settings = await getCurrentSettings(key);
  const orderUUIDs = new Set<string>();
  const listUUIDs = new Set<string>();

  settings("#ModOrder children node").each((_, element) => {
    const node = settings(element);
    const uuid = node.find("#UUID").attr("value");

    if (!uuid) {
      return;
    }

    if (orderUUIDs.has(uuid)) {
      node.remove();
    } else {
      orderUUIDs.add(uuid);
    }
  });

  settings("#Mods children node").each((_, element) => {
    const node = settings(element);
    const uuid = node.find("#UUID").attr("value");

    if (!uuid) {
      return;
    }

    if (listUUIDs.has(uuid)) {
      node.remove();
    } else {
      listUUIDs.add(uuid);
    }
  });

  await saveModSettings(settings.xml(), key);
};

export { removeDuplicates };
