import { activateMod, deactivateMod } from "@main/entities/mod";

import { isActiveMod } from "./lib/helpers";

const toggleActiveModHandler = async (modUUID: string) => {
  const isActive = await isActiveMod(modUUID);

  if (isActive) {
    await deactivateMod(modUUID);
  } else {
    await activateMod(modUUID);
  }
};

export { toggleActiveModHandler };
