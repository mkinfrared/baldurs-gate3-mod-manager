import fs from "fs/promises";

import prettier from "prettier";

import { GameKey } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

const saveModSettings = async (content: string, key: GameKey) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const xmlPlugin = await import("@prettier/plugin-xml");
  const { MOD_SETTINGS_PATH } = getGameSettings(key);

  const extraSettings = {
    xmlWhitespaceSensitivity: "ignore",
    xmlSelfClosingSpace: true,
  } as any;

  const formattedContent = await prettier.format(content, {
    printWidth: 160,
    parser: "xml",
    plugins: [xmlPlugin.default],
    ...extraSettings,
  });

  return fs.writeFile(MOD_SETTINGS_PATH, formattedContent);
};

export { saveModSettings };
