import { APP_SETTINGS, GameKey } from "@main/shared/config";

const getGameSettings = (key: GameKey) => APP_SETTINGS[key];

export { getGameSettings };
