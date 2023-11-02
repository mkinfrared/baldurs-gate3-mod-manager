const fs = require("fs");
const path = require("path");
const { rimraf } = require("rimraf");

const buildDir = path.resolve(__dirname, "../dist");
const dotnetBuildDir = path.resolve(__dirname, "../PakReader/bin");

if (fs.existsSync(buildDir)) {
  rimraf(buildDir);
}

if (fs.existsSync(dotnetBuildDir)) {
  rimraf(dotnetBuildDir);
}
