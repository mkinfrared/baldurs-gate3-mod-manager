import { ModInfo } from "@main/entities/mod";

export type ReadModResult = {
  filePath: string;
  info?: ModInfo;
};
