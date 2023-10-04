import { ModInfo } from "./lib/helpers";

export type ReadModResult = {
  filePath: string;
  info: ModInfo | null;
};
