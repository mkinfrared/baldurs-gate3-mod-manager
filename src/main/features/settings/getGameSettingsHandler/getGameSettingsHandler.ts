import { GameKey } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

const getGameSettingsHandler = (gameKey: GameKey) => {
  const settings = getGameSettings(gameKey);

  return settings;
};

export { getGameSettingsHandler };
