export type ModInfo = {
  folder: string;
  md5: string;
  name: string;
  uuid: string;
  version: number | string | null;
};

export type ZipInfoResult = {
  file: File;
  info: ModInfo;
};

export type ZipModInfo = {
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

export type ModData = {
  Mods: ZipModInfo[];
  MD5: string;
};

const isModData = (data: any): data is ModData =>
  data !== null &&
  typeof data === "object" &&
  typeof data.MD5 === "string" &&
  Array.isArray(data.Mods);

export { isModData };
