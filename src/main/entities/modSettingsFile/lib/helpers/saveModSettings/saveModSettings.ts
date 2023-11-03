import fs from "fs/promises";

import prettier from "prettier";

import { BALDURS_GATE3 } from "@main/shared/config";

const saveModSettings = async (content: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const xmlPlugin = await import("@prettier/plugin-xml");

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

  return fs.writeFile(BALDURS_GATE3.MOD_SETTINGS_PATH, formattedContent);
};

export { saveModSettings };
