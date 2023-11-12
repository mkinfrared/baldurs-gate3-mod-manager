import { TRPCError } from "@trpc/server";

import { isError } from "@common/lib";
import { updateGameSettingsValidation } from "@main/controllers/settings/validation";
import {
  getGameSettingsHandler,
  updateGameSettingsHandler,
} from "@main/features/settings";
import { t } from "@main/shared/lib/helpers";
import { gameKeyValidation } from "@main/shared/lib/helpers/validation";

const getGameSettings = t.procedure.input(gameKeyValidation).query((opts) => {
  const { input } = opts;

  try {
    return getGameSettingsHandler(input);
  } catch (e) {
    if (isError(e)) {
      throw new TRPCError({
        cause: e.cause,
        code: "BAD_REQUEST",
        message: e.message,
      });
    }
  }
});

const updateGameSettings = t.procedure
  .input(updateGameSettingsValidation)
  .mutation((opts) => {
    const { input } = opts;

    try {
      return updateGameSettingsHandler(input);
    } catch (e) {
      if (isError(e)) {
        throw new TRPCError({
          cause: e.cause,
          code: "BAD_REQUEST",
          message: e.message,
        });
      }
    }
  });

const settingsController = {
  getGameSettings,
  updateGameSettings,
};

export { settingsController };
