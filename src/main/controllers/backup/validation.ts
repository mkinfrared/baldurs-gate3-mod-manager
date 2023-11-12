import z from "zod";

import { gameKeyValidation } from "@main/shared/lib/helpers/validation";

const stringValidation = z.string();

const restoreFromFileValidation = z.object({
  file: stringValidation,
  gameKey: gameKeyValidation,
});

export { restoreFromFileValidation, stringValidation };
