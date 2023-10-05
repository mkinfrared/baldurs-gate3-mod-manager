import fs from "fs/promises";

import prettier from "prettier";

import { APP_DATA_PATH } from "main/shared/config";

import {
  AppData,
  InstalledMods,
  getCurrentAppData,
} from "../getCurrentAppData";

const saveAppData = async (key: keyof AppData, values: InstalledMods) => {
  const currentData = await getCurrentAppData();

  currentData[key] = values;

  const formattedData = await prettier.format(JSON.stringify(currentData), {
    printWidth: 80,
    parser: "json",
  });

  await fs.writeFile(APP_DATA_PATH, formattedData);
};

export { saveAppData };
