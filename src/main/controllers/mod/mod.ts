import { TRPCError } from "@trpc/server";

import {
  deleteModsHandler,
  getInstalledModsHandler,
  installModsHandler,
  readModsHandler,
  reorderActiveModsHandler,
  toggleActiveModHandler,
} from "@main/features/mod";
import { t } from "@main/shared/lib/helpers";
import { gameKeyValidation } from "@main/shared/lib/helpers/validation";

import {
  deleteModsValidation,
  installModsValidation,
  readModsValidation,
  reorderModsValidation,
  toggleModsValidation,
} from "./validation";

const readMods = t.procedure.input(readModsValidation).mutation((opts) => {
  const { files, gameKey } = opts.input;

  try {
    return readModsHandler(files, gameKey);
  } catch (e: any) {
    throw new TRPCError({
      cause: e.cause,
      code: "NOT_FOUND",
      message: e.message,
    });
  }
});

const installMods = t.procedure
  .input(installModsValidation)
  .mutation((opts) => {
    const { files, gameKey } = opts.input;

    return installModsHandler(files, gameKey);
  });

const deleteMods = t.procedure.input(deleteModsValidation).mutation((opts) => {
  const { files, gameKey } = opts.input;

  return deleteModsHandler(files, gameKey);
});

const reorderActiveMods = t.procedure
  .input(reorderModsValidation)
  .mutation((opts) => {
    const { mods, gameKey } = opts.input;

    return reorderActiveModsHandler(mods, gameKey);
  });

const toggleActiveMod = t.procedure
  .input(toggleModsValidation)
  .mutation((opts) => {
    const { file, gameKey } = opts.input;

    return toggleActiveModHandler(file, gameKey);
  });

const getInstalledMods = t.procedure
  .input(gameKeyValidation)
  .query(async (opts) => {
    try {
      const { input } = opts;
      const result = await getInstalledModsHandler(input);

      return result;
    } catch (e: any) {
      throw new TRPCError({
        cause: e.cause,
        code: "BAD_REQUEST",
        message: e.message,
      });
    }
  });

const modController = {
  readMods,
  installMods,
  getInstalledMods,
  deleteMods,
  reorderActiveMods,
  toggleActiveMod,
};

export { modController };
