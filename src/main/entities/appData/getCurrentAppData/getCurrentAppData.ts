import fs from "fs/promises";

import { APP_DATA_PATH } from "main/shared/config";

import { AppData } from "./getCurrentAppData.type";

const getCurrentAppData = async () => {
  const buffer = await fs.readFile(APP_DATA_PATH);
  const data = JSON.parse(buffer.toString()) as AppData;

  return data;
};

export { getCurrentAppData };
