import { readFile } from "fs/promises";

import { saveModSettings } from "@main/entities/modSettingsFile";

import { RestoreFromFileDto } from "./restoreFromFileHandler.type";

const restoreFromFileHandler = async ({
  file,
  gameKey,
}: RestoreFromFileDto) => {
  const content = await readFile(file);

  await saveModSettings(content.toString(), gameKey);
};

export { restoreFromFileHandler };
