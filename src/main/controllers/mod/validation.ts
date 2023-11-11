import z from "zod";

import { gameKeyValidation } from "@main/shared/lib/helpers/validation";

const stringValidation = z.string();
const stringArrayValidation = z.array(z.string());

const modInfoValidation = z.object({
  fileName: z.string(),
  name: z.string().optional(),
  uuid: z.string().optional(),
});

const modInfoArrayValidation = z.array(modInfoValidation);

const readModsValidation = z.object({
  files: stringArrayValidation,
  gameKey: gameKeyValidation,
});

const installModsValidation = z.object({
  files: stringArrayValidation,
  gameKey: gameKeyValidation,
});

const deleteModsValidation = z.object({
  files: stringArrayValidation,
  gameKey: gameKeyValidation,
});

const reorderModsValidation = z.object({
  mods: modInfoArrayValidation,
  gameKey: gameKeyValidation,
});

const toggleModsValidation = z.object({
  file: stringValidation,
  gameKey: gameKeyValidation,
});

export {
  readModsValidation,
  installModsValidation,
  deleteModsValidation,
  reorderModsValidation,
  toggleModsValidation,
};
