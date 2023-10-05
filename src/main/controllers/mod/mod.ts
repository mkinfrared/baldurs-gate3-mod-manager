import { installModsHandler, readModsHandler } from "main/features/mod";
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

const modController = { readMods, installMods };

export { modController };
