import z from "zod";

import { gameKeyValidation } from "@main/shared/lib/helpers/validation";

const updateGameSettingsValidation = z.object({
  modSettingsFile: z.string(),
  modsDirectory: z.string(),
  gameKey: gameKeyValidation,
});

export { updateGameSettingsValidation };
