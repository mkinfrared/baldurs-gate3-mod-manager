import { GameKey } from "@main/shared/config";

export type RestoreFromFileDto = {
  file: string;
  gameKey: GameKey;
};
