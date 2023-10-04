const path = require("path");

const mainPackageJson = {
  filename: "./package.json",
  updater: require("./versionBumper.js"),
};

const appPackageJson = {
  filename: "./release/app/package.json",
  type: "json",
};

const appPackageLock = {
  filename: "./release/app/package-lock.json",
  type: "json",
};

module.exports = {
  bumpFiles: [mainPackageJson, appPackageJson, appPackageLock],
  packageFiles: [mainPackageJson],
};
