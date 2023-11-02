import path from "path";

import {
  activateMod,
  deactivateMod,
  getModInfoFromFile,
} from "@main/entities/mod";
import { BALDURS_GATE3 } from "@main/shared/config";

import { isActiveMod } from "./lib/helpers";

const toggleActiveModHandler = async (fileName: string) => {
  const filePath = path.resolve(BALDURS_GATE3.MODS_DIRECTORY, fileName);
  const mod = await getModInfoFromFile(filePath);

  if (!mod.uuid) {
    return;
  }

  const isActive = await isActiveMod(mod.uuid);

  if (isActive) {
    await deactivateMod(mod.uuid);
  } else {
    await activateMod(mod);
  }
};

export { toggleActiveModHandler };
