import fs from "fs/promises";

import prettier from "prettier";

import { APP_DATA_PATH } from "main/shared/config";

import {
  AppData,
  AppDataInstalledMods,
  getCurrentAppData,
} from "../getCurrentAppData";

const saveAppData = async (
  key: keyof AppData,
  values: AppDataInstalledMods,
) => {
  const currentData = await getCurrentAppData();
  const keyData = currentData[key] ?? {};

  currentData[key] = { ...keyData, ...values };

  const formattedData = await prettier.format(JSON.stringify(currentData), {
    printWidth: 80,
    parser: "json",
  });

  await fs.writeFile(APP_DATA_PATH, formattedData);
};

export { saveAppData };
