import { GameKey } from "@main/shared/config";

export type GameSettingsUpdateDto = {
  modSettingsFile: string;
  modsDirectory: string;
  backupDirectory: string;
  gameKey: GameKey;
};
