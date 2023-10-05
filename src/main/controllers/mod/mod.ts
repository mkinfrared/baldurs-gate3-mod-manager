import {
  deleteModsHandler,
  getInstalledModsHandler,
  installModsHandler,
  readModsHandler,
} from "main/features/mod";
import { t } from "main/shared/lib/helpers";

import { filesValidation } from "./validation";

const readMods = t.procedure.input(filesValidation).mutation((opts) => {
  const { input } = opts;

  return readModsHandler(input);
});

const installMods = t.procedure.input(filesValidation).mutation((opts) => {
  const { input } = opts;

  return installModsHandler(input);
});

const deleteMods = t.procedure.input(filesValidation).mutation((opts) => {
  const { input } = opts;

  return deleteModsHandler(input);
});

const getInstalledMods = t.procedure.query(() => getInstalledModsHandler());
const modController = { readMods, installMods, getInstalledMods, deleteMods };

export { modController };
