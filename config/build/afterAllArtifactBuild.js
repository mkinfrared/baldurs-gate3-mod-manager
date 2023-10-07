/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const exec = promisify(require("child_process").exec);

const afterPack = async (context) => {
  const appName = '"Baldur\'s Gate 3 Mod Manager.app"'; // added double-quotes
  const rootDir = path.resolve(__dirname, "../..");
  const buildDir = path.join(rootDir, "./release/build");
  const files = fs.readdirSync(path.join(buildDir));
  const dmgFiles = files.filter((file) => /\.dmg$/.test(file));

  for (const dmgFile of dmgFiles) {
    try {
      const filePath = path.join(buildDir, dmgFile);

      await exec(`codesign -s "baldurs-gate3-mod-manager" --deep ${filePath}`);

      await exec(`codesign -vvv ${filePath}`);
    } catch (e) {
      console.error(e);
    }
  }
};

exports.default = afterPack;
