import path from "path";

import {
  activateMod,
  deactivateMod,
  getModInfoFromFile,
} from "@main/entities/mod";
import { GameKey } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

import { isActiveMod } from "./lib/helpers";

const toggleActiveModHandler = async (fileName: string, key: GameKey) => {
  const { MODS_DIRECTORY } = getGameSettings(key);
  const filePath = path.resolve(MODS_DIRECTORY, fileName);
  const mod = await getModInfoFromFile(filePath);

  if (!mod.uuid) {
    return;
  }

  const isActive = await isActiveMod(mod.uuid, key);

  if (isActive) {
    await deactivateMod(mod.uuid, key);
  } else {
    await activateMod(mod, key);
  }
};

export { toggleActiveModHandler };
