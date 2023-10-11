type ModInfoV1 = {
  Author: string;
  Name: string;
  Folder: string;
  Version: number | string | null;
  Description: string;
  UUID: string;
  Created: string;
  Dependencies: [];
  Group: string;
};

type ModInfoV2 = {
  folderName: string;
  modName: string;
  MD5: string;
  UUID: string;
  version: string;
};

type ModDataV1 = {
  Mods: ModInfoV1[];
  MD5: string;
};

type ModDataV2 = {
  mods: ModInfoV2[];
};

export type Mod = ModInfoV1 | ModInfoV2;

export type ModData = ModDataV1 | ModDataV2;

export type ModDataResult = {
  modData: ModData | undefined;
  filePath: string;
  pakFiles: string[];
};

const isModInfoV1 = (value: any): value is ModInfoV1 => {
  const props = ["Author", "Name", "Folder", "UUID"];

  return props.every((prop) => Object.hasOwn(value, prop));
};

const isModInfoV2 = (value: any): value is ModInfoV2 => {
  const props = ["folderName", "modName", "MD5", "version", "UUID"];

  return props.every((prop) => Object.hasOwn(value, prop));
};

const isModDataV1 = (data: any): data is ModDataV1 =>
  data !== null &&
  typeof data === "object" &&
  Array.isArray(data.Mods) &&
  isModInfoV1(data.Mods[0]);

const isModDataV2 = (data: any): data is ModDataV1 =>
  data !== null &&
  typeof data === "object" &&
  Array.isArray(data.mods) &&
  isModInfoV2(data.mods[0]);

const isModData = (data: any): data is ModData =>
  data !== null &&
  typeof data === "object" &&
  (Array.isArray(data.Mods) || Array.isArray(data.mods));

export { isModData, isModInfoV1, isModInfoV2, isModDataV1, isModDataV2 };
