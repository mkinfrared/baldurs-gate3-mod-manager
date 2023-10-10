/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

const afterPack = async (context) => {
  console.log("after pack");
  const appName = '"Baldur\'s Gate 3 Mod Manager.app"'; // added double-quotes
  const rootDir = path.resolve(__dirname, "../..");
  const buildDir = path.join(rootDir, "./dist");
  const mac = "mac";
  const arm = "mac-arm64";
  const platforms = [mac, arm];

  for (const platform of platforms) {
    try {
      const appPath = path.join(buildDir, platform, appName);

      await exec(`codesign -s "baldurs-gate3-mod-manager" --deep ${appPath}`);

      await exec(`codesign -vvv ${appPath}`);
    } catch (e) {
      console.error(e);
    }
  }
};

exports.default = afterPack;
