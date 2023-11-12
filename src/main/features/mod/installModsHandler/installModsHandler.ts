import { GameKey } from "@main/shared/config";

import { extractContents } from "./lib/helpers";

const installModsHandler = async (filePaths: string[], key: GameKey) => {
  try {
    const extractResults = await Promise.all(
      filePaths.map((file) => extractContents(file, key)),
    );

    return extractResults;
  } catch (e) {
    console.error(e);
  }
};

export { installModsHandler };
