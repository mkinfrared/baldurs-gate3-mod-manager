import { writeFile } from "fs/promises";
import path from "path";

import dayjs from "dayjs";
import prettier from "prettier";

import { getCurrentSettings } from "@main/entities/modSettingsFile";
import { GameKey } from "@main/shared/config";
import { getGameSettings } from "@main/shared/lib/helpers";

const createBackupHandler = async (gameKey: GameKey) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const xmlPlugin = await import("@prettier/plugin-xml");
  const { BACKUP_DIR } = getGameSettings(gameKey);
  const settings = await getCurrentSettings(gameKey);

  const filePath = path.resolve(
    BACKUP_DIR,
    dayjs().format("DD-MM-YYYY_HH-mm-ss"),
  );

  const extraSettings = {
    xmlWhitespaceSensitivity: "ignore",
    xmlSelfClosingSpace: true,
  } as any;

  const formattedContent = await prettier.format(settings.xml(), {
    printWidth: 160,
    parser: "xml",
    plugins: [xmlPlugin.default],
    ...extraSettings,
  });

  await writeFile(filePath, formattedContent);
};

export { createBackupHandler };
