import { saveModSettings } from "@main/entities/modSettingsFile";
import { GameKey } from "@main/shared/config";

import { defaults } from "./defaults";

const restoreDefaultSettingsHandler = async (gameKey: GameKey) => {
  const content = defaults[gameKey];

  await saveModSettings(content, gameKey);
};

export { restoreDefaultSettingsHandler };
