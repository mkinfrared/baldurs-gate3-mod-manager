import { readModsHandler } from "main/features/mod";
import { t } from "main/shared/lib/helpers";

import { filesValidation } from "./validation";

const readMods = t.procedure.input(filesValidation).mutation((opts) => {
  const { input } = opts;

  return readModsHandler(input);
});

const modController = { readMods };

export { modController };
