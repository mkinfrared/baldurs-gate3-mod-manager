import { memoizeTtl } from "@common/lib";

import { getPakFileDataFromArchive } from "./lib";

const getModData = async (filePath: string) => {
  const pakFileData = await getPakFileDataFromArchive(filePath);
  const result = { filePath, pakFileData };

  return result;
};

const getModDataMemoized = memoizeTtl(getModData);

export { getModDataMemoized as getModData };
