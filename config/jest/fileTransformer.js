/* eslint-disable @typescript-eslint/no-var-requires,no-console */
const path = require("path");

module.exports = {
  process(sourceText, sourcePath, options) {
    const assetName = JSON.stringify(path.basename(sourcePath));

    return {
      code: `module.exports = ${assetName};`,
    };
  },
};
