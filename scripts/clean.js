/* eslint-disable padding-line-between-statements,@typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const { rimraf } = require("rimraf");

const buildDir = path.resolve(__dirname, "../dist");

if (fs.existsSync(buildDir)) {
  rimraf(buildDir);
}
