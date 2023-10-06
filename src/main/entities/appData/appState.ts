import fs from "fs";

import prettier from "prettier";

import { APP_DATA_PATH } from "main/shared/config";

import { AppData } from "./appState.type";

class AppState {
  #data: AppData;

  #defaultValues: AppData = {
    bg3: {},
  };

  constructor() {
    const buffer = fs.readFileSync(APP_DATA_PATH);

    try {
      const values = JSON.parse(buffer.toString()) as AppData;

      this.#data = values || this.#defaultValues;
    } catch (e) {
      this.#data = this.#defaultValues;
    }
  }

  getSection(key: keyof AppData) {
    if (!this.#data[key]) {
      this.#data[key] = {};
    }

    return this.#data[key];
  }

  async saveData() {
    const formattedData = await prettier.format(JSON.stringify(this.#data), {
      printWidth: 80,
      parser: "json",
    });

    fs.writeFileSync(APP_DATA_PATH, formattedData);
  }
}

const appState = new AppState();

export { appState };