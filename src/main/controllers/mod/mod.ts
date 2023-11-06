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

import {
  modInfoArrayValidation,
  stringArrayValidation,
  stringValidation,
} from "./validation";

const readMods = t.procedure.input(stringArrayValidation).mutation((opts) => {
  const { input } = opts;

  try {
    return readModsHandler(input);
  } catch (e: any) {
    throw new TRPCError({
      cause: e.cause,
      code: "NOT_FOUND",
      message: e.message,
    });
  }
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

const reorderActiveMods = t.procedure
  .input(modInfoArrayValidation)
  .mutation((opts) => {
    const { input } = opts;

    return reorderActiveModsHandler(input);
  });

const toggleActiveMod = t.procedure.input(stringValidation).mutation((opts) => {
  const { input } = opts;

  return toggleActiveModHandler(input);
});

const getInstalledMods = t.procedure.query(async () => {
  try {
    const result = await getInstalledModsHandler();

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
