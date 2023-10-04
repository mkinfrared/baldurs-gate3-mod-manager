/* eslint-disable @typescript-eslint/no-var-requires,no-console */
const path = require("path");

function pascalFileName(str) {
  return `${path.basename(str, ".svg")}`
    .split(/\W+/)
    .map((x) => `${x.charAt(0).toUpperCase()}${x.slice(1)}`)
    .join("");
}

module.exports = {
  process(sourceText, sourcePath, options) {
    const assetName = JSON.stringify(path.basename(sourcePath));
    const pascalName = pascalFileName(sourcePath);

    return {
      code: `
        const React = require('react');
        function ${pascalName}(props) {
          return React.createElement(
            'svg',
            Object.assign({}, props),
            ${assetName}
          );
        }
        module.exports = ${pascalName};
      `,
    };
  },
};
