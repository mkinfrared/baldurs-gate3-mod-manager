import fs from "fs/promises";

import prettier from "prettier";

import { BALDURS_GATE3 } from "main/shared/config";

const saveModSettings = async (content: string) => {
  const formattedContent = await prettier.format(content, {
    printWidth: 160,
    parser: "html",
  });

  return fs.writeFile(BALDURS_GATE3.MOD_SETTINGS_PATH, formattedContent);
};

export { saveModSettings };
