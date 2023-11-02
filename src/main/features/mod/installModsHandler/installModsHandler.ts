import { extractContents } from "./lib/helpers";

const installModsHandler = async (filePaths: string[]) => {
  try {
    const extractResults = await Promise.all(filePaths.map(extractContents));

    return extractResults;
  } catch (e) {
    console.error(e);
  }
};

export { installModsHandler };
