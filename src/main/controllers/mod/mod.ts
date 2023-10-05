import {
  deleteModsHandler,
  getInstalledModsHandler,
  installModsHandler,
  readModsHandler,
  toggleActiveModHandler,
} from "main/features/mod";
import { t } from "main/shared/lib/helpers";

import { stringArrayValidation, stringValidation } from "./validation";

const readMods = t.procedure.input(stringArrayValidation).mutation((opts) => {
  const { input } = opts;

  return readModsHandler(input);
});

const installMods = t.procedure
  .input(stringArrayValidation)
  .mutation((opts) => {
    const { input } = opts;

    return installModsHandler(input);
  });

const deleteMods = t.procedure.input(stringArrayValidation).mutation((opts) => {
  const { input } = opts;

  return deleteModsHandler(input);
});

const toggleActiveMod = t.procedure.input(stringValidation).mutation((opts) => {
  const { input } = opts;

  return toggleActiveModHandler(input);
});

const getInstalledMods = t.procedure.query(() => getInstalledModsHandler());

const modController = {
  readMods,
  installMods,
  getInstalledMods,
  deleteMods,
  toggleActiveMod,
};

export { modController };
