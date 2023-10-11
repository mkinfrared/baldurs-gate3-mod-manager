const electronBuilderJson = {
  filename: "./electron-builder.json",
  updater: require("./versionBumper.js"),
};

const mainPackageJson = {
  filename: "./package.json",
  type: "json",
};

module.exports = {
  bumpFiles: [mainPackageJson, electronBuilderJson],
  packageFiles: [mainPackageJson],
};
