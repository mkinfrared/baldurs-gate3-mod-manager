import { memoizeTtl } from "renderer/shared/lib/helpers/memoizeTtl";

import { getModDataFromArchive } from "./lib";

const getModData = async (filePath: string) => {
  const { modData, pakFiles } = await getModDataFromArchive(filePath);

  return { modData, filePath, pakFiles };
};

const getModDataMemoized = memoizeTtl(getModData);

export { getModDataMemoized as getModData };
