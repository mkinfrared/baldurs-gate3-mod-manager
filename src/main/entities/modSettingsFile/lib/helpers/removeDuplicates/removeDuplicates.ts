import { getCurrentSettings } from "../getCurrentSettings";
import { saveModSettings } from "../saveModSettings";

const removeDuplicates = async () => {
  const settings = await getCurrentSettings();
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

  await saveModSettings(settings.xml());
};

export { removeDuplicates };
