import { TRPCError } from "@trpc/server";

import { isError } from "@common/lib";
import {
  copyBackupContentHandler,
  createBackupHandler,
  deleteBackupHandler,
  getBackupsHandler,
  restoreDefaultSettingsHandler,
  restoreFromFileHandler,
} from "@main/features/backup";
import { t } from "@main/shared/lib/helpers";
import { gameKeyValidation } from "@main/shared/lib/helpers/validation";

import { restoreFromFileValidation, stringValidation } from "./validation";

const getBackups = t.procedure.input(gameKeyValidation).query((opts) => {
  const { input } = opts;

  try {
    return getBackupsHandler(input);
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

const restoreDefaultSettings = t.procedure
  .input(gameKeyValidation)
  .mutation((opts) => {
    const { input } = opts;

    try {
      return restoreDefaultSettingsHandler(input);
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

const restoreFromFile = t.procedure
  .input(restoreFromFileValidation)
  .mutation((opts) => {
    const { input } = opts;

    try {
      return restoreFromFileHandler(input);
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

const deleteBackup = t.procedure.input(stringValidation).mutation((opts) => {
  const { input } = opts;

  try {
    return deleteBackupHandler(input);
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

const copyBackupContent = t.procedure
  .input(stringValidation)
  .mutation((opts) => {
    const { input } = opts;

    try {
      return copyBackupContentHandler(input);
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

const createBackup = t.procedure.input(gameKeyValidation).mutation((opts) => {
  const { input } = opts;

  try {
    return createBackupHandler(input);
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

const backupController = {
  createBackup,
  copyBackupContent,
  deleteBackup,
  getBackups,
  restoreDefaultSettings,
  restoreFromFile,
};

export { backupController };
