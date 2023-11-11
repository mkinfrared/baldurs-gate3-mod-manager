export type AppSettings = Record<GameKey, GameSettings>;

export type GameKey = "BG3";

export type GameSettings = {
  MODS_DIRECTORY: string;
  MOD_SETTINGS_PATH: string;
};
