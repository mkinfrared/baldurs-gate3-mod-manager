export type Mod = {
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
  Mods: Mod[];
  MD5: string;
};

const isModData = (data: any): data is ModData =>
  data !== null &&
  typeof data === "object" &&
  typeof data.MD5 === "string" &&
  Array.isArray(data.Mods);

export { isModData };
